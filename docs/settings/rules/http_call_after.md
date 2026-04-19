# http.call.after

Post-request callback for the Call API feature.

## Usage

```properties
http.call.after=groovy:'''
// Log response
logger.info("Response: " + it.response().body())

// Save token from response
if (it.response().code() == 200) {
    def body = it.response().body()
    localStorage.set("token", body.token)
}
'''
```

This callback is executed after receiving an HTTP response. It can be used for:
- Response data processing
- Logging
- Token extraction and storage

## Context

The `it` object in the script context provides access to both the request and response.

## Available Since

v1.9.0+
