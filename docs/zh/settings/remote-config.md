# 远程配置文件

EasyYapi 支持从远程 URL 加载配置文件，方便团队共享配置。

## 配置方法

远程配置 URL 在 IDE 设置中配置，**而非**通过配置文件中的键。

打开 **Settings → EasyApi → Rules → Remote** 子标签页，每行添加一个 URL：

```
http://your-config-server.com/easy-api.config
```

- 每行是一个返回规则/配置内容的远程 URL。
- 在 URL 前加 `!` 可禁用该 URL 而无需删除（例如 `!http://config-server.com/legacy.config`）。
- 空行和空白字符会被忽略。

## 从配置文件中引入远程 URL

你也可以在规则文件中使用 `###include` 指令拉取远程配置：

```properties
###include https://raw.githubusercontent.com/org/repo/main/easyapi/common.rules
```

详见 [本地配置文件 → 包含其他配置文件](./local-file-config#包含其他配置文件) 了解 `###include` 及旧版 `properties.additional` 形式的完整说明。

## 特性

- 远程配置优先级高于扩展规则和全局规则，但工程规则（`.easyapi/` / 工程根目录下的 `.easy.api.config*`）优先级更高
- 支持多个远程 URL（在设置界面中每行一个）
- 支持自动刷新

## 示例

Settings → EasyApi → Rules → Remote：

```
http://config-server.com/common.easy.api.config
http://config-server.com/project-specific.easy.api.config
```

本地配置（优先级低于远程）：

```properties
field.mock=@mock
```
