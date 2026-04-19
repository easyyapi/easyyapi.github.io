# api

API utilities for scripts.

## Usage

```properties
method.additional.param=groovy:'''
api.addParam("version", "1.0", "API version", "query")
'''
```

## Methods

- `api.addParam(name, value, desc, type)` — Add a parameter
- `api.addHeader(name, value)` — Add a header
