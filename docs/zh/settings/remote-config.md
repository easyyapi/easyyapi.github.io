# 远程配置文件

EasyYapi 支持从远程 URL 加载配置文件，方便团队共享配置。

## 配置方法

在本地配置文件中添加远程 URL：

```properties
remote.url=http://your-config-server.com/easy-api.config
```

## 特性

- 远程配置优先级最高
- 支持多个远程 URL（按行分隔）
- 支持自动刷新

## 示例

```properties
# 远程配置
remote.url=http://config-server.com/common.easy.api.config
remote.url=http://config-server.com/project-specific.easy.api.config

# 本地配置（优先级低于远程）
field.mock=@mock
```
