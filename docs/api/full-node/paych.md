# Payment Channels

The Paych methods are for interacting with and managing payment channels


## PaychAllocateLane
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234"
]
```

Response: `42`

## PaychClose
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234"
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## PaychGet
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  "t01234",
  "0"
]
```

Response:
```json
{
  "Channel": "t01234",
  "ChannelMessage": {
    "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
  }
}
```

## PaychList
There are not yet any comments for this method.

Perms: read

Inputs: `null`

Response: `null`

## PaychNewPayment
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  "t01234",
  null
]
```

Response:
```json
{
  "Channel": "t01234",
  "ChannelMessage": null,
  "Vouchers": null
}
```

## PaychStatus
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234"
]
```

Response:
```json
{
  "ControlAddr": "t01234",
  "Direction": 1
}
```

## PaychVoucherAdd
There are not yet any comments for this method.

Perms: write

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  },
  "Ynl0ZSBhcnJheQ==",
  "0"
]
```

Response: `"0"`

## PaychVoucherCheckSpendable
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  },
  "Ynl0ZSBhcnJheQ==",
  "Ynl0ZSBhcnJheQ=="
]
```

Response: `true`

## PaychVoucherCheckValid
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
    "Signature": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    }
  }
]
```

Response: `{}`

## PaychVoucherCreate
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  "0",
  42
]
```

Response:
```json
{
  "TimeLockMin": 10101,
  "TimeLockMax": 10101,
  "SecretPreimage": "Ynl0ZSBhcnJheQ==",
  "Extra": {
    "Actor": "t01234",
    "Method": 1,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "Lane": 42,
  "Nonce": 42,
  "Amount": "0",
  "MinSettleHeight": 10101,
  "Merges": null,
  "Signature": {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
}
```

## PaychVoucherList
There are not yet any comments for this method.

Perms: write

Inputs:
```json
[
  "t01234"
]
```

Response: `null`

## PaychVoucherSubmit
There are not yet any comments for this method.

Perms: sign

Inputs:
```json
[
  "t01234",
  {
    "TimeLockMin": 10101,
    "TimeLockMax": 10101,
    "SecretPreimage": "Ynl0ZSBhcnJheQ==",
    "Extra": {
      "Actor": "t01234",
      "Method": 1,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Lane": 42,
    "Nonce": 42,
    "Amount": "0",
    "MinSettleHeight": 10101,
    "Merges": null,
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

