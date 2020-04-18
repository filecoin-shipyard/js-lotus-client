# Chain

* ChainNotify

  `ChainNotify(context.Context) (<-chan []*store.HeadChange, error)`

  ChainNotify returns channel with chain head updates

  First message is guaranteed to be of len == 1, and type == 'current'

* ChainHead

  `ChainHead(context.Context) (*types.TipSet, error)`

* ChainGetRandomness

  `ChainGetRandomness(ctx context.Context, tsk types.TipSetKey, personalization crypto.DomainSeparationTag, randEpoch abi.ChainEpoch, entropy []byte) (abi.Randomness, error)`

* ChainGetBlock

  `ChainGetBlock(context.Context, cid.Cid) (*types.BlockHeader, error)`

* ChainGetTipSet

  `ChainGetTipSet(context.Context, types.TipSetKey) (*types.TipSet, error)`

* ChainGetBlockMessages

  `ChainGetBlockMessages(context.Context, cid.Cid) (*BlockMessages, error)`

* ChainGetParentReceipts

  `ChainGetParentReceipts(context.Context, cid.Cid) ([]*types.MessageReceipt, error)`

* ChainGetParentMessages

  `ChainGetParentMessages(context.Context, cid.Cid) ([]Message, error)`

* ChainGetTipSetByHeight

  `ChainGetTipSetByHeight(context.Context, abi.ChainEpoch, types.TipSetKey) (*types.TipSet, error)`

* ChainReadObj

  `ChainReadObj(context.Context, cid.Cid) ([]byte, error)`

* ChainHasObj

  `ChainHasObj(context.Context, cid.Cid) (bool, error)`

* ChainStatObj
  
  `ChainStatObj(context.Context, cid.Cid, cid.Cid) (ObjStat, error)`

* ChainSetHead

  `ChainSetHead(context.Context, types.TipSetKey) error`

* ChainGetGenesis

  `ChainGetGenesis(context.Context) (*types.TipSet, error)`

* ChainTipSetWeight

  `ChainTipSetWeight(context.Context, types.TipSetKey) (types.BigInt, error)`

* ChainGetNode

  `ChainGetNode(ctx context.Context, p string) (*IpldObject, error)`

* ChainGetMessage

  `ChainGetMessage(context.Context, cid.Cid) (*types.Message, error)`

* ChainGetPath

  `ChainGetPath(ctx context.Context, from types.TipSetKey, to types.TipSetKey) ([]*store.HeadChange, error)`

* ChainExport

  `ChainExport(context.Context, types.TipSetKey) (<-chan []byte, error)`

## CLI

```
$ lotus chain
NAME:
   lotus chain - Interact with filecoin blockchain

USAGE:
   lotus chain command [command options] [arguments...]

COMMANDS:
     head        Print chain head
     getblock    Get a block and print its details
     read-obj    Read the raw bytes of an object
     getmessage  Get and print a message by its cid
     sethead     manually set the local nodes head tipset (Caution: normally only used for recovery)
     list        View a segment of the chain
     get         Get chain DAG node by path
     export      export chain to a car file
     help, h     Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```