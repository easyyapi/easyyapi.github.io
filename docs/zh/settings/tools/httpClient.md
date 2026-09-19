# httpClient

HTTP 客户端，用于在脚本中发送请求。支持在 API 导出或其他操作期间向外部服务发送 HTTP 请求。

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `httpClient.newRequest(url)` | `HttpRequestBuilder` | 为该 URL 开启一个链式请求 |
| `httpClient.newRequest()` | `HttpRequestBuilder` | 开启一个链式请求，稍后用 `url(…)` 设置地址 |
| `httpClient.executeSync(request)` | `HttpResponse` | 同步发送一个已构造好的 `HttpRequest` |

### 构造请求

在脚本中发起请求请使用 builder。直接构造 `HttpRequest` 虽能通过类型检查，但两个 `String` 参数顺序写反时会静默出错，因此推荐 builder：

````properties
http.call.before=groovy:```
def response = httpClient.newRequest("http://config-server/api/config")
    .header("X-Tenant", config.get("tenant"))
    .execute()
```
````

| Builder 方法 | 说明 |
|----------------|-------------|
| `get()` / `post()` / `put()` / `delete()` / `patch()` / `head()` / `options()` | 设置 HTTP 方法 |
| `url(url)` / `method(name)` | 设置目标地址或任意请求方法 |
| `header(name, value)` / `headers(map)` / `setHeader` / `removeHeader` | 管理请求头 |
| `query(name, value)` / `query(map)` | 添加查询参数 |
| `form(name, value)` / `form(map)` | 添加表单字段（`application/x-www-form-urlencoded`） |
| `file(name, fileName, bytes[, contentType])` | 附加文件字段 |
| `cookie(name, value[, domain, path])` | 附加 Cookie |
| `body(content)` / `json(content)` / `contentType(type)` | 设置请求体及其内容类型 |
| `build()` | 生成用于 `executeSync` 的 `HttpRequest` |
| `execute()` | 发送请求并返回 `HttpResponse` |

有意不提供 lambda 重载——builder 保持对 Groovy 友好：没有默认参数，只有简单的链式调用。

## 响应对象

`httpClient` 方法返回的响应对象提供以下访问：

| 属性/方法 | 返回类型 | 说明 |
|-----------------|-------------|-------------|
| `response.code()` | `Int` | HTTP 状态码 |
| `response.body()` | `String?` | 响应体字符串；二进制响应时为 `null` |
| `response.headers()` | `Map<String, List<String>>` | 响应头 |
| `response.bytes()` | `ByteArray?` | 原始响应字节；纯文本响应时为 `null` |
| `response.saveBody(path)` | `Boolean` | 将响应体写入 `path`；无内容可保存时返回 `false` |
| `response.text()` | `String` | 按文本解码后的响应体 |
| `response.json()` / `response.xml()` | `Any?` | 响应体的结构化视图 |

二进制响应（图片、PDF、ZIP 文件、`octet-stream`）会按内容类型和大小分类，绝不会按 UTF-8 文本解码。过大的响应体会流式写入临时文件，因此仍可通过 `saveBody(path)` 获取，而不必整体载入内存。在 Postman 风格脚本中，`pm.response` 也提供同样的值，其中 `responseSize` 现在以**字节**为单位（此前返回字符数）。

## 子页面

- [request](./httpClient/request) - `http.call.before`/`http.call.after` 中可用的 HTTP 请求包装对象
- [response](./httpClient/response) - `http.call.after` 中可用的 HTTP 响应包装对象

## 示例

### GET 请求

````properties
http.call.before=groovy:```
def response = httpClient.newRequest("http://config-server/api/config").get().execute()
if (response.code() == 200) {
    def config = new JsonSlurper().parseText(response.body())
    logger.info("Config loaded: " + config)
}
```
````

### 带 JSON 的 POST 请求

````properties
export.before=groovy:```
import groovy.json.JsonOutput

def data = [
    project: "my-project",
    apis: []
]

def json = JsonOutput.toJson(data)
def response = httpClient.newRequest("http://api-server/sync").post().json(json).execute()
logger.info("Sync result: " + response.code())
```
````

### 带令牌缓存的认证

````properties
http.call.before=groovy:```
def token = session.get("auth_token")
if (!token) {
    def loginResponse = httpClient.newRequest("http://auth-server/login")
        .post()
        .form("username", config.get("auth.username"))
        .form("password", config.get("auth.password"))
        .execute()

    if (loginResponse.code() == 200) {
        def result = new JsonSlurper().parseText(loginResponse.body())
        token = result.token
        session.set("auth_token", token)
    }
}

if (token) {
    logger.info("Using token for request to: " + request.url())
}
```
````

### 条件请求

````properties
http.call.before=groovy:```
def apiUrl = config.get("api.url")
if (apiUrl) {
    def healthCheck = httpClient.newRequest(apiUrl + "/health").get().execute()
    if (healthCheck.code() != 200) {
        logger.warn("API server health check failed")
    }
}
```
````

## 注意事项

- HTTP 请求是同步的 - 它们会阻塞直到完成
- 适当时使用 `session` 或 `localStorage` 缓存响应
- 使用状态码检查优雅地处理错误
- `httpClient` 根据 IDE 设置配置（Apache HttpClient、Java URLConnection 或 IntelliJ HTTP Client）

## 相关链接

- [request](./httpClient/request) - `http.call.before`/`http.call.after` 中的请求包装对象
- [response](./httpClient/response) - `http.call.after` 中的响应包装对象
- [session](./session) - 用于缓存的会话级存储
- [localStorage](./localStorage) - 用于缓存的持久化存储
- [config](./config) - 配置访问
- [logger](./logger) - 日志工具
