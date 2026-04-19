# field.demo

Set the demo value for a field.

## Usage

```properties
field.demo=@demo
```

The demo value is used in the API documentation to show an example value.

## Example

```java
public class User {
    /**
     * Username
     * @demo admin
     */
    private String name;
}
```
