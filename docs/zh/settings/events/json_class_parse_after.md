# json.class.parse.after

Callback executed after parsing a class for JSON serialization.

## Usage

```properties
json.class.parse.after=groovy:'''
logger.info("Parsed JSON class: " + it.name())
'''
```

## Context

The `it` object is the parsed class with its JSON information.
