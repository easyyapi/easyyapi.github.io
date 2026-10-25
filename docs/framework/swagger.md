# Swagger

EasyYapi supports Swagger annotations for API documentation.

## Supported Annotations

- `@Api` — Marks a class as a Swagger resource
- `@ApiOperation` — Describes an operation (`value`, `notes`, `hidden`, `httpMethod`)
- `@ApiParam` — Describes a parameter (`value`, `defaultValue`, `required`, `hidden`, `example`)
- `@ApiModel` — Describes a model
- `@ApiModelProperty` — Describes a model property (`value`, `notes`, `name`, `required`, `hidden`, `example`)
- `@ApiImplicitParam` / `@ApiImplicitParams` — Declares parameters with no Java signature, routed by `paramType` (`query` / `form` / `path` / `header`)
- `@ApiResponse` / `@ApiResponses` — Appends `response <code>: <message>` to the endpoint description

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
