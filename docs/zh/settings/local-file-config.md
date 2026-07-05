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

## 包含其他配置文件

::: tip v3.2.0 新增
`###include <path-or-url>` 指令（自 v3.2.0 起，#1410）允许规则文件引入其他本地文件或远程 URL。这是组合配置的**首选**方式；旧版的 `properties.additional` key 保留向后兼容，行为完全一致。
:::

在规则文件中独占一行写入 `###include` 指令即可引入另一个配置源：

```properties
# 相对当前文件目录加载共享规则文件
###include ./shared/security.rules

# 绝对路径
###include /etc/easyapi/team.rules

# 家目录相对路径
###include ~/easyapi/personal.rules

# 远程 URL（http/https）
###include https://raw.githubusercontent.com/org/repo/main/easyapi/common.rules
```

### 行为说明

- 指令必须独占一行。参数为要加载的路径或 URL（自动去除首尾空白）。
- **本地路径**相对于*包含该指令的文件所在目录*解析（或 `~/` 家目录，或绝对路径）。**远程 URL**（`http://` / `https://`）通过带缓存的资源解析器拉取。
- 被包含的文件使用**调用方的指令状态**解析，因此 include 之前生效的 `###set` 选项会延续到被包含文件中（例如 `###set ignoreUnresolved = true` 会被继承）。
- 被包含文件中的相对路径相对于*被包含文件自身*的目录解析（远程 include 则相对于同一 host）。
- 若资源无法解析，EasyYapi 会抛出错误——除非在 include 之前用 `###set ignoreNotFoundFile = true` 静默：

```properties
# 可选 include：文件缺失时静默跳过
###set ignoreNotFoundFile = true
###include ./optional/local-overrides.rules
###set ignoreNotFoundFile = false
```

### 旧版形式：`properties.additional`

旧版的 `properties.additional=<path-or-url>` key（每行一条）是 `###include` 的旧版等价物，行为完全一致——相同的解析规则、相同的指令状态继承、相同的 `ignoreNotFoundFile` 门控。推荐使用 `###include` 以获得更好的可读性；`properties.additional` 继续支持以保持现有配置可用。

```properties
# 旧版形式（仍受支持，行为与 ###include 完全一致）
properties.additional=./shared/security.rules
properties.additional=https://raw.githubusercontent.com/org/repo/main/easyapi/common.rules
```
