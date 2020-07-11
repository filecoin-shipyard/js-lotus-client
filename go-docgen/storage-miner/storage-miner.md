## 


### Shutdown


Inputs: `null`

Response: `{}`

### Version


Inputs: `null`

Response: `{"Version":"string value","APIVersion":768,"BlockDelay":42}`

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


### DealsImportData
There are not yet any comments for this method.

Inputs: `[{"/":"bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"},"string value"]`

Response: `{}`

### DealsList
There are not yet any comments for this method.

Inputs: `null`

Response: `null`

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

### MarketSetPrice
There are not yet any comments for this method.

Inputs: `["0"]`

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

### PledgeSectorJim
There are not yet any comments for this method.

Inputs: `null`

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


Inputs: `[9]`

Response: `{"SectorID":9,"State":"sectorState","CommD":null,"CommR":null,"Proof":"Ynl0ZSBhcnJheQ==","Deals":null,"Ticket":{"Value":null,"Epoch":10101},"Seed":{"Value":null,"Epoch":10101},"Retries":42,"LastErr":"string value","Log":null}`

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


Inputs: `[{"ID":"uuid","URLs":null,"Weight":42,"CanSeal":true,"CanStore":true,"LastHeartbeat":"0001-01-01T00:00:00Z","HeartbeatErr":null},{"Capacity":42,"Available":42,"Used":42}]`

Response: `{}`

### StorageBestAlloc


Inputs: `[0,2,true]`

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

Response: `{"ID":"uuid","URLs":null,"Weight":42,"CanSeal":true,"CanStore":true,"LastHeartbeat":"0001-01-01T00:00:00Z","HeartbeatErr":null}`

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


Inputs: `["uuid",{"Stat":{"Capacity":42,"Available":42,"Used":42},"Err":null}]`

Response: `{}`

### StorageStat
There are not yet any comments for this method.

Inputs: `["uuid"]`

Response: `{"Capacity":42,"Available":42,"Used":42}`

## Worker


### WorkerConnect
WorkerConnect tells the node to connect to workers RPC


Inputs: `["string value"]`

Response: `{}`

### WorkerStats
There are not yet any comments for this method.

Inputs: `null`

Response: `{"0":{"Info":{"Hostname":"hostname","Resources":{"MemPhysical":1000,"MemSwap":1000,"MemReserved":1000,"CPUs":1,"GPUs":["gpu1"]}},"MemUsedMin":100,"MemUsedMax":5000,"GpuUsed":true,"CpuUse":1000}}`

