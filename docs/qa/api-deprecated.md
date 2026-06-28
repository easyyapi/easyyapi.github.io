# How to mark API as deprecated

You can use the Java `@Deprecated` annotation or the Javadoc `@deprecated` tag to mark an API as deprecated.

## Using the @Deprecated annotation

```java
/**
 * Get user by ID
 * @deprecated use getUserV2 instead
 */
@Deprecated
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```

## Using the @deprecated tag

```java
/**
 * Get user by ID
 *
 * @deprecated use getUserV2 instead
 */
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```

## Configuration

Use the `api.status` rule to set the API status:

```properties
api.status=groovy:it.hasAnn("java.lang.Deprecated") ? "deprecated" : "done"
```
