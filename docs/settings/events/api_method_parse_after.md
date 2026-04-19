# api.method.parse.after

Callback executed after parsing a method as an API endpoint.

## Usage

```properties
api.method.parse.after=groovy:'''
logger.info("Parsed method: " + it.name() + " " + it.httpMethod() + " " + it.path())
'''
```

## Context

The `it` object is the parsed method with its API information.
