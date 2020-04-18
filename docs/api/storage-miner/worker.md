# Worker

* WorkerConnect

   WorkerConnect tells the node to connect to workers RPC

   `WorkerConnect(context.Context, string) error`

* WorkerStats

   `WorkerStats(context.Context) (map[uint64]sectorstorage.WorkerStats, error)`

## CLI

```
$ lotus-storage-miner 
NAME:
   lotus-storage-miner - Filecoin decentralized storage network storage miner

USAGE:
   lotus-storage-miner [global options] command [command options] [arguments...]

VERSION:
   0.2.5+git9fc5f0cd

COMMANDS:
     run            Start a lotus storage miner process
     init           Initialize a lotus storage miner repo
     info           Print storage miner info
     pledge-sector  store random data in a sector
     sectors        interact with sector store
     auth           Manage RPC permissions
     chain          Interact with filecoin blockchain
     client         Make deals, store data, retrieve data
     fetch-params   Fetch proving parameters
     mpool          Manage message pool
     msig           Interact with a multisig wallet
     net            Manage P2P Network
     paych          Manage payment channels
     send           Send funds between accounts
     state          Interact with and query filecoin chain state
     sync           Inspect or interact with the chain syncer
     version        Print version
     wallet         Manage wallet
     help, h        Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --storagerepo value  (default: "~/.lotusstorage") [$LOTUS_STORAGE_PATH]
   --help, -h           show help (default: false)
   --version, -v        print the version (default: false)
```

