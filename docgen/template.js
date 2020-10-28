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
    if (sig.comment && sig.comment.shortText) {
      items.push(sig.comment.shortText.replace('\\n', ' '))
    }
    if (typeInfo.sources && typeInfo.sources.length) {
      const src = typeInfo.sources[0]
      items.push(`Source: [index.d.ts](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L${src.line}), line ${src.line}, character ${src.character}`)
    }
    return items.join('\n\n')
  }
}

export default Template
