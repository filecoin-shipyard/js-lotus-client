<!-- Code generated by github.com/filecoin-shipyard/js-lotus-client/docgen. DO NOT EDIT. -->
# Msig

The Msig methods are used to interact with multisig wallets on the filecoin network.

* [msigAddApprove](msig.md#msigaddapprove)
* [msigAddCancel](msig.md#msigaddcancel)
* [msigAddPropose](msig.md#msigaddpropose)
* [msigApprove](msig.md#msigapprove)
* [msigApproveTxnHash](msig.md#msigapprovetxnhash)
* [msigCancel](msig.md#msigcancel)
* [msigCreate](msig.md#msigcreate)
* [msigGetAvailableBalance](msig.md#msiggetavailablebalance)
* [msigGetVested](msig.md#msiggetvested)
* [msigGetVestingSchedule](msig.md#msiggetvestingschedule)
* [msigPropose](msig.md#msigpropose)
* [msigRemoveSigner](msig.md#msigremovesigner)
* [msigSwapApprove](msig.md#msigswapapprove)
* [msigSwapCancel](msig.md#msigswapcancel)
* [msigSwapPropose](msig.md#msigswappropose)

## msigAddApprove

```ts
msigAddApprove (address: string, address1: string, uint: number, address2: string, address3: string, bool: boolean): Promise<Cid>
```

Approves a previously proposed AddSigner message
It takes the following params: <multisig address>, <sender address of the approve msg>, <proposed message ID>,
<proposer address>, <new signer>, <whether the number of required signers should be increased>

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `uint`: <code>number</code>
* `address2`: <code>string</code>
* `address3`: <code>string</code>
* `bool`: <code>boolean</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 437, character 16](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L437)</small>

## msigAddCancel

```ts
msigAddCancel (address: string, address1: string, uint: number, address2: string, bool: boolean): Promise<Cid>
```

Cancels a previously proposed AddSigner message
It takes the following params: <multisig address>, <sender address of the cancel msg>, <proposed message ID>,
<new signer>, <whether the number of required signers should be increased>

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `uint`: <code>number</code>
* `address2`: <code>string</code>
* `bool`: <code>boolean</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 443, character 15](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L443)</small>

## msigAddPropose

```ts
msigAddPropose (address: string, address1: string, address2: string, bool: boolean): Promise<Cid>
```

Proposes adding a signer in the multisig
It takes the following params: <multisig address>, <sender address of the propose msg>,
<new signer>, <whether the number of required signers should be increased>

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `address2`: <code>string</code>
* `bool`: <code>boolean</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 449, character 16](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L449)</small>

## msigApprove

```ts
msigApprove (address: string, uint: number, address1: string): Promise<Cid>
```

Approves a previously-proposed multisig message by transaction ID
It takes the following params: <multisig address>, <proposed transaction ID> <signer address>

**Parameters:**

* `address`: <code>string</code>
* `uint`: <code>number</code>
* `address1`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 454, character 13](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L454)</small>

## msigApproveTxnHash

```ts
msigApproveTxnHash (address: string, uint: number, address1: string, address2: string, bigInt: string, address3: string, uint1: number, bytes: string): Promise<Cid>
```

Approves a previously-proposed multisig message, specified
using both transaction ID and a hash of the parameters used in the
proposal. This method of approval can be used to ensure you only approve
exactly the transaction you think you are.
It takes the following params: <multisig address>, <proposed message ID>, <proposer address>, <recipient address>, <value to transfer>,
<sender address of the approve msg>, <method to call in the proposed message>, <params to include in the proposed message>

**Parameters:**

* `address`: <code>string</code>
* `uint`: <code>number</code>
* `address1`: <code>string</code>
* `address2`: <code>string</code>
* `bigInt`: <code>string</code>
* `address3`: <code>string</code>
* `uint1`: <code>number</code>
* `bytes`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 463, character 20](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L463)</small>

## msigCancel

```ts
msigCancel (address: string, uint: number, address1: string, bigInt: string, address2: string, uint1: number, bytes: string): Promise<Cid>
```

Cancels a previously-proposed multisig message
It takes the following params: <multisig address>, <proposed transaction ID>, <recipient address>, <value to transfer>,
<sender address of the cancel msg>, <method to call in the proposed message>, <params to include in the proposed message>

**Parameters:**

* `address`: <code>string</code>
* `uint`: <code>number</code>
* `address1`: <code>string</code>
* `bigInt`: <code>string</code>
* `address2`: <code>string</code>
* `uint1`: <code>number</code>
* `bytes`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 469, character 12](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L469)</small>

## msigCreate

```ts
msigCreate (uint: number, address: Array<string>, chainEpoch: number, bigInt: string, address1: string, bigInt1: string): Promise<Cid>
```

Creates a multisig wallet
It takes the following params: <required number of senders>, <approving addresses>, <unlock duration>
<initial balance>, <sender address of the create msg>, <gas price>

**Parameters:**

* `uint`: <code>number</code>
* `address`: <code>Array&lt;string&gt;</code>
* `chainEpoch`: <code>number</code>
* `bigInt`: <code>string</code>
* `address1`: <code>string</code>
* `bigInt1`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 475, character 12](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L475)</small>

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

## msigGetVestingSchedule

```ts
msigGetVestingSchedule (address: string, tipSetKey: Cid[]): Promise<MsigVesting>
```

Returns the vesting details of a given multisig.

**Parameters:**

* `address`: <code>string</code>
* `tipSetKey`: <code><a href="../types.md#cid">Cid</a>[]</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#msigvesting">MsigVesting</a>&gt;</code>

<small>Source: [index.d.ts, line 488, character 24](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L488)</small>

## msigPropose

```ts
msigPropose (address: string, address1: string, bigInt: string, address2: string, uint: number, bytes: string): Promise<Cid>
```

Proposes a multisig message
It takes the following params: <multisig address>, <recipient address>, <value to transfer>,
<sender address of the propose msg>, <method to call in the proposed message>, <params to include in the proposed message>

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `bigInt`: <code>string</code>
* `address2`: <code>string</code>
* `uint`: <code>number</code>
* `bytes`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 494, character 13](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L494)</small>

## msigRemoveSigner

```ts
msigRemoveSigner (address: string, address1: string, address2: string, bool: boolean): Promise<Cid>
```

Proposes the removal of a signer from the multisig.
It accepts the multisig to make the change on, the proposer address to
send the message from, the address to be removed, and a boolean
indicating whether or not the signing threshold should be lowered by one
along with the address removal.

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `address2`: <code>string</code>
* `bool`: <code>boolean</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 502, character 18](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L502)</small>

## msigSwapApprove

```ts
msigSwapApprove (address: string, address1: string, uint: number, address2: string, address3: string, address4: string): Promise<Cid>
```

Approves a previously proposed SwapSigner
It takes the following params: <multisig address>, <sender address of the approve msg>, <proposed message ID>,
<proposer address>, <old signer>, <new signer>

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `uint`: <code>number</code>
* `address2`: <code>string</code>
* `address3`: <code>string</code>
* `address4`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 508, character 17](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L508)</small>

## msigSwapCancel

```ts
msigSwapCancel (address: string, address1: string, uint: number, address2: string, address3: string): Promise<Cid>
```

Cancels a previously proposed SwapSigner message
It takes the following params: <multisig address>, <sender address of the cancel msg>, <proposed message ID>,
<old signer>, <new signer>

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `uint`: <code>number</code>
* `address2`: <code>string</code>
* `address3`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 514, character 16](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L514)</small>

## msigSwapPropose

```ts
msigSwapPropose (address: string, address1: string, address2: string, address3: string): Promise<Cid>
```

Proposes swapping 2 signers in the multisig
It takes the following params: <multisig address>, <sender address of the propose msg>,
<old signer>, <new signer>

**Parameters:**

* `address`: <code>string</code>
* `address1`: <code>string</code>
* `address2`: <code>string</code>
* `address3`: <code>string</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#cid">Cid</a>&gt;</code>

<small>Source: [index.d.ts, line 520, character 17](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L520)</small>
