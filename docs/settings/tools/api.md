# api

API utilities for scripts. Provides methods to modify API endpoint metadata during parsing and export.

## Usage

```properties
method.additional.param=groovy:'''
api.setParam("version", "1.0", true, "API version")
'''
```

## Methods

### Basic Info

| Method | Return Type | Description |
|--------|-------------|-------------|
| `api.name()` | `String?` | Get the API name |
| `api.path()` | `String?` | Get the API path |
| `api.setPath(path)` | `void` | Set the API path |
| `api.method()` | `String?` | Get the HTTP method (GET, POST, etc.) |
| `api.setMethod(method)` | `void` | Set the HTTP method |
| `api.description()` | `String?` | Get the API description |
| `api.setDescription(desc)` | `void` | Set the API description |
| `api.appendDesc(desc)` | `void` | Append to the API description |

### Parameters

| Method | Return Type | Description |
|--------|-------------|-------------|
| `api.setParam(name, defaultValue, required, desc)` | `void` | Add/set a query parameter |
| `api.setFormParam(name, defaultValue, required, desc)` | `void` | Add/set a form parameter |
| `api.setPathParam(name, defaultValue, desc)` | `void` | Add/set a path parameter |

### Headers

| Method | Return Type | Description |
|--------|-------------|-------------|
| `api.setHeader(name, defaultValue, required, desc)` | `void` | Add/set a request header |
| `api.setResponseHeader(name, defaultValue, required, desc)` | `void` | Add/set a response header |

### Response

| Method | Return Type | Description |
|--------|-------------|-------------|
| `api.setResponseCode(code)` | `void` | Set the response status code |
| `api.appendResponseBodyDesc(desc)` | `void` | Append to the response body description |
| `api.setResponseBodyClass(className)` | `void` | Set the response body class name |

## Examples

### Add Common Parameters

```properties
method.additional.param=groovy:'''
api.setParam("version", "1.0", true, "API version")
api.setParam("timestamp", "", false, "Request timestamp")
'''
```

### Add Headers

```properties
method.additional.header=groovy:'''
api.setHeader("X-Request-ID", "", false, "Unique request identifier")
api.setHeader("Authorization", "", true, "Bearer token")
'''
```

### Modify API Path

```properties
method.path=groovy:'''
def originalPath = api.path()
if (originalPath && !originalPath.startsWith("/api")) {
    api.setPath("/api" + originalPath)
}
return api.path()
'''
```

### Add Response Info

```properties
method.additional.response=groovy:'''
api.setResponseCode(200)
api.appendResponseBodyDesc("Returns the created resource")
api.setResponseHeader("X-Resource-ID", "", true, "ID of the created resource")
'''
```

### Conditional Parameter Addition

```properties
method.additional.param=groovy:'''
if (it.hasAnn("org.springframework.web.bind.annotation.GetMapping")) {
    api.setParam("page", "1", false, "Page number")
    api.setParam("size", "20", false, "Page size")
}
'''
```

### Append Description

```properties
method.description=groovy:'''
def baseDesc = it.doc() ?: ""
api.setDescription(baseDesc)
api.appendDesc("\n\n**Note:** This API requires authentication.")
'''
```

### Complete API Setup

```properties
method.after=groovy:'''
def name = it.name()

if (name.startsWith("create")) {
    api.setMethod("POST")
    api.setResponseCode(201)
    api.appendResponseBodyDesc("Created resource")
} else if (name.startsWith("update")) {
    api.setMethod("PUT")
    api.setResponseCode(200)
} else if (name.startsWith("delete")) {
    api.setMethod("DELETE")
    api.setResponseCode(204)
} else if (name.startsWith("get") || name.startsWith("list") || name.startsWith("find")) {
    api.setMethod("GET")
    api.setResponseCode(200)
}

api.setHeader("Content-Type", "application/json", true, "Content type")
api.setHeader("Accept", "application/json", true, "Accepted response type")
'''
```

## Notes

- The `api` tool is only available in method-related rule contexts
- Changes made through `api` methods affect the exported API documentation
- Use `api` in `method.additional.*` rules for adding extra metadata

## See Also

- [it](./it) - Current context object
- [config](./config) - Configuration access
