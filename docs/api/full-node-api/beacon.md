<!-- Code generated by github.com/filecoin-shipyard/js-lotus-client/docgen. DO NOT EDIT. -->
# Beacon

The Beacon method group contains methods for interacting with the random beacon (DRAND).

* [beaconGetEntry](beacon.md#beacongetentry)

## beaconGetEntry

```ts
beaconGetEntry (chainEpoch: number): Promise<BeaconEntry>
```

Returns the beacon entry for the given filecoin epoch. If
the entry has not yet been produced, the call will block until the entry
becomes available

**Parameters:**

* `chainEpoch`: <code>number</code>

**Returns:**

<code>Promise&lt;<a href="../types.md#beaconentry">BeaconEntry</a>&gt;</code>

<small>Source: [index.d.ts, line 156, character 16](https://github.com/filecoin-shipyard/js-lotus-client-rpc/blob/master/index.d.ts#L156)</small>
