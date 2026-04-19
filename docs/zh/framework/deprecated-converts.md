# 废弃信息与类型转换

EasyYapi 提供了废弃信息和类型转换的内置扩展。

## 废弃信息

`deprecated` 扩展（默认启用）自动从 Java 和 Kotlin 代码中提取废弃信息：

```properties
# Java 废弃
method.doc[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
method.doc[@java.lang.Deprecated]=「已废弃」
field.doc[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
field.doc[@java.lang.Deprecated]=「已废弃」

# Kotlin 废弃
method.doc[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")
field.doc[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")
```

## 类型转换

`converts` 扩展（默认启用）提供常见 Java 类型的自动转换：

| 源类型 | 目标类型 |
|-------|---------|
| `org.bson.types.ObjectId` | `java.lang.String` |
| `java.util.Date` | `java.lang.String` |
| `java.sql.Date` | `java.lang.String` |
| `java.sql.Time` | `java.lang.String` |
| `java.sql.Timestamp` | `java.lang.String` |
| `java.time.LocalDateTime` | `java.lang.String` |
| `java.time.LocalDate` | `java.lang.String` |
| `java.math.BigInteger` | `java.lang.Long` |
| `java.net.URL` | `java.lang.String` |
| `AtomicBoolean` | `java.lang.Boolean` |
| `AtomicLong` | `java.lang.Long` |
| `AtomicInteger` | `java.lang.Integer` |

## 字段工具

`field-utils` 扩展（默认启用）提供字段处理的合理默认值：

- 忽略 `java.lang` 系统类的字段
- 忽略 `transient` 字段
- 忽略 `serialVersionUID`
- 只保留 `private`/`protected` 字段
- 忽略常见系统类型（`Class`、`ClassLoader`、`Thread`、`ThreadLocal` 等）
