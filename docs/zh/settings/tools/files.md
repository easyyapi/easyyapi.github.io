# files

文件操作工具，用于在 Groovy 脚本中读写文件。提供简单的文件 I/O 操作方法。

## 方法

### save(content, path)

使用 UTF-8 编码保存内容到文件。

```properties
export.after=groovy:'''
files.save(it.toJson(), "/tmp/api-export.json")
logger.info("API data saved to /tmp/api-export.json")
'''
```

### save(content, charset, path)

使用指定编码保存内容到文件。

```properties
export.after=groovy:'''
files.save(it.toJson(), "UTF-8", "/tmp/api-export.json")
'''
```

## 参数

| 参数 | 类型 | 说明 |
|-----------|------|-------------|
| `content` | `String` | 要写入文件的内容 |
| `charset` | `String` | 字符编码（如 "UTF-8"、"ISO-8859-1"） |
| `path` | `String` | 文件的绝对路径 |

## 行为

- **目录创建**：如果父目录不存在，会自动创建
- **覆盖**：现有文件会被覆盖，无警告
- **编码**：默认编码为 UTF-8

## 示例

### 导出 API 数据

```properties
export.after=groovy:'''
import groovy.json.JsonSlurper
import groovy.json.JsonOutput

def data = [
    apis: it.apis(),
    exportedAt: new Date().format("yyyy-MM-dd HH:mm:ss")
]

def json = JsonOutput.prettyPrint(JsonOutput.toJson(data))
files.save(json, "/tmp/api-export-" + System.currentTimeMillis() + ".json")
logger.info("Exported " + it.apis().size() + " APIs")
'''
```

### 保存响应数据

```properties
http.call.after=groovy:'''
if (it.response().code() == 200) {
    def timestamp = new Date().format("yyyyMMdd_HHmmss")
    def path = "/tmp/response_" + timestamp + ".json"
    files.save(it.response().body(), path)
    logger.info("Response saved to " + path)
}
'''
```

### 记录导出结果

```properties
export.after=groovy:'''
def log = new StringBuilder()
log.append("Export Log\n")
log.append("==========\n")
log.append("Time: " + new Date().format("yyyy-MM-dd HH:mm:ss") + "\n")
log.append("APIs: " + it.apis().size() + "\n")

files.save(log.toString(), "/tmp/export-log.txt")
'''
```

## 注意事项

- `files` 工具只支持写入文件
- 对于读取文件，使用标准 Groovy I/O：
  ```properties
  field.mock=groovy:'''
  def content = new File("/path/to/file.txt").text
  return content
  '''
  ```

## 相关链接

- [localStorage](./localStorage) - 持久化键值存储
- [session](./session) - 会话级存储
- [config](./config) - 配置访问
