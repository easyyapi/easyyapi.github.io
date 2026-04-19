# api.class.parse.before

Callback executed before parsing a class as an API controller.

## Usage

```properties
api.class.parse.before=groovy:'''
logger.info("Parsing class: " + it.name())
'''
```

## Context

The `it` object is the class being parsed.
