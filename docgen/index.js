import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import { mainnet } from '@filecoin-shipyard/lotus-client-schema'
import { filename } from './util.js'
import Template from './template.js'

const GroupDesc = {
  chain: 'The Chain method group contains methods for interacting with the blockchain, but that do not require any form of state computation.',
  client: 'The Client methods all have to do with interacting with the storage and retrieval markets as a client.',
  beacon: 'The Beacon method group contains methods for interacting with the random beacon (DRAND).',
  mpool: 'The Mpool methods are for interacting with the message pool. The message pool manages all incoming and outgoing \'messages\' going over the network.',
  msig: 'The Msig methods are used to interact with multisig wallets on the filecoin network.',
  paych: 'The Paych methods are for interacting with and managing payment channels,',
  state: 'The State methods are used to query, inspect, and interact with chain state. Most methods take a TipSetKey as a parameter. The state looked up is the state at that tipset. A nil TipSetKey can be provided as a param, this will cause the heaviest tipset in the chain to be used.',
  sync: 'The Sync method group contains methods for interacting with and observing the lotus sync service.'
}

const apiGettingStartedExample = (apiKey, lotusSrcUrl) => `Enable the API by passing the \`${apiKey}\` schema to \`LotusRPC\` e.g.

\`\`\`js
import { LotusRPC } from '@filecoin-shipyard/lotus-client-rpc'
import { mainnet } from '@filecoin-shipyard/lotus-client-schema'
import { NodejsProvider } from '@filecoin-shipyard/lotus-client-provider-nodejs'

const provider = new NodejsProvider('<PROVIDER_URL>')
const client = new LotusRPC(provider, { schema: mainnet.${apiKey} })
\`\`\` 

<small>Lotus source: ${lotusSrcUrl}</small>
`

const ApiDocs = {
  fullNode: {
    name: 'Full Node API',
    desc: apiGettingStartedExample('fullNode', '[github.com/filecoin-project/lotus/api/api_full.go](https://github.com/filecoin-project/lotus/blob/master/api/api_full.go)'),
    shortDesc: 'Talk to a Lotus "Full Node" (`lotus`).',
    groups: {
      misc: {
        methods: { id: {}, version: {}, createBackup: {}, closing: {}, shutdown: {} }
      }
    }
  },
  storageMiner: {
    name: 'Storage Miner API',
    desc: apiGettingStartedExample('storageMiner', '[github.com/filecoin-project/lotus/api/api_storage.go](https://github.com/filecoin-project/lotus/blob/master/api/api_storage.go)'),
    shortDesc: 'Talk to a Lotus Storage Miner (`lotus-storage-miner`).',
    groups: {
      misc: {
        methods: { id: {}, version: {}, createBackup: {}, closing: {}, shutdown: {} }
      }
    }
  },
  gatewayApi: {
    name: 'Gateway API',
    desc: apiGettingStartedExample('gatewayApi', '[github.com/filecoin-project/lotus/api/api_gateway.go](https://github.com/filecoin-project/lotus/blob/master/api/api_gateway.go)'),
    shortDesc: 'Talk to a Lotus Gateway (`lotus-gateway`).'
  },
  walletApi: {
    name: 'Wallet API',
    desc: apiGettingStartedExample('walletApi', '[github.com/filecoin-project/lotus/api/api_wallet.go](https://github.com/filecoin-project/lotus/blob/master/api/api_wallet.go)'),
    shortDesc: 'A subset of API methods for wallets.'
  },
  workerApi: {
    name: 'Worker API',
    desc: apiGettingStartedExample('workerApi', '[github.com/filecoin-project/lotus/api/api_worker.go](https://github.com/filecoin-project/lotus/blob/master/api/api_worker.go)'),
    shortDesc: 'Talk to `lotus-worker` (for mining).',
    groups: {
      misc: {
        methods: { info: {}, taskTypes: {}, version: {}, closing: {} }
      },
      storage: {
        methods: {
          addPiece: {},
          sealPreCommit1: {},
          sealPreCommit2: {},
          sealCommit1: {},
          sealCommit2: {},
          finalizeSector: {},
          releaseUnsealed: {},
          moveStorage: {},
          unsealPiece: {},
          readPiece: {},
          fetch: {},
          remove: {},
          paths: {}
        }
      }
    }
  }
}

