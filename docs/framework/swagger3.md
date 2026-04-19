# Swagger 3 (OpenAPI)

EasyYapi supports Swagger 3 / OpenAPI 3 annotations.

## Supported Annotations

- `@Tag` — Replaces `@Api`
- `@Operation` — Replaces `@ApiOperation`
- `@Parameter` — Replaces `@ApiParam`
- `@Schema` — Replaces `@ApiModel` / `@ApiModelProperty`

## Example

```java
@Tag(name = "User Management", description = "APIs for managing users")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Operation(summary = "Get user by ID", description = "Returns a single user")
    @GetMapping("/{id}")
    public User getUser(
            @Parameter(description = "User ID", required = true)
            @PathVariable Long id) {
        // ...
    }
}
```

## Configuration

See [Available Configuration Rules](/settings/config-rule) for customizing Swagger 3 integration.
