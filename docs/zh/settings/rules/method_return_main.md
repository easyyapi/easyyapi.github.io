# method.return.main

Extract the main return type from wrapper types.

This is one of the most commonly used rules. It is used to extract the actual data type from wrapper types like `Result<T>`.

## Usage

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```

## Example

For a method returning `Result<User>`:

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```

This extracts `User` from `Result<User>`.
