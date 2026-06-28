# 本地配置文件

EasyYapi 使用 `.easy.api.config` 文件作为本地配置文件。从 EasyYapi 3.0 起推荐使用 [`.easyapi/` 文件夹模型](./rule-authoring#基于文件夹的规则文件)，`.easyapi/` 中的每个常规文件都会被自动加载。下方旧的 `.easy.api.config*` 文件仍会被读取以保持向后兼容。

## 文件位置

规则文件基于 **IntelliJ 工程根目录**（你在 IDE 中打开的文件夹，即
`project.basePath`）解析。发现过程**不会**向下递归到子目录，因此当父目录被
作为工程打开时，放在嵌套模块文件夹中的配置文件**不会**被加载。

> **多模块工程注意：** 不存在按模块划分的配置层。若你将 `your-project/` 作为工程
> 打开，只会读取 `your-project/` 及其**祖先**目录下的 `.easy.api.config` /
> `.easyapi/`。若希望某个模块拥有独立规则，请将该模块文件夹单独作为 IntelliJ
> 工程打开，或将所有规则统一放在共享的 `<project>/.easyapi/` 文件夹中。

### 项目根目录

你在 IDE 中打开的文件夹：

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

旧版的 `.easy.api.config[.properties|.yml|.yaml]` 文件还会从工程根目录**向上**
查找祖先目录（例如多个工程共享的父目录中的配置）。

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

配置由多个来源按优先级合并。在同一来源内，`.easyapi/` 中的文件按文件名排序依次
读取并追加。对于同一个 key，高优先级来源会覆盖低优先级来源。

| 优先级 | 来源 | 加载位置 |
|:---:|---|---|
| 4 | **工程规则** | `<project>/.easyapi/*`（全部常规文件）+ 从 `<project>` 向上查找的旧版 `.easy.api.config*` |
| 3 | 扩展规则 | 内置框架预设（Spring、Jackson、Validation、Swagger……），可在 Settings → Extensions 中开关 |
| 3 | 远程规则 | 来自 `remote.url` 的 URL（Settings → Rules → Remote） |
| 2 | 全局规则 | `~/.easyapi/*`（全部常规文件） |

工程规则优先级最高，全局规则为最低的兜底层。不存在单独的“模块级”配置层。
