## 


### Closing


Inputs: `null`

Response: `{}`

### Shutdown


Inputs: `null`

Response: `{}`

### Version


Inputs: `null`

Response: `{"Version":"string value","APIVersion":2049,"BlockDelay":42}`

## Actor


### ActorAddress
There are not yet any comments for this method.

Inputs: `null`

Response: `"t01234"`

### ActorSectorSize
There are not yet any comments for this method.

Inputs: `["t01234"]`

Response: `34359738368`

## Auth


### AuthNew


Inputs: `[null]`

Response: `"Ynl0ZSBhcnJheQ=="`

### AuthVerify


Inputs: `["string value"]`

Response: `null`

## Deals


### DealsConsiderOfflineRetrievalDeals
There are not yet any comments for this method.

Inputs: `null`

Response: `true`

### DealsConsiderOfflineStorageDeals
There are not yet any comments for this method.

Inputs: `null`

Response: `true`

### DealsConsiderOnlineRetrievalDeals
There are not yet any comments for this method.

Inputs: `null`

Response: `true`

### DealsConsiderOnlineStorageDeals
There are not yet any comments for this method.

Inputs: `null`

Response: `true`

### DealsImportData
There are not yet any comments for this method.

Inputs: `[{"/":"bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"},"string value"]`

Response: `{}`

### DealsList
There are not yet any comments for this method.

Inputs: `null`

Response: `null`

### DealsPieceCidBlocklist
There are not yet any comments for this method.

Inputs: `null`

Response: `null`

### DealsSetConsiderOfflineRetrievalDeals
There are not yet any comments for this method.

Inputs: `[true]`

Response: `{}`

### DealsSetConsiderOfflineStorageDeals
There are not yet any comments for this method.

Inputs: `[true]`

Response: `{}`

### DealsSetConsiderOnlineRetrievalDeals
There are not yet any comments for this method.

Inputs: `[true]`

Response: `{}`

### DealsSetConsiderOnlineStorageDeals
There are not yet any comments for this method.

Inputs: `[true]`

Response: `{}`

### DealsSetPieceCidBlocklist
There are not yet any comments for this method.

Inputs: `[null]`

Response: `{}`

## I


### ID


Inputs: `null`

Response: `"12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"`

## Log


### LogList


Inputs: `null`

Response: `null`

### LogSetLevel


Inputs: `["string value","string value"]`

Response: `{}`

## Market


### MarketGetAsk
There are not yet any comments for this method.

Inputs: `null`

Response: `{"Ask":{"Price":"0","MinPieceSize":1032,"MaxPieceSize":1032,"Miner":"t01234","Timestamp":10101,"Expiry":10101,"SeqNo":42},"Signature":{"Type":2,"Data":"Ynl0ZSBhcnJheQ=="}}`

### MarketImportDealData
There are not yet any comments for this method.

Inputs: `[{"/":"bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"},"string value"]`

Response: `{}`

### MarketListDeals
There are not yet any comments for this method.

Inputs: `null`

Response: `null`

### MarketListIncompleteDeals
There are not yet any comments for this method.

Inputs: `null`

Response: `null`

### MarketSetAsk
There are not yet any comments for this method.

Inputs: `["0",10101,1032,1032]`

Response: `{}`

## Mining


### MiningBase
There are not yet any comments for this method.

Inputs: `null`

Response: `{"Cids":null,"Blocks":null,"Height":0}`

## Net


### NetAddrsListen


Inputs: `null`

Response: `{"Addrs":null,"ID":"12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"}`

### NetConnect


Inputs: `[{"Addrs":null,"ID":"12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"}]`

Response: `{}`

### NetConnectedness


Inputs: `["12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"]`

Response: `1`

### NetDisconnect


Inputs: `["12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"]`

Response: `{}`

### NetFindPeer


Inputs: `["12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"]`

Response: `{"Addrs":null,"ID":"12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"}`

### NetPeers


Inputs: `null`

Response: `null`

### NetPubsubScores


Inputs: `null`

Response: `null`

## Pledge


### PledgeSector
Temp api for testing


Inputs: `null`

Response: `{}`

## Sealing


### SealingSchedDiag
SealingSchedDiag dumps internal sealing scheduler state


Inputs: `null`

Response: `{}`

## Sector


### SectorGetExpectedSealDuration
SectorGetExpectedSealDuration gets the expected time for a sector to seal


Inputs: `null`

Response: `60000000000`

