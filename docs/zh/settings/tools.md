# 脚本工具概述

EasyYapi 提供了一组内置工具，可在配置规则的 Groovy 脚本中使用。这些工具在所有 Groovy 脚本上下文中自动作为变量可用。

## 可用工具

| 工具 | 说明 |
|------|-------------|
| [it](./tools/it) | 当前上下文对象 - 最重要的工具，提供对正在处理元素的访问 |
| [tool](./tools/tool) | 通用工具方法，用于字符串操作、集合、JSON 等 |
| [regex](./tools/regex) | 正则表达式工具，带模式缓存以提高性能 |
| [logger](./tools/logger) | 日志工具，用于调试和信息输出 |
| [helper](./tools/helper) | 常用操作辅助方法，用于类型解析等 |
| [httpClient](./tools/httpClient) | HTTP 客户端，用于在脚本中发送请求 |
| [localStorage](./tools/localStorage) | 持久化本地存储，IDE 重启后数据保留 |
| [session](./tools/session) | 会话级存储，IDE 重启后清空 |
| [config](./tools/config) | 配置访问，用于读取规则值 |
| [api](./tools/api) | API 工具，用于修改端点元数据 |
| [runtime](./tools/runtime) | 运行时环境信息 |
| [fieldContext](./tools/fieldContext) | 字段上下文工具，用于 JSON 路径操作 |
| [files](./tools/files) | 文件操作，用于读写文件 |

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

## 工具分类

### 上下文工具

- **it** - 主要的上下文对象。其类型取决于规则上下文：
  - 类规则 → `ScriptPsiClassContext`
  - 方法规则 → `ScriptPsiMethodContext`
  - 字段规则 → `ScriptPsiFieldContext`
  - 参数规则 → `ScriptPsiParameterContext`

### 存储工具

- **localStorage** - 持久化存储，IDE 重启后数据保留
- **session** - 临时存储，IDE 重启后清空

### 实用工具

- **tool** - 字符串操作、集合、JSON 操作
- **regex** - 正则表达式匹配和提取
- **helper** - 类型解析和常用操作
- **files** - 文件 I/O 操作

### 通信工具

- **httpClient** - HTTP 请求
- **config** - 配置访问
- **api** - API 端点修改

### 信息工具

- **logger** - 日志输出
- **runtime** - 环境信息
- **fieldContext** - JSON 路径上下文

## 相关链接

- [配置规则](../config-rule.md) - 如何在配置规则中使用工具
- [事件](../events/) - 可以使用脚本的事件钩子
