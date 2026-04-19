# 多种返回类型

某些 API 可能根据情况返回不同的类型。EasyYapi 提供了多种方式来处理这种情况。

## 使用 method.return

```properties
method.return=groovy:it.returnType()
```

## 使用 method.return.main

对于 `Result<T>` 等包装类型，使用 `method.return.main` 提取主要类型：

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```

## 示例

```java
public class Result<T> {
    private T data;
    private int code;
    private String message;
}

@GetMapping("/user/{id}")
public Result<User> getUser(@PathVariable Long id) {
    // method.return.main 从 Result<User> 中提取 User
}
```
