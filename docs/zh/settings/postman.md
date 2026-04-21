# Postman 配置

## IDE 设置

在 IDE 中配置 Postman 设置：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Postman</kbd>

| 设置项 | 说明 |
|--------|------|
| Token | Postman API Token |
| Workspace | Postman 工作区 ID |
| Export Mode | 导出时如何处理集合（见下方） |
| Build Example | 是否在导出的集合中构建示例数据（默认：开启） |
| JSON5 Format Type | JSON5 格式的使用范围（见下方） |
| Collections | 模块与集合的映射（每行一个 `module:collectionId`） |

### 获取 Postman API Key

1. 登录 Postman
2. 进入 Account Settings > API Keys
3. 生成新的 API Key

### 导出模式

| 模式 | 说明 |
|------|------|
| CREATE_NEW | 始终创建新集合（默认） |
| UPDATE_EXISTING | 尝试按模块更新已有集合 |

## 配置文件规则

以下规则可以在配置文件（`.easy.api.config`）中设置：

| 规则 | 说明 |
|------|------|
| [postman.host](/zh/settings/rules/postman_host) | Postman 基础 URL |
| [postman.prerequest](/zh/settings/rules/postman_prerequest) | 预请求脚本 |
| [postman.test](/zh/settings/rules/postman_test) | 测试脚本 |
| [postman.class.prerequest](/zh/settings/rules/postman_class_prerequest) | 类级别预请求脚本 |
| [postman.class.test](/zh/settings/rules/postman_class_test) | 类级别测试脚本 |
| [postman.collection.prerequest](/zh/settings/rules/postman_collection_prerequest) | 集合级别预请求事件 |
| [postman.collection.test](/zh/settings/rules/postman_collection_test) | 集合级别测试事件 |
| [postman.format.after](/zh/settings/rules/postman_format_after) | 格式化后钩子 |

### JSON5 格式类型

控制导出的 Postman 集合中 JSON5 格式的使用范围：

| 类型 | 说明 |
|------|------|
| NONE | 不使用 JSON5 |
| REQUEST_ONLY | 仅请求体使用 JSON5 |
| RESPONSE_ONLY | 仅响应体使用 JSON5 |
| EXAMPLE_ONLY | 仅示例使用 JSON5（默认） |
| ALL | 始终使用 JSON5 |
