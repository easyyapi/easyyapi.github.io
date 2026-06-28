# Swagger

EasyYapi 支持 Swagger 注解用于 API 文档。

## 支持的注解

- `@Api` — 将类标记为 Swagger 资源
- `@ApiOperation` — 描述一个操作
- `@ApiParam` — 描述一个参数
- `@ApiModel` — 描述一个模型
- `@ApiModelProperty` — 描述模型属性

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
