<!-- Code generated by github.com/filecoin-shipyard/js-lotus-client/docgen. DO NOT EDIT. -->
# Msig

The Msig methods are used to interact with multisig wallets on the filecoin network.

* [msigGetAvailableBalance](msig.md#msiggetavailablebalance)
* [msigGetVested](msig.md#msiggetvested)

## msigGetAvailableBalance

```ts
msigGetAvailableBalance (address: string, tipSetKey: Cid[]): Promise<string>
```

Returns the portion of a multisig's balance that can be withdrawn or spent

**Parameters:**

* `address`: <code>string</code>
* `tipSetKey`: <code><a href="../types.md#cid">Cid</a>[]</code>

**Returns:**

<code>Promise&lt;string&gt;</code>

<small>Source: [index.d.ts, line 479, character 25](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L479)</small>

## msigGetVested

```ts
msigGetVested (address: string, tipSetKey: Cid[], tipSetKey1: Cid[]): Promise<string>
```

Returns the amount of FIL that vested in a multisig in a certain period.
It takes the following params: <multisig address>, <start epoch>, <end epoch>

**Parameters:**

* `address`: <code>string</code>
* `tipSetKey`: <code><a href="../types.md#cid">Cid</a>[]</code>
* `tipSetKey1`: <code><a href="../types.md#cid">Cid</a>[]</code>

**Returns:**

<code>Promise&lt;string&gt;</code>

<small>Source: [index.d.ts, line 484, character 15](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L484)</small>