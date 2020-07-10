# Network

## NetAddrsListen


Perms: read

Inputs: `null`

Response:
```json
{
  "Addrs": null,
  "ID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
}
```

## NetConnect


Perms: write

Inputs:
```json
[
  {
    "Addrs": null,
    "ID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
  }
]
```

Response: `{}`

## NetConnectedness


Perms: read

Inputs:
```json
[
  "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
]
```

Response: `1`

## NetDisconnect


Perms: write

Inputs:
```json
[
  "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
]
```

Response: `{}`

## NetFindPeer


Perms: read

Inputs:
```json
[
  "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
]
```

Response:
```json
{
  "Addrs": null,
  "ID": "12D3KooWGzxzKZYveHXtpG6AsrUJBcWxHBFS2HsEoGTxrMLvKXtf"
}
```

## NetPeers


Perms: read

Inputs: `null`

Response: `null`

## NetPubsubScores


Perms: read

Inputs: `null`

Response: `null`

