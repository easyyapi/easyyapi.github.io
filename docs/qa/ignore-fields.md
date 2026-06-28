# How to ignore fields

Use the `field.ignore` rule to exclude specific fields from API documentation.

> **Built-in behaviour:** The `jackson` extension (enabled by default) already ignores fields annotated with `@JsonIgnore` via `field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value`. You only need a custom rule below for **non-Jackson** cases.

## Ignore by name

```properties
field.ignore=groovy:it.name() == "password"
```

## Ignore by type

```properties
field.ignore=groovy:it.type().name().startsWith("org.internal.")
```

## Ignore by custom annotation

```properties
field.ignore=groovy:it.hasAnn("com.example.Internal")
```

## Combine multiple conditions

```properties
field.ignore=groovy:it.name() == "password" || it.type().name().startsWith("org.internal.") || it.hasAnn("com.example.Internal")
```

> Rules for the same key are merged — your custom `field.ignore` rule will run **in addition to** the built-in Jackson rule, not replace it. If any matching rule returns `true`, the field is ignored.

## Example

```java
public class User {
    private String name;

    @JsonIgnore
    private String password;  // ignored by the built-in Jackson rule

    private String internalState;  // ignored by a custom name/type rule
}
```

See also [JsonIgnoreProperties support](./json-ignore-properties) for ignoring multiple fields via class-level annotations.
