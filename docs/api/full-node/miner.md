# Miner

## MinerCreateBlock
There are not yet any comments for this method.

Perms: write

Inputs:
```json
[
  {
    "Miner": "t01234",
    "Parents": [
      {
        "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
      },
      {
        "/": "bafy2bzacebp3shtrn43k7g3unredz7fxn4gj533d3o43tqn2p2ipxxhrvchve"
      }
    ],
    "Ticket": {
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "Eproof": {
      "WinCount": 9,
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "BeaconValues": null,
    "Messages": null,
    "Epoch": 10101,
    "Timestamp": 42,
    "WinningPoStProof": null
  }
]
```

Response:
```json
{
  "Header": {
    "Miner": "t01234",
    "Ticket": {
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "ElectionProof": {
      "WinCount": 9,
      "VRFProof": "Ynl0ZSBhcnJheQ=="
    },
    "BeaconEntries": null,
    "WinPoStProof": null,
    "Parents": null,
    "ParentWeight": "0",
    "Height": 10101,
    "ParentStateRoot": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "ParentMessageReceipts": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "Messages": {
      "/": "bafy2bzacea3wsdh6y3a36tb3skempjoxqpuyompjbmfeyf34fi3uy6uue42v4"
    },
    "BLSAggregate": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "Timestamp": 42,
    "BlockSig": {
      "Type": 2,
      "Data": "Ynl0ZSBhcnJheQ=="
    },
    "ForkSignaling": 42
  },
  "BlsMessages": null,
  "SecpkMessages": null
}
```

## MinerGetBaseInfo
There are not yet any comments for this method.

Perms: read

Inputs:
```json
[
  "t01234",
  10101,
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

Response:
```json
{
  "MinerPower": "0",
  "NetworkPower": "0",
  "Sectors": null,
  "WorkerKey": "t01234",
  "SectorSize": 34359738368,
  "PrevBeaconEntry": {
    "Round": 42,
    "Data": "Ynl0ZSBhcnJheQ=="
  },
  "BeaconEntries": null
}
```

