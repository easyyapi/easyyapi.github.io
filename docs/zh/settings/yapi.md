# YApi 配置

## 基本配置

| 设置项 | 说明 |
|--------|------|
| yapi.server | YApi 服务器地址 |
| yapi.tokens | 项目 Token，格式为 `module=token`（每行一个） |

## 获取 YApi Token

1. 登录 YApi
2. 进入项目设置
3. 复制项目 Token

## Token 格式

Token 以 `module=token` 的格式指定，每行一个。模块名用于将 API 匹配到正确的 YApi 项目。

```properties
# 在配置文件中
yapi.server=http://your-yapi-server.com
yapi.tokens=user-module=abc123\norder-module=def456
```

在 IDE 设置中，在 Tokens 字段中每行输入一个 `module=token` 对。

## 导出模式

控制导出到 YApi 时如何处理已有 API：

| 模式 | 说明 |
|------|------|
| ALWAYS_UPDATE | 始终更新已有 API（默认） |
| NEVER_UPDATE | 从不更新已有 API |
| ALWAYS_ASK | 弹窗询问是否覆盖每个 API |
| UPDATE_IF_CHANGED | 仅当 API 内容发生变化时更新 |

通过 IDE 设置或配置文件配置：

```properties
yapi.export.mode=ALWAYS_UPDATE
```

## 其他选项

| 设置项 | 默认值 | 说明 |
|--------|--------|------|
| enableUrlTemplating | `true` | 启用路径参数的 URL 模板化 |
| switchNotice | `true` | 切换 YApi 项目时显示通知 |
| yapi.req.body.json5 | `false` | 请求体使用 JSON5 格式 |
| yapi.res.body.json5 | `false` | 响应体使用 JSON5 格式 |

## 配置方式

### 在 IDE 设置中配置

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd>

### 在配置文件中配置

```properties
yapi.server=http://your-yapi-server.com
yapi.tokens=my-project=your-project-token
yapi.export.mode=ALWAYS_UPDATE
enable.url.templating=true
switch.notice=true
yapi.req.body.json5=false
yapi.res.body.json5=false
```

## YApi Mock

EasyYapi 支持将字段 Mock 规则同步到 YApi Mock 服务。

详见 [YApi Mock](./yapi-mock)。
