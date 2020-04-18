# Message Pool

* MpoolPending

  `MpoolPending(context.Context, types.TipSetKey) ([]*types.SignedMessage, error)`

* MpoolPush

  `MpoolPush(context.Context, *types.SignedMessage) (cid.Cid, error)`

* MpoolPushMessage

  `MpoolPushMessage(context.Context, *types.Message) (*types.SignedMessage, error) // get nonce, sign, push`

* MpoolGetNonce

  `MpoolGetNonce(context.Context, address.Address) (uint64, error)`

* MpoolSub

  `MpoolSub(context.Context) (<-chan MpoolUpdate, error)`

## CLI

```
$ lotus mpool
NAME:
   lotus mpool - Manage message pool

USAGE:
   lotus mpool command [command options] [arguments...]

COMMANDS:
     pending  Get pending messages
     sub      Subscibe to mpool changes
     stat     print mempool stats
     help, h  Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```