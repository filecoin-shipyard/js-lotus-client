# Lotus JS Client

To make developing applications as easy as possible, the [Lotus JS Client](https://github.com/filecoin-shipyard/js-lotus-client) libraries are available. These libraries contain re-useable code to make the chore of interfacing with your Lotus Filecoin nodes and miners much more enjoyable.

**Caution:** These libraries are very new and currently under heavy development, as is Lotus and Filecoin. Expect many breaking changes. As the ecosystem matures, these libraries will evolve to become more stable and production ready.

These libraries are intended to be used in many different environments, including web pages, mobile apps, desktop apps, and server-side applications. Additionally, they will target different types of Lotus daemons, such as nodes or miners, and potentially other Filecoin implementations in the future. Also, it is expected that APIs will change over time, sometimes in incompatible ways, and it may be necessary to talk to multiple different versions in a heterogeneous environment.

For these reasons, and also with an eye towards encouraging a healthy ecosystem of community developed open-source modules, we have decided to develop many small modular JavaScript libraries that work well together.

We decided against developing a single monolithic library as it might get too large for lightweight use cases (eg. mobile web) and it would likely have a higher barrier for accepting individual contributions.

In the future, we may develop some convenience libraries that will bundle together multiple smaller libraries that are optimized for specific use cases. In the beginning, though, we will focus on modularity.

# List of Libraries

## Schema

Contains JSON data representing the available methods in the Lotus JSON-RPC API (and possibly others in the future). This data can be used by other libraries to make calls against the API, or to generate documentation, etc.

* [@filecoin-shipyard/lotus-client-schema](https://www.npmjs.com/package/@filecoin-shipyard/lotus-client-schema) ([GitHub](https://github.com/filecoin-shipyard/js-lotus-client-schema)) - contains schemas for the current master branch of Lotus + additional development branches

## Provider Libraries

Pluggable "Providers" let you select a module with the code you need to connect to a Lotus node from a particular environment, such as a web page, from Node.js, or from a mobile app. Inspired by "providers" in the Ethereum ecosystem. 

* [@filecoin-shipyard/lotus-client-provider-browser](https://www.npmjs.com/package/@filecoin-shipyard/lotus-client-provider-browser) ([GitHub](https://github.com/filecoin-shipyard/js-lotus-client-provider-browser)) - lightweight provider that communicates to Lotus using WebSockets or HTTP

Coming soon: Node.js support.

The interfaces that providers must implement are not yet defined, and will likely evolve over time.

## Low-level Libraries

These libraries are used together with a schema for a particular API and a provider library to allow JavaScript programs to call JavaScript methods in the library which will get sent to the Lotus API as JSON-RPC requests.

* [@filecoin-shipyard/lotus-client-rpc](https://www.npmjs.com/package/@filecoin-shipyard/lotus-client-rpc) ([GitHub](https://github.com/filecoin-shipyard/js-lotus-client-rpc)) - a very simple library that simply passes parameters to JSON-RPC with no extra formatting, and results are returned as plain JavaScript objects

In the future, we will introduce additional low-level libraries that have more knowledge of how to marshall/unmarshall requests and responses to/from the JSON-RPC API into appropriate JavaScript classes with extra support for specific types and Filecoin features.

## High-level Libraries

We will be experimenting and collecting feedback on ideas for useful abstractions that build on top of the low level libraries to make it even easier to build applications with Lotus and Filecoin.


