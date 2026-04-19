# IDE 设置

EasyYapi 提供了 IDE 级别的设置，可以在 IDEA 中进行配置。

## 打开设置

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## 通用设置

| 设置项 | 说明 |
|--------|------|
| postman.url | Postman 导出 URL |
| postman.token | Postman API Token |
| yapi.server | YApi 服务器地址 |
| yapi.token | YApi 项目 Token |
| project.name | 项目名称 |

## 导出设置

| 设置项 | 说明 |
|--------|------|
| outputDemo | 导出 Markdown 时生成响应 demo |
| outputCharset | 导出字符集 |

## 框架开关

| 设置项 | 说明 | 默认值 |
|--------|------|--------|
| feignEnable | 启用 Feign 客户端支持 | `false` |
| jaxrsEnable | 启用 JAX-RS 支持 | `true` |
| actuatorEnable | 启用 Spring Actuator 支持 | `false` |
| grpcEnable | 启用 gRPC 支持 | `true` |
| swaggerEnable | 启用 Swagger 支持 | `true` |
| swagger3Enable | 启用 Swagger 3 / OpenAPI 支持 | `true` |

## 推荐配置

EasyYapi 内置了推荐配置，可以在设置中启用。推荐配置包含常用的规则和类型转换。
