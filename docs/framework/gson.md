# Gson

EasyYapi supports Gson annotations for field name mapping and serialization control.

## Extension Config

```properties
# Gson support (enabled by default when com.google.gson.annotations.SerializedName is on classpath)
field.name=@com.google.gson.annotations.SerializedName#value
field.ignore=!@com.google.gson.annotations.Expose#serialize
```

## Supported Annotations

| Annotation | Rule | Description |
|-----------|------|-------------|
| `@SerializedName` | `field.name` | Use the specified name instead of the field name |
| `@Expose` | `field.ignore` | Ignore fields where `serialize=false` |

## Example

```java
public class User {
    @SerializedName("user_name")
    private String name;

    @Expose(serialize = false)
    private String password;
}
```

In this example, `name` will be documented as `user_name`, and `password` will be ignored.
