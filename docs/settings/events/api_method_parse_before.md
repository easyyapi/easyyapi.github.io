# api.method.parse.before

Callback executed before parsing a method as an API endpoint.

## Usage

```properties
api.method.parse.before=groovy:'''
logger.info("Parsing method: " + it.name())
'''
```

## Context

The `it` object is the method being parsed.
