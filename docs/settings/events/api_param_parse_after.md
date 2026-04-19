# api.param.parse.after

Callback executed after parsing a parameter.

## Usage

```properties
api.param.parse.after=groovy:'''
if (it.type().name() == "java.util.Date") {
    it.setType("string")
}
'''
```

## Context

The `it` object is the parsed parameter with its type and value information.