### SectorGetSealDelay
SectorGetSealDelay gets the time that a newly-created sector
waits for more deals before it starts sealing


Inputs: `null`

Response: `60000000000`

### SectorMarkForUpgrade
There are not yet any comments for this method.

Inputs: `[9]`

Response: `{}`

### SectorRemove
There are not yet any comments for this method.

Inputs: `[9]`

Response: `{}`

### SectorSetExpectedSealDuration
SectorSetExpectedSealDuration sets the expected time for a sector to seal


Inputs: `[60000000000]`

Response: `{}`

### SectorSetSealDelay
SectorSetSealDelay sets the time that a newly-created sector
waits for more deals before it starts sealing


Inputs: `[60000000000]`

Response: `{}`

### SectorStartSealing
SectorStartSealing can be called on sectors in Empty or WaitDeals states
to trigger sealing early


Inputs: `[9]`

Response: `{}`

## Sectors


### SectorsList
List all staged sectors


Inputs: `null`

Response: `null`

### SectorsRefs
There are not yet any comments for this method.

Inputs: `null`

Response: `{"key1":[{"SectorID":0,"Offset":0,"Size":100}]}`

### SectorsStatus
Get the status of a given sector by ID


Inputs: `[9,true]`

Response: `{"SectorID":9,"State":"sectorState","CommD":null,"CommR":null,"Proof":"Ynl0ZSBhcnJheQ==","Deals":null,"Ticket":{"Value":null,"Epoch":10101},"Seed":{"Value":null,"Epoch":10101},"Retries":42,"LastErr":"string value","Log":null,"SealProof":0,"Activation":10101,"Expiration":10101,"DealWeight":"0","VerifiedDealWeight":"0","InitialPledge":"0","OnTime":10101,"Early":10101}`

### SectorsUpdate
There are not yet any comments for this method.

Inputs: `[9,"sectorState"]`

Response: `{}`

## Storage


### StorageAddLocal
There are not yet any comments for this method.

Inputs: `["string value"]`

Response: `{}`

### StorageAttach


Inputs: `[{"ID":"uuid","URLs":null,"Weight":42,"CanSeal":true,"CanStore":true},{"Capacity":9,"Available":9,"Reserved":9}]`

Response: `{}`

### StorageBestAlloc


Inputs: `[0,0,"sealing"]`

Response: `null`

### StorageDeclareSector


Inputs: `["uuid",{"Miner":1234,"Number":9},0,true]`

Response: `{}`

### StorageDropSector


Inputs: `["uuid",{"Miner":1234,"Number":9},0]`

Response: `{}`

### StorageFindSector


Inputs: `[{"Miner":1234,"Number":9},0,true]`

Response: `null`

### StorageInfo


Inputs: `["uuid"]`

Response: `{"ID":"uuid","URLs":null,"Weight":42,"CanSeal":true,"CanStore":true}`

### StorageList
There are not yet any comments for this method.

Inputs: `null`

Response: `{"uuid1":[{"Miner":0,"Number":0,"SectorFileType":0}]}`

### StorageLocal
There are not yet any comments for this method.

Inputs: `null`

Response: `{"uuid1":"string"}`

### StorageLock


Inputs: `[{"Miner":1234,"Number":9},0,0]`

Response: `{}`

### StorageReportHealth


Inputs: `["uuid",{"Stat":{"Capacity":9,"Available":9,"Reserved":9},"Err":null}]`

Response: `{}`

### StorageStat
There are not yet any comments for this method.

Inputs: `["uuid"]`

Response: `{"Capacity":9,"Available":9,"Reserved":9}`

### StorageTryLock


Inputs: `[{"Miner":1234,"Number":9},0,0]`

Response: `true`

## Worker


### WorkerConnect
WorkerConnect tells the node to connect to workers RPC


Inputs: `["string value"]`

Response: `{}`

### WorkerJobs
There are not yet any comments for this method.

Inputs: `null`

Response: `{"0":[{"ID":123,"Sector":{"Miner":0,"Number":0},"Task":"seal/v0/precommit/1","Start":"2020-07-28T12:06:45.278659-07:00"}]}`

### WorkerStats
There are not yet any comments for this method.

Inputs: `null`

Response: `{"0":{"Info":{"Hostname":"hostname","Resources":{"MemPhysical":1000,"MemSwap":1000,"MemReserved":1000,"CPUs":1,"GPUs":["gpu1"]}},"MemUsedMin":100,"MemUsedMax":5000,"GpuUsed":true,"CpuUse":1000}}`

