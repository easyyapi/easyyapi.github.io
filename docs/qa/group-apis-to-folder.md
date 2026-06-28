# How to group APIs to folder

There are two distinct concepts to keep in mind:

- **`folder.name`** — the folder/group name shown in the exported tree (Postman folder, YApi cat menu, Markdown section, …). Use this to organize APIs into folders.
- **`yapi.project`** — the **YApi project token** that determines which YApi project the APIs are exported to. `module` and `project` are legacy aliases for `yapi.project`; they do **not** set the folder.

## Using the `folder.name` rule

Configure the `folder.name` rule to override the folder/group name:

```properties
# Use the class simple name as the folder name
folder.name=groovy:it.name()

# Or read a custom @folder doc tag from the class
folder.name=groovy:it.containingClass().doc("folder") ?: it.containingClass().name()
```

The rule is evaluated against the API method (`it` is the method); `it.containingClass()` returns the controller class.

## Using the `@module` / `@project` tag (YApi project only)

The `@module` and `@project` tags resolve to the `yapi.project` rule and select **which YApi project** the API belongs to — they are *not* for grouping APIs into folders:

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

```properties
# Default built-in rule (already provided by the yapi.project extension):
yapi.project=#project
yapi.project=#module
```

See [yapi.project](../settings/rules/yapi_project) for details.

## Using the `api.tag` rule

`api.tag` adds tags/categories to an endpoint. Tags are merged across all matching rules (`MERGE_DISTINCT`):

```properties
# Read a @tag doc tag from the method
api.tag=groovy:it.doc("tag")
```

Tags are useful for filtering or labeling in Postman/YApi but do not control the folder tree.
