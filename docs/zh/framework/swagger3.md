# Swagger 3 (OpenAPI)

EasyYapi 支持 Swagger 3 / OpenAPI 3 注解。

## 支持的注解

- `@Tag` — 替代 `@Api`
- `@Operation` — 替代 `@ApiOperation`
- `@Parameter` — 替代 `@ApiParam`
- `@Schema` — 替代 `@ApiModel` / `@ApiModelProperty`

## 示例

```java
@Tag(name = "用户管理", description = "用于管理用户的 API")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Operation(summary = "根据 ID 获取用户", description = "返回单个用户")
    @GetMapping("/{id}")
    public User getUser(
            @Parameter(description = "用户 ID", required = true)
            @PathVariable Long id) {
        // ...
    }
}
```

## 配置

参见 [可用配置规则](/zh/settings/config-rule) 自定义 Swagger 3 集成。
