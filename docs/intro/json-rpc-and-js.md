# JSON-RPC and JavaScript

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