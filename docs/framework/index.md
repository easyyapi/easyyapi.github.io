# Framework Support

EasyYapi supports multiple Java/Kotlin web frameworks and can automatically recognize framework annotations to generate corresponding API documentation.

## Default Support

| Framework | Description |
|-----------|-------------|
| [Spring Boot](./springboot) | Most widely used Java web framework |
| [Spring Boot WebFlux](./springboot-webflux) | Reactive web framework |
| [Spring Cloud OpenFeign](./feign) | Declarative HTTP client |
| [Spring Actuator](./actuator) | Spring Boot Actuator endpoints |
| [JAX-RS](./jaxrs) | Java RESTful Web Services standard |
| [gRPC](./grpc) | High-performance RPC framework |

## Common Support

| Framework/Spec | Description |
|----------------|-------------|
| [javax.validation](./javax-validation) | Java Bean Validation specification |
| [Jakarta Validation](./jakarta-validation) | Jakarta Bean Validation specification |
| [Swagger](./swagger) | API documentation specification (v2) |
| [Swagger 3 / OpenAPI](./swagger3) | API documentation specification (v3) |
| [Jackson](./jackson) | JSON serialization/deserialization |
| [Gson](./gson) | Google JSON library |
| [Fastjson](./fastjson) | Alibaba JSON library |

## Built-in Extensions

| Extension | Description |
|-----------|-------------|
| [Deprecated & Converts](./deprecated-converts) | Deprecated info and type conversions |
| [Field Order](./field-order) | Field ordering extensions |
| [Spring Configuration](./spring-configuration) | Spring config properties support |
