# json.field.parse.after

Callback executed after parsing a field for JSON serialization.

## Usage

```properties
json.field.parse.after=groovy:'''
if (it.type().name() == "java.util.Date") {
    it.setJsonType("string")
}
'''
```

## Context

The `it` object is the parsed field with its JSON information.
