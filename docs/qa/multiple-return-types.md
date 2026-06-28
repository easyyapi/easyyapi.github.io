# Multiple return types

Some APIs return different types depending on the situation, or wrap the real payload in a generic envelope such as `Result<T>`. EasyYapi provides two rules to customise the response schema.

## `method.return` — override the return type

`method.return` lets you replace the resolved return type with a different one (full class name, optionally with generics):

```properties
# Always use Result<T> as the response type
method.return=groovy:"com.itangcent.model.Result<" + it.returnType().name() + ">"
```

This is useful when the method signature returns `Object` or a raw type but you want the schema to reflect a concrete type.

## `method.return.main` — attach `@return` doc to a field

`method.return.main` does **not** extract a type — it specifies the **field name** inside the response type where the method's `@return` doc comment should be attached.

```properties
# Attach the @return doc to the "data" field of Result<T>
method.return.main=groovy:"data"
```

For example, given:

```java
/**
 * @return the user info
 */
@GetMapping("/user/{id}")
public Result<User> getUser(@PathVariable Long id) {
    return Result.ok(user);
}
```

Without `method.return.main`, the `@return` text `"the user info"` is attached to the root `Result` object. With `method.return.main=groovy:"data"`, the comment is attached to the `data` field instead, which is usually what you want for a wrapper type.

## Auto-detection

When no explicit `method.return.main` rule is set and **Settings → EasyApi → inferReturnMain** is enabled, EasyYapi auto-detects the field whose type is the generic type parameter of the wrapper (e.g., `data: T` in `Result<T>`) and uses its name as the main field.

## Example

```java
public class Result<T> {
    private T data;
    private int code;
    private String message;
}
```

```properties
# Use Result<UserInfo> as the response type
method.return=groovy:"com.itangcent.model.Result<" + it.returnType().name() + ">"
# Attach @return docs to the "data" field
method.return.main=groovy:"data"
```

## Conditional rules

Both rules accept filters so they only apply to specific methods or return types:

```properties
# Only override the return type for methods in *Controller classes
method.return[$class:com.example.*Controller]=groovy:"com.example.Result<" + it.returnType().name() + ">"

# Only attach @return to "data" when the return type extends Result
method.return.main[groovy:it.returnType().isExtend("com.example.Result")]=data
```
