# Spring Actuator

EasyYapi supports exporting API documentation from Spring Boot Actuator endpoints.

## Overview

Spring Actuator support can automatically recognize Actuator endpoint classes (annotated with `@Endpoint`, `@WebEndpoint`, `@ControllerEndpoint`, `@RestControllerEndpoint`, `@ServletEndpoint`) and extract their API information.

## Enable Actuator Support

Actuator support is **disabled by default**. Enable it in IDE settings:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## Supported Annotations

| Annotation | Description |
|-----------|-------------|
| `@Endpoint` | Actuator endpoint (default id-based) |
| `@WebEndpoint` | Web-specific actuator endpoint |
| `@ControllerEndpoint` | Spring MVC actuator endpoint |
| `@RestControllerEndpoint` | REST actuator endpoint |
| `@ServletEndpoint` | Servlet-based actuator endpoint |

## Example

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

This will be exported as:
- `GET /actuator/custom` — Read operation
- `POST /actuator/custom/{name}` — Write operation
