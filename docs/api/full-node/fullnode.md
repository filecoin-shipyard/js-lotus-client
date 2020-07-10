# Groups
* [](#)
  * [Closing](#Closing)
  * [Shutdown](#Shutdown)
  * [Version](#Version)
* [Auth](#Auth)
  * [AuthNew](#AuthNew)
  * [AuthVerify](#AuthVerify)
* [Chain](#Chain)
  * [ChainExport](#ChainExport)
  * [ChainGetBlock](#ChainGetBlock)
  * [ChainGetBlockMessages](#ChainGetBlockMessages)
  * [ChainGetGenesis](#ChainGetGenesis)
  * [ChainGetMessage](#ChainGetMessage)
  * [ChainGetNode](#ChainGetNode)
  * [ChainGetParentMessages](#ChainGetParentMessages)
  * [ChainGetParentReceipts](#ChainGetParentReceipts)
  * [ChainGetPath](#ChainGetPath)
  * [ChainGetRandomness](#ChainGetRandomness)
  * [ChainGetTipSet](#ChainGetTipSet)
  * [ChainGetTipSetByHeight](#ChainGetTipSetByHeight)
  * [ChainHasObj](#ChainHasObj)
  * [ChainHead](#ChainHead)
  * [ChainNotify](#ChainNotify)
  * [ChainReadObj](#ChainReadObj)
  * [ChainSetHead](#ChainSetHead)
  * [ChainStatObj](#ChainStatObj)
  * [ChainTipSetWeight](#ChainTipSetWeight)
* [Client](#Client)
  * [ClientCalcCommP](#ClientCalcCommP)
  * [ClientFindData](#ClientFindData)
  * [ClientGenCar](#ClientGenCar)
  * [ClientGetDealInfo](#ClientGetDealInfo)
  * [ClientHasLocal](#ClientHasLocal)
  * [ClientImport](#ClientImport)
  * [ClientListDeals](#ClientListDeals)
  * [ClientListImports](#ClientListImports)
  * [ClientMinerQueryOffer](#ClientMinerQueryOffer)
  * [ClientQueryAsk](#ClientQueryAsk)
  * [ClientRetrieve](#ClientRetrieve)
  * [ClientStartDeal](#ClientStartDeal)
* [I](#I)
  * [ID](#ID)
* [Log](#Log)
  * [LogList](#LogList)
  * [LogSetLevel](#LogSetLevel)
* [Market](#Market)
  * [MarketEnsureAvailable](#MarketEnsureAvailable)
* [Miner](#Miner)
  * [MinerCreateBlock](#MinerCreateBlock)
  * [MinerGetBaseInfo](#MinerGetBaseInfo)
* [Mpool](#Mpool)
  * [MpoolEstimateGasPrice](#MpoolEstimateGasPrice)
  * [MpoolGetNonce](#MpoolGetNonce)
  * [MpoolPending](#MpoolPending)
  * [MpoolPush](#MpoolPush)
  * [MpoolPushMessage](#MpoolPushMessage)
  * [MpoolSub](#MpoolSub)
* [Msig](#Msig)
  * [MsigApprove](#MsigApprove)
  * [MsigCancel](#MsigCancel)
  * [MsigCreate](#MsigCreate)
  * [MsigGetAvailableBalance](#MsigGetAvailableBalance)
  * [MsigPropose](#MsigPropose)
* [Net](#Net)
  * [NetAddrsListen](#NetAddrsListen)
  * [NetConnect](#NetConnect)
  * [NetConnectedness](#NetConnectedness)
  * [NetDisconnect](#NetDisconnect)
  * [NetFindPeer](#NetFindPeer)
  * [NetPeers](#NetPeers)
  * [NetPubsubScores](#NetPubsubScores)
* [Paych](#Paych)
  * [PaychAllocateLane](#PaychAllocateLane)
  * [PaychClose](#PaychClose)
  * [PaychGet](#PaychGet)
  * [PaychList](#PaychList)
  * [PaychNewPayment](#PaychNewPayment)
  * [PaychStatus](#PaychStatus)
  * [PaychVoucherAdd](#PaychVoucherAdd)
  * [PaychVoucherCheckSpendable](#PaychVoucherCheckSpendable)
  * [PaychVoucherCheckValid](#PaychVoucherCheckValid)
  * [PaychVoucherCreate](#PaychVoucherCreate)
  * [PaychVoucherList](#PaychVoucherList)
  * [PaychVoucherSubmit](#PaychVoucherSubmit)
* [State](#State)
  * [StateAccountKey](#StateAccountKey)
  * [StateAllMinerFaults](#StateAllMinerFaults)
  * [StateCall](#StateCall)
  * [StateChangedActors](#StateChangedActors)
  * [StateCompute](#StateCompute)
  * [StateGetActor](#StateGetActor)
  * [StateGetReceipt](#StateGetReceipt)
  * [StateListActors](#StateListActors)
  * [StateListMessages](#StateListMessages)
  * [StateListMiners](#StateListMiners)
  * [StateLookupID](#StateLookupID)
  * [StateMarketBalance](#StateMarketBalance)
  * [StateMarketDeals](#StateMarketDeals)
  * [StateMarketParticipants](#StateMarketParticipants)
  * [StateMarketStorageDeal](#StateMarketStorageDeal)
  * [StateMinerAvailableBalance](#StateMinerAvailableBalance)
  * [StateMinerDeadlines](#StateMinerDeadlines)
  * [StateMinerFaults](#StateMinerFaults)
  * [StateMinerInfo](#StateMinerInfo)
  * [StateMinerInitialPledgeCollateral](#StateMinerInitialPledgeCollateral)
  * [StateMinerPower](#StateMinerPower)
  * [StateMinerProvingDeadline](#StateMinerProvingDeadline)
  * [StateMinerProvingSet](#StateMinerProvingSet)
  * [StateMinerRecoveries](#StateMinerRecoveries)
  * [StateMinerSectorCount](#StateMinerSectorCount)
  * [StateMinerSectors](#StateMinerSectors)
  * [StateNetworkName](#StateNetworkName)
  * [StatePledgeCollateral](#StatePledgeCollateral)
  * [StateReadState](#StateReadState)
  * [StateReplay](#StateReplay)
  * [StateSearchMsg](#StateSearchMsg)
  * [StateSectorGetInfo](#StateSectorGetInfo)
  * [StateSectorPreCommitInfo](#StateSectorPreCommitInfo)
  * [StateWaitMsg](#StateWaitMsg)
* [Sync](#Sync)
  * [SyncCheckBad](#SyncCheckBad)
  * [SyncIncomingBlocks](#SyncIncomingBlocks)
  * [SyncMarkBad](#SyncMarkBad)
  * [SyncState](#SyncState)
  * [SyncSubmitBlock](#SyncSubmitBlock)
* [Wallet](#Wallet)
  * [WalletBalance](#WalletBalance)
  * [WalletDefaultAddress](#WalletDefaultAddress)
  * [WalletDelete](#WalletDelete)
  * [WalletExport](#WalletExport)
  * [WalletHas](#WalletHas)
  * [WalletImport](#WalletImport)
  * [WalletList](#WalletList)
  * [WalletNew](#WalletNew)
  * [WalletSetDefault](#WalletSetDefault)
  * [WalletSign](#WalletSign)
  * [WalletSignMessage](#WalletSignMessage)
  * [WalletVerify](#WalletVerify)
## 


### Closing


Perms: read

Inputs: `null`

Response: `{}`

### Shutdown


Perms: admin

Inputs: `null`

Response: `{}`

### Version


Perms: read

Inputs: `null`

Response:
```json
{
  "Version": "string value",
  "APIVersion": 1280,
  "BlockDelay": 42
}
```

## Auth


### AuthNew


Perms: admin

Inputs:
```json
[
  null
]
```

Response: `"Ynl0ZSBhcnJheQ=="`

### AuthVerify


Perms: read

Inputs:
```json
[
  "string value"
]
```

Response: `null`

## Chain
The Chain method group contains methods for interacting with the
blockchain, but that do not require any form of state computation.


### ChainExport
ChainExport returns a stream of bytes with CAR dump of chain data.


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"Ynl0ZSBhcnJheQ=="`

### ChainGetBlock
ChainGetBlock returns the block specified by the given CID.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "Miner": "t01234",
  "Ticket": {
    "VRFProof": "Ynl0ZSBhcnJheQ=="
  },
  "ElectionProof": {
    "WinCount": 9,
    "VRFProof": "Ynl0ZSBhcnJheQ=="
  },
  "BeaconEntries": null,
  "WinPoStProof": null,
  "Parents": null,
  "ParentWeight": "0",
  "Height": 10101,
  "ParentStateRoot": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "ParentMessageReceipts": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Messages": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "BLSAggregate": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "Timestamp": 42,
  "BlockSig": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "ForkSignaling": 42
}
```

### ChainGetBlockMessages
ChainGetBlockMessages returns messages stored in the specified block.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "BlsMessages": null,
  "SecpkMessages": null,
  "Cids": null
}
```

### ChainGetGenesis
ChainGetGenesis returns the genesis tipset.


Perms: read

Inputs: `null`

Response:
```json
{
  "Cids": null,
  "Blocks": null,
  "Height": 0
}
```

### ChainGetMessage
ChainGetMessage reads a message referenced by the specified CID from the
chain blockstore.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "Version": 9,
  "To": "t01234",
  "From": "t01234",
  "Nonce": 42,
  "Value": "0",
  "GasPrice": "0",
  "GasLimit": 9,
  "Method": 1,
  "Params": "Ynl0ZSBhcnJheQ=="
}
```

### ChainGetNode
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "string value"
]
```

Response:
```json
{
  "Cid": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Obj": {}
}
```

### ChainGetParentMessages
ChainGetParentReceipts returns messages stored in parent tipset of the
specified block.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `null`

### ChainGetParentReceipts
ChainGetParentReceipts returns receipts for messages in parent tipset of
the specified block.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `null`

### ChainGetPath
ChainGetPath returns a set of revert/apply operations needed to get from
one tipset to another, for example:
```
       to
        ^
from   tAA
  ^     ^
tBA    tAB
 ^---*--^
     ^
    tRR
```
Would return `[revert(tBA), apply(tAB), apply(tAA)]`


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ],
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

### ChainGetRandomness
ChainGetRandomness is used to sample the chain for randomness.


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ],
  2,
  10101,
  "Ynl0ZSBhcnJheQ=="
]
```

Response: `null`

### ChainGetTipSet
ChainGetTipSet returns the tipset specified by the given TipSetKey.


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Cids": null,
  "Blocks": null,
  "Height": 0
}
```

### ChainGetTipSetByHeight
ChainGetTipSetByHeight looks back for a tipset at the specified epoch.
If there are no blocks at the specified epoch, a tipset at higher epoch
will be returned.


Perms: read

Inputs:
```json
[
  10101,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Cids": null,
  "Blocks": null,
  "Height": 0
}
```

### ChainHasObj
ChainHasObj checks if a given CID exists in the chain blockstore.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `true`

### ChainHead
ChainHead returns the current head of the chain.


Perms: read

Inputs: `null`

Response:
```json
{
  "Cids": null,
  "Blocks": null,
  "Height": 0
}
```

### ChainNotify
ChainNotify returns channel with chain head updates.
First message is guaranteed to be of len == 1, and type == 'current'.


Perms: read

Inputs: `null`

Response: `null`

### ChainReadObj
ChainReadObj reads ipld nodes referenced by the specified CID from chain
blockstore and returns raw bytes.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `"Ynl0ZSBhcnJheQ=="`

### ChainSetHead
ChainSetHead forcefully sets current chain head. Use with caution.


Perms: admin

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `{}`

### ChainStatObj
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "Size": 42,
  "Links": 42
}
```

### ChainTipSetWeight
ChainTipSetWeight computes weight for the specified tipset.


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"0"`

## Client
The Client methods all have to do with interacting with the storage and
retrieval markets as a client


### ClientCalcCommP
ClientCalcCommP calculates the CommP for a specified file, based on the sector size of the provided miner.


Perms: read

Inputs:
```json
[
  "string value",
  "t01234"
]
```

Response:
```json
{
  "Root": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Size": 1024
}
```

### ClientFindData
ClientFindData identifies peers that have a certain file, and returns QueryOffers (one per peer).


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `null`

### ClientGenCar
ClientGenCar generates a CAR file for the specified file.


Perms: write

Inputs:
```json
[
  {
    "Path": "string value",
    "IsCAR": true
  },
  "string value"
]
```

Response: `{}`

### ClientGetDealInfo
ClientGetDealInfo returns the latest information about a given deal.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "ProposalCid": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "State": 42,
  "Message": "string value",
  "Provider": "t01234",
  "PieceCID": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Size": 42,
  "PricePerEpoch": "0",
  "Duration": 42,
  "DealID": 5432
}
```

### ClientHasLocal
ClientHasLocal indicates whether a certain CID is locally stored.


Perms: write

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `true`

### ClientImport
ClientImport imports file under the specified path into filestore.


Perms: admin

Inputs:
```json
[
  {
    "Path": "string value",
    "IsCAR": true
  }
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

### ClientListDeals
ClientListDeals returns information about the deals made by the local client.


Perms: write

Inputs: `null`

Response: `null`

### ClientListImports
ClientListImports lists imported files and their root CIDs


Perms: write

Inputs: `null`

Response: `null`

### ClientMinerQueryOffer
ClientMinerQueryOffer returns a QueryOffer for the specific miner and file.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "t01234"
]
```

Response:
```json
{
  "Err": "string value",
  "Root": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Size": 42,
  "MinPrice": "0",
  "PaymentInterval": 42,
  "PaymentIntervalIncrease": 42,
  "Miner": "t01234",
  "MinerPeerID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
}
```

### ClientQueryAsk
ClientQueryAsk returns a signed StorageAsk from the specified miner.


Perms: read

Inputs:
```json
[
  "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf",
  "t01234"
]
```

Response:
```json
{
  "Ask": {
    "Price": "0",
    "MinPieceSize": 1032,
    "MaxPieceSize": 1032,
    "Miner": "t01234",
    "Timestamp": 10101,
    "Expiry": 10101,
    "SeqNo": 42
  },
  "Signature": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
}
```

### ClientRetrieve
ClientRetrieve initiates the retrieval of a file, as specified in the order.


Perms: admin

Inputs:
```json
[
  {
    "Root": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "Size": 42,
    "Total": "0",
    "PaymentInterval": 42,
    "PaymentIntervalIncrease": 42,
    "Client": "t01234",
    "Miner": "t01234",
    "MinerPeerID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
  },
  {
    "Path": "string value",
    "IsCAR": true
  }
]
```

Response: `{}`

### ClientStartDeal
ClientStartDeal proposes a deal with a miner.


Perms: admin

Inputs:
```json
[
  {
    "Data": {
      "TransferType": "string value",
      "Root": {
        "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
      },
      "PieceCid": null,
      "PieceSize": 1024
    },
    "Wallet": "t01234",
    "Miner": "t01234",
    "EpochPrice": "0",
    "MinBlocksDuration": 42,
    "DealStartEpoch": 10101,
    "FastRetrieval": true,
    "VerifiedDeal": true
  }
]
```

Response: `null`

## I


### ID


Perms: read

Inputs: `null`

Response: `"12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"`

## Log


### LogList


Perms: write

Inputs: `null`

Response: `null`

### LogSetLevel


Perms: write

Inputs:
```json
[
  "string value",
  "string value"
]
```

Response: `{}`

## Market


### MarketEnsureAvailable
MarketFreeBalance


Perms: sign

Inputs:
```json
[
  "t01234",
  "t01234",
  "0"
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## Miner


### MinerCreateBlock
There are not yet any comments for this method.

Perms: write

Inputs:
```json
[
  {
    "Miner": "t01234",
    "Parents": [
      {
        "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
      },
      {
        "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
      }
    ],
    "Ticket": {
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "Eproof": {
      "WinCount": 9,
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "BeaconValues": null,
    "Messages": null,
    "Epoch": 10101,
    "Timestamp": 42,
    "WinningPoStProof": null
  }
]
```

Response:
```json
{
  "Header": {
    "Miner": "t01234",
    "Ticket": {
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "ElectionProof": {
      "WinCount": 9,
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "BeaconEntries": null,
    "WinPoStProof": null,
    "Parents": null,
    "ParentWeight": "0",
    "Height": 10101,
    "ParentStateRoot": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "ParentMessageReceipts": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "Messages": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "BLSAggregate": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Timestamp": 42,
    "BlockSig": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "ForkSignaling": 42
  },
  "BlsMessages": null,
  "SecpkMessages": null
}
```

### MinerGetBaseInfo
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234",
  10101,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "MinerPower": "0",
  "NetworkPower": "0",
  "Sectors": null,
  "WorkerKey": "t01234",
  "SectorSize": 34359738368,
  "PrevBeaconEntry": {
    "Round": 42,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "BeaconEntries": null
}
```

## Mpool
The Mpool methods are for interacting with the message pool. The message pool
manages all incoming and outgoing 'messages' going over the network.


### MpoolEstimateGasPrice
MpoolEstimateGasPrice estimates what gas price should be used for a
message to have high likelihood of inclusion in `nblocksincl` epochs.


Perms: read

Inputs:
```json
[
  42,
  "t01234",
  9,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"0"`

### MpoolGetNonce
MpoolGetNonce gets next nonce for the specified sender.
Note that this method may not be atomic. Use MpoolPushMessage instead.


Perms: read

Inputs:
```json
[
  "t01234"
]
```

Response: `42`

### MpoolPending
MpoolPending returns pending mempool messages.


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

### MpoolPush
MpoolPush pushes a signed message to mempool.


Perms: write

Inputs:
```json
[
  {
    "Message": {
      "Version": 9,
      "To": "t01234",
      "From": "t01234",
      "Nonce": 42,
      "Value": "0",
      "GasPrice": "0",
      "GasLimit": 9,
      "Method": 1,
      "Params": "Ynl0ZSBhcnJheQ=="
    },
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  }
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

### MpoolPushMessage
MpoolPushMessage atomically assigns a nonce, signs, and pushes a message
to mempool.


Perms: sign

Inputs:
```json
[
  {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  }
]
```

Response:
```json
{
  "Message": {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  },
  "Signature": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
}
```

### MpoolSub
There are not yet any comments for this method.

Perms: read

Inputs: `null`

Response:
```json
{
  "Type": 0,
  "Message": {
    "Message": {
      "Version": 9,
      "To": "t01234",
      "From": "t01234",
      "Nonce": 42,
      "Value": "0",
      "GasPrice": "0",
      "GasLimit": 9,
      "Method": 1,
      "Params": "Ynl0ZSBhcnJheQ=="
    },
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  }
}
```

## Msig
The Msig methods are used to interact with multisig wallets on the
filecoin network


### MsigApprove
MsigApprove approves a previously-proposed multisig message
It takes the following params: <multisig address>, <proposed message ID>, <proposer address>, <recipient address>, <value to transfer>,
<sender address of the approve msg>, <method to call in the proposed message>, <params to include in the proposed message>


Perms: sign

Inputs:
```json
[
  "t01234",
  42,
  "t01234",
  "t01234",
  "0",
  "t01234",
  42,
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

### MsigCancel
MsigCancel cancels a previously-proposed multisig message
It takes the following params: <multisig address>, <proposed message ID>, <proposer address>, <recipient address>, <value to transfer>,
<sender address of the cancel msg>, <method to call in the proposed message>, <params to include in the proposed message>
TODO: You can't cancel someone else's proposed message, so "src" and "proposer" here are redundant


Perms: sign

Inputs:
```json
[
  "t01234",
  42,
  "t01234",
  "t01234",
  "0",
  "t01234",
  42,
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

### MsigCreate
MsigGetAvailableBalance creates a multisig wallet
It takes the following params: <required number of senders>, <approving addresses>, <initial balance>,
<sender address of the create msg>, <gas price>


Perms: sign

Inputs:
```json
[
  42,
  null,
  "0",
  "t01234",
  "0"
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

### MsigGetAvailableBalance
MsigGetAvailableBalance returns the portion of a multisig's balance that can be withdrawn or spent


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"0"`

### MsigPropose
MsigPropose proposes a multisig message
It takes the following params: <multisig address>, <recipient address>, <value to transfer>,
<sender address of the propose msg>, <method to call in the proposed message>, <params to include in the proposed message>


Perms: sign

Inputs:
```json
[
  "t01234",
  "t01234",
  "0",
  "t01234",
  42,
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## Net


### NetAddrsListen


Perms: read

Inputs: `null`

Response:
```json
{
  "Addrs": null,
  "ID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
}
```

### NetConnect


Perms: write

Inputs:
```json
[
  {
    "Addrs": null,
    "ID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
  }
]
```

Response: `{}`

### NetConnectedness


Perms: read

Inputs:
```json
[
  "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
]
```

Response: `1`

### NetDisconnect


Perms: write

Inputs:
```json
[
  "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
]
```

Response: `{}`

### NetFindPeer


Perms: read

Inputs:
```json
[
  "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
]
```

Response:
```json
{
  "Addrs": null,
  "ID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
}
```

### NetPeers


Perms: read

Inputs: `null`

Response: `null`

### NetPubsubScores


Perms: read

Inputs: `null`

Response: `null`

## Paych
The Paych methods are for interacting with and managing payment channels


### PaychAllocateLane
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234"
]
```

Response: `42`

### PaychClose
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234"
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

### PaychGet
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  "t01234",
  "0"
]
```

Response:
```json
{
  "Channel": "t01234",
  "ChannelMessage": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
}
```

### PaychList
There are not yet any comments for this method.

Perms: read

Inputs: `null`

Response: `null`

### PaychNewPayment
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  "t01234",
  null
]
```

Response:
```json
{
  "Channel": "t01234",
  "ChannelMessage": null,
  "Vouchers": null
}
```

### PaychStatus
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234"
]
```

Response:
```json
{
  "ControlAddr": "t01234",
  "Direction": 1
}
```

### PaychVoucherAdd
There are not yet any comments for this method.

Perms: write

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  },
  "Ynl0ZSBhcnJheQ==",
  "0"
]
```

Response: `"0"`

### PaychVoucherCheckSpendable
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  },
  "Ynl0ZSBhcnJheQ==",
  "Ynl0ZSBhcnJheQ=="
]
```

Response: `true`

### PaychVoucherCheckValid
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  }
]
```

Response: `{}`

### PaychVoucherCreate
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  "0",
  42
]
```

Response:
```json
{
  "TimeLockMin": 10101,
  "TimeLockMax": 10101,
  "SecretPreimage": "Ynl0ZSBhcnJheQ==",
  "Extra": {
    "Actor": "t01234",
    "Method": 1,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "Lane": 42,
  "Nonce": 42,
  "Amount": "0",
  "MinSettleHeight": 10101,
  "Merges": null,
  "Signature": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
}
```

### PaychVoucherList
There are not yet any comments for this method.

Perms: write

Inputs:
```json
[
  "t01234"
]
```

Response: `null`

### PaychVoucherSubmit
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  }
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## State
The State methods are used to query, inspect, and interact with chain state.
All methods take a TipSetKey as a parameter. The state looked up is the state at that tipset.
A nil TipSetKey can be provided as a param, this will cause the heaviest tipset in the chain to be used.


### StateAccountKey
StateAccountKey returns the public key address of the given ID address


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"t01234"`

### StateAllMinerFaults
StateAllMinerFaults returns all non-expired Faults that occur within lookback epochs of the given tipset


Perms: read

Inputs:
```json
[
  10101,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

### StateCall
StateCall runs the given message and returns its result without any persisted changes.


Perms: read

Inputs:
```json
[
  {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  },
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Msg": {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  },
  "MsgRct": {
    "ExitCode": 0,
    "Return": "Ynl0ZSBhcnJheQ==",
    "GasUsed": 9
  },
  "ExecutionTrace": {
    "Msg": {
      "Version": 9,
      "To": "t01234",
      "From": "t01234",
      "Nonce": 42,
      "Value": "0",
      "GasPrice": "0",
      "GasLimit": 9,
      "Method": 1,
      "Params": "Ynl0ZSBhcnJheQ=="
    },
    "MsgRct": {
      "ExitCode": 0,
      "Return": "Ynl0ZSBhcnJheQ==",
      "GasUsed": 9
    },
    "Error": "string value",
    "Duration": 60000000000,
    "GasCharges": null,
    "Subcalls": null
  },
  "Error": "string value",
  "Duration": 60000000000
}
```

### StateChangedActors
StateChangedActors returns all the actors whose states change between the two given state CIDs
TODO: Should this take tipset keys instead?


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "t01236": {
    "Code": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "Head": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "Nonce": 42,
    "Balance": "0"
  }
}
```

### StateCompute
StateCompute is a flexible command that applies the given messages on the given tipset.
The messages are run as though the VM were at the provided height.


Perms: read

Inputs:
```json
[
  10101,
  null,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Root": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Trace": null
}
```

### StateGetActor
StateGetActor returns the indicated actor's nonce and balance.


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Code": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Head": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Nonce": 42,
  "Balance": "0"
}
```

### StateGetReceipt
StateGetReceipt returns the message receipt for the given message


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "ExitCode": 0,
  "Return": "Ynl0ZSBhcnJheQ==",
  "GasUsed": 9
}
```

### StateListActors
StateListActors returns the addresses of every actor in the state


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

### StateListMessages
StateListMessages looks back and returns all messages with a matching to or from address, stopping at the given height.


Perms: read

Inputs:
```json
[
  {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  },
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ],
  10101
]
```

Response: `null`

### StateListMiners
StateListMiners returns the addresses of every miner that has claimed power in the Power Actor


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

### StateLookupID
StateLookupID retrieves the ID address of the given address


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"t01234"`

### StateMarketBalance
StateMarketBalance looks up the Escrow and Locked balances of the given address in the Storage Market


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Escrow": "0",
  "Locked": "0"
}
```

### StateMarketDeals
StateMarketDeals returns information about every deal in the Storage Market


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "t026363": {
    "Proposal": {
      "PieceCID": {
        "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
      },
      "PieceSize": 1032,
      "VerifiedDeal": true,
      "Client": "t01234",
      "Provider": "t01234",
      "Label": "string value",
      "StartEpoch": 10101,
      "EndEpoch": 10101,
      "StoragePricePerEpoch": "0",
      "ProviderCollateral": "0",
      "ClientCollateral": "0"
    },
    "State": {
      "SectorStartEpoch": 10101,
      "LastUpdatedEpoch": 10101,
      "SlashEpoch": 10101
    }
  }
}
```

### StateMarketParticipants
StateMarketParticipants returns the Escrow and Locked balances of every participant in the Storage Market


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "t026363": {
    "Escrow": "0",
    "Locked": "0"
  }
}
```

### StateMarketStorageDeal
StateMarketStorageDeal returns information about the indicated deal


Perms: read

Inputs:
```json
[
  5432,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Proposal": {
    "PieceCID": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "PieceSize": 1032,
    "VerifiedDeal": true,
    "Client": "t01234",
    "Provider": "t01234",
    "Label": "string value",
    "StartEpoch": 10101,
    "EndEpoch": 10101,
    "StoragePricePerEpoch": "0",
    "ProviderCollateral": "0",
    "ClientCollateral": "0"
  },
  "State": {
    "SectorStartEpoch": 10101,
    "LastUpdatedEpoch": 10101,
    "SlashEpoch": 10101
  }
}
```

### StateMinerAvailableBalance
StateMinerAvailableBalance returns the portion of a miner's balance that can be withdrawn or spent


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"0"`

### StateMinerDeadlines
StateMinerDeadlines returns all the proving deadlines for the given miner


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Due": [
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ],
    [
      5,
      1
    ]
  ]
}
```

### StateMinerFaults
StateMinerFaults returns a bitfield indicating the faulty sectors of the given miner


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
[
  5,
  1
]
```

### StateMinerInfo
StateMinerInfo returns info about the indicated miner


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Owner": "t01234",
  "Worker": "t01234",
  "NewWorker": "t01234",
  "WorkerChangeEpoch": 10101,
  "PeerId": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf",
  "Multiaddrs": null,
  "SealProofType": 3,
  "SectorSize": 34359738368,
  "WindowPoStPartitionSectors": 42
}
```

### StateMinerInitialPledgeCollateral
StateMinerInitialPledgeCollateral returns the initial pledge collateral for the specified miner's sector


Perms: read

Inputs:
```json
[
  "t01234",
  {
    "SealProof": 3,
    "SectorNumber": 9,
    "SealedCID": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "SealRandEpoch": 10101,
    "DealIDs": null,
    "Expiration": 10101,
    "ReplaceCapacity": true,
    "ReplaceSector": 9
  },
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"0"`

### StateMinerPower
StateMinerPower returns the power of the indicated miner


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "MinerPower": {
    "RawBytePower": "0",
    "QualityAdjPower": "0"
  },
  "TotalPower": {
    "RawBytePower": "0",
    "QualityAdjPower": "0"
  }
}
```

### StateMinerProvingDeadline
StateMinerProvingDeadline calculates the deadline at some epoch for a proving period
and returns the deadline-related calculations.


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "CurrentEpoch": 10101,
  "PeriodStart": 10101,
  "Index": 42,
  "Open": 10101,
  "Close": 10101,
  "Challenge": 10101,
  "FaultCutoff": 10101
}
```

### StateMinerProvingSet
StateMinerProvingSet returns info about those sectors that a given miner is actively proving.


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

### StateMinerRecoveries
StateMinerRecoveries returns a bitfield indicating the recovering sectors of the given miner


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
[
  5,
  1
]
```

### StateMinerSectorCount
StateMinerSectorCount returns the number of sectors in a miner's sector set and proving set


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Sset": 42,
  "Pset": 42
}
```

### StateMinerSectors
StateMinerSectors returns info about the given miner's sectors. If the filter bitfield is nil, all sectors are included.
If the filterOut boolean is set to true, any sectors in the filter are excluded.
If false, only those sectors in the filter are included.


Perms: read

Inputs:
```json
[
  "t01234",
  [
    5,
    1
  ],
  true,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

### StateNetworkName
StateNetworkName returns the name of the network the node is synced to


Perms: read

Inputs: `null`

Response: `"lotus"`

### StatePledgeCollateral
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"0"`

### StateReadState
StateReadState returns the indicated actor's state.


Perms: read

Inputs:
```json
[
  "t01234",
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Balance": "0",
  "State": {}
}
```

### StateReplay
StateReplay returns the result of executing the indicated message, assuming it was executed in the indicated tipset.


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ],
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "Msg": {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  },
  "MsgRct": {
    "ExitCode": 0,
    "Return": "Ynl0ZSBhcnJheQ==",
    "GasUsed": 9
  },
  "ExecutionTrace": {
    "Msg": {
      "Version": 9,
      "To": "t01234",
      "From": "t01234",
      "Nonce": 42,
      "Value": "0",
      "GasPrice": "0",
      "GasLimit": 9,
      "Method": 1,
      "Params": "Ynl0ZSBhcnJheQ=="
    },
    "MsgRct": {
      "ExitCode": 0,
      "Return": "Ynl0ZSBhcnJheQ==",
      "GasUsed": 9
    },
    "Error": "string value",
    "Duration": 60000000000,
    "GasCharges": null,
    "Subcalls": null
  },
  "Error": "string value",
  "Duration": 60000000000
}
```

### StateSearchMsg
StateSearchMsg searches for a message in the chain, and returns its receipt and the tipset where it was executed


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response:
```json
{
  "Receipt": {
    "ExitCode": 0,
    "Return": "Ynl0ZSBhcnJheQ==",
    "GasUsed": 9
  },
  "TipSet": {
    "Cids": null,
    "Blocks": null,
    "Height": 0
  }
}
```

### StateSectorGetInfo
StateSectorGetInfo returns the on-chain info for the specified miner's sector


Perms: read

Inputs:
```json
[
  "t01234",
  9,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "SectorNumber": 9,
  "SealProof": 3,
  "SealedCID": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "DealIDs": null,
  "Activation": 10101,
  "Expiration": 10101,
  "DealWeight": "0",
  "VerifiedDealWeight": "0",
  "InitialPledge": "0"
}
```

### StateSectorPreCommitInfo
StateSectorPreCommitInfo returns the PreCommit info for the specified miner's sector


Perms: read

Inputs:
```json
[
  "t01234",
  9,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response:
```json
{
  "Info": {
    "SealProof": 3,
    "SectorNumber": 9,
    "SealedCID": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "SealRandEpoch": 10101,
    "DealIDs": null,
    "Expiration": 10101,
    "ReplaceCapacity": true,
    "ReplaceSector": 9
  },
  "PreCommitDeposit": "0",
  "PreCommitEpoch": 10101,
  "DealWeight": "0",
  "VerifiedDealWeight": "0"
}
```

### StateWaitMsg
StateWaitMsg looks back in the chain for a message. If not found, it blocks until the
message arrives on chain, and gets to the indicated confidence depth.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  42
]
```

Response:
```json
{
  "Receipt": {
    "ExitCode": 0,
    "Return": "Ynl0ZSBhcnJheQ==",
    "GasUsed": 9
  },
  "TipSet": {
    "Cids": null,
    "Blocks": null,
    "Height": 0
  }
}
```

## Sync
The Sync method group contains methods for interacting with and
observing the lotus sync service.


### SyncCheckBad
SyncCheckBad checks if a block was marked as bad, and if it was, returns
the reason.


Perms: read

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `"string value"`

### SyncIncomingBlocks
SyncIncomingBlocks returns a channel streaming incoming, potentially not
yet synced block headers.


Perms: read

Inputs: `null`

Response:
```json
{
  "Miner": "t01234",
  "Ticket": {
    "VRFProof": "Ynl0ZSBhcnJheQ=="
  },
  "ElectionProof": {
    "WinCount": 9,
    "VRFProof": "Ynl0ZSBhcnJheQ=="
  },
  "BeaconEntries": null,
  "WinPoStProof": null,
  "Parents": null,
  "ParentWeight": "0",
  "Height": 10101,
  "ParentStateRoot": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "ParentMessageReceipts": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "Messages": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  },
  "BLSAggregate": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "Timestamp": 42,
  "BlockSig": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "ForkSignaling": 42
}
```

### SyncMarkBad
SyncMarkBad marks a blocks as bad, meaning that it won't ever by synced.
Use with extreme caution.


Perms: admin

Inputs:
```json
[
  {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
]
```

Response: `{}`

### SyncState
SyncState returns the current status of the lotus sync system.


Perms: read

Inputs: `null`

Response:
```json
{
  "ActiveSyncs": null
}
```

### SyncSubmitBlock
SyncSubmitBlock can be used to submit a newly created block to the.
network through this node


Perms: write

Inputs:
```json
[
  {
    "Header": {
      "Miner": "t01234",
      "Ticket": {
        "VRFProof": "Ynl0ZSBhcnJheQ=="
      },
      "ElectionProof": {
        "WinCount": 9,
        "VRFProof": "Ynl0ZSBhcnJheQ=="
      },
      "BeaconEntries": null,
      "WinPoStProof": null,
      "Parents": null,
      "ParentWeight": "0",
      "Height": 10101,
      "ParentStateRoot": {
        "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
      },
      "ParentMessageReceipts": {
        "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
      },
      "Messages": {
        "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
      },
      "BLSAggregate": {
        "Type": 2,
        "Data": "Ynl0ZSBhcnJheQ=="
      },
      "Timestamp": 42,
      "BlockSig": {
        "Type": 2,
        "Data": "Ynl0ZSBhcnJheQ=="
      },
      "ForkSignaling": 42
    },
    "BlsMessages": null,
    "SecpkMessages": null
  }
]
```

Response: `{}`

## Wallet


### WalletBalance
WalletBalance returns the balance of the given address at the current head of the chain.


Perms: read

Inputs:
```json
[
  "t01234"
]
```

Response: `"0"`

### WalletDefaultAddress
WalletDefaultAddress returns the address marked as default in the wallet.


Perms: write

Inputs: `null`

Response: `"t01234"`

### WalletDelete
WalletDelete deletes an address from the wallet.


Perms: write

Inputs:
```json
[
  "t01234"
]
```

Response: `{}`

### WalletExport
WalletExport returns the private key of an address in the wallet.


Perms: admin

Inputs:
```json
[
  "t01234"
]
```

Response:
```json
{
  "Type": "string value",
  "PrivateKey": "Ynl0ZSBhcnJheQ=="
}
```

### WalletHas
WalletHas indicates whether the given address is in the wallet.


Perms: write

Inputs:
```json
[
  "t01234"
]
```

Response: `true`

### WalletImport
WalletImport receives a KeyInfo, which includes a private key, and imports it into the wallet.


Perms: admin

Inputs:
```json
[
  {
    "Type": "string value",
    "PrivateKey": "Ynl0ZSBhcnJheQ=="
  }
]
```

Response: `"t01234"`

### WalletList
WalletHas indicates whether the given address is in the wallet.


Perms: write

Inputs: `null`

Response: `null`

### WalletNew
WalletNew creates a new address in the wallet with the given sigType.


Perms: write

Inputs:
```json
[
  2
]
```

Response: `"t01234"`

### WalletSetDefault
WalletSetDefault marks the given address as as the default one.


Perms: admin

Inputs:
```json
[
  "t01234"
]
```

Response: `{}`

### WalletSign
WalletSign signs the given bytes using the given address.


Perms: sign

Inputs:
```json
[
  "t01234",
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "Type": 2,
  "Data": "Ynl0ZSBhcnJheQ=="
}
```

### WalletSignMessage
WalletSignMessage signs the given message using the given address.


Perms: sign

Inputs:
```json
[
  "t01234",
  {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  }
]
```

Response:
```json
{
  "Message": {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  },
  "Signature": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
}
```

### WalletVerify
WalletVerify takes an address, a signature, and some bytes, and indicates whether the signature is valid.
The address does not have to be in the wallet.


Perms: read

Inputs:
```json
[
  "t01234",
  "Ynl0ZSBhcnJheQ==",
  {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
]
```

Response: `true`

