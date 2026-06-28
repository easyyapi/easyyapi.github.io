# Multiple return types

Some APIs may return different types depending on the situation. EasyYapi provides several ways to handle this.

## Using method.return

```properties
method.return=groovy:it.returnType()
```

## Using method.return.main

For wrapper types such as `Result<T>`, use `method.return.main` to extract the main type:

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```

## Example

```java
public class Result<T> {
    private T data;
    private int code;
    private String message;
}

@GetMapping("/user/{id}")
public Result<User> getUser(@PathVariable Long id) {
    // method.return.main extracts User from Result<User>
}
```
