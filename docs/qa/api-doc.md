# How to set API/folder name and description

You can use Javadoc and configuration rules to customize the name and description of APIs and folders.

## API name

Use the first line of Javadoc as the API name:

```java
/**
 * Get user by ID
 */
@GetMapping("/{id}")
public User getUser(@PathVariable Long id) {}
```

Or use the `api.name` rule:

```properties
api.name=groovy:it.doc("apiName") ?: it.comment()
```

## API description

The full Javadoc comment (excluding tags) is used as the API description.

## Folder name

Use the `@module` tag:

```java
/**
 * User Management API
 *
 * @module user-management
 */
@RestController
public class UserController {}
```

Or use the `folder.name` rule:

```properties
folder.name=groovy:it.doc("module") ?: it.name()
```
