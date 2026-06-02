# response

HTTP response wrapper object, available in `http.call.after` rule scripts.

The `response` object provides access to the HTTP response data and supports retry control via `discard()`.

## Availability

| Rule | Available As |
|------|-------------|
| `http.call.after` | `response` |

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `response.code()` | `Int` | HTTP status code |
| `response.headers()` | `Map<String, List<String>>` | Response headers |
| `response.body()` | `String?` | Response body (nullable) |
| `response.request()` | `HttpRequestWrapper` | The associated request object |
| `response.discard()` | `void` | Discard this response and retry the request |
| `response.isDiscarded()` | `Boolean` | Check if this response has been discarded |

## Retry Mechanism

Calling `response.discard()` marks the response for retry. The request will be re-executed up to **3 times** (MAX_RETRY). This is useful when the response indicates an expired token or other recoverable error.

````properties
http.call.after=groovy:```
if (response.code() == 401) {
    // Token expired, clear cached token and retry
    localStorage.remove("auth_token")
    response.discard()
}
```
````

## Examples

### Log response info

````properties
http.call.after=groovy:```
logger.info("Response code: " + response.code())
logger.info("Response body: " + response.body())
```
````

### Save token from response

````properties
http.call.after=groovy:```
if (response.code() == 200) {
    def body = new JsonSlurper().parseText(response.body())
    if (body.token) {
        localStorage.set("auth_token", body.token)
    }
}
```
````

### Error handling with retry

````properties
http.call.after=groovy:```
def code = response.code()
if (code >= 500) {
    logger.error("Server error: " + code)
    response.discard()
} else if (code == 401) {
    logger.warn("Unauthorized, retrying...")
    session.remove("token")
    response.discard()
}
```
````

### Access request from response

````properties
http.call.after=groovy:```
logger.info("Request to " + response.request().url() + " returned " + response.code())
```
````

## See Also

- [request](./request) - HTTP request wrapper
- [httpClient](./) - HTTP client for making requests
- [http.call.after](../../rules/http_call_after) - Post-request callback rule