const TypeInfo = JSON.parse(fs.readFileSync('typedoc.json'))

function findOrCreateGroup (apiName, methodName) {
  if (!ApiDocs[apiName]) throw new Error(`unknown API ${apiName}`)
  const groups = ApiDocs[apiName].groups || {}
  const entry = Object.entries(groups).find(([_, g]) => Object.keys(g.methods || {}).includes(methodName))
  if (entry) return { key: entry[0], group: ensureGroup(entry[0], entry[1]) }
  const key = methodName.split(/(?=[A-Z])/)[0]
  if (groups[key]) return { key, group: ensureGroup(key, groups[key]) }
  return { key, group: ensureGroup(key) }
}

function ensureGroup (key, group) {
  group = group || {}
  group.name = group.name || key[0].toUpperCase() + key.slice(1)
  group.desc = GroupDesc[key] || ''
  group.methods = group.methods || {}
  return group
}

function findMethodTypeInfo (methodName) {
  const lotus = TypeInfo.children.find(c => c.name === 'LotusRPC')
  return lotus.children.find(m => m.name === methodName)
}

// add methods and type info to groups
Object.keys(ApiDocs)
  .reduce((list, apiName) => {
    const methods = Object.keys(mainnet[apiName].methods)
      .map(m => m === 'ID' ? 'id' : m[0].toLowerCase() + m.slice(1))
      .map(m => [apiName, m])
    return list.concat(methods)
  }, [])
  .forEach(([apiName, methodName]) => {
    const { key, group } = findOrCreateGroup(apiName, methodName)
    group.methods[methodName] = group.methods[methodName] || {}
    group.methods[methodName].name = methodName
    group.methods[methodName].typeInfo = findMethodTypeInfo(methodName)
    if (!group.methods[methodName].typeInfo) console.warn('missing type info for', `${apiName}.${methodName}`)
    ApiDocs[apiName].groups = ApiDocs[apiName].groups || {}
    ApiDocs[apiName].groups[key] = group
  })

// sort groups and method names
Object.values(ApiDocs)
  .forEach(doc => {
    doc.groups = Object.keys(doc.groups).sort().reduce((groups, groupName) => {
      groups[groupName] = doc.groups[groupName]
      return groups
    }, {})
    Object.values(doc.groups).forEach(g => {
      g.methods = Object.keys(g.methods).sort().reduce((methods, methodName) => {
        methods[methodName] = g.methods[methodName]
        return methods
      }, {})
    })
  })

const rootDir = path.resolve('..', 'docs')
mkdirp.sync(rootDir)

console.log('Writing docs to', rootDir)

const apiDir = path.join(rootDir, 'api')
mkdirp.sync(apiDir)

// Write APIs listing page
fs.writeFileSync(path.join(apiDir, 'api.md'), Template.apisPage(ApiDocs))

// Generate API docs
Object.values(ApiDocs).forEach(({ name, desc, groups }) => {
  const dir = path.join(apiDir, filename(name))
  mkdirp.sync(dir)
  fs.writeFileSync(path.join(dir, 'index.md'), Template.apiIndexPage(name, desc, groups))
  Object.values(groups).forEach(g => {
    fs.writeFileSync(path.join(dir, filename(g.name) + '.md'), Template.groupPage(g, TypeInfo.children))
  })
})

// Generate summary
fs.writeFileSync(path.join(rootDir, 'SUMMARY.md'), Template.summaryPage(Object.values(ApiDocs)))

// Generate types
fs.writeFileSync(path.join(rootDir, 'api', 'types.md'), Template.typesPage(TypeInfo.children.filter(c => c.name !== 'LotusRPC')))
