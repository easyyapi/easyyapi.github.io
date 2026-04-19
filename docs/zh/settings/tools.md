# 脚本工具概述

EasyYapi 提供了一组内置工具，可在配置规则的 Groovy 脚本中使用。

## 可用工具

| 工具 | 说明 |
|------|------|
| [it](./tools/it) | 当前上下文对象 |
| [tool](./tools/tool) | 通用工具方法 |
| [regex](./tools/regex) | 正则表达式工具 |
| [logger](./tools/logger) | 日志 |
| [helper](./tools/helper) | 常用操作辅助方法 |
| [httpClient](./tools/httpClient) | HTTP 客户端 |
| [localStorage](./tools/localStorage) | 持久化本地存储 |
| [session](./tools/session) | 会话级存储 |
| [config](./tools/config) | 配置访问 |
| [api](./tools/api) | API 工具 |
| [runtime](./tools/runtime) | 运行时信息 |
| [fieldContext](./tools/fieldContext) | 字段上下文工具 |

## 用法

工具在 Groovy 脚本中作为变量使用：

```properties
field.mock=groovy:'''
if (it.type().name() == "java.lang.String") {
    return "mock_string"
}
logger.info("Generating mock for: " + it.name())
'''
```
