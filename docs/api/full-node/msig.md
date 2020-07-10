# Multisig

The Msig methods are used to interact with multisig wallets on the
filecoin network

## MsigApprove
MsigApprove approves a previously-proposed multisig message
It takes the following params: <multisig address>, <proposed message ID>, <proposer address>, <recipient address>, <value to transfer>,
<sender address of the approve msg>, <method to call in the proposed message>, <params to include in the proposed message>


Perms: sign

Inputs:
```json
[
  "t01234",
  42,
  "t01234",
  "t01234",
  "0",
  "t01234",
  42,
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## MsigCancel
MsigCancel cancels a previously-proposed multisig message
It takes the following params: <multisig address>, <proposed message ID>, <proposer address>, <recipient address>, <value to transfer>,
<sender address of the cancel msg>, <method to call in the proposed message>, <params to include in the proposed message>
TODO: You can't cancel someone else's proposed message, so "src" and "proposer" here are redundant


Perms: sign

Inputs:
```json
[
  "t01234",
  42,
  "t01234",
  "t01234",
  "0",
  "t01234",
  42,
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## MsigCreate
MsigGetAvailableBalance creates a multisig wallet
It takes the following params: <required number of senders>, <approving addresses>, <initial balance>,
<sender address of the create msg>, <gas price>


Perms: sign

Inputs:
```json
[
  42,
  null,
  "0",
  "t01234",
  "0"
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

## MsigGetAvailableBalance
MsigGetAvailableBalance returns the portion of a multisig's balance that can be withdrawn or spent


Perms: read

Inputs:
```json
[
  "t01234",
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

## MsigPropose
MsigPropose proposes a multisig message
It takes the following params: <multisig address>, <recipient address>, <value to transfer>,
<sender address of the propose msg>, <method to call in the proposed message>, <params to include in the proposed message>


Perms: sign

Inputs:
```json
[
  "t01234",
  "t01234",
  "0",
  "t01234",
  42,
  "Ynl0ZSBhcnJheQ=="
]
```

Response:
```json
{
  "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
}
```

