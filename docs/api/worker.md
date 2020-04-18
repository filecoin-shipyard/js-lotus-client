# Worker API

* Version

  `Version(context.Context) (build.Version, error)`

* TaskTypes

  `TaskTypes(context.Context) (map[sealtasks.TaskType]struct{}, error)`

* Paths

  `Paths(context.Context) ([]stores.StoragePath, error)`

* Info

  `Info(context.Context) (sectorstorage.WorkerInfo, error)`
