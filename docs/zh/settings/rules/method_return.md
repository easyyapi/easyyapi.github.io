# method.return

设置方法的返回类型。

这是最常用的规则之一，允许你自定义返回类型的解析方式。

## 用法

```properties
method.return=groovy:it.returnType()
```

## 示例

### 将返回类型包装为泛型包装类

当所有 API 返回原始类型，需要自动包装为通用响应类（如 `Result<T>`）时：

```properties
method.return=groovy:"com.example.Result<" + it.returnType() + ">"
```

对于返回 `User` 的方法，将生成 `com.example.Result<com.example.User>`。

### 使用固定类型覆盖返回类型

```properties
method.return=groovy:"com.example.Result"
```
