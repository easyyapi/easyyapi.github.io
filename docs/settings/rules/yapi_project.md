# yapi.project

Set the YApi project for API grouping. This determines which YApi project the exported APIs belong to.

## Usage

```properties
yapi.project=groovy:it.doc("project") ?: it.containingClass().doc("project")
```

## Aliases

`module` and `project` are aliases for `yapi.project`. They are kept for backward compatibility but `yapi.project` is the preferred key.

```properties
# These are equivalent:
yapi.project=groovy:it.doc("project")
module=groovy:it.doc("project")
project=groovy:it.doc("project")
```

## Default Behavior

By default, `yapi.project` reads the `#project` or `#module` tag from Javadoc/KDoc comments:

```properties
yapi.project=#project
yapi.project=#module
```
