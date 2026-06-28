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

Use the `folder.name` rule to override the folder/group name shown in the exported tree. The rule is evaluated against the API method; `it.containingClass()` returns the controller class:

```properties
# Use the controller class simple name as the folder name
folder.name=groovy:it.containingClass().name()

# Or read a custom @folder doc tag from the class
folder.name=groovy:it.containingClass().doc("folder") ?: it.containingClass().name()
```

> **Do not confuse `folder.name` with `yapi.project`.** The `@module` and `@project` Javadoc tags resolve to `yapi.project`, which selects **which YApi project** the API belongs to — they do **not** set the folder. See [yapi.project](../settings/rules/yapi_project) and [How to group APIs to folder](./group-apis-to-folder) for details.
