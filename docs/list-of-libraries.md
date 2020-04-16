# List of Libraries

Here is the list of libraries that make up the Lotus JS Client ecosystem.

## All-in-one Libraries

At the moment, we are not shipping any JavaScript libraries that combine a schema, plus a provider, plus low-level or high-level API wrappers. We may prepare an opinionated bundle in the future in order to make it easier for apps to integrate the most common configurations with a single library import. In the meantime, feel free to combine the following libraries yourself, or contribute new libraries to the community.

## Schema

Contains JSON data representing the available methods in the Lotus JSON-RPC API (and possibly others in the future). This data can be used by other libraries to make calls against the API, or to generate documentation, etc.

* [@filecoin-shipyard/lotus-client-schema](https://www.npmjs.com/package/@filecoin-shipyard/lotus-client-schema) ([GitHub](https://github.com/filecoin-shipyard/js-lotus-client-schema)) - contains schemas for the current master branch of Lotus + additional development branches

## Provider Libraries

Pluggable "Providers" let you select a module with the code you need to connect to a Lotus node from a particular environment, such as a web page, from Node.js, or from a mobile app. Inspired by "providers" in the Ethereum ecosystem. 

* [@filecoin-shipyard/lotus-client-provider-browser](https://www.npmjs.com/package/@filecoin-shipyard/lotus-client-provider-browser) ([GitHub](https://github.com/filecoin-shipyard/js-lotus-client-provider-browser)) - lightweight provider for web browsers that communicates to Lotus using WebSockets or HTTP

Coming soon: Node.js support using the [rpc-websockets](https://github.com/filecoin-shipyard/js-lotus-client/issues/21) npm package.

The interfaces that providers must implement are not yet defined, and will likely evolve over time.

## Low-level Libraries

These libraries are used together with a schema for a particular API and a provider library to allow JavaScript programs to call JavaScript methods in the library which will get sent to the Lotus API as JSON-RPC requests.

* [@filecoin-shipyard/lotus-client-rpc](https://www.npmjs.com/package/@filecoin-shipyard/lotus-client-rpc) ([GitHub](https://github.com/filecoin-shipyard/js-lotus-client-rpc)) - a very simple library that simply passes parameters to JSON-RPC with no extra formatting, and results are returned as plain JavaScript objects

In the future, we will introduce additional low-level libraries that have more knowledge of how to marshall/unmarshall requests and responses to/from the JSON-RPC API into appropriate JavaScript classes with extra support for specific data types and Filecoin features.

## High-level Libraries

We will be experimenting and collecting feedback on ideas for useful abstractions that build on top of the low level libraries to make it even easier to build applications with Lotus and Filecoin.

## Helper Libraries

The following libraries provide support for handling specific data types or features and work well with the Lotus JS Client libraries:

* [@openworklabs/filecoin-number](https://www.npmjs.com/package/@openworklabs/filecoin-number) ([GitHub](https://github.com/openworklabs/filecoin-number)) - A wrapper around bignumber with AttoFil and currency conversions
* [@openworklabs/filecoin-message](https://www.npmjs.com/package/@openworklabs/filecoin-message) ([GitHub](https://github.com/openworklabs/filecoin-message)) - JS implementation of the Filecoin message type, used to transfer tokens and make state changes
* [@zondax/filecoin-signer-wasm](https://www.npmjs.com/package/@zondax/filecoin-signer-wasm) ([GitHub](https://github.com/Zondax/filecoin-rs)) ([Docs](https://zondax.github.io/filecoin-rs/wasm/)) - Filecoin Signing Library - Rust / WASM / JSONRPC Service
