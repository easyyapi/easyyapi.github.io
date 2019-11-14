# class.prefix.path

- 设置API请求前缀

### 默认推荐配置

```properties
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

### demo

- spring application.properties 

```properties
server.servlet.context-path=/demo
```
- spring application.yaml/application.yml

```yaml
server:
  servlet:
      context-path: /kotlin
```