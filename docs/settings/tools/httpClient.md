# httpClient

HTTP client for making requests in scripts. Supports making HTTP calls to external services during API export or other operations.

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `httpClient.newRequest(url)` | `HttpRequestBuilder` | Start a fluent request for `url` |
| `httpClient.newRequest()` | `HttpRequestBuilder` | Start a fluent request; set the URL later with `url(…)` |
| `httpClient.executeSync(request)` | `HttpResponse` | Send a ready-made `HttpRequest` synchronously |

### Building a request

The builder is the way to issue requests from a script. The alternative — building `HttpRequest` directly — type-checks but breaks silently when two `String` arguments are reordered, so prefer the builder:

````properties
http.call.before=groovy:```
def response = httpClient.newRequest("http://config-server/api/config")
    .header("X-Tenant", config.get("tenant"))
    .execute()
```
````

| Builder method | Description |
|----------------|-------------|
| `get()` / `post()` / `put()` / `delete()` / `patch()` / `head()` / `options()` | Set the HTTP method |
| `url(url)` / `method(name)` | Set the target URL or an arbitrary verb |
| `header(name, value)` / `headers(map)` / `setHeader` / `removeHeader` | Manage request headers |
| `query(name, value)` / `query(map)` | Add query parameters |
| `form(name, value)` / `form(map)` | Add form fields (`application/x-www-form-urlencoded`) |
| `file(name, fileName, bytes[, contentType])` | Attach a file part |
| `cookie(name, value[, domain, path])` | Attach a cookie |
| `body(content)` / `json(content)` / `contentType(type)` | Set the request body and its content type |
| `build()` | Produce an `HttpRequest` for `executeSync` |
| `execute()` | Send the request and return an `HttpResponse` |

There is deliberately no lambda overload — the builder stays Groovy-friendly: no default parameters, just plain chaining.

## Response Object

The response object returned by `httpClient` methods provides access to:

| Property/Method | Return Type | Description |
|-----------------|-------------|-------------|
| `response.code()` | `Int` | HTTP status code |
| `response.body()` | `String?` | Response body as string; `null` for a binary response |
| `response.headers()` | `Map<String, List<String>>` | Response headers |
| `response.bytes()` | `ByteArray?` | Raw body bytes; `null` when the body is text-only |
| `response.saveBody(path)` | `Boolean` | Write the body to `path`; `false` when there is nothing to save |
| `response.text()` | `String` | Body decoded as text |
| `response.json()` / `response.xml()` | `Any?` | Structured views of the body |

Binary responses (images, PDFs, ZIP files, `octet-stream`) are classified by content type and size and are never decoded as UTF-8 text. Oversized bodies are streamed to a temporary file, so they stay available through `saveBody(path)` without being materialized in memory. In Postman-style scripts the same values are on `pm.response`, which additionally exposes `responseSize` — now reported **in bytes**, not characters.

## Sub-pages

- [request](./httpClient/request) - HTTP request wrapper available in `http.call.before`/`http.call.after`
- [response](./httpClient/response) - HTTP response wrapper available in `http.call.after`

## Examples

### GET Request

````properties
http.call.before=groovy:```
def response = httpClient.newRequest("http://config-server/api/config").get().execute()
if (response.code() == 200) {
    def config = new JsonSlurper().parseText(response.body())
    logger.info("Config loaded: " + config)
}
```
````

### POST Request with JSON

````properties
export.before=groovy:```
import groovy.json.JsonOutput

def data = [
    project: "my-project",
    apis: []
]

def json = JsonOutput.toJson(data)
def response = httpClient.newRequest("http://api-server/sync").post().json(json).execute()
logger.info("Sync result: " + response.code())
```
````

### Authentication with token caching

````properties
http.call.before=groovy:```
def token = session.get("auth_token")
if (!token) {
    def loginResponse = httpClient.newRequest("http://auth-server/login")
        .post()
        .form("username", config.get("auth.username"))
        .form("password", config.get("auth.password"))
        .execute()

    if (loginResponse.code() == 200) {
        def result = new JsonSlurper().parseText(loginResponse.body())
        token = result.token
        session.set("auth_token", token)
    }
}

if (token) {
    logger.info("Using token for request to: " + request.url())
}
```
````

### Conditional Request

````properties
http.call.before=groovy:```
def apiUrl = config.get("api.url")
if (apiUrl) {
    def healthCheck = httpClient.newRequest(apiUrl + "/health").get().execute()
    if (healthCheck.code() != 200) {
        logger.warn("API server health check failed")
    }
}
```
````

## Notes

- HTTP requests are synchronous - they block until completion
- Use `session` or `localStorage` to cache responses when appropriate
- Handle errors gracefully with status code checks
- The `httpClient` is configured based on IDE settings (Apache HttpClient, Java URLConnection, or IntelliJ HTTP Client)

## See Also

- [request](./httpClient/request) - Request wrapper in `http.call.before`/`http.call.after`
- [response](./httpClient/response) - Response wrapper in `http.call.after`
- [session](./session) - Session-level storage for caching
- [localStorage](./localStorage) - Persistent storage for caching
- [config](./config) - Configuration access
- [logger](./logger) - Logging utility
