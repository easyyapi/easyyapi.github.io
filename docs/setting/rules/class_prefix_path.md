# class.prefix.path

- 设置API请求前缀

### 默认推荐配置

```properties
#Resolve spring properties
###set ignoreUnresolved = true
class.prefix.path=${server.servlet.context-path}
###set ignoreUnresolved = false
```

### 使用推荐配置后，可识别如下spring配置

- spring application.properties 

```properties
server.servlet.context-path=/demo
```
- spring application.yaml/application.yml

```yaml
server:
  servlet:
      context-path: /demo
```

### 自定义demo

```properties
class.prefix.path=/demo
```