# 脚本执行器

EasyYapi 提供了一个内置的脚本执行器，用于测试 Groovy 脚本。

## 用法

1. 打开 <kbd>Tools</kbd> > <kbd>EasyApi</kbd> > <kbd>Script Executor</kbd>
2. 在编辑器中编写 Groovy 脚本
3. 点击运行按钮执行

## 可用工具

脚本执行器中提供以下工具：

- [it](/zh/settings/tools/it) — 上下文对象
- [tool](/zh/settings/tools/tool) — 工具方法
- [regex](/zh/settings/tools/regex) — 正则表达式工具
- [logger](/zh/settings/tools/logger) — 日志
- [helper](/zh/settings/tools/helper) — 常用操作助手
- [httpClient](/zh/settings/tools/httpClient) — HTTP 客户端
- [localStorage](/zh/settings/tools/localStorage) — 持久化本地存储
- [session](/zh/settings/tools/session) — 会话级存储
- [config](/zh/settings/tools/config) — 配置访问
- [api](/zh/settings/tools/api) — API 工具
- [runtime](/zh/settings/tools/runtime) — 运行时信息
- [fieldContext](/zh/settings/tools/fieldContext) — 字段上下文工具
- [files](/zh/settings/tools/files) — 文件操作

## 示例

```groovy
// 测试字段 mock 规则
def field = it  // 上下文对象
if (field.type().name() == "java.lang.String") {
    logger.info("String field: " + field.name())
}
```
