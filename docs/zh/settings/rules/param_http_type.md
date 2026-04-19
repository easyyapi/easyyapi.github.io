# param.http.type

Set the HTTP parameter type (query, path, header, body, cookie).

## Usage

```properties
param.http.type=groovy:it.ann("org.springframework.web.bind.annotation.RequestBody") != null ? "body" : "query"
```
