# State

* StateCall

  if tipset is nil, we'll use heaviest

  `StateCall(context.Context, *types.Message, types.TipSetKey) (*InvocResult, error)`

* StateReplay

  `StateReplay(context.Context, types.TipSetKey, cid.Cid) (*InvocResult, error)`

* StateGetActor

  `StateGetActor(ctx context.Context, actor address.Address, tsk types.TipSetKey) (*types.Actor, error)`

* StateReadState

  `StateReadState(ctx context.Context, act *types.Actor, tsk types.TipSetKey) (*ActorState, error)`

* StateListMessages

  `StateListMessages(ctx context.Context, match *types.Message, tsk types.TipSetKey, toht abi.ChainEpoch) ([]cid.Cid, error)`

* StateNetworkName
*
  `StateNetworkName(context.Context) (dtypes.NetworkName, error)`

* StateMinerSectors

  `StateMinerSectors(context.Context, address.Address, types.TipSetKey) ([]*ChainSectorInfo, error)`

* StateMinerProvingSet

  `StateMinerProvingSet(context.Context, address.Address, types.TipSetKey) ([]*ChainSectorInfo, error)`

* StateMinerPower

  `StateMinerPower(context.Context, address.Address, types.TipSetKey) (*MinerPower, error)`

* StateMinerWorker

  `StateMinerWorker(context.Context, address.Address, types.TipSetKey) (address.Address, error)`

* StateMinerPeerID

  `StateMinerPeerID(ctx context.Context, m address.Address, tsk types.TipSetKey) (peer.ID, error)`

* StateMinerPostState

  `StateMinerPostState(ctx context.Context, actor address.Address, tsk types.TipSetKey) (*miner.PoStState, error)`

* StateMinerSectorSize

  `StateMinerSectorSize(context.Context, address.Address, types.TipSetKey) (abi.SectorSize, error)`

* StateMinerFaults

  `StateMinerFaults(context.Context, address.Address, types.TipSetKey) ([]abi.SectorNumber, error)`

* StateSectorPreCommitInfo

  `StateSectorPreCommitInfo(context.Context, address.Address, abi.SectorNumber, types.TipSetKey) (miner.SectorPreCommitOnChainInfo, error)`

* StatePledgeCollateral

  `StatePledgeCollateral(context.Context, types.TipSetKey) (types.BigInt, error)`

* StateWaitMsg

  `StateWaitMsg(context.Context, cid.Cid) (*MsgLookup, error)`

* StateSearchMsg

  `StateSearchMsg(context.Context, cid.Cid) (*MsgLookup, error)`

* StateListMiners

  `StateListMiners(context.Context, types.TipSetKey) ([]address.Address, error)`

* StateListActors

  `StateListActors(context.Context, types.TipSetKey) ([]address.Address, error)`

* StateMarketBalance

  `StateMarketBalance(context.Context, address.Address, types.TipSetKey) (MarketBalance, error)`

* StateMarketParticipants

  `StateMarketParticipants(context.Context, types.TipSetKey) (map[string]MarketBalance, error)`

* StateMarketDeals

  `StateMarketDeals(context.Context, types.TipSetKey) (map[string]MarketDeal, error)`

* StateMarketStorageDeal

  `StateMarketStorageDeal(context.Context, abi.DealID, types.TipSetKey) (*MarketDeal, error)`

* StateLookupID

  `StateLookupID(context.Context, address.Address, types.TipSetKey) (address.Address, error)`

* StateChangedActors

  `StateChangedActors(context.Context, cid.Cid, cid.Cid) (map[string]types.Actor, error)`

* StateGetReceipt

  `StateGetReceipt(context.Context, cid.Cid, types.TipSetKey) (*types.MessageReceipt, error)`

* StateMinerSectorCount

  `StateMinerSectorCount(context.Context, address.Address, types.TipSetKey) (MinerSectors, error)`

* StateListRewards

  `StateListRewards(context.Context, address.Address, types.TipSetKey) ([]reward.Reward, error)`

* StateCompute

  `StateCompute(context.Context, abi.ChainEpoch, []*types.Message, types.TipSetKey) (*ComputeStateOutput, error)`

## CLI

```
$ lotus state
NAME:
   lotus state - Interact with and query filecoin chain state

USAGE:
   lotus state command [command options] [arguments...]

COMMANDS:
     power              Query network or miner power
     sectors            Query the sector set of a miner
     proving            Query the proving set of a miner
     pledge-collateral  Get minimum miner pledge collateral
     list-actors        list all actors in the network
     list-miners        list all miners in the network
     get-actor          Print actor information
     lookup             Find corresponding ID address
     replay             Replay a particular message within a tipset
     sector-size        Look up miners sector size
     read-state         View a json representation of an actors state
     list-messages      list messages on chain matching given criteria
     compute-state      Perform state computations
     call               Invoke a method on an actor locally
     help, h            Shows a list of commands or help for one command

OPTIONS:
   --tipset value  specify tipset to call method on (pass comma separated array of cids)
   --help, -h      show help (default: false)
   --version, -v   print the version (default: false)
```