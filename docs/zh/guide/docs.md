# 注释规范

EasyYapi 基于 Javadoc、KDoc 和 ScalaDoc 解析生成 API 文档。

## Javadoc

Javadoc 是 Java 中标准的文档注释格式。EasyYapi 使用 Javadoc 来提取 API 的名称、描述和参数信息。

### 基本格式

```java
/**
 * API 名称（第一行）
 *
 * API 详细描述
 *
 * @param name 参数描述
 * @return 返回值描述
 */
@GetMapping("/hello")
public String hello(@RequestParam String name) {
    return "Hello " + name;
}
```

### 常用标签

| 标签 | 用途 | 示例 |
|------|------|------|
| `@param` | 参数描述 | `@param name 用户名` |
| `@return` | 返回值描述 | `@return 问候信息` |
| `@deprecated` | 标记废弃 | `@deprecated 使用 helloV2 替代` |
| `@module` | API 分组 | `@module 用户管理` |
| `@mock` | Mock 数据 | `@mock admin` |
| `@see` | 参见 | `@see User` |

## KDoc

KDoc 是 Kotlin 中的文档注释格式，类似于 Javadoc 但支持 Markdown 语法。

### 基本格式

```kotlin
/**
 * API 名称
 *
 * API 详细描述
 *
 * @param name 参数描述
 * @return 返回值描述
 */
@GetMapping("/hello")
fun hello(@RequestParam name: String): String {
    return "Hello $name"
}
```

## ScalaDoc

ScalaDoc 是 Scala 中的文档注释格式。

::: warning
由于 Scala 插件中提供的 `openapi` 变化过于频繁，Scala 不再作为默认支持选项。
:::
