# ~~module~~

::: danger
This rule is deprecated. Use [yapi.project](./yapi_project) instead. `module` is now an alias for `yapi.project`.
:::

Set the API module/project name.

## Usage

```properties
module=groovy:it.doc("module") ?: it.containingClass().doc("module")
```
