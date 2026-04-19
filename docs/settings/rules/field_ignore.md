# field.ignore

Ignore a field in API documentation.

## Usage

```properties
# Ignore fields by annotation
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# Ignore fields by name
field.ignore=groovy:it.name() == "password"
```

## Example

```java
public class User {
    private String name;

    @JsonIgnore
    private String password;  // This field will be ignored
}
```
