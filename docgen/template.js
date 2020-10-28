import { filename } from './util.js'

const Template = {
  apiIndexPage (name, desc, groups) {
    return `# ${name}

${desc}

## API Reference

${Template.groupMethodList(groups)}
`
  },

  groupMethodList (groups) {
    const items = []
    Object.values(groups).forEach(g => {
      items.push(`* ${g.name}`)
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

  groupPage (group) {
    return `# ${group.name}

${group.desc}

${Template.methodList(group)}

${Template.methods(group.methods)}
`
  },

  methods (methods) {
    return Object.values(methods).map(i => Template.method(i)).join('\n\n')
  },

  method ({ name, typeInfo }) {
    if (!typeInfo) return `## ${name}\n\nMissing type documentation.`
    const items = [`## ${name}`]
    const sig = typeInfo.signatures[0]
    const params = (sig.parameters || []).map(p => `${p.name}: ${Template.type(p.type)}`)
    const returnType = Template.type(sig.type)
    items.push(`${'```ts\n'}${name} (${params.join(', ')}): ${returnType}${'\n```'}`)
    if (sig.comment && sig.comment.shortText) {
      items.push(sig.comment.shortText.replace('\\n', ' '))
    }
    if ((sig.parameters || []).length) {
      items.push('**Parameters:**')
      items.push(Template.paramList(sig.parameters))
    }
    if (returnType !== 'void') {
      items.push('**Returns:**')
      items.push(`\`${returnType}\``)
    }
    if (typeInfo.sources && typeInfo.sources.length) {
      const src = typeInfo.sources[0]
      items.push(`<small>Source: [index.d.ts, line ${src.line}, character ${src.character}](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L${src.line})</small>`)
    }
    return items.join('\n\n')
  },

  paramList (params) {
    return params.map(p => {
      return `* \`${p.name}\`: \`${Template.type(p.type)}\``
    }).join('\n')
  },

  type (t) {
    switch (t.type) {
      case 'intrinsic':
        return t.name
      case 'reference':
        const args = (t.typeArguments || []).map(Template.type)
        if (!args.length) return t.name
        return `${t.name}<${args.join(', ')}>`
      case 'array':
        return `${Template.type(t.elementType)}[]`
      case 'tuple':
        const elems = t.elements.map(Template.type)
        return `[${elems.join(', ')}]`
      case 'reflection':
        const dec = t.declaration
        if (dec.kindString === 'Type literal' && dec.signatures && dec.signatures.length) {
          const sig = dec.signatures[0]
          const params = (sig.parameters || []).map(p => `${p.name}: ${Template.type(p.type)}`)
          return `(${params.join(', ')}) => ${Template.type(sig.type)}`
        } if (dec.kindString === 'Type literal' && dec.indexSignature && dec.indexSignature.length) {
          const idxSig = dec.indexSignature[0]
          return `{ [${idxSig.parameters[0].name}: ${Template.type(idxSig.parameters[0].type)}]: ${Template.type(idxSig.type)} }`
        } else {
          return '{}'
        }
    }
    console.error('unknown type', t)
    throw new Error(`unknown type: ${t.type}`)
  },

  summaryPage (apis) {
    const items = [`# Summary

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
  }
}

export default Template
