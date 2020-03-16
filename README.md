# Lotus JS Client

The Lotus JS Client is a collection of small JavaScript libraries that you can use to control the [Lotus implementation](https://github.com/filecoin-project/lotus) of [Filecoin](https://filecoin.io/) via it's JSON-RPC API.

# Usage

All of the **low-level** JSON-RPC methods will soon be wrapped for easy access from JavaScript:

```js
import LotusRPC from '@filecoin-shipyard/lotus-client-rpc'
import BrowserProvider from '@filecoin-shipyard/lotus-client-provider-browser'

async function run () {
  const client = new LotusRPC(new BrowserProvider('http://localhost:1234'))

  const {
    version,
    apiVersion,
    blockDelay
  } = await client.version()

  console.log('Version:', version)
}

run()
```

**(The usage example above is an initial concept of what the API could be)**

Full API docs are coming soon! Plus examples and tutorials! In the meantime, you can refer to the Lotus source code to see the list of API methods available:

* [api/apistruct/struct.go](https://github.com/filecoin-project/lotus/blob/master/api/apistruct/struct.go)

In addition to the low level methods, we will be building additional higher-level libraries that make coding common tasks easier with a more expressive and idiomatic JavaScript API.

## Contributing

Feel free to join in. All welcome. [Open an issue](https://github.com/filecoin-shipyard/js-lotus-client/issues)!

## License

Dual-licensed under [MIT](https://github.com/filecoin-project/lotus/blob/master/LICENSE-MIT) + [Apache 2.0](https://github.com/filecoin-project/lotus/blob/master/LICENSE-APACHE)
