# response

HTTP 响应包装对象，在 `http.call.after` 规则脚本中可用。

`response` 对象提供对 HTTP 响应数据的访问，并支持通过 `discard()` 控制重试。

## 可用性

| 规则 | 可用变量名 |
|------|-----------|
| `http.call.after` | `response` |

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `response.code()` | `Int` | HTTP 状态码 |
| `response.headers()` | `Map<String, List<String>>` | 响应头 |
| `response.body()` | `String?` | 响应体（可空） |
| `response.request()` | `HttpRequestWrapper` | 关联的请求对象 |
| `response.discard()` | `void` | 丢弃此响应并重试请求 |
| `response.isDiscarded()` | `Boolean` | 检查此响应是否已被丢弃 |

## 重试机制

调用 `response.discard()` 会标记响应进行重试。请求将最多重新执行 **3 次**（MAX_RETRY）。当响应指示令牌过期或其他可恢复的错误时，此功能非常有用。

```properties
http.call.after=groovy:'''
if (response.code() == 401) {
    // 令牌过期，清除缓存的令牌并重试
    localStorage.remove("auth_token")
    response.discard()
}
'''
```

## 示例

### 记录响应信息

```properties
http.call.after=groovy:'''
logger.info("Response code: " + response.code())
logger.info("Response body: " + response.body())
'''
```

### 从响应中保存令牌

```properties
http.call.after=groovy:'''
if (response.code() == 200) {
    def body = new JsonSlurper().parseText(response.body())
    if (body.token) {
        localStorage.set("auth_token", body.token)
    }
}
'''
```

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

### 从响应访问请求

```properties
http.call.after=groovy:'''
logger.info("Request to " + response.request().url() + " returned " + response.code())
'''
```

## 相关链接

- [request](./request) - HTTP 请求包装对象
- [httpClient](./) - HTTP 客户端
- [http.call.after](../../rules/http_call_after) - 请求后回调规则
