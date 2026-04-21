# method.return.main

Specify a field name within the response type where the `@return` doc comment should be placed.

This is useful for wrapper types like `Result<T>`, where you want the `@return` Javadoc to be attached to the main data field (e.g., `data`) rather than the wrapper itself.

## Usage

```properties
method.return.main[groovy:it.returnType().isExtend("Result")]=data
```

This tells EasyYapi: for methods whose return type extends `Result`, attach the `@return` doc comment to the field named `data`.

## Example

Given this method:

```java
/**
 * @return processed result
 */
public Result<Void> process() { ... }
```

And this rule:

```properties
method.return.main[groovy:it.returnType().isExtend("Result")]=data
```

The `@return "processed result"` comment will be attached to the `data` field in the `Result` response model, rather than to the `Result` wrapper itself.

## Auto-detection

When no `method.return.main` rule is set, EasyYapi can auto-detect the main field if the **Infer Return Main** IDE setting is enabled (default: on). It finds the first generic type parameter field in the response model (e.g., `data: T` in `Result<T>`).

You can configure this in:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>
