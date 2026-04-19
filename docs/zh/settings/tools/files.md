# files

文件操作工具，用于在 Groovy 脚本中读写文件。

## 方法

### save(path, content)

将内容保存到文件。

```properties
export.after=groovy:'''
files.save("/tmp/api-export.json", it.toJson())
logger.info("API 数据已保存到 /tmp/api-export.json")
'''
```

### read(path)

从文件读取内容。

```properties
method.additional.header=groovy:'''
def headers = files.read("/path/to/headers.json")
return new JsonSlurper().parseText(headers)
'''
```

## 另见

- [localStorage](./localStorage) — 持久化键值存储
- [session](./session) — 会话级存储
