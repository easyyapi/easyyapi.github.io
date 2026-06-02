# httpClient

HTTP client for making requests in scripts. Supports making HTTP calls to external services during API export or other operations.

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `httpClient.get(url)` | `HttpResponse` | Send a GET request |
| `httpClient.post(url, body)` | `HttpResponse` | Send a POST request |
| `httpClient.put(url, body)` | `HttpResponse` | Send a PUT request |
| `httpClient.delete(url)` | `HttpResponse` | Send a DELETE request |

## Response Object

The response object returned by `httpClient` methods provides access to:

| Property/Method | Return Type | Description |
|-----------------|-------------|-------------|
| `response.code()` | `Int` | HTTP status code |
| `response.body()` | `String` | Response body as string |
| `response.headers()` | `Map<String, String>` | Response headers |

## Sub-pages

- [request](./httpClient/request) - HTTP request wrapper available in `http.call.before`/`http.call.after`
- [response](./httpClient/response) - HTTP response wrapper available in `http.call.after`

## Examples

### GET Request

````properties
http.call.before=groovy:```
def response = httpClient.get("http://config-server/api/config")
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
def response = httpClient.post("http://api-server/sync", json)
logger.info("Sync result: " + response.code())
```
````

### Authentication with token caching

````properties
http.call.before=groovy:```
def token = session.get("auth_token")
if (!token) {
    def loginResponse = httpClient.post("http://auth-server/login", [
        username: config.get("auth.username"),
        password: config.get("auth.password")
    ])

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
    def healthCheck = httpClient.get(apiUrl + "/health")
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
