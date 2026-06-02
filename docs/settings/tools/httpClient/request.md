# request

HTTP request object, available in `http.call.before` and `http.call.after` rule scripts.

The `request` object provides read-only access to the HTTP request properties that are about to be sent.

## Availability

| Rule | Variable |
|------|----------|
| `http.call.before` | `request` |
| `http.call.after` | `request` |

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `request.url()` | `String` | Request URL |
| `request.method()` | `String` | HTTP method (GET, POST, etc.) |
| `request.headers()` | `List<KeyValue>` | Request headers |
| `request.query()` | `List<KeyValue>` | Query parameters |
| `request.body()` | `String?` | Request body (nullable) |
| `request.formParams()` | `List<FormParam>` | Form parameters |
| `request.cookies()` | `List<HttpCookie>` | Cookies |
| `request.contentType()` | `String?` | Content-Type header value (nullable) |

## Examples

### Inspect request details

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

### Check request method

````properties
http.call.before=groovy:```
if (request.method() == "POST") {
    logger.info("POST body: " + request.body())
}
```
````

### Read request headers

````properties
http.call.before=groovy:```
def headers = request.headers()
headers.each { h ->
    logger.info(h.key() + ": " + h.value())
}
```
````

## See Also

- [response](./response) - HTTP response object
- [httpClient](./) - HTTP client for making requests
- [http.call.before](../../rules/http_call_before) - Pre-request callback rule
- [http.call.after](../../rules/http_call_after) - Post-request callback rule
