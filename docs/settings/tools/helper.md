# helper

Helper methods for common operations. Provides utilities for class lookup and link resolution in scripts.

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `helper.findClass(canonicalText)` | `ClassContext?` | Find a class by its fully qualified name |
| `helper.resolveLink(canonicalText)` | `ElementContext?` | Resolve a single link reference (class, method, or field) |
| `helper.resolveLinks(canonicalText)` | `List<ElementContext>` | Resolve all link references |

## Examples

### Find a class by name

````properties
method.return=groovy:```
def cls = helper.findClass("com.example.Result")
return cls ? cls.name() : it.returnType().name()
```
````

### Resolve a link reference

````properties
method.return=groovy:```
def linked = helper.resolveLink("com.example.User")
return linked ? linked.name() : null
```
````

## Notes

- The `helper` tool provides convenience methods for class lookup and link resolution
- Use `helper` in combination with `it.type()` / `it.returnType()` for type-related operations

## See Also

- [it](./it) - Current context object (includes type methods)
- [tool](./tool) - General utility methods
- [logger](./logger) - Logging utility
