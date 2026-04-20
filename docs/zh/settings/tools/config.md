# config

配置访问工具。提供对来自各种来源（本地文件、远程配置、IDE 设置）的配置值的读取访问。

## 用法

```properties
field.mock=groovy:'''
def mockValue = config.get("custom.mock." + it.name())
return mockValue ?: "default_mock"
'''
```

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `config.get(name)` | `String?` | 获取配置键的第一个值 |
| `config.getValues(name)` | `List<String>` | 获取配置键的所有值 |
| `config.resolveProperty(property)` | `String` | 解析属性字符串中的 `${key}` 占位符 |

## 配置来源

配置值按优先级从多个来源加载：

1. **IDE 设置** - 在 EasyYapi 设置中配置的值
2. **远程配置** - 来自远程配置服务器的值
3. **本地文件** - 项目中 `.easyapi.config` 文件的值
4. **内置默认值** - 默认值

## 示例

### 获取单个值

```properties
field.mock=groovy:'''
def prefix = config.get("mock.prefix")
def value = config.get("mock." + it.type().simpleName())
return prefix ? prefix + value : value
'''
```

### 获取所有值

```properties
method.additional.header=groovy:'''
def headers = config.getValues("default.headers")
return headers.collect { h ->
    def parts = h.split(":")
    [name: parts[0], value: parts[1]]
}
'''
```

### 解析占位符

```properties
field.default=groovy:'''
def template = config.get("field.default.template")
if (template && template.contains("\${")) {
    return config.resolveProperty(template)
}
return template
'''
```

### 基于环境的配置

```properties
api.path.prefix=groovy:'''
def env = config.get("env") ?: "dev"
return config.get("api.prefix." + env) ?: "/"
'''
```

## 配置文件示例

```properties
# .easyapi.config

# Mock 设置
mock.prefix=test_
mock.String=mock_string
mock.Integer=0
mock.Boolean=false

# 默认请求头
default.headers=X-Custom-Header:value1
default.headers=X-Another-Header:value2

# 环境
env=dev
api.prefix.dev=/api/dev
api.prefix.prod=/api/v1
```

## 相关链接

- [本地文件配置](../local-file-config.md) - 本地配置文件
- [远程配置](../remote-config.md) - 远程配置
- [session](./session) - 会话级存储
- [localStorage](./localStorage) - 持久化存储
