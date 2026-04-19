# Generic Types

EasyYapi supports generic types in API documentation.

## Generic Return Types

For methods returning generic wrapper types like `Result<T>`, use `method.return.main` to extract the main type:

```properties
method.return.main=groovy:it.returnType().typeArgs()[0]
```

## Type Conversion

Use `json.rule.convert` to convert generic types:

```properties
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

See [json.rule.convert](/settings/rules/json_rule_convert), [method.return](/settings/rules/method_return), and [method.return.main](/settings/rules/method_return_main) for more details.
