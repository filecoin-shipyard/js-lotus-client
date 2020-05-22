# Lotus JS Client

The Lotus JS Client is a collection of small JavaScript libraries that you can use to control the [Lotus implementation](https://github.com/filecoin-project/lotus) of [Filecoin](https://filecoin.io/) via it's JSON-RPC API.

# Usage

All of the **low-level** JSON-RPC methods will soon be wrapped for easy access from JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Get Version</title>
  </head>
  <body>
    <h1>Get Version</h1>
    <pre></pre>
    <script type="module">
      import LotusRPC from 'https://unpkg.com/@filecoin-shipyard/lotus-client-rpc?module'
      import BrowserProvider from 'https://unpkg.com/@filecoin-shipyard/lotus-client-provider-browser?module'
      import schema from 'https://unpkg.com/@filecoin-shipyard/lotus-client-schema/prototype/testnet-v3.js?module'

      const wsUrl = 'wss://lotus.testground.ipfs.team/api/0/node/rpc/v0'
      const provider = new BrowserProvider(wsUrl)
      const client = new LotusRPC(provider, { schema })

      async function run () {
        const result = await client.version()
        const preEl = document.querySelector('pre')
        preEl.textContent = JSON.stringify(result)
      }
      run()
    </script>
  </body>
</html>
```

[See it running here!](https://bafybeidafp4gkpy5hx6geh3wmbt5h5x4knyw3acjrbatr5xxphdjhmrpwq.ipfs.dweb.link/)

The usage example above connects to a test "local net" running Lotus via a reverse proxy with SSL and CORS enabled, and loads the library as an "ES module" via the unpkg.com CDN.

Here's the same example, but running [entirely off of IPFS](https://bafybeicwfcxfntlfdvikz3vnnlpapgmg5ogwfgqwpwui44z3yhkn4pvcqq.ipfs.dweb.link/) -- individual library dependencies have been bundled and published using [Snowpack](https://www.snowpack.dev/).

Here are some more examples to get started:

* [ObservableHQ Notebooks](https://observablehq.com/@jimpick/lotus-js-client?collection=@jimpick/lotus-js-client) - Observable Notebooks are a great way to learn about and try out the API.
  * Here's the [simplest example](https://observablehq.com/@jimpick/lotus-js-client?collection=@jimpick/lotus-js-client), which connects to the "local net" and gets the chain head
  * A [more complex example](https://observablehq.com/@jimpick/lotus-js-client-testnet?collection=@jimpick/lotus-js-client) connects to the Testnet and gets a list of miners and displays them on a 3D map using Deck.gl
  * And here's an example of how to [query an ask](https://observablehq.com/@jimpick/lotus-js-client-testnet-querying-ask?collection=@jimpick/lotus-js-client) from a miner on the Testnet
  * ... more to come. Submissions welcome!

We also built a workshop for the [Ready Layer One](https://www.youtube.com/channel/UC-JxjKyX63VGkRM-8jziK8Q/videos) conference. We have been updating it since the conference and it contains code that shows how to store and retrieve files using a Lotus node (connected to our demo "local net").

  * YouTube: [Demo at IPFS Pinning Summit](https://www.youtube.com/watch?v=hCNr5Sj323k&list=PLuhRWgmPaHtTvsxuZ9T-tMlu_v0lja6v5)
  * GitHub: [filecoin-shipyard/rl1-lotus-workshop](https://github.com/filecoin-shipyard/rl1-lotus-workshop)
  * Glitch: [Try it here or remix it!](https://glitch.com/edit/#!/rl1-lotus-workshop)

## Documentation

The docs are under heavy development, and are only partially done so far. The source for the docs are in Markdown format in the `docs` directory
in this repo.

The current draft (generated using `mdbook`) has been published to IPFS here:

* https://ipfs.io/ipfs/QmRRp9Y5i6d3Lkf4UbNvnhtaNqyaB4jnALuJ2vcHnVpphL/
* **New!** Lotus now has the ability to generate docs. Here's a preview of the API docs for just the Node API: https://gist.github.com/jimpick/7c227fc9f8e7267634cf989dec8c0323

The main documentation site for Lotus also has a [guide to the API](https://lotu.sh/en+api).

## Contributing

Feel free to join in. All welcome. [Open an issue](https://github.com/filecoin-shipyard/js-lotus-client/issues)!

Conversations and questions about the Lotus JS Client libraries are welcome in the `#fil-storage-dev` channel in the Filecoin Commmunity Slack. Find out how to sign up over at the
[Filecoin Community](https://filecoin.io/#community) page.

## License

Dual-licensed under [MIT](https://github.com/filecoin-project/lotus/blob/master/LICENSE-MIT) + [Apache 2.0](https://github.com/filecoin-project/lotus/blob/master/LICENSE-APACHE)
