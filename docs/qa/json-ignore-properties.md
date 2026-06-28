# Activate JsonIgnoreProperties support

Support for Jackson's `@JsonIgnoreProperties` is **built-in and enabled by default** — you do not need to add any rules. The `jackson` extension (shipped with EasyYapi) handles it.

## How it works

The `jackson` extension registers the following rules automatically:

```properties
# Class-level @JsonIgnoreProperties: ignore any field whose name is listed.
field.ignore=groovy:it.containingClass().annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")?.contains(it.name())

# Field-level @JsonIgnoreProperties (used during nested parsing).
field.parse.before[@com.fasterxml.jackson.annotation.JsonIgnoreProperties]=groovy:```
    if (!fieldContext) return
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
    for(property in properties){
        def path = fieldContext.property(property)
        session.set("json-ignore", path, true)
    }
```
field.ignore=groovy:```
    return fieldContext ? session.get("json-ignore", fieldContext.path()) : null
```
```

You do **not** need to copy these into your own config — they are loaded from `extensions/jackson.config` at startup.

## Example

```java
@JsonIgnoreProperties({"internalId", "createdAt"})
public class User {
    private Long id;
    private String name;
    private Long internalId;  // ignored
    private Date createdAt;   // ignored
}
```

`internalId` and `createdAt` are automatically excluded from the exported request/response schema.

> **Tip:** To disable this behaviour, turn off the `jackson` extension in **Settings → EasyApi → Extensions**. To ignore fields for non-Jackson reasons, write a custom [`field.ignore`](../settings/rules/field_ignore) rule.

See [Jackson](/framework/jackson) for the full list of supported Jackson annotations.
