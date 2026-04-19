# json.field.parse.before

Callback executed before parsing a field for JSON serialization.

## Usage

```properties
json.field.parse.before=groovy:'''
logger.info("Parsing JSON field: " + it.name())
'''
```

## Context

The `it` object is the field being parsed for JSON.
