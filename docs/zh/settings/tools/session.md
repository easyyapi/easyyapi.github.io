# session

会话级存储。存储在 `session` 中的数据在 IDE 重启后会被清空，非常适合在会话期间进行临时缓存。

## 用法

```properties
http.call.before=groovy:'''
def token = session.get("token")
if (token == null) {
    def response = httpClient.post("http://auth-server/login", [
        user: "admin",
        password: "123"
    ])
    token = response.body().token
    session.set("token", token)
}
it.header("Authorization", "Bearer " + token)
'''
```

## 方法

### 基本操作

| 方法 | 说明 |
|--------|-------------|
| `session.get(name)` | 按名称获取值 |
| `session.set(name, value)` | 按名称设置值 |
| `session.remove(name)` | 按名称移除值 |
| `session.clear()` | 清除所有值 |

### 分组操作

值可以组织到分组中以便更好地管理：

| 方法 | 说明 |
|--------|-------------|
| `session.get(group, name)` | 从分组中获取值 |
| `session.set(group, name, value)` | 在分组中设置值 |
| `session.remove(group, name)` | 从分组中移除值 |
| `session.clear(group)` | 清除分组中的所有值 |

### 栈操作

用于在多次调用之间维护状态：

| 方法 | 说明 |
|--------|-------------|
| `session.push(name, value)` | 将值压入栈 |
| `session.push(group, name, value)` | 将值压入分组栈 |
| `session.pop(name)` | 弹出并返回栈顶值 |
| `session.pop(group, name)` | 从分组栈弹出值 |
| `session.peek(name)` | 返回栈顶值但不移除 |
| `session.peek(group, name)` | 查看分组栈顶值 |

### 键管理

| 方法 | 说明 |
|--------|-------------|
| `session.keys()` | 获取所有键 |
| `session.keys(group)` | 获取分组中的所有键 |

## 示例

### 临时令牌缓存

```properties
http.call.before=groovy:'''
def token = session.get("auth", "token")
if (token == null) {
    def response = httpClient.post("http://auth-server/login", [
        user: config.get("auth.user"),
        password: config.get("auth.password")
    ])
    token = response.body().token
    session.set("auth", "token", token)
    session.set("auth", "tokenExpiry", System.currentTimeMillis() + 3600000)
}

def expiry = session.get("auth", "tokenExpiry") ?: 0
if (System.currentTimeMillis() > expiry) {
    session.remove("auth", "token")
    session.remove("auth", "tokenExpiry")
}
it.header("Authorization", "Bearer " + token)
'''
```

### 请求跟踪

```properties
export.before=groovy:'''
session.set("export", "startTime", System.currentTimeMillis())
session.set("export", "apiCount", 0)
'''

method.parse.after=groovy:'''
def count = session.get("export", "apiCount") ?: 0
session.set("export", "apiCount", count + 1)
'''

export.after=groovy:'''
def startTime = session.get("export", "startTime")
def count = session.get("export", "apiCount")
if (startTime && count) {
    def duration = System.currentTimeMillis() - startTime
    logger.info("Exported " + count + " APIs in " + duration + "ms")
}
session.clear("export")
'''
```

## 与 localStorage 的区别

| 特性 | session | localStorage |
|---------|---------|--------------|
| 持久性 | IDE 重启后清空 | 重启后保留 |
| 存储位置 | 内存 | 本地数据库 |
| 用途 | 临时缓存 | 长期存储 |

## 相关链接

- [localStorage](./localStorage) - 持久化存储
- [config](./config) - 配置访问
