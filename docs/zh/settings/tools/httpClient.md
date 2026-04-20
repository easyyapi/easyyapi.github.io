# httpClient

HTTP 客户端，用于在脚本中发送请求。支持在 API 导出或其他操作期间向外部服务发送 HTTP 请求。

## 用法

```properties
http.call.before=groovy:'''
def response = httpClient.get("http://auth-server/token")
it.header("Authorization", "Bearer " + response.body())
'''
```

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `httpClient.get(url)` | `HttpResponse` | 发送 GET 请求 |
| `httpClient.post(url, body)` | `HttpResponse` | 发送 POST 请求 |
| `httpClient.put(url, body)` | `HttpResponse` | 发送 PUT 请求 |
| `httpClient.delete(url)` | `HttpResponse` | 发送 DELETE 请求 |

## 响应对象

响应对象提供以下访问：

| 属性/方法 | 返回类型 | 说明 |
|-----------------|-------------|-------------|
| `response.code()` | `Int` | HTTP 状态码 |
| `response.body()` | `String` | 响应体字符串 |
| `response.headers()` | `Map<String, String>` | 响应头 |

## 示例

### GET 请求

```properties
http.call.before=groovy:'''
def response = httpClient.get("http://config-server/api/config")
if (response.code() == 200) {
    def config = new JsonSlurper().parseText(response.body())
    logger.info("Config loaded: " + config)
}
'''
```

### 带 JSON 的 POST 请求

```properties
export.before=groovy:'''
import groovy.json.JsonOutput

def data = [
    project: "my-project",
    apis: []
]

def json = JsonOutput.toJson(data)
def response = httpClient.post("http://api-server/sync", json)
logger.info("Sync result: " + response.code())
'''
```

### 认证

```properties
http.call.before=groovy:'''
def token = session.get("auth_token")
if (!token) {
    def loginResponse = httpClient.post("http://auth-server/login", [
        username: config.get("auth.username"),
        password: config.get("auth.password")
    ])
    
    if (loginResponse.code() == 200) {
        def result = new JsonSlurper().parseText(loginResponse.body())
        token = result.token
        session.set("auth_token", token)
    }
}

if (token) {
    it.header("Authorization", "Bearer " + token)
}
'''
```

### 错误处理

```properties
http.call.after=groovy:'''
def code = it.response().code()
if (code >= 400) {
    logger.error("HTTP error: " + code)
    logger.error("Response: " + it.response().body())
}
'''
```

### 条件请求

```properties
http.call.before=groovy:'''
def apiUrl = config.get("api.url")
if (apiUrl) {
    def healthCheck = httpClient.get(apiUrl + "/health")
    if (healthCheck.code() != 200) {
        logger.warn("API server health check failed")
    }
}
'''
```

## 注意事项

- HTTP 请求是同步的 - 它们会阻塞直到完成
- 适当时使用 `session` 或 `localStorage` 缓存响应
- 使用状态码检查优雅地处理错误
- `httpClient` 根据 IDE 设置配置（Apache HttpClient、Java URLConnection 或 IntelliJ HTTP Client）

## 相关链接

- [session](./session) - 用于缓存的会话级存储
- [localStorage](./localStorage) - 用于缓存的持久化存储
- [config](./config) - 配置访问
- [logger](./logger) - 日志工具
