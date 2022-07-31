**在推荐配置中有很多spring-boot相关的配置**

- 处理`HttpEntity`/`RequestEntity`/`ResponseEntity`

```properties
#resolve HttpEntity/RequestEntity/ResponseEntity
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
###set resolveProperty = true
```

- 加载spring-boot相关配置:

```properties
#Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

- 默认使用spring-boot配置中的`server.servlet.context-path`

```properties
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```