# json.method.parse.before

Callback executed before parsing a method for JSON serialization.

## Usage

```properties
json.method.parse.before=groovy:'''
logger.info("Parsing JSON method: " + it.name())
'''
```

## Context

The `it` object is the method being parsed for JSON.
