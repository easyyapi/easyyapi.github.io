# 本地配置文件

EasyYapi 使用 `.easy.api.config` 文件作为本地配置文件。从 EasyYapi 3.0 起推荐使用 [`.easyapi/` 文件夹模型](./rule-authoring#基于文件夹的规则文件)，`.easyapi/` 中的每个常规文件都会被自动加载。下方旧的 `.easy.api.config*` 文件仍会被读取以保持向后兼容。

## 文件位置

### 项目根目录

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

### 模块根目录

```
your-project/
├── module-a/
│   ├── .easy.api.config
│   └── src/
├── module-b/
│   ├── .easy.api.config
│   └── src/
└── pom.xml
```

### 3.0+ 文件夹模型（推荐）

在 `.easyapi/` 文件夹中放置任意数量的 `.rules`（或 `.properties`）文件。每个常规文件都会被加载——无需维护文件列表。

```
your-project/
├── .easyapi/
│   ├── naming.rules
│   ├── security.rules
│   └── postman.rules
├── src/
└── pom.xml
```

全局范围同样适用此模型：`~/.easyapi/*.rules` 会为本机所有项目加载。可在 **Settings → EasyApi → Rules**（Project / Global / Remote 子标签页）中以可视化方式管理文件。

## 文件格式

配置文件使用 `key=value` 格式：

```properties
# 注释以 # 开头

# API 名称规则
api.name=#name

# 字段忽略规则
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# 类型转换
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

## 配置合并

多个配置文件会按优先级合并，高优先级的配置会覆盖低优先级的配置。
