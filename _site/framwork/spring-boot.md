# 对spring-boot的支持

### 在推荐配置中有很多spring-boot相关的配置
- 自动加载spring-boot相关配置:
```properties
#Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

- 默认使用spring-boot配置中的`server.servlet.context-path`
```
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```