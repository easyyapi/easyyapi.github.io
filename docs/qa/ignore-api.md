# How to ignore API

You can use the `ignore` rule to exclude specific APIs from documentation.

## Ignore by annotation

```properties
ignore=groovy:it.hasAnn("java.lang.Deprecated")
```

## Ignore by custom annotation

```properties
ignore=groovy:it.hasAnn("com.example.IgnoreApi")
```

## Ignore by method name

```properties
ignore=groovy:it.name().startsWith("internal")
```

## Example

```java
/**
 * @deprecated use getUserV2 instead
 */
@GetMapping("/user/{id}")
@Deprecated
public User getUser(@PathVariable Long id) {
    // This API will be ignored
}
```
