# YApi Mock

EasyYapi supports syncing field mock rules to the YApi Mock service for frontend development.

## Configuration

### Enable Mock

Add mock rules in your config file:

```properties
field.mock=@mock
```

### Mock Rules

Use the `@mock` tag in Javadoc:

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

    /**
     * Age
     * @mock 25
     */
    private Integer age;
}
```

## Common Mock Values

| Type | Mock Value | Description |
|------|-----------|-------------|
| String | `@string` | Random string |
| String | `@name` | Random name |
| String | `@email` | Random email |
| String | `@url` | Random URL |
| String | `@ip` | Random IP |
| Integer | `@integer` | Random integer |
| Boolean | `@boolean` | Random boolean |
| Date | `@date` | Random date |
