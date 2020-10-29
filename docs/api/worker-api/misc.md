<!-- Code generated by github.com/filecoin-shipyard/js-lotus-client/docgen. DO NOT EDIT. -->
# Misc



* [closing](misc.md#closing)
* [info](misc.md#info)
* [taskTypes](misc.md#tasktypes)
* [version](misc.md#version)

## closing

```ts
closing (handler: (data: {}) => void): [() => void, Promise<void>]
```

**Parameters:**

* `handler`: <code>(data: {}) =&gt; void</code>

**Returns:**

<code>[() =&gt; void, Promise&lt;void&gt;]</code>

<small>Source: [index.d.ts, line 130, character 9](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L130)</small>

## info

```ts
info (): Promise<WorkerInfo>
```

**Returns:**

<code>Promise&lt;<a href="../types.md#workerinfo">WorkerInfo</a>&gt;</code>

<small>Source: [index.d.ts, line 923, character 6](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L923)</small>

## taskTypes

```ts
taskTypes (): Promise<{ [k: string]: {} }>
```

taskType -> Weight

**Returns:**

<code>Promise&lt;{ [k: string]: {} }&gt;</code>

<small>Source: [index.d.ts, line 936, character 11](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L936)</small>

## version

```ts
version (): Promise<Version>
```

tODO: Info() (name, ...) ?

**Returns:**

<code>Promise&lt;<a href="../types.md#version">Version</a>&gt;</code>

<small>Source: [index.d.ts, line 150, character 9](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L150)</small>