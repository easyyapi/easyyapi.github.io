# enum.use.custom

Determines which enum field to use for serialization.

## Usage

```properties
# Use enum constant name (equivalent to deprecated enum.use.name)
enum.use.custom=name

# Use enum ordinal (equivalent to deprecated enum.use.ordinal)
enum.use.custom=ordinal

# Use a custom field from the enum (e.g., code, value, etc.)
enum.use.custom=code
```

## Values

| Value | Description |
|-------|-------------|
| `name` or `name()` | Use enum constant name (default) |
| `ordinal` or `ordinal()` | Use enum ordinal number |
| Any other string | Use that instance field's value |

## Examples

Given this enum:
```java
enum UserType {
    GUEST(30, "unspecified"),
    ADMIN(1100, "administrator");
    
    private final Integer code;
    private final String desc;
}
```

| Configuration | Result |
|--------------|--------|
| `enum.use.custom=name` | `"GUEST"`, `"ADMIN"` |
| `enum.use.custom=ordinal` | `0`, `1` |
| `enum.use.custom=code` | `30`, `1100` |
| `enum.use.custom=desc` | `"unspecified"`, `"administrator"` |
