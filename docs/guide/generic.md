# Generic Types

EasyYapi resolves generic types in API documentation automatically — `Result<User>` is expanded into a `Result` object whose `data` field has the structure of `User`, without any extra configuration.

## Overriding the return type

If the declared return type doesn't reflect what you want documented (e.g. the method returns `Object` or a raw type), use `method.return` to override it with a concrete generic type:

```properties
method.return=groovy:"com.example.Result<" + it.returnType().name() + ">"
```

## Attaching `@return` to a wrapper field

`method.return.main` does **not** change the return type — it specifies the **field name** inside the response type where the method's `@return` doc comment should be attached:

```properties
method.return.main=groovy:"data"
```

With `Result<User>` and the rule above, the `@return` comment lands on the `data` field instead of the root `Result` object.

## Type Conversion

Use `json.rule.convert` to convert types:

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

See [json.rule.convert](/settings/rules/json_rule_convert), [method.return](/settings/rules/method_return), and [method.return.main](/settings/rules/method_return_main) for more details.
