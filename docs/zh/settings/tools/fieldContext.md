# fieldContext

字段上下文工具。提供在字段处理规则中处理 JSON 字段路径的辅助方法。

## 用法

```properties
field.ignore=groovy:'''
def path = fieldContext.path()
if (path.contains("ignoredField")) {
    return true
}
return false
'''
```

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `fieldContext.path()` | `String` | 获取当前字段的完整 JSON 路径 |
| `fieldContext.property(name)` | `String` | 获取相对于父级的命名属性的 JSON 路径 |
| `fieldContext.toString()` | `String` | 返回字段路径（与 `path()` 相同） |

## 工作原理

在 JSON 转换规则中处理字段时，`fieldContext` 会自动提供。它跟踪正在构建的 JSON 结构中的当前位置。

### 路径示例

| 字段位置 | `fieldContext.path()` |
|----------------|----------------------|
| 顶级字段 `name` | `"name"` |
| 嵌套字段 `user.name` | `"user.name"` |
| 数组元素 `items[0].id` | `"items.id"` |

### 属性解析

`property(name)` 方法返回相对于当前字段父级的路径：

| 当前路径 | `property("other")` |
|--------------|---------------------|
| `"user.name"` | `"user.other"` |
| `"name"` | `"other"` |
| `"data.items.value"` | `"data.items.other"` |

## 示例

### 忽略特定路径

```properties
field.ignore=groovy:'''
def ignoredPaths = ["password", "secret", "token", "internal.id"]
def path = fieldContext.path()
return ignoredPaths.any { path.endsWith(it) || path.contains("." + it) }
'''
```

### 基于路径的条件 Mock

```properties
field.mock=groovy:'''
def path = fieldContext.path()

if (path.endsWith(".id")) {
    return "12345"
}
if (path.endsWith(".name")) {
    return "mock_name"
}
if (path.contains("user.")) {
    return "mock_user_value"
}

return null
'''
```

### 引用兄弟字段

```properties
field.mock=groovy:'''
def siblingPath = fieldContext.property("status")
logger.info("Current field: " + fieldContext.path())
logger.info("Sibling path: " + siblingPath)
return "mock_value"
'''
```

### 基于路径的验证

```properties
field.required=groovy:'''
def path = fieldContext.path()
def requiredPaths = ["user.id", "user.name", "order.orderId"]

if (requiredPaths.contains(path)) {
    return true
}
return false
'''
```

## 使用场景

1. **条件处理**：根据字段位置应用不同规则
2. **路径感知 Mock**：根据字段位置生成 mock 值
3. **选择性忽略**：根据路径模式忽略字段
4. **跨字段引用**：引用兄弟或父字段

## 相关链接

- [it](./it) - 当前上下文对象
- [api](./api) - 用于修改端点元数据的 API 工具
