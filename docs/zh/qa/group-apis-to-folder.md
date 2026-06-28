# 如何将 API 分组到文件夹

需要区分两个概念：

- **`folder.name`** — 导出树中显示的文件夹/分组名称（Postman 文件夹、YApi 分类菜单、Markdown 章节……）。用它可以把 API 组织到文件夹中。
- **`yapi.project`** — **YApi 项目 token**，决定 API 导出到哪个 YApi 项目。它由 `@project` 文档标签指定，**不能**用来设置文件夹。

## 使用 `folder.name` 规则

通过 `folder.name` 规则覆盖文件夹/分组名称：

```properties
# 用类的简单名作为文件夹名
folder.name=groovy:it.name()

# 或从类上读取自定义的 @folder 文档标签
folder.name=groovy:it.containingClass().doc("folder") ?: it.containingClass().name()
```

该规则基于 API 方法求值（`it` 即方法），`it.containingClass()` 返回控制器类。

## 使用 `@project` 标签（仅用于 YApi 项目）

`@project` 标签会被解析为 `yapi.project` 规则，用于选择 **API 所属的 YApi 项目**，**不是**用于把 API 分组到文件夹：

```java
/**
 * 用户管理 API
 *
 * @project user-management
 */
@RestController
@RequestMapping("/api/users")
public class UserController {
    // ...
}
```

```properties
# 内置默认规则（已由 yapi.project 扩展提供）：
yapi.project=#project
```

详见 [yapi.project](../settings/rules/yapi_project)。

## 使用 `api.tag` 规则

`api.tag` 为接口添加标签/分类。所有匹配的规则会按 `MERGE_DISTINCT` 方式合并：

```properties
# 从方法上读取 @tag 文档标签
api.tag=groovy:it.doc("tag")
```

标签可用于在 Postman/YApi 中过滤或标注，但不会决定文件夹树结构。
