# helper

Helper methods for common operations. Provides utilities for type resolution and other frequently needed operations in scripts.

## Usage

```properties
method.return=groovy:'''
def resolvedType = helper.resolveType(it.returnType())
return resolvedType ?: it.returnType().name()
'''
```

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `helper.resolveType(type)` | `String?` | Resolve a type to its simple name with generics |
| `helper.resolveType(type, context)` | `String?` | Resolve a type with additional context |

## Examples

### Resolve Return Type

```properties
method.return=groovy:'''
def returnType = it.returnType()
if (returnType) {
    def resolved = helper.resolveType(returnType)
    logger.info("Return type: " + resolved)
    return resolved
}
return "void"
'''
```

### Resolve Field Type

```properties
field.type=groovy:'''
def type = it.type()
def resolved = helper.resolveType(type)
return resolved ?: type.name()
'''
```

### Type Resolution with Generics

```properties
field.type=groovy:'''
def type = it.type()
if (type.isCollection()) {
    def elementType = type.typeArgs()?.get(0)
    if (elementType) {
        return "List<" + helper.resolveType(elementType) + ">"
    }
}
return helper.resolveType(type)
'''
```

## Common Use Cases

### Simplify Complex Types

```properties
field.type=groovy:'''
def type = it.type()
def name = type.name()

if (name.startsWith("java.util.")) {
    return helper.resolveType(type)
}
if (name.startsWith("java.lang.")) {
    return type.simpleName()
}
return name
'''
```

### Handle Generic Types

```properties
field.mock=groovy:'''
def type = it.type()

if (type.isMap()) {
    return "{}"
}
if (type.isCollection()) {
    return "[]"
}
if (type.isArray()) {
    return "[]"
}

return null
'''
```

## Notes

- The `helper` tool provides convenience methods that simplify common operations
- Use `helper` in combination with `it.type()` for type-related operations
- The `resolveType` method handles generic type parameters automatically

## See Also

- [it](./it) - Current context object (includes type methods)
- [tool](./tool) - General utility methods
- [logger](./logger) - Logging utility
