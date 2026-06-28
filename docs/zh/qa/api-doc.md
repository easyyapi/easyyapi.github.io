# 如何设置 API/文件夹名称和描述

你可以使用 Javadoc 和配置规则自定义 API 和文件夹的名称和描述。

## API 名称

使用 Javadoc 第一行作为 API 名称：

```java
/**
 * 根据ID获取用户
 */
@GetMapping("/{id}")
public User getUser(@PathVariable Long id) {}
```

或使用 `api.name` 规则：

```properties
api.name=groovy:it.doc("apiName") ?: it.comment()
```

## API 描述

完整的 Javadoc 注释（不含标签）将作为 API 描述。

## 文件夹名称

使用 `folder.name` 规则覆盖导出树中显示的文件夹/分组名称。该规则基于 API 方法求值；`it.containingClass()` 返回控制器类：

```properties
# 用控制器类的简单名作为文件夹名
folder.name=groovy:it.containingClass().name()

# 或从类上读取自定义的 @folder 文档标签
folder.name=groovy:it.containingClass().doc("folder") ?: it.containingClass().name()
```

> **不要把 `folder.name` 和 `yapi.project` 混淆。** `@module` 和 `@project` Javadoc 标签会被解析为 `yapi.project`，用于选择 **API 所属的 YApi 项目**，**不能**用来设置文件夹。详见 [yapi.project](../settings/rules/yapi_project) 和 [如何将 API 分组到文件夹](./group-apis-to-folder)。
