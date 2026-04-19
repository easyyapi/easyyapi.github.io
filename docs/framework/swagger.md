# Swagger

EasyYapi supports Swagger annotations for API documentation.

## Supported Annotations

- `@Api` — Marks a class as a Swagger resource
- `@ApiOperation` — Describes an operation
- `@ApiParam` — Describes a parameter
- `@ApiModel` — Describes a model
- `@ApiModelProperty` — Describes a model property

## Example

```java
@Api(tags = "User Management")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @ApiOperation(value = "Get user by ID", notes = "Returns a single user")
    @GetMapping("/{id}")
    public User getUser(
            @ApiParam(value = "User ID", required = true)
            @PathVariable Long id) {
        // ...
    }
}
```

## Configuration

See [Available Configuration Rules](/settings/config-rule) for customizing Swagger integration.
