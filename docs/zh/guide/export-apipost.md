# 导出到 ApiPost

::: warning Beta 功能
ApiPost 通道默认关闭，使用前请先在 **Features** 标签页中启用。
:::

EasyYapi 可以将 HTTP 接口导出到 [ApiPost](https://www.apipost.cn/) 项目。配置了 token 和项目时，接口通过 ApiPost 开放接口直接推送；未配置时，会写出 `apipost.json` 导入文件，供手动导入。

## 启用通道

打开 <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Features</kbd>，在 **Export Channels** 下启用 **ApiPost (Beta)**，然后重新打开 Settings 才能看到 ApiPost 标签页——与其它 beta 通道一样，需要先启用再配置。

## 配置目标项目

打开 <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>ApiPost (Beta)</kbd>：

| 字段 | 作用域 | 说明 |
|-------|-------|-------------|
| **Server** | Application | ApiPost 的地址，默认 `https://open.apipost.net`。仅用于拼接 `/open/apis/*` 请求 URL，绝不会写进你的文档。 |
| **Token** | Application | ApiPost 开放接口 token，以 `api-token` 请求头发送。 |
| **Team** | — | 点击 **Load** 拉取该 token 可访问的团队，然后选择一个。 |
| **Project** | Project | 点击 **Refresh** 列出所选团队的项目，选择目标项目。 |

token 和 server 在整个 IDE 中只保存一份；项目 id 按仓库保存，因此切换仓库时会切换到对应的目标项目，而不会静默复用上一个仓库的配置。

项目只能选择、不能手填：项目 id 是一串不可读的字符串，手填出错时不会有任何提示。已配置但不在拉取结果中的 id 仍会作为独立选项保留，因此指向当前团队以外项目的仓库依然可用。

## 导出

1. 打开包含接口的文件，或在 Project 视图中选择文件/文件夹。
2. 选择 **EasyYapi** > **Export** > **ApiPost (Beta)**，或使用 API Explorer 中的 ApiPost 动作。
3. 可在导出对话框中选择目标项目；不选择则使用已配置的项目。

该通道仅支持 HTTP。gRPC 接口会被跳过，因为 ApiPost 无法表示它们。如果所选范围内没有 HTTP 接口，导出会提示没有可导出的内容。

### 推送 vs. 文件

| 情况 | 结果 |
|-----------|--------|
| 已配置 token **和** 项目 id | 项目被就地更新，结果会报告新建/更新的接口数量。 |
| 两者缺一 | 写出 `apipost.json` 文件。在 ApiPost 中选择 **导入** → 「ApiPost 格式」→ 上传该文件即可。 |

## 两个 URL，刻意彼此独立

ApiPost 导出会解析两个互不相关的 URL，二者互不推导：

| 规则 | 含义 |
|------|---------|
| `apipost.host` | ApiPost 自身的地址，仅用于拼装开放接口请求。默认取 Server 字段的值。 |
| `apipost.server.url` | 你正在编写的 API 的基础地址，会写入导入文档的前置 URL，使导入后的接口指向你自己的服务。 |

把两者混用会让所有导入的接口都指向 ApiPost 自身。`apipost.server.url` 未设置时留空。

## ApiPost 规则

```properties
# 本次导出的目标项目
apipost.project=1234567890abcdef

# 写入导入文档的基础地址
apipost.server.url=https://api.example.com

# 开放接口地址覆盖（通常不需要）
apipost.host=https://open.apipost.net
```

| 规则 | 说明 |
|------|-------------|
| `apipost.project` | 目标项目 id，覆盖已配置的项目 |
| `apipost.host` | ApiPost 开放接口地址覆盖 |
| `apipost.server.url` | 被导出 API 的基础地址，写入文档的 host/base_path |
| `apipost.export.before` | 导出开始前触发一次的事件 |
| `apipost.save.before` | 推送单个接口前触发，`document` 绑定可被修改 |
| `apipost.save.after` | 推送单个接口后触发，暴露 `content` 与 `result` |

规则语法见 [配置规则](/settings/config-rule)。

## 重复导出行为

重复导出同一批接口是更新（upsert）而非重复创建。接口按 **请求方法 + 路径** 与项目中已有节点匹配；ApiPost 开放接口没有批量导入路由，因此推送按依赖顺序进行：

1. **文件夹** —— 已存在时按名称复用，因为父节点缺失时子节点会被拒绝创建。
2. **数据模型** —— 按名称去重，并在引用它们的接口之前推送。
3. **接口** —— 就地创建或更新。

服务端重新生成的文件夹和模型 id 会在子节点推送前回填到 `parent_id` 与 `$ref` 中，因为只有服务端返回的 id 才是可信来源。

## 下一步

- [导出到 OpenAPI](/guide/export-openapi) —— 输出可移植的契约文件，而非推送项目
- [导出到 YApi](/guide/export2yapi) —— 推送接口到 YApi 项目
- [IDE 设置](/settings/ide-setting) —— ApiPost 设置标签页说明
