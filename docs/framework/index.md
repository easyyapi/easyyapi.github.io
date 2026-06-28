# Framework Support

EasyApi understands standard HTTP frameworks (Spring MVC, WebFlux, JAX-RS, Feign) out of the box — **most projects need no custom rules**. For custom framework behaviour the scanner can't see (e.g. a `jakarta.servlet.Filter` that requires a header, or a `ResponseBodyAdvice` that wraps every response in an envelope), use the built-in AI Assistant or the external skill to detect it and generate the rule. See the [Rule Authoring Guide](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md) for the full Custom-Pattern Catalog.

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
