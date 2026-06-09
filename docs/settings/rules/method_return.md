# method.return

Set the return type for a method.

This is one of the most commonly used rules. It allows you to customize the return type resolution.

## Usage

```properties
method.return=groovy:it.returnType()
```

## Examples

### Wrap return type in a generic wrapper

When all APIs return a raw type and you want to wrap them in a common response class (e.g., `Result<T>`):

```properties
method.return=groovy:"com.example.Result<" + it.returnType() + ">"
```

For a method returning `User`, this produces `com.example.Result<com.example.User>`.

### Override return type with a fixed type

```properties
method.return=groovy:"com.example.Result"
```
