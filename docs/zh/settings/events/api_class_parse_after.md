# api.class.parse.after

Callback executed after parsing a class as an API controller.

## Usage

```properties
api.class.parse.after=groovy:'''
logger.info("Parsed class: " + it.name() + " with " + it.methods().size() + " methods")
'''
```

## Context

The `it` object is the parsed class with its API information.
