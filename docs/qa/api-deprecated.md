# How to mark API as deprecated

EasyYapi automatically marks deprecated APIs — **no configuration needed** for the common cases below.

## Built-in behavior

The built-in `yapi` extension adds a `deprecated` tag to the API when it detects any of the following:

- The method or its containing class is annotated `@java.lang.Deprecated`
- The method's Javadoc contains a `@deprecated` tag
- (Kotlin) The method or its containing class is annotated `@kotlin.Deprecated`

Underlying rules (already shipped, shown for reference):

```properties
api.tag[@java.lang.Deprecated]=deprecated
api.tag[#deprecated]=deprecated
api.tag[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=deprecated
api.tag[groovy:it.containingClass().hasDoc("deprecated")]=deprecated
```

## Example

```java
/**
 * Get user by ID
 *
 * @deprecated use getUserV2 instead
 */
@Deprecated
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```

This endpoint is automatically tagged `deprecated` and exported with the deprecated description appended to its doc.

## Status vs. tag

`api.status` is a separate rule used for the `@undone` / `@todo` doc tags (exported as the `undone` status), **not** for deprecation. Deprecated APIs are surfaced via `api.tag`, not `api.status`.
