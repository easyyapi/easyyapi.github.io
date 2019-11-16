# 对spring的支持

### 在推荐配置中有很多spring相关的配置
- 加载spring相关配置:
```properties
#Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml
```

- 默认使用spring配置中的`server.servlet.context-path`
```
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```