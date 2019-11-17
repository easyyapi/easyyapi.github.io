# 对springboot-webflux的支持

### 在推荐配置中有部分springboot-webflux相关的配置

```properties
#resolve Mono/Flux
###set resolveProperty = false
json.rule.convert[#regex:reactor.core.publisher.Mono<(.*?)>]=${1}
json.rule.convert[#regex:reactor.core.publisher.Mono]=java.lang.Object
json.rule.convert[#regex:reactor.core.publisher.Flux<(.*?)>]=java.util.List<${1}>
json.rule.convert[#regex:reactor.core.publisher.Flux]=java.util.List<java.lang.Object>
###set resolveProperty = true
```