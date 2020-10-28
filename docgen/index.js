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

const ApiDocs = {
  fullNode: {
    name: 'Full Node',
    desc: '* [github.com/filecoin-project/lotus/api/api_full.go](https://github.com/filecoin-project/lotus/blob/master/api/api_full.go)',
    groups: {
      misc: {
        methods: { id: {}, version: {}, createBackup: {}, closing: {}, shutdown: {} }
      }
    }
  },
  storageMiner: {
    name: 'Storage Miner',
    desc: '* [github.com/filecoin-project/lotus/api/api_storage.go](https://github.com/filecoin-project/lotus/blob/master/api/api_storage.go)',
    groups: {
      misc: {
        methods: { id: {}, version: {}, createBackup: {}, closing: {}, shutdown: {} }
      }
    }
  },
  gatewayApi: {
    name: 'Gateway',
    desc: '* [github.com/filecoin-project/lotus/api/api_gateway.go](https://github.com/filecoin-project/lotus/blob/master/api/api_gateway.go)'
  },
  walletApi: {
    name: 'Wallet',
    desc: '* [github.com/filecoin-project/lotus/api/api_wallet.go](https://github.com/filecoin-project/lotus/blob/master/api/api_wallet.go)'
  },
  workerApi: {
    name: 'Worker',
    desc: '* [github.com/filecoin-project/lotus/api/api_worker.go](https://github.com/filecoin-project/lotus/blob/master/api/api_worker.go)'
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
    group.methods[methodName] = group.methods[methodName] || { name: methodName }
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

Object.values(ApiDocs).forEach(({ name, desc, groups }) => {
  const dir = path.join('docs', filename(name))
  mkdirp.sync(dir)
  fs.writeFileSync(path.join(dir, 'index.md'), Template.apiIndexPage(name, desc, groups))
  Object.values(groups).forEach(g => {
    fs.writeFileSync(path.join(dir, filename(g.name) + '.md'), Template.groupPage(g))
  })
})
