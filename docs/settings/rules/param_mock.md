# param.mock

Set mock data for API parameters.

## Usage

```properties
param.mock=@mock
```

Use the `@mock` tag in Javadoc to specify mock values for parameters:

```java
/**
 * @param name username @mock admin
 */
@GetMapping("/user")
public User getUser(@RequestParam String name) { ... }
```

## See Also

- [field.mock](./field_mock) — Set mock data for response fields
