# fieldContext

Field context utilities for scripts. Provides helpers for working with JSON field paths in the context of field processing rules.

## Usage

```properties
field.ignore=groovy:'''
def path = fieldContext.path()
if (path.contains("ignoredField")) {
    return true
}
return false
'''
```

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `fieldContext.path()` | `String` | Get the full JSON path of the current field |
| `fieldContext.property(name)` | `String` | Get the JSON path for a named property relative to the parent |
| `fieldContext.toString()` | `String` | Returns the field path (same as `path()`) |

## How It Works

The `fieldContext` is automatically provided when processing fields in JSON conversion rules. It tracks the current position in the JSON structure being built.

### Path Examples

| Field Location | `fieldContext.path()` |
|----------------|----------------------|
| Top-level field `name` | `"name"` |
| Nested field `user.name` | `"user.name"` |
| Array element `items[0].id` | `"items.id"` |

### Property Resolution

The `property(name)` method returns a path relative to the parent of the current field:

| Current Path | `property("other")` |
|--------------|---------------------|
| `"user.name"` | `"user.other"` |
| `"name"` | `"other"` |
| `"data.items.value"` | `"data.items.other"` |

## Examples

### Ignore Specific Paths

```properties
field.ignore=groovy:'''
def ignoredPaths = ["password", "secret", "token", "internal.id"]
def path = fieldContext.path()
return ignoredPaths.any { path.endsWith(it) || path.contains("." + it) }
'''
```

### Conditional Mock Based on Path

```properties
field.mock=groovy:'''
def path = fieldContext.path()

if (path.endsWith(".id")) {
    return "12345"
}
if (path.endsWith(".name")) {
    return "mock_name"
}
if (path.contains("user.")) {
    return "mock_user_value"
}

return null
'''
```

### Reference Sibling Fields

```properties
field.mock=groovy:'''
def siblingPath = fieldContext.property("status")
logger.info("Current field: " + fieldContext.path())
logger.info("Sibling path: " + siblingPath)
return "mock_value"
'''
```

### Path-based Validation

```properties
field.required=groovy:'''
def path = fieldContext.path()
def requiredPaths = ["user.id", "user.name", "order.orderId"]

if (requiredPaths.contains(path)) {
    return true
}
return false
'''
```

## Use Cases

1. **Conditional Processing**: Apply different rules based on field location
2. **Path-aware Mocking**: Generate mock values based on field position
3. **Selective Ignoring**: Ignore fields based on their path patterns
4. **Cross-field References**: Reference sibling or parent fields

## See Also

- [it](./it) - Current context object
- [api](./api) - API utilities for modifying endpoint metadata
