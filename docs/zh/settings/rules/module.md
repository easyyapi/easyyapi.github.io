# ~~module~~

::: danger
此规则已废弃，请使用 [yapi.project](./yapi_project) 代替。`module` 现在是 `yapi.project` 的别名。
:::

设置 API 模块/项目名称。

## 用法

```properties
module=groovy:it.doc("module") ?: it.containingClass().doc("module")
```
