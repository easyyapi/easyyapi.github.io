# http.call.after

Call API 功能的请求后回调。

## 用法

```properties
http.call.after=groovy:'''
// 记录响应
logger.info("Response code: " + response.code())

// 从响应中保存令牌
if (response.code() == 200) {
    def body = new JsonSlurper().parseText(response.body())
    if (body.token) {
        localStorage.set("token", body.token)
    }
}
'''
```

此回调在收到 HTTP 响应后执行。可用于：
- 响应数据处理
- 日志记录
- 令牌提取和存储
- 错误重试（通过 `response.discard()`）

## 上下文

脚本上下文中可用的变量：

| 变量 | 类型 | 说明 |
|------|------|------|
| `request` | `HttpRequestWrapper` | 已发送的请求 |
| `response` | `HttpResponseWrapper` | 收到的响应 |

### HttpResponseWrapper 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `response.code()` | `Int` | HTTP 状态码 |
| `response.headers()` | `Map<String, List<String>>` | 响应头 |
| `response.body()` | `String?` | 响应体 |
| `response.request()` | `HttpRequestWrapper` | 关联的请求 |
| `response.discard()` | `void` | 丢弃响应并重试请求 |
| `response.isDiscarded()` | `Boolean` | 检查响应是否已被丢弃 |

## 重试机制

调用 `response.discard()` 会导致请求被重试（最多 3 次）。适用于处理过期令牌或临时错误：

```properties
http.call.after=groovy:'''
if (response.code() == 401) {
    // 令牌过期，清除缓存并重试
    localStorage.remove("auth_token")
    response.discard()
}
'''
```

## 示例

### 错误处理与重试

```properties
http.call.after=groovy:'''
def code = response.code()
if (code >= 500) {
    logger.error("Server error: " + code)
    response.discard()
} else if (code == 401) {
    logger.warn("Unauthorized, retrying...")
    session.remove("token")
    response.discard()
}
'''
```

### 记录请求和响应

```properties
http.call.after=groovy:'''
logger.info(request.method() + " " + request.url() + " -> " + response.code())
'''
```

## 相关链接

- [http.call.before](./http_call_before) - 请求前回调
- [httpClient.request](../tools/httpClient/request) - 请求包装对象详情
- [httpClient.response](../tools/httpClient/response) - 响应包装对象详情

## 可用版本

v1.9.0+
