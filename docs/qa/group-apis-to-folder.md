# How to group APIs to folder

You can use the `module` or `folder.name` rule to organize APIs into specific folders.

## Using the @module tag

Add the `@module` tag to the Javadoc of a class:

```java
/**
 * User Management API
 *
 * @module user-management
 */
@RestController
@RequestMapping("/api/users")
public class UserController {
    // ...
}
```

## Using the folder.name rule

Configure the `folder.name` rule:

```properties
folder.name=groovy:it.doc("module") ?: it.name()
```

## Using the api.tag rule

Use the `api.tag` rule to set tags used for grouping:

```properties
api.tag=groovy:it.doc("tag")
```
