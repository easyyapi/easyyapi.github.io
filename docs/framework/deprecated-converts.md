# Deprecated & Converts

EasyYapi provides built-in extensions for deprecated info and type conversions.

## Deprecated Info

The `deprecated` extension (enabled by default) automatically extracts deprecation information from Java and Kotlin code:

```properties
# Java deprecated
method.doc[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
method.doc[@java.lang.Deprecated]=「已废弃」
field.doc[#deprecated]=groovy:"\n「已废弃」" + it.doc("deprecated")
field.doc[@java.lang.Deprecated]=「已废弃」

# Kotlin deprecated
method.doc[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")
field.doc[@kotlin.Deprecated]=groovy:"\n「已废弃」" + it.ann("kotlin.Deprecated","message")
```

## Type Converts

The `converts` extension (enabled by default) provides automatic type conversions for common Java types:

| From | To |
|------|----|
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

## Field Utils

The `field-utils` extension (enabled by default) provides sensible defaults for field handling:

- Ignore fields from `java.lang` system classes
- Ignore `transient` fields
- Ignore `serialVersionUID`
- Only keep `private`/`protected` fields
- Ignore common system types (`Class`, `ClassLoader`, `Thread`, `ThreadLocal`, etc.)
