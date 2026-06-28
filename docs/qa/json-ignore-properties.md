# Activate JsonIgnoreProperties support

EasyYapi can support Jackson's `@JsonIgnoreProperties` annotation to ignore specific properties during serialization.

## Configuration

Add the following rule to the configuration file:

```properties
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore") || it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
```

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

## Note

For class-level `@JsonIgnoreProperties`, EasyYapi needs to process the annotation at the class level and apply it to all matching fields.
