# logger

日志工具。提供将消息输出到 IDE 控制台的方法，用于调试和信息目的。

## 用法

```properties
field.mock=groovy:'''
logger.info("Processing field: " + it.name())
logger.warn("Using default mock for: " + it.type().name())
return "mock_value"
'''
```

## 方法

| 方法 | 说明 |
|--------|-------------|
| `logger.info(msg)` | 记录信息消息 |
| `logger.warn(msg)` | 记录警告消息 |
| `logger.error(msg)` | 记录错误消息 |

## 日志级别

| 级别 | 用途 |
|-------|---------|
| `info` | 关于脚本执行的常规信息 |
| `warn` | 关于潜在问题的警告 |
| `error` | 可能影响结果的错误 |

## 示例

### 基本日志记录

```properties
field.mock=groovy:'''
def name = it.name()
def type = it.type().name()

logger.info("Field: " + name)
logger.info("Type: " + type)

if (type == "java.lang.String") {
    return "mock_string"
}
return null
'''
```

### 调试日志

```properties
method.name=groovy:'''
def name = it.name()
def annotations = it.annMaps("org.springframework.web.bind.annotation.RequestMapping")

logger.info("Processing method: " + name)
annotations?.each { ann ->
    logger.info("  Annotation: " + ann)
}

return name
'''
```

### 错误处理

```properties
field.mock=groovy:'''
try {
    def value = config.get("mock." + it.name())
    if (value) {
        logger.info("Using configured mock: " + value)
        return value
    }
} catch (Exception e) {
    logger.error("Error getting mock config: " + e.message)
}
return "default"
'''
```

### 条件日志

```properties
export.before=groovy:'''
def debug = config.get("debug") == "true"
if (debug) {
    logger.info("Debug mode enabled")
    logger.info("Export settings: " + config.getValues("export.settings"))
}
'''
```

### 进度日志

```properties
class.parse.before=groovy:'''
logger.info("Starting to parse class: " + it.name())
'''

class.parse.after=groovy:'''
logger.info("Finished parsing class: " + it.name())
logger.info("  Methods: " + it.methodCnt())
logger.info("  Fields: " + it.fieldCnt())
'''
```

### 缺失数据警告

```properties
field.description=groovy:'''
def doc = it.doc()
if (!doc) {
    logger.warn("No documentation for field: " + it.name())
}
return doc
'''
```

## 注意事项

- 日志消息显示在 IDE 的控制台/输出窗口中
- 为不同类型的消息使用适当的日志级别
- 过多的日志会降低处理速度 - 在生产环境中谨慎使用
- 考虑使用 `config.get("debug")` 来控制详细日志

## 相关链接

- [config](./config) - 配置访问
- [runtime](./runtime) - 运行时信息
