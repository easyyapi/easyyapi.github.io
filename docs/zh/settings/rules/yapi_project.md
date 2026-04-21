# yapi.project

设置 API 分组所属的 YApi 项目。决定了导出的 API 属于哪个 YApi 项目。

## 用法

```properties
yapi.project=groovy:it.doc("project") ?: it.containingClass().doc("project")
```

## 别名

`module` 和 `project` 是 `yapi.project` 的别名。保留这些别名是为了向后兼容，但推荐使用 `yapi.project`。

```properties
# 以下写法等效：
yapi.project=groovy:it.doc("project")
module=groovy:it.doc("project")
project=groovy:it.doc("project")
```

## 默认行为

默认情况下，`yapi.project` 从 Javadoc/KDoc 注释中读取 `#project` 或 `#module` 标签：

```properties
yapi.project=#project
yapi.project=#module
```
