# json.unwrapped

Control Jackson `@JsonUnwrapped` annotation handling.

## Usage

```properties
json.unwrapped=@com.fasterxml.jackson.annotation.JsonUnwrapped
```

When enabled, fields annotated with `@JsonUnwrapped` will be flattened into the parent object in the API documentation, matching Jackson's serialization behavior.

## Example

```java
public class User {
    private String name;

    @JsonUnwrapped
    private Address address;
}

public class Address {
    private String street;
    private String city;
}
```

With `json.unwrapped` enabled, the `User` documentation will show `name`, `street`, and `city` as flat fields instead of a nested `address` object.
