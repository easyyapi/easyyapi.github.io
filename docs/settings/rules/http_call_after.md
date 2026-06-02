# http.call.after

Post-request callback for the Call API feature.

## Usage

````properties
http.call.after=groovy:```
// Log response
logger.info("Response code: " + response.code())

// Save token from response
if (response.code() == 200) {
    def body = new JsonSlurper().parseText(response.body())
    if (body.token) {
        localStorage.set("token", body.token)
    }
}
```
````

This callback is executed after receiving an HTTP response. It can be used for:
- Response data processing
- Logging
- Token extraction and storage
- Retry on error (via `response.discard()`)

## Context

The following variables are available in the script context:

| Variable | Description |
|----------|-------------|
| `request` | The HTTP request that was sent. See [request](../tools/httpClient/request) for available methods |
| `response` | The HTTP response received. See [response](../tools/httpClient/response) for available methods |

## Retry Mechanism

Calling `response.discard()` will cause the request to be retried (up to 3 times). This is useful for handling expired tokens or transient errors:

````properties
http.call.after=groovy:```
if (response.code() == 401) {
    // Token expired, clear cache and retry
    localStorage.remove("auth_token")
    response.discard()
}
```
````

## Examples

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

### Log request and response

````properties
http.call.after=groovy:```
logger.info(request.method() + " " + request.url() + " -> " + response.code())
```
````

## See Also

- [http.call.before](./http_call_before) - Pre-request callback
- [request](../tools/httpClient/request) - Request object details
- [response](../tools/httpClient/response) - Response object details

## Available Since

v1.9.0+
