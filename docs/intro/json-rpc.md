## Lotus JSON-RPC API

[JSON-RPC](https://en.wikipedia.org/wiki/JSON-RPC) is a standardized way to encode remote procedure calls in JSON. Projects such as [Bitcoin](https://en.bitcoin.it/wiki/API_reference_(JSON-RPC)) and [Ethereum](https://github.com/ethereum/wiki/wiki/JSON-RPC) have adopted it for use in their APIs.

Lotus uses JSON-RPC calls transported via HTTP or Websockets to communicate between different daemons and command line tools.

For example, when you run the Lotus node with `lotus daemon`, it will listen for connections on TCP port 1234 (by default).

Applications may connect to this port and issue JSON-RPC calls. For example, using [CURL](https://curl.haxx.se/), if we want to call the [Filecoin.Version](https://github.com/filecoin-project/lotus/blob/1120298b0520f0d5965b89abd71437f6d65496b7/api/apistruct/struct.go#L35) method, we might do this:

```
curl -X POST \
  -H "Content-Type: application/json" \
  --data '{ 
      "jsonrpc": "2.0", 
      "method": "Filecoin.Version", 
      "params": [], 
      "id": 1 
    }' \
  http://127.0.0.1:1234/rpc/v0 
```

The Lotus daemon will return a response that looks something like:

```
{"jsonrpc":"2.0","result":{"Version":"0.3.0+gite4b5f1df.dirty","APIVersion":512,"BlockDelay":6},"id":1}
```

Most of the time, when you run commands using the `lotus` command line client, for example, `lotus version`, it is actually connecting to the daemon using a WebSocket, and it is executing methods using JSON-RPC.

Different daemons that are part of Lotus support different sets of methods. When you execute `lotus daemon`, it will listen on port 1234 (by default), exposes JSON-RPC methods for wallets, making deals, checking chain sync status, etc. When you run `lotus-storage-miner run`, it will listen on port 2345 (by default), and it has a number of methods for doing things such as querying the status of sectors.

More details about the JSON-RPC API, including links to the lists of methods available, are at: [https://lotu.sh/en+api](https://lotu.sh/en+api)

