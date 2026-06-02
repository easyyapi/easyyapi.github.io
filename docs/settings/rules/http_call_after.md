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

| Variable | Type | Description |
|----------|------|-------------|
| `request` | `HttpRequestWrapper` | The request that was sent |
| `response` | `HttpResponseWrapper` | The response that was received |

### HttpResponseWrapper Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `response.code()` | `Int` | HTTP status code |
| `response.headers()` | `Map<String, List<String>>` | Response headers |
| `response.body()` | `String?` | Response body |
| `response.request()` | `HttpRequestWrapper` | The associated request |
| `response.discard()` | `void` | Discard response and retry the request |
| `response.isDiscarded()` | `Boolean` | Check if response has been discarded |

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
- [httpClient.request](../tools/httpClient/request) - Request wrapper details
- [httpClient.response](../tools/httpClient/response) - Response wrapper details

## Available Since

v1.9.0+
