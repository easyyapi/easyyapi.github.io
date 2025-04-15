# endpoint.prefix.path

> 仅适用于ActuatorEndpointExporter，用于支持从Spring Boot Actuator导出API

该规则用于配置Spring Boot Actuator端点的请求前缀路径。

## 默认推荐配置

```properties
# 使用spring配置中的context-path
endpoint.prefix.path=${server.servlet.context-path}
```

## 适用范围

`endpoint.prefix.path`仅适用于从Spring Boot Actuator导出APIs。

**不适用于常规的Web API路径**

- 对于普通的Web API路径前缀，请使用`class.prefix.path`配置

## 应用场景

1. **Spring Boot Actuator APIs**：设置Actuator端点的路由前缀
2. **监控与管理API**：配置监控和管理端点的访问路径

## 配置示例

```properties
# 静态配置
endpoint.prefix.path=/actuator

# 多环境配置 
endpoint.prefix.path=${management.endpoints.web.base-path:/actuator}
```

## 示例效果

假设使用Spring Boot Actuator暴露了监控端点：

```java
@Component
@EndpointWebExtension(endpoint = HealthEndpoint.class)
public class CustomHealthEndpoint {
    // ...
}
```

配置了`endpoint.prefix.path=/actuator`后，生成的API路径将会包含此前缀。 