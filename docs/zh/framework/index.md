# 框架支持

EasyYapi 支持多种 Java/Kotlin Web 框架，可以自动识别框架注解并生成对应的 API 文档。

## 默认支持

| 框架 | 说明 |
|------|------|
| [Spring Boot](./springboot) | 最广泛使用的 Java Web 框架 |
| [Spring Boot WebFlux](./springboot-webflux) | 响应式 Web 框架 |
| [Spring Cloud OpenFeign](./feign) | 声明式 HTTP 客户端 |
| [Spring Actuator](./actuator) | Spring Boot Actuator 端点 |
| [JAX-RS](./jaxrs) | Java RESTful Web 服务标准 |
| [gRPC](./grpc) | 高性能 RPC 框架 |

## 通用支持

| 框架/规范 | 说明 |
|------|------|
| [javax.validation](./javax-validation) | Java Bean 验证规范 |
| [Jakarta Validation](./jakarta-validation) | Jakarta Bean 验证规范 |
| [Swagger](./swagger) | API 文档规范 (v2) |
| [Swagger 3 / OpenAPI](./swagger3) | API 文档规范 (v3) |
| [Jackson](./jackson) | JSON 序列化/反序列化 |
| [Gson](./gson) | Google JSON 库 |
| [Fastjson](./fastjson) | Alibaba JSON 库 |

## 内置扩展

| 扩展 | 说明 |
|------|------|
| [废弃信息与类型转换](./deprecated-converts) | 废弃信息和类型转换 |
| [字段排序](./field-order) | 字段排序扩展 |
| [Spring 配置](./spring-configuration) | Spring 配置属性支持 |
