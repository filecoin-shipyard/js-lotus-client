# Lotus JS Client

![Lotus loves JS](/js-lotus-client/images/lotus-loves-js.png)

To make developing applications as easy as possible, the [Lotus JS Client](https://github.com/filecoin-shipyard/js-lotus-client) libraries are available. These libraries contain re-useable code to make the chore of interfacing with your Lotus Filecoin nodes and miners much more enjoyable.

**Caution:** These libraries are very new and currently under heavy development, as is Lotus and Filecoin. Expect many breaking changes. As the ecosystem matures, these libraries will evolve to become more stable and production ready.

These libraries are intended to be used in many different environments, including web pages, mobile apps, desktop apps, and server-side applications. Additionally, they will target different types of Lotus daemons, such as nodes or miners, and potentially other Filecoin implementations in the future. Also, it is expected that APIs will change over time, sometimes in incompatible ways, and it may be necessary to talk to multiple different versions in a heterogeneous environment.

For these reasons, and also with an eye towards encouraging a healthy ecosystem of community developed open-source modules, we have decided to develop many small modular JavaScript libraries that work well together.

We decided against developing a single monolithic library as it might get too large for lightweight use cases (eg. mobile web) and it would likely have a higher barrier for accepting individual contributions.

In the future, we may develop some convenience libraries that will bundle together multiple smaller libraries that are optimized for specific use cases. In the beginning, though, we will focus on modularity.
