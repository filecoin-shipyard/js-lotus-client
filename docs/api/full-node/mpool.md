# Message Pool

The Mpool methods are for interacting with the message pool. The message pool
manages all incoming and outgoing 'messages' going over the network.


## MpoolEstimateGasPrice
MpoolEstimateGasPrice estimates what gas price should be used for a
message to have high likelihood of inclusion in `nblocksincl` epochs.


Perms: read

Inputs:
```json
[
  42,
  "t01234",
  9,
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `"0"`

## MpoolGetNonce
MpoolGetNonce gets next nonce for the specified sender.
Note that this method may not be atomic. Use MpoolPushMessage instead.


Perms: read

Inputs:
```json
[
  "t01234"
]
```

Response: `42`

Examples:

* [curl] [Postman](https://documenter.getpostman.com/view/4872192/SWLh5mUd?version=latest#0656cf16-a0e0-4fbc-bf62-c6bc3011a10f)

## MpoolPending
MpoolPending returns pending mempool messages.


Perms: read

Inputs:
```json
[
  [
    {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    {
      "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
    }
  ]
]
```

Response: `null`

## MpoolPush
MpoolPush pushes a signed message to mempool.


Perms: write

Inputs:
```json
[
  {
    "Message": {
      "Version": 9,
      "To": "t01234",
      "From": "t01234",
      "Nonce": 42,
      "Value": "0",
      "GasPrice": "0",
      "GasLimit": 9,
      "Method": 1,
      "Params": "Ynl0ZSBhcnJheQ=="
    },
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  }
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## MpoolPushMessage
MpoolPushMessage atomically assigns a nonce, signs, and pushes a message
to mempool.


Perms: sign

Inputs:
```json
[
  {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  }
]
```

Response:
```json
{
  "Message": {
    "Version": 9,
    "To": "t01234",
    "From": "t01234",
    "Nonce": 42,
    "Value": "0",
    "GasPrice": "0",
    "GasLimit": 9,
    "Method": 1,
    "Params": "Ynl0ZSBhcnJheQ=="
  },
  "Signature": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
}
```

## MpoolSub
There are not yet any comments for this method.

Perms: read

Inputs: `null`

Response:
```json
{
  "Type": 0,
  "Message": {
    "Message": {
      "Version": 9,
      "To": "t01234",
      "From": "t01234",
      "Nonce": 42,
      "Value": "0",
      "GasPrice": "0",
      "GasLimit": 9,
      "Method": 1,
      "Params": "Ynl0ZSBhcnJheQ=="
    },
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  }
}
```
