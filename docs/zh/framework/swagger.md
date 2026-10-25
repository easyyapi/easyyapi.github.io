# Swagger

EasyYapi 支持 Swagger 注解用于 API 文档。

## 支持的注解

- `@Api` — 将类标记为 Swagger 资源
- `@ApiOperation` — 描述一个操作（`value`、`notes`、`hidden`、`httpMethod`）
- `@ApiParam` — 描述一个参数（`value`、`defaultValue`、`required`、`hidden`、`example`）
- `@ApiModel` — 描述一个模型
- `@ApiModelProperty` — 描述模型属性（`value`、`notes`、`name`、`required`、`hidden`、`example`）
- `@ApiImplicitParam` / `@ApiImplicitParams` — 声明没有对应 Java 签名的参数，按 `paramType`（`query` / `form` / `path` / `header`）归类导出
- `@ApiResponse` / `@ApiResponses` — 将 `response <code>: <message>` 追加到端点描述中

## 示例

```java
@Api(tags = "用户管理")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @ApiOperation(value = "根据 ID 获取用户", notes = "返回单个用户")
    @GetMapping("/{id}")
    public User getUser(
            @ApiParam(value = "用户 ID", required = true)
            @PathVariable Long id) {
        // ...
    }
}
```

## 配置

参见 [可用配置规则](/zh/settings/config-rule) 自定义 Swagger 集成。
