# method.return

Set the return type for a method.

This is one of the most commonly used rules. It allows you to customize the return type resolution.

## Usage

```properties
method.return=groovy:it.returnType()
```

## Example

```properties
# Unwrap generic types
method.return=groovy:it.returnType().resolve("com.example.Result<T>", "T")
```
