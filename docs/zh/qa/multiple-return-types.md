# 多种返回类型

某些 API 会根据情况返回不同的类型，或者把真正的载荷包装在 `Result<T>` 之类的泛型外壳里。EasyYapi 提供两条规则用于自定义响应 schema。

## `method.return` — 覆盖返回类型

`method.return` 可以用另一个类型（完整类名，可带泛型）替换解析得到的返回类型：

```properties
# 始终使用 Result<T> 作为响应类型
method.return=groovy:"com.itangcent.model.Result<" + it.returnType().name() + ">"
```

当方法签名返回 `Object` 或原始类型，但你希望 schema 体现具体类型时，这条规则很有用。

## `method.return.main` — 把 `@return` 文档挂到某个字段上

`method.return.main` **不是**用来提取类型的——它指定响应类型内部的**字段名**，方法的 `@return` 文档注释会挂到该字段上。

```properties
# 把 @return 文档挂到 Result<T> 的 "data" 字段
method.return.main=groovy:"data"
```

例如：

```java
/**
 * @return 用户信息
 */
@GetMapping("/user/{id}")
public Result<User> getUser(@PathVariable Long id) {
    return Result.ok(user);
}
```

不设置 `method.return.main` 时，`@return` 的文本 `"用户信息"` 会挂到根 `Result` 对象上。设置 `method.return.main=groovy:"data"` 后，注释会挂到 `data` 字段上——这通常才是包装类型想要的效果。

## 自动推断

当未显式设置 `method.return.main` 规则、且 **Settings → EasyApi → inferReturnMain** 启用时，EasyYapi 会自动检测类型为包装类泛型参数的字段（例如 `Result<T>` 中的 `data: T`），把它的名字作为 main 字段。

## 示例

```java
public class Result<T> {
    private T data;
    private int code;
    private String message;
}
```

```properties
# 使用 Result<UserInfo> 作为响应类型
method.return=groovy:"com.itangcent.model.Result<" + it.returnType().name() + ">"
# 把 @return 文档挂到 "data" 字段
method.return.main=groovy:"data"
```

## 带过滤的条件规则

两条规则都支持过滤器，只对特定的方法或返回类型生效：

```properties
# 只覆盖 *Controller 类中方法的返回类型
method.return[$class:com.example.*Controller]=groovy:"com.example.Result<" + it.returnType().name() + ">"

# 只在返回类型继承自 Result 时把 @return 挂到 "data"
method.return.main[groovy:it.returnType().isExtend("com.example.Result")]=data
```
