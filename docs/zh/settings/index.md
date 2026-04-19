# 配置

EasyYapi 提供了灵活的配置系统来自定义 API 文档生成行为。

## 配置方式

### 本地配置文件

在项目根目录或模块根目录创建 `.easy.api.config` 文件：

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

1. 远程配置（最高优先级）
2. 模块根目录配置
3. 项目根目录配置
4. IDE 设置（最低优先级）
