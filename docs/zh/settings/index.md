# 配置

EasyYapi 提供了灵活的配置系统来自定义 API 文档生成行为。

## 开箱即用

EasyApi 开箱即用地支持标准 HTTP 框架（Spring MVC、WebFlux、JAX-RS、Feign）—— **大多数项目无需自定义规则**。对于扫描器无法察觉的自定义框架行为（例如要求添加请求头的 `jakarta.servlet.Filter`，或将每个响应包装在信封中的 `ResponseBodyAdvice`），可使用内置的 AI 助手或外部 skill 来检测并生成规则。完整指南请参见 [规则编写](./rule-authoring)。

## 编写规则的方式

EasyYapi 3.x 提供 **两种方式** 来编写规则。两种方式都写入 `.easyapi/*.rules` 文件。完整指南请参见 [规则编写](./rule-authoring)。

| 方式 | 适用场景 |
|------|----------|
| [内置 AI 助手](./rule-authoring#内置-ai-助手) | 在 Settings → Rules → Chat / Magic 中用自然语言编写规则 |
| [外部 `easy-yapi-assistant` skill](./rule-authoring#外部-easy-yapi-assistant-skill) | 通过外部 AI 工具驱动规则编写 |

## 配置方式

### 本地配置文件

在项目根目录（你在 IDE 中打开的文件夹）创建 `.easy.api.config` 文件（旧版，仍支持）。新项目应使用 [`.easyapi/` 文件夹模型](./local-file-config)。规则文件仅基于工程根目录解析，不存在按模块划分的配置层。

```properties
# 忽略特定字段
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# 类型转换
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

详见 [本地配置文件](./local-file-config)。

### 远程配置文件

配置远程 URL 来获取配置：

```properties
remote.url=http://your-config-server.com/easy-api.config
```

详见 [远程配置文件](./remote-config)。

### IDE 设置

在 IDE 中配置 EasyYapi 的全局设置。

详见 [IDE 设置](./ide-setting)。

## 配置内容

| 类别 | 说明 |
|------|------|
| [配置规则](./rules/) | 自定义 API 文档生成的规则 |
| [事件回调](./events/) | 在特定事件发生时执行自定义逻辑 |
| [脚本工具](./tools/) | 在 Groovy 脚本中可用的工具 |
| [高级配置](./advanced/) | 高级自定义配置 |

## 配置优先级

1. 工程规则 —— `<project>/.easyapi/` + 从工程根目录向上查找的旧版 `.easy.api.config*`（最高优先级）
2. 扩展规则 —— 内置框架预设（Spring、Jackson、Validation……）
3. 远程配置 —— 来自 `remote.url` 的 URL
4. 全局规则 —— `~/.easyapi/`（最低优先级）
