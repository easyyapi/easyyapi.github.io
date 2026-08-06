# 导出到 Hoppscotch

::: warning Beta 功能
Hoppscotch 导出默认关闭，使用前请先在 **Features** 标签页中启用 **Hoppscotch (Beta)**。
:::

EasyYapi 可以将 HTTP 接口导出为 Hoppscotch 集合。该渠道支持导出本地 JSON 文件，也支持上传到 Hoppscotch 服务端。

## 启用渠道

打开 **Settings** > **Other Settings** > **EasyApi** > **Features**，在 **Export Channels** 中启用 **Hoppscotch (Beta)**。

如果要上传云端，请打开 Hoppscotch 设置，通过浏览器登录或手动填写访问令牌。未配置令牌时，导出仍然会使用本地文件模式。

## 导出集合

1. 打开包含 API 的文件，或在 Project 视图中选择文件/文件夹。
2. 选择 **EasyYapi** > **Export** > **Hoppscotch (Beta)**。
3. 未登录时选择输出目录和文件名，默认文件为 `hoppscotch_collection.json`。
4. 已登录时选择 **(New) Create new collection**，或选择已有集合进行更新。

没有令牌时，生成的 JSON 可以手动导入 Hoppscotch。配置令牌后，EasyYapi 会通过 Hoppscotch API 上传集合。

## 服务端和自托管设置

Hoppscotch 设置页提供以下选项：

| 设置项 | 说明 |
|--------|------|
| **Server URL** | Hoppscotch 服务地址，默认为 `https://hoppscotch.io`。 |
| **Backend URL** | 自托管部署使用的可选后端 API 地址。 |
| **Login / Logout** | 开始或清除浏览器登录会话。 |
| **Manual Token** | 浏览器登录不可用时使用的备用访问令牌。 |

Hoppscotch 导出只支持 HTTP，不会将 gRPC 接口加入集合。

## 更新已有集合

更新集合采用先创建后删除的流程。EasyYapi 会先请求确认，因为替换后的集合会获得新的 ID；更新后指向旧集合的分享链接会失效。

## 配置规则

以下渠道规则可以自定义集合：

- `hopp.host`：覆盖集合 Host
- `hopp.prerequest`、`hopp.class.prerequest`、`hopp.collection.prerequest`：分别添加接口、类、集合级别的请求前脚本
- `hopp.test`、`hopp.class.test`、`hopp.collection.test`：添加响应测试
- `hopp.format.after`：在集合格式化后执行

详见[配置规则](/zh/settings/config-rule)。
