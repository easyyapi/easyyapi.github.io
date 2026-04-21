# YApi 配置

## IDE 设置

在 IDE 中配置 YApi 设置：

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd>

| 设置项 | 说明 |
|--------|------|
| Yapi Server | YApi 服务器地址 |
| Tokens | 项目 Token，格式为 `module=token`（每行一个） |
| Export Mode | 导出时如何处理已有 API（见下方） |
| Request body JSON5 | 请求体使用 JSON5 格式（默认：关闭） |
| Response body JSON5 | 响应体使用 JSON5 格式（默认：关闭） |

**General** 标签页中的附加选项：

| 设置项 | 默认值 | 说明 |
|--------|--------|------|
| Enable URL Templating | `true` | 启用路径参数的 URL 模板化 |
| Switch Notice | `true` | 切换 YApi 项目时显示通知 |

### 获取 YApi Token

1. 登录 YApi
2. 进入项目设置
3. 复制项目 Token

### Token 格式

Token 以 `module=token` 的格式指定，在 IDE 的 Tokens 字段中每行输入一个。模块名用于将 API 匹配到正确的 YApi 项目。

### 导出模式

| 模式 | 说明 |
|------|------|
| ALWAYS_UPDATE | 始终更新已有 API（默认） |
| NEVER_UPDATE | 从不更新已有 API |
| ALWAYS_ASK | 弹窗询问是否覆盖每个 API |
| UPDATE_IF_CHANGED | 仅当 API 内容发生变化时更新 |

## 配置文件规则

以下规则可以在配置文件（`.easy.api.config`）中设置：

| 规则 | 说明 |
|------|------|
| [yapi.project](/zh/settings/rules/yapi_project) | 设置 API 分组所属的 YApi 项目 |
| [yapi.export.before](/zh/settings/events/yapi_export_before) | YApi 导出前事件 |
| [yapi.save.before](/zh/settings/rules/yapi_save_before) | 保存到 YApi 前事件 |
| [yapi.save.after](/zh/settings/rules/yapi_save_after) | 保存到 YApi 后事件 |

## YApi Mock

EasyYapi 支持将字段 Mock 规则同步到 YApi Mock 服务。

详见 [YApi Mock](./yapi-mock)。
