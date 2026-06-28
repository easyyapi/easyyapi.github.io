# 如何将 API 标记为废弃

EasyYapi 会自动标记废弃的 API —— 以下常见场景**无需任何配置**。

## 内置行为

内置 `yapi` 扩展在检测到以下任一情况时，会自动为 API 添加 `deprecated` 标签：

- 方法或其所属类标注了 `@java.lang.Deprecated`
- 方法的 Javadoc 中包含 `@deprecated` 标签
- （Kotlin）方法或其所属类标注了 `@kotlin.Deprecated`

底层规则（已内置，此处仅供查阅）：

```properties
api.tag[@java.lang.Deprecated]=deprecated
api.tag[#deprecated]=deprecated
api.tag[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=deprecated
api.tag[groovy:it.containingClass().hasDoc("deprecated")]=deprecated
```

## 示例

```java
/**
 * 根据 ID 获取用户
 *
 * @deprecated 使用 getUserV2 替代
 */
@Deprecated
@GetMapping("/user/{id}")
public User getUser(@PathVariable Long id) {}
```

该接口会自动被打上 `deprecated` 标签，并在文档中追加废弃说明。

## status 与 tag 的区别

`api.status` 是另一条规则，用于 `@undone` / `@todo` 文档标签（导出为 `undone` 状态），**不**用于废弃标记。废弃的 API 通过 `api.tag` 体现，而非 `api.status`。
