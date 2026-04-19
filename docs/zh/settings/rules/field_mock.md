# field.mock

Set mock data for a field.

## Usage

```properties
field.mock=@mock
field.mock.resolveProperty=true
```

This is one of the most commonly used rules. It determines how mock data is generated for fields.

## Example

```java
public class User {
    /**
     * Username
     * @mock admin
     */
    private String name;

    /**
     * Email
     * @mock user@example.com
     */
    private String email;
}
```

## resolveProperty

When `field.mock.resolveProperty=true`, property placeholders in mock values will be resolved.
