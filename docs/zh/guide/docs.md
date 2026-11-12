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

### Record 组件

Java `record` 的组件没有独立的字段注释，需要在 record 自身的 Javadoc 上用 `@param` 标签描述各个组件。自 v3.2.6 起，它们会作为字段描述导出，且对所有导出渠道生效：

```java
/**
 * 用户记录
 *
 * @param id 用户 ID
 * @param name 用户名称
 */
public record UserRecord(Long id, String name) {}
```

## 描述中重复的接口名称

方法注释的第一行会同时成为 API 名称和导出描述的第一行。自 v3.2.7 起，
EasyYapi 在导出、发送或扫描 API 时默认删除描述里这行重复的标题：

```java
/**
 * 根据 ID 查询用户
 *
 * 返回与给定 ID 匹配的用户。
 */
```

导出描述现在从"返回与给定 ID 匹配的用户。"开始，不再重复"根据 ID 查询用户"。

比较发生在最终的 `name` 和 `description` 字段上，因此由 `api.name` /
`method.doc` 规则或 Swagger 注解设置的名称同样生效。其余行保留原有缩进，
Markdown 代码块不会被破坏。

可在 `Settings > Other Settings > EasyApi > Parsing & Output > Output Format`
下关闭 **Remove API name duplicated in description**
（`removeDuplicateTitleFromDescription`）。修改在下一次解析时生效，无需重启 IDE。

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

KDoc 的描述文本也会作为 API 标题使用，并作为 API 文件夹名称的候选值。为接口或类写清晰的第一段 KDoc，可以同时改善导出的名称和分组；如果项目规则显式设置了名称或文件夹，则以规则为准。

## ScalaDoc

ScalaDoc 是 Scala 中的文档注释格式。