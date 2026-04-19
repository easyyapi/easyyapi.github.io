# http.call.before

Pre-request callback for the Call API feature.

## Usage

```properties
http.call.before=groovy:'''
// Add authorization header
it.header("Authorization", "Bearer " + localStorage.get("token"))
'''
```

This callback is executed before sending an HTTP request. It can be used for:
- Auto-login
- Adding common request headers
- Setting request parameters

## Context

The `it` object in the script context is the request object.

## Available Since

v1.9.0+
