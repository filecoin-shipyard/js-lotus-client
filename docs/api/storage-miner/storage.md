# Storage

* StorageList

  `StorageList(ctx context.Context) (map[stores.ID][]stores.Decl, error)`

* StorageLocal

  `StorageLocal(ctx context.Context) (map[stores.ID]string, error)`

* StorageStat

  `StorageStat(ctx context.Context, id stores.ID) (stores.FsStat, error)`

* StorageAddLocal

  `StorageAddLocal(ctx context.Context, path string) error`

## sector-storage

See: [filecoin-project/sector-storage](https://github.com/filecoin-project/sector-storage/blob/master/stores/index.go)

* StorageAttach

  `StorageAttach(context.Context, StorageInfo, FsStat) error`

* StorageInfo

  `StorageInfo(context.Context, ID) (StorageInfo, error)`

* StorageUpdateStats

  `// TODO: StorageUpdateStats(FsStat)`

* StorageDeclareSector

  `StorageDeclareSector(ctx context.Context, storageId ID, s abi.SectorID, ft SectorFileType) error`

* StorageDropSector

  `StorageDropSector(ctx context.Context, storageId ID, s abi.SectorID, ft SectorFileType) error`

* StorageFindSector

  `StorageFindSector(ctx context.Context, sector abi.SectorID, ft SectorFileType, allowFetch bool) ([]StorageInfo, error)`

* StorageBestAlloc

  `StorageBestAlloc(ctx context.Context, allocate SectorFileType, sealing bool) ([]StorageInfo, error)`
