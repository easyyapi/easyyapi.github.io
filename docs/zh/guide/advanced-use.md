# 进阶用法

## 自定义配置规则

EasyYapi 提供了丰富的配置规则，用于自定义 API 文档生成。详见 [可用配置规则](/zh/settings/config-rule)。

## Groovy 脚本

许多规则支持 Groovy 脚本以实现高级自定义：

````properties
field.mock=groovy:```
if (it.type().name() == "java.lang.String") {
    return "mock_string"
}
return "default"
```
````

参见 [脚本工具](/zh/settings/tools) 了解脚本中可用的工具。

## 多配置文件

配置按以下优先级从多个来源合并（高优先级在前）：

1. 工程规则 — `<project>/.easyapi/` + 从工程根目录向上查找的传统 `.easy.api.config*`
2. 扩展规则 — 内置框架预设（Spring、Jackson、Validation 等）
3. 远程配置 — 来自 `remote.url` 的 URL
4. 全局规则 — `~/.easyapi/`（最低优先级）

不存在按模块划分的配置层；规则文件仅从 IntelliJ 工程根目录解析。

详见 [配置](/zh/settings/)。
