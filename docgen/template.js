import { filename } from './util.js'

function generatorWarning () {
  return '<!-- Code generated by github.com/filecoin-shipyard/js-lotus-client/docgen. DO NOT EDIT. -->'
}

const Template = {
  apisPage (apis) {
    return `${generatorWarning()}
# API

These API docs are generated from the [\`lotus-client-schema\`](https://github.com/filecoin-shipyard/js-lotus-client-schema) and the [\`lotus-client-rpc\` Typescript delcarations](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts), which are themselves generated directly from the Lotus source code. The following APIs are available:

${Object.values(apis).map(api => `* [${api.name}](${filename(api.name)}/index.md}) - ${api.shortDesc}`).join('\n')}

## JSON-RPC Postman Docs

* [Postman](https://documenter.getpostman.com/view/4872192/SWLh5mUd?version=latest) (courtesy of [Open Work Labs](https://www.openworklabs.com/))
`
  },

  apiIndexPage (name, desc, groups) {
    return `${generatorWarning()}
# ${name}

${desc}

## API Reference

${Template.groupMethodList(groups)}
`
  },

  groupMethodList (groups) {
    const items = []
    Object.values(groups).forEach(g => {
      items.push(`* [${g.name}](${filename(g.name)}.md)`)
      items.push(Template.methodList(g, '    '))
    })
    return items.join('\n')
  },

  methodList (group, indent = '') {
    const items = []
    Object.keys(group.methods).forEach(m => {
      items.push(`${indent}* [${m}](${filename(group.name)}.md#${m.toLowerCase()})`)
    })
    return items.join('\n')
  },

  groupPage (group, types) {
    return `# ${group.name}

${group.desc}

${Template.methodList(group)}

${Template.methods(group.methods, types)}
`
  },

  methods (methods, types) {
    return Object.values(methods).map(i => Template.method(i, types)).join('\n\n')
  },

  method ({ name, typeInfo }, types) {
    if (!typeInfo) return `## ${name}\n\nMissing type documentation.`
    const items = [`## ${name}`]
    const sig = typeInfo.signatures[0]
    const params = (sig.parameters || []).map(p => `${p.name}: ${Template.type(p.type)}`)
    const returnType = Template.type(sig.type)
    items.push(`${'```ts\n'}${name} (${params.join(', ')}): ${returnType}${'\n```'}`)
    if (sig.comment && sig.comment.shortText) {
      let desc = sig.comment.shortText.replace('\\n', ' ')
      if (desc.startsWith(name)) {
        desc = desc.slice(name.length + 1)
        desc = desc[0].toUpperCase() + desc.slice(1)
      }
      items.push(desc)
    }
    if ((sig.parameters || []).length) {
      items.push('**Parameters:**')
      items.push(Template.paramList(sig.parameters, types))
    }
    if (returnType !== 'void') {
      items.push('**Returns:**')
      items.push(codeLinkedTypes(returnType, types))
    }
    if (typeInfo.sources && typeInfo.sources.length) {
      const src = typeInfo.sources[0]
      items.push(`<small>Source: [index.d.ts, line ${src.line}, character ${src.character}](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L${src.line})</small>`)
    }
    return items.join('\n\n')
  },

  paramList (params, types) {
    return params.map(p => {
      return `* \`${p.name}\`: ${codeLinkedTypes(Template.type(p.type), types)}`
    }).join('\n')
  },

  type (t) {
    if (t.type === 'intrinsic') {
      return t.name
    } else if (t.type === 'reference') {
      const args = (t.typeArguments || []).map(Template.type)
      if (!args.length) return t.name
      return `${t.name}<${args.join(', ')}>`
    } else if (t.type === 'array') {
      return `${Template.type(t.elementType)}[]`
    } else if (t.type === 'tuple') {
      const elems = t.elements.map(Template.type)
      return `[${elems.join(', ')}]`
    } else if (t.type === 'reflection') {
      const dec = t.declaration
      if (dec.kindString === 'Type literal' && dec.signatures && dec.signatures.length) {
        const sig = dec.signatures[0]
        const params = (sig.parameters || []).map(p => `${p.name}: ${Template.type(p.type)}`)
        return `(${params.join(', ')}) => ${Template.type(sig.type)}`
      } if (dec.kindString === 'Type literal' && dec.indexSignature && dec.indexSignature.length) {
        const idxSig = dec.indexSignature[0]
        return `{ [${idxSig.parameters[0].name}: ${Template.type(idxSig.parameters[0].type)}]: ${Template.type(idxSig.type)} }`
      } if (dec.kindString === 'Type literal' && dec.children && dec.children.length) {
        const kvs = dec.children.map(c => `${c.name}: ${Template.type(c.type)}`)
        return `{ ${kvs.join(', ')} }`
      }
      return '{}'
    }
    console.error('unknown type', t)
    throw new Error(`unknown type: ${t.type}`)
  },

  summaryPage (apis) {
    const items = [`${generatorWarning()}

- [Introduction](./intro/intro.md)
  - [JSON-RPC API](./intro/json-rpc.md)
  - [JSON-RPC and JavaScript](intro/json-rpc-and-js.md)
  - [Lotus JS Client](intro/lotus-js-client.md)
- [List of Libraries](list-of-libraries.md)
- [Quick Start](./quick-start.md)
- [Endpoint Deployment](./endpoint-deployment.md)
- [API](./api/api.md)`]

    Object.values(apis).forEach(api => {
      items.push(`  - [${api.name}](api/${filename(api.name)}/index.md)`)
      Object.values(api.groups).forEach(g => {
        items.push(`    - [${g.name}](api/${filename(api.name)}/${filename(g.name)}.md)`)
      })
    })

    items.push('  - [Types](api/types.md)')
    return items.join('\n')
  },

  typesPage (types) {
    const items = [`${generatorWarning()}
# Types

In Typescript, import types from the \`lotus-client-rpc\` module e.g.
\`\`\`ts
import { Cid, BlockHeader } from '@filecoin-shipyard/lotus-client-rpc'
\`\`\`

## Type Reference
`]
    items.push(types.map(t => `* [${t.name}](#${t.name.toLowerCase()})`).join('\n'))
    types.forEach(t => {
      items.push(`## ${t.name}`)
      items.push(`${'```ts\n'}type ${t.name} = ${Template.type(t.type)}${'\n```'}`)
      const dec = t.type.declaration
      if (dec && dec.kindString === 'Type literal' && dec.children && dec.children.length) {
        items.push('**Properties:**')
        items.push(dec.children.map(c => `* \`${c.name}\`: ${codeLinkedTypes(Template.type(c.type), types, '')}`).join('\n'))
      }
    })
    return items.join('\n\n')
  }
}

function codeLinkedTypes (code, types, url = '../types.md') {
  for (const { name } of types) {
    if (name === code) {
      return `[\`${code}\`](${url}#${name.toLowerCase()})`
    }
  }
  types = Array.from(types).sort((a, b) => b.name.length - a.name.length)
  code = code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  for (const { name } of types) {
    code = code.replace(new RegExp(`${name}([&[)])`, 'g'), `<a href="${url}#${name.toLowerCase()}">${name}</a>$1`)
  }
  return `<code>${code}</code>`
}

export default Template
