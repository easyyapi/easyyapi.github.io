# http.call.before

Pre-request callback for the Call API feature.

## Usage

````properties
http.call.before=groovy:```
// Log request info
logger.info("Sending " + request.method() + " " + request.url())
if (request.body() != null) {
    logger.info("Body: " + request.body())
}
if (!request.formParams().isEmpty()) {
    logger.info("Form: " + request.formParams())
}
if (!request.query().isEmpty()) {
    logger.info("Query: " + request.query())
}
```
````

This callback is executed before sending an HTTP request. It can be used for:
- Auto-login
- Adding common request headers
- Setting request parameters
- Logging request details

## Context

The following variables are available in the script context:

| Variable | Description |
|----------|-------------|
| `request` | The HTTP request about to be sent. See [request](../tools/httpClient/request) for available methods |

## Examples

### Log request details

````properties
http.call.before=groovy:```
logger.info("Sending " + request.method() + " " + request.url())
if (request.body() != null) {
    logger.info("Body: " + request.body())
}
if (!request.formParams().isEmpty()) {
    logger.info("Form: " + request.formParams())
}
if (!request.query().isEmpty()) {
    logger.info("Query: " + request.query())
}
```
````

### Conditional logic based on URL

````properties
http.call.before=groovy:```
if (request.url().contains("/api/")) {
    logger.info("API request detected")
}
```
````

## See Also

- [http.call.after](./http_call_after) - Post-request callback
- [request](../tools/httpClient/request) - Request object details
- [response](../tools/httpClient/response) - Response object details

## Available Since

v1.9.0+
