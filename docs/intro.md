# Introduction

The [Lotus JS Client](https://github.com/filecoin-shipyard/js-lotus-client) is a collection of small JavaScript libraries that you can use to communicate with the [Lotus implementation](https://github.com/filecoin-project/lotus) of [Filecoin](https://filecoin.io/) via it's JSON-RPC API.

The Lotus daemons exposes JSON-RPC methods via HTTP and WebSockets that can be called from any language. Applications and websites written in JavaScript can make calls to the endpoints directly using the raw JSON-RPC API, or they can use
these libraries to make accessing the APIs more convenient and ergonomic from common JavaScript environments.

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

## JSON-RPC and JavaScript

Calling the JSON-RPC using JavaScript from a web application is very simple, as HTTP and Websockets are part of almost every web browser, and JSON parsing is built into JavaScript. For example, the following code uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and [async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) features found in any modern browser to query the `Filecoin.Version` JSON-RPC method via HTTP:

```js
async getVersion () {
  const response = await fetch('http://127.0.0.1:1234/rpc/v0', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: `Filecoin.Version`,
      params: [],
      id: 1
    }
  })
  const { result, error } = await response.json()
}
```

**Caution:** There is a big problem with the above code. Due to the web's [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), the above code will not usually work unmodified in a web page as the API endpoint is likely on a different "origin" than the location the web page is hosted at. Read more about how to set up an endpoint in the [endpoint deployment](endpoint-deployment.md) chapter.

# Lotus JS Client

To make developing applications as easy as possible, the [Lotus JS Client](https://github.com/filecoin-shipyard/js-lotus-client) libraries are available. These libraries contain re-useable code to make the chore of interfacing with your Lotus Filecoin nodes and miners much more enjoyable.

**Caution:** These libraries are very new and currently under heavy development, as is Lotus and Filecoin. Expect many breaking changes. As the ecosystem matures, these libraries will evolve to become more stable and production ready.

These libraries are intended to be used in many different environments, including web pages, mobile apps, desktop apps, and server-side applications. Additionally, they will target different types of Lotus daemons, such as nodes or miners, and potentially other Filecoin implementations in the future. Also, it is expected that APIs will change over time, sometimes in incompatible ways, and it may be necessary to talk to multiple different versions in a heterogeneous environment.

For these reasons, and also with an eye towards encouraging a healthy ecosystem of community developed open-source modules, we have decided to develop many small modular JavaScript libraries that work well together.

We decided against developing a single monolithic library as it might get too large for lightweight use cases (eg. mobile web) and it would likely have a higher barrier for accepting individual contributions.

In the future, we may develop some convenience libraries that will bundle together multiple smaller libraries that are optimized for specific use cases. In the beginning, though, we will focus on modularity.

## Provider Libraries



