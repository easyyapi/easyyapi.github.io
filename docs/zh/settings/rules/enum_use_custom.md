# enum.use.custom

确定枚举序列化时使用的字段。

## 用法

```properties
# 使用枚举名称（等同于已废弃的 enum.use.name）
enum.use.custom=name

# 使用枚举序号（等同于已废弃的 enum.use.ordinal）
enum.use.custom=ordinal

# 使用自定义字段（如 code、value 等）
enum.use.custom=code
```

## 取值

| 值 | 说明 |
|----|------|
| `name` 或 `name()` | 使用枚举常量名称（默认） |
| `ordinal` 或 `ordinal()` | 使用枚举序号 |
| 其他字符串 | 使用该实例字段的值 |

## 示例

假设有如下枚举：
```java
enum UserType {
    GUEST(30, "未指定"),
    ADMIN(1100, "管理员");
    
    private final Integer code;
    private final String desc;
}
```

| 配置 | 结果 |
|------|------|
| `enum.use.custom=name` | `"GUEST"`, `"ADMIN"` |
| `enum.use.custom=ordinal` | `0`, `1` |
| `enum.use.custom=code` | `30`, `1100` |
| `enum.use.custom=desc` | `"未指定"`, `"管理员"` |
