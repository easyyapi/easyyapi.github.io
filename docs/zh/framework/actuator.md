# Spring Actuator

EasyYapi 支持从 Spring Boot Actuator 端点导出 API 文档。

## 概述

Spring Actuator 支持可以自动识别 Actuator 端点类（带有 `@Endpoint`、`@WebEndpoint`、`@ControllerEndpoint`、`@RestControllerEndpoint`、`@ServletEndpoint` 注解的类）并提取其 API 信息。

## 启用 Actuator 支持

Actuator 支持**默认禁用**。在 IDE 设置中启用：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## 支持的注解

| 注解 | 说明 |
|-----|------|
| `@Endpoint` | Actuator 端点（基于 id） |
| `@WebEndpoint` | Web 专用 Actuator 端点 |
| `@ControllerEndpoint` | Spring MVC Actuator 端点 |
| `@RestControllerEndpoint` | REST Actuator 端点 |
| `@ServletEndpoint` | 基于 Servlet 的 Actuator 端点 |

## 示例

```java
@Endpoint(id = "custom")
@Component
public class CustomEndpoint {

    @ReadOperation
    public Map<String, Object> customInfo() {
        return Map.of("status", "ok");
    }

    @WriteOperation
    public void updateConfig(@Selector String name, String value) {
        // update config
    }
}
```

将被导出为：
- `GET /actuator/custom` — 读取操作
- `POST /actuator/custom/{name}` — 写入操作
