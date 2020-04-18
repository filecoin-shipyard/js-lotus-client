# Version

* Version

  Version provides information about API provider

  `Version(context.Context) (Version, error)`

## CLI

```
$ lotus 
NAME:
   lotus - Filecoin decentralized storage network client

USAGE:
   lotus [global options] command [command options] [arguments...]

VERSION:
   0.2.5+git9fc5f0cd

COMMANDS:
     daemon        Start a lotus daemon process
     auth          Manage RPC permissions
     chain         Interact with filecoin blockchain
     client        Make deals, store data, retrieve data
     fetch-params  Fetch proving parameters
     mpool         Manage message pool
     msig          Interact with a multisig wallet
     net           Manage P2P Network
     paych         Manage payment channels
     send          Send funds between accounts
     state         Interact with and query filecoin chain state
     sync          Inspect or interact with the chain syncer
     version       Print version
     wallet        Manage wallet
     help, h       Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```

```
$ lotus version
0.2.5+git9fc5f0cd+api0.1.6
lotus version 0.2.5+git9fc5f0cd
```