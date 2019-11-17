**在推荐配置中有部分[springboot-webflux](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux)相关的配置**

```properties
#resolve Mono/Flux
###set resolveProperty = false
json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[#regex:reactor.core.publisher.Mono]=java.lang.Object
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
json.rule.convert[#regex:reactor.core.publisher.Flux]=java.util.List<java.lang.Object>
###set resolveProperty = true
```