# Wallet

## WalletBalance
WalletBalance returns the balance of the given address at the current head of the chain.


Perms: read

Inputs:
```json
[
  "t01234"
]
```

Response: `"0"`

Examples:

* [JS] [Filecoin Network Inspector](https://github.com/filecoin-shipyard/filecoin-network-inspector/blob/a94747f4967db2cde8bc563aa96675926d9c3193/src/redux/actions/lotus.js#L48) ([Tutorial on docs.filecoin.io](https://docs.filecoin.io/build/examples/network-inspector/overview/))

## WalletDefaultAddress
WalletDefaultAddress returns the address marked as default in the wallet.


Perms: write

Inputs: `null`

Response: `"t01234"`

## WalletDelete
WalletDelete deletes an address from the wallet.


Perms: write

Inputs:
```json
[
  "t01234"
]
```

Response: `{}`

## WalletExport
WalletExport returns the private key of an address in the wallet.


Perms: admin

Inputs:
```json
[
  "t01234"
]
```

Response:
```json
{
  "Type": "string value",
  "PrivateKey": "Ynl0ZSBhcnJheQ=="
}
```

## WalletHas
WalletHas indicates whether the given address is in the wallet.


Perms: write

Inputs:
```json
[
  "t01234"
]
```

Response: `true`

## WalletImport
WalletImport receives a KeyInfo, which includes a private key, and imports it into the wallet.


Perms: admin

Inputs:
```json
[
  {
    "Type": "string value",
    "PrivateKey": "Ynl0ZSBhcnJheQ=="
  }
]
```

Response: `"t01234"`

## WalletList
WalletHas indicates whether the given address is in the wallet.


Perms: write

Inputs: `null`

Response: `null`

## WalletNew
WalletNew creates a new address in the wallet with the given sigType.


Perms: write

Inputs:
```json
[
  2
]
```

Response: `"t01234"`

## WalletSetDefault
WalletSetDefault marks the given address as as the default one.


Perms: admin

Inputs:
```json
[
  "t01234"
]
```

Response: `{}`

## WalletSign
WalletSign signs the given bytes using the given address.


Perms: sign

Inputs:
```json
[
  "t01234",
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "Type": 2,
  "Data": "Ynl0ZSBhcnJheQ=="
}
```

## WalletSignMessage
WalletSignMessage signs the given message using the given address.


Perms: sign

Inputs:
```json
[
  "t01234",
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

## WalletVerify
WalletVerify takes an address, a signature, and some bytes, and indicates whether the signature is valid.
The address does not have to be in the wallet.


Perms: read

Inputs:
```json
[
  "t01234",
  "Ynl0ZSBhcnJheQ==",
  {
    "Type": 2,
    "Data": "Ynl0ZSBhcnJheQ=="
  }
]
```

Response: `true`
