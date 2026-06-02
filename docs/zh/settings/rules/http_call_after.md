# http.call.after

Call API 功能的请求后回调。

## 用法

````properties
http.call.after=groovy:```
// 记录响应
logger.info("Response code: " + response.code())

// 从响应中保存令牌
if (response.code() == 200) {
    def body = new JsonSlurper().parseText(response.body())
    if (body.token) {
        localStorage.set("token", body.token)
    }
}
```
````

此回调在收到 HTTP 响应后执行。可用于：
- 响应数据处理
- 日志记录
- 令牌提取和存储
- 错误重试（通过 `response.discard()`）

## 上下文

脚本上下文中可用的变量：

| 变量 | 说明 |
|------|------|
| `request` | 已发送的 HTTP 请求。可用方法见 [request](../tools/httpClient/request) |
| `response` | 收到的 HTTP 响应。可用方法见 [response](../tools/httpClient/response) |

## 重试机制

调用 `response.discard()` 会导致请求被重试（最多 3 次）。适用于处理过期令牌或临时错误：

````properties
http.call.after=groovy:```
if (response.code() == 401) {
    // 令牌过期，清除缓存并重试
    localStorage.remove("auth_token")
    response.discard()
}
```
````

## 示例

### 错误处理与重试

````properties
http.call.after=groovy:```
def code = response.code()
if (code >= 500) {
    logger.error("Server error: " + code)
    response.discard()
} else if (code == 401) {
    logger.warn("Unauthorized, retrying...")
    session.remove("token")
    response.discard()
}
```
````

### 记录请求和响应

````properties
http.call.after=groovy:```
logger.info(request.method() + " " + request.url() + " -> " + response.code())
```
````

## 相关链接

- [http.call.before](./http_call_before) - 请求前回调
- [request](../tools/httpClient/request) - 请求对象详情
- [response](../tools/httpClient/response) - 响应对象详情

## 可用版本

v1.9.0+
