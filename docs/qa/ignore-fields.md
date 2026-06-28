# How to ignore fields

You can use the `field.ignore` rule to exclude specific fields from API documentation.

## Ignore by annotation

```properties
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")
```

## Ignore by name

```properties
field.ignore=groovy:it.name() == "password"
```

## Ignore by type

```properties
field.ignore=groovy:it.type().name().startsWith("org.internal.")
```

## Ignore with multiple conditions

```properties
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore") || it.name() == "password" || it.type().name().startsWith("org.internal.")
```

## Example

```java
public class User {
    private String name;

    @JsonIgnore
    private String password;  // ignored by annotation

    private String internalState;  // can be ignored by name rule
}
```
