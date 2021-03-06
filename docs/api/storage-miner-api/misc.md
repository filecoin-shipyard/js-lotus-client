<!-- Code generated by github.com/filecoin-shipyard/js-lotus-client/docgen. DO NOT EDIT. -->
# Misc



* [closing](misc.md#closing)
* [createBackup](misc.md#createbackup)
* [id](misc.md#id)
* [shutdown](misc.md#shutdown)
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

## createBackup

```ts
createBackup (str: string): Promise<void>
```

Creates node backup onder the specified file name. The
method requires that the lotus daemon is running with the
LOTUS_BACKUP_BASE_PATH environment variable set to some path, and that
the path specified when calling CreateBackup is within the base path

**Parameters:**

* `str`: <code>string</code>

**Returns:**

<code>Promise&lt;void&gt;</code>

<small>Source: [index.d.ts, line 352, character 14](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L352)</small>

## id

```ts
id (): Promise<string>
```

**Returns:**

<code>Promise&lt;string&gt;</code>

<small>Source: [index.d.ts, line 131, character 4](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L131)</small>

## shutdown

```ts
shutdown (): Promise<void>
```

**Returns:**

<code>Promise&lt;void&gt;</code>

<small>Source: [index.d.ts, line 146, character 10](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L146)</small>

## version

```ts
version (): Promise<Version>
```

tODO: Info() (name, ...) ?

**Returns:**

<code>Promise&lt;<a href="../types.md#version">Version</a>&gt;</code>

<small>Source: [index.d.ts, line 150, character 9](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L150)</small>
