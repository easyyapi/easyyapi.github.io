# helper

常用操作辅助方法。提供类型解析和脚本中其他常用操作的实用工具。

## 用法

```properties
method.return=groovy:'''
def resolvedType = helper.resolveType(it.returnType())
return resolvedType ?: it.returnType().name()
'''
```

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `helper.resolveType(type)` | `String?` | 将类型解析为带泛型的简单名称 |
| `helper.resolveType(type, context)` | `String?` | 使用额外上下文解析类型 |

## 示例

### 解析返回类型

```properties
method.return=groovy:'''
def returnType = it.returnType()
if (returnType) {
    def resolved = helper.resolveType(returnType)
    logger.info("Return type: " + resolved)
    return resolved
}
return "void"
'''
```

### 解析字段类型

```properties
field.type=groovy:'''
def type = it.type()
def resolved = helper.resolveType(type)
return resolved ?: type.name()
'''
```

### 带泛型的类型解析

```properties
field.type=groovy:'''
def type = it.type()
if (type.isCollection()) {
    def elementType = type.typeArgs()?.get(0)
    if (elementType) {
        return "List<" + helper.resolveType(elementType) + ">"
    }
}
return helper.resolveType(type)
'''
```

## 常见用例

### 简化复杂类型

```properties
field.type=groovy:'''
def type = it.type()
def name = type.name()

if (name.startsWith("java.util.")) {
    return helper.resolveType(type)
}
if (name.startsWith("java.lang.")) {
    return type.simpleName()
}
return name
'''
```

### 处理泛型类型

```properties
field.mock=groovy:'''
def type = it.type()

if (type.isMap()) {
    return "{}"
}
if (type.isCollection()) {
    return "[]"
}
if (type.isArray()) {
    return "[]"
}

return null
'''
```

## 注意事项

- `helper` 工具提供简化常用操作的便捷方法
- 将 `helper` 与 `it.type()` 结合使用进行类型相关操作
- `resolveType` 方法自动处理泛型类型参数

## 相关链接

- [it](./it) - 当前上下文对象（包括类型方法）
- [tool](./tool) - 通用工具方法
- [logger](./logger) - 日志工具
