# json.method.parse.after

Callback executed after parsing a method for JSON serialization.

## Usage

```properties
json.method.parse.after=groovy:'''
logger.info("Parsed JSON method: " + it.name())
'''
```

## Context

The `it` object is the parsed method with its JSON information.
