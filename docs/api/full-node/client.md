# Client

* ClientImport

  ClientImport imports file under the specified path into filestore

	`ClientImport(ctx context.Context, ref FileRef) (cid.Cid, error)`

* ClientStartDeal

	`ClientStartDeal(ctx context.Context, params *StartDealParams) (*cid.Cid, error)

* ClientGetDealInfo

  `ClientGetDealInfo(context.Context, cid.Cid) (*DealInfo, error)`

* ClientListDeals

  `ClientListDeals(ctx context.Context) ([]DealInfo, error)`

* ClientHasLocal

  `ClientHasLocal(ctx context.Context, root cid.Cid) (bool, error)`

* ClientFindData

  `ClientFindData(ctx context.Context, root cid.Cid) ([]QueryOffer, error)`

* ClientRetrieve

  `ClientRetrieve(ctx context.Context, order RetrievalOrder, ref FileRef) error`

* ClientQueryAsk

  `ClientQueryAsk(ctx context.Context, p peer.ID, miner address.Address) (*storagemarket.SignedStorageAsk, error)`

* ClientCalcCommP

  `ClientCalcCommP(ctx context.Context, inpath string, miner address.Address) (*CommPRet, error)`

* ClientGenCar
  
  `ClientGenCar(ctx context.Context, ref FileRef, outpath string) error`

* ClientListImports

  `ClientListImports(ctx context.Context) ([]Import, error)`

## CLI

```
$ lotus client
NAME:
   lotus client - Make deals, store data, retrieve data

USAGE:
   lotus client command [command options] [arguments...]

COMMANDS:
     import      Import data
     local       List locally imported data
     deal        Initialize storage deal with a miner
     find        find data in the network
     retrieve    retrieve data from network
     query-ask   find a miners ask
     list-deals  List storage market deals
     help, h     Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```