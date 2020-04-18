# Market

* MarketImportDealData

  `MarketImportDealData(ctx context.Context, propcid cid.Cid, path string) error`

* MarkerListDeals

  `MarketListDeals(ctx context.Context) ([]storagemarket.StorageDeal, error)`

* MarketListIncompleteDeals

  `MarketListIncompleteDeals(ctx context.Context) ([]storagemarket.MinerDeal, error)`

* MarketSetPrice

  `MarketSetPrice(context.Context, types.BigInt) error`

