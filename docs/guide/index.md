# Introduction

EasyYapi is an IntelliJ IDEA plugin that generates API documentation based on [Javadoc](./docs#javadoc), [KDoc](./docs#kdoc), and [ScalaDoc](./docs#scaladoc).

You can get fairly complete API documentation while keeping your code zero-intrusive, but special requirements still need some special comments/annotations to cooperate. On the other hand, you can flexibly use [configuration rules](/settings/) to adapt to your project characteristics to reduce code intrusion.

::: note
Since the `openapi` provided by the Scala plugin changes too frequently, Scala is no longer a default support option. Developers who need to use it in Scala projects can obtain the Scala-supported plugin package from [easy-yapi/releases](https://github.com/tangcent/easy-yapi/releases).
:::

## Features

- [Export API documentation](./use.md)
- [Call API directly in IDEA](./call.md)

## Supported Items

| Category | Default Support | Additional Support |
|----------|----------------|-------------------|
| Language | Java, Kotlin | Scala |
| Web Framework | [Spring](https://spring.io/), [Spring WebFlux](https://docs.spring.io/spring-framework/reference/web/webflux.html), [Feign](https://spring.io/projects/spring-cloud-openfeign), [JAX-RS](https://www.oracle.com/technical-resources/articles/java/jax-rs.html) ([Quarkus](https://quarkus.io/) / [Jersey](https://eclipse-ee4j.github.io/jersey/)), [gRPC](https://grpc.io/) | [Dubbo](https://dubbo.apache.org) |
| Export Channels | [Postman](./export2postman.md), [YApi](./export2yapi.md), [Markdown](./export2markdown.md) | - |
| Common Frameworks | javax.validation, Jakarta Validation, Jackson, Gson | [Swagger](https://swagger.io/), Fastjson |
| Features | [API Call](./call.md), [API Dashboard](./call.md#api-dashboard), [Script Executor](./script-executor.md) | Spring Actuator |

## Community

- Help maintain documentation: [easyyapi.com](https://github.com/easyyapi/easyyapi.github.io/tree/dev) — Please submit PRs to the dev branch
- Discuss [new features](https://github.com/tangcent/easy-yapi/issues?q=label%3Aenhancement) or submit [bugs](https://github.com/tangcent/easy-yapi/issues?q=label%3Abug): [Issues](https://github.com/tangcent/easy-yapi/issues)
- Develop [new features](https://github.com/tangcent/easy-yapi/pulls?q=+label%3Aenhancement) or fix [bugs](https://github.com/tangcent/easy-yapi/pulls?q=+label%3Abug): [Pull Requests](https://github.com/tangcent/easy-yapi/pulls)
- Maintain recommended configuration: [.recommend.easy.api.config](https://github.com/tangcent/easy-yapi/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)
- Enrich Demo: [web-demo](https://github.com/Earth-1610/web-demo)

## Contributors

<a href="https://github.com/tangcent/easy-yapi/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tangcent/easy-yapi" />
</a>
