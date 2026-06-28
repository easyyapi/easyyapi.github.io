# Complex class blocked

When a class is highly nested, recursive, or just very wide, EasyYapi stops expanding fields once a safety limit is reached. The remaining fields are silently dropped; an `INFO`-level log line is written to the IDE log:

```
Element limit exceeded while parsing <qualified-name>. Processed <n> elements. Stopping field expansion.
```

## Built-in limits

| Config key | Default | Meaning |
|---|---|---|
| `max.elements` | `512` | Total number of fields that can be expanded in a single build operation. |
| `max.deep` | `8` | Maximum nesting depth when resolving fields of nested types. |

Both are read from any rule source (project, extension, remote, global). When the limit is hit, EasyYapi does **not** throw — it just stops expanding further fields for that response/request body.

## Solutions

### 1. Raise the limits

If the class genuinely needs more fields, raise the limits in your `.easy.api.config`:

```properties
max.elements=2048
max.deep=16
```

> Setting these too high can cause slow exports or OOM for pathological class graphs — raise incrementally.

### 2. Ignore unnecessary fields

Exclude fields that don't need to be documented with [`field.ignore`](../settings/rules/field_ignore):

```properties
field.ignore=groovy:it.name() == "complexField" || it.type().name().startsWith("com.internal.")
```

### 3. Convert complex types to simple ones

Use [`json.rule.convert`](../settings/rules/json_rule_convert) to replace a complex type with a simple one:

```properties
json.rule.convert=groovy:it.type().name()=="com.example.ComplexType" => java.util.Map
```

### 4. Override the return type

If the method's declared return type is the source of the explosion, use [`method.return`](./multiple-return-types) to override it with a simpler one:

```properties
method.return=groovy:"com.example.SimpleResult<" + it.returnType().name() + ">"
```

> Do **not** confuse this with `method.return.main`, which only chooses the field to attach the `@return` doc comment to — it does not change the response schema.
