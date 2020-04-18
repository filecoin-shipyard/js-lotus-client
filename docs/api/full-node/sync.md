# Sync

* SyncState

  `SyncState(context.Context) (*SyncState, error)`

* SyncSubmitBlock

  `SyncSubmitBlock(ctx context.Context, blk *types.BlockMsg) error`

* SyncIncomingBlocks

  `SyncIncomingBlocks(ctx context.Context) (<-chan *types.BlockHeader, error)`

* SyncMarkBad

  `SyncMarkBad(ctx context.Context, bcid cid.Cid) error`

* SyncCheckBad

  `SyncCheckBad(ctx context.Context, bcid cid.Cid) (string, error)`

## CLI

```
$ lotus sync
NAME:
   lotus sync - Inspect or interact with the chain syncer

USAGE:
   lotus sync command [command options] [arguments...]

COMMANDS:
     status    check sync status
     wait      Wait for sync to be complete
     mark-bad  Mark the given block as bad, will prevent syncing to a chain that contains it
     help, h   Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```