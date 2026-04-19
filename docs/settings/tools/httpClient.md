# httpClient

HTTP client for making requests in scripts.

## Usage

```properties
http.call.before=groovy:'''
def response = httpClient.get("http://auth-server/token")
it.header("Authorization", "Bearer " + response.body())
'''
```

## Methods

- `httpClient.get(url)` — Send GET request
- `httpClient.post(url, body)` — Send POST request
- `httpClient.put(url, body)` — Send PUT request
- `httpClient.delete(url)` — Send DELETE request
