# runtime

运行时信息工具。提供对环境和系统信息的访问。

## 用法

```properties
field.mock=groovy:'''
logger.info("Running on: " + runtime.osName())
logger.info("Plugin version: " + runtime.pluginVersion())
'''
```

## 方法

| 方法 | 返回类型 | 说明 |
|--------|-------------|-------------|
| `runtime.osName()` | `String` | 获取操作系统名称 |
| `runtime.pluginVersion()` | `String` | 获取 EasyYapi 插件版本 |
| `runtime.ideVersion()` | `String` | 获取 IDE 版本 |

## 示例

### 记录环境信息

```properties
export.before=groovy:'''
logger.info("=== Export Environment ===")
logger.info("OS: " + runtime.osName())
logger.info("IDE: " + runtime.ideVersion())
logger.info("Plugin: " + runtime.pluginVersion())
logger.info("========================")
'''
```

### 基于 OS 的条件行为

```properties
field.default=groovy:'''
def os = runtime.osName().toLowerCase()
if (os.contains("windows")) {
    return "windows_default"
} else if (os.contains("mac")) {
    return "macos_default"
} else if (os.contains("linux")) {
    return "linux_default"
}
return "default"
'''
```

### 版本检查

```properties
export.before=groovy:'''
def version = runtime.pluginVersion()
logger.info("Exporting with EasyYapi version: " + version)

if (version.startsWith("1.")) {
    logger.warn("Using legacy version - some features may not be available")
}
'''
```

### 调试信息

```properties
export.after=groovy:'''
def info = """
Export completed
================
Time: ${new Date().format("yyyy-MM-dd HH:mm:ss")}
OS: ${runtime.osName()}
IDE: ${runtime.ideVersion()}
Plugin: ${runtime.pluginVersion()}
APIs exported: ${it.apis()?.size() ?: 0}
"""
logger.info(info)
'''
```

### 基于环境的配置

```properties
api.path.prefix=groovy:'''
def os = runtime.osName().toLowerCase()
def ide = runtime.ideVersion()

if (ide.contains("IntelliJ IDEA")) {
    return "/idea-api"
} else if (ide.contains("PyCharm")) {
    return "/pycharm-api"
}

return "/api"
'''
```

## 使用场景

1. **调试**：记录环境信息以便故障排除
2. **条件逻辑**：根据 OS 或 IDE 调整行为
3. **版本兼容性**：检查插件版本以确定功能可用性
4. **报告**：在导出报告中包含环境信息

## 相关链接

- [logger](./logger) - 日志工具
- [config](./config) - 配置访问
