# json.class.parse.before

Callback executed before parsing a class for JSON serialization.

## Usage

```properties
json.class.parse.before=groovy:'''
logger.info("Parsing JSON class: " + it.name())
'''
```

## Context

The `it` object is the class being parsed for JSON.
