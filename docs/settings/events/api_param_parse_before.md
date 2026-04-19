# api.param.parse.before

Callback executed before parsing a parameter.

## Usage

```properties
api.param.parse.before=groovy:'''
logger.info("Parsing param: " + it.name())
'''
```

## Context

The `it` object is the parameter being parsed.
