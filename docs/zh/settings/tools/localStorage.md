# localStorage

持久化本地存储。存储在 `localStorage` 中的数据在 IDE 重启后依然保留，并存储在本地数据库中。

## 用法

```properties
http.call.after=groovy:'''
if (it.response().code() == 200) {
    localStorage.set("token", it.response().body().token)
}
'''
```

## 方法

### 基本操作

| 方法 | 说明 |
|--------|-------------|
| `localStorage.get(name)` | 按名称获取值 |
| `localStorage.set(name, value)` | 按名称设置值 |
| `localStorage.remove(name)` | 按名称移除值 |
| `localStorage.clear()` | 清除所有值 |

### 分组操作

值可以组织到分组中以便更好地管理：

| 方法 | 说明 |
|--------|-------------|
| `localStorage.get(group, name)` | 从分组中获取值 |
| `localStorage.set(group, name, value)` | 在分组中设置值 |
| `localStorage.remove(group, name)` | 从分组中移除值 |
| `localStorage.clear(group)` | 清除分组中的所有值 |

### 栈操作

用于在多次调用之间维护状态：

| 方法 | 说明 |
|--------|-------------|
| `localStorage.push(name, value)` | 将值压入栈 |
| `localStorage.push(group, name, value)` | 将值压入分组栈 |
| `localStorage.pop(name)` | 弹出并返回栈顶值 |
| `localStorage.pop(group, name)` | 从分组栈弹出值 |
| `localStorage.peek(name)` | 返回栈顶值但不移除 |
| `localStorage.peek(group, name)` | 查看分组栈顶值 |

### 键管理

| 方法 | 说明 |
|--------|-------------|
| `localStorage.keys()` | 获取所有键 |
| `localStorage.keys(group)` | 获取分组中的所有键 |

## 示例

### 令牌存储

```properties
http.call.before=groovy:'''
def token = localStorage.get("auth", "token")
if (token == null) {
    def response = httpClient.post("http://auth-server/login", [
        user: "admin",
        password: "123"
    ])
    token = response.body().token
    localStorage.set("auth", "token", token)
}
it.header("Authorization", "Bearer " + token)
'''
```

### 请求计数器

```properties
http.call.after=groovy:'''
def count = localStorage.get("stats", "requestCount") ?: 0
localStorage.set("stats", "requestCount", count + 1)
logger.info("Total requests: " + (count + 1))
'''
```

### 基于栈的状态

```properties
class.parse.before=groovy:'''
localStorage.push("context", "class", it.name())
'''

class.parse.after=groovy:'''
localStorage.pop("context", "class")
'''
```

## 相关链接

- [session](./session) - 会话级存储（重启后清空）
- [config](./config) - 配置访问
