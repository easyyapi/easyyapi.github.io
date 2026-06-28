# 规则编写

EasyApi 开箱即用地支持标准 HTTP 框架（Spring MVC、WebFlux、JAX-RS、Feign）—— **大多数项目无需自定义规则**。对于扫描器无法察觉的自定义框架行为（例如要求添加请求头的 `jakarta.servlet.Filter`，或将每个响应包装在信封中的 `ResponseBodyAdvice`），可使用内置的 AI 助手或外部 skill 来检测并生成规则。完整的自定义模式目录请参见 [Rule Authoring Guide](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md)。

本页介绍 EasyYapi 3.x 中编写规则的**三种方式**，请根据你的工作流选择。

| 方式 | 适用场景 | 位置 |
|------|----------|------|
| [基于文件夹的规则文件](#基于文件夹的规则文件) | 希望以纯文本方式纳入版本控制的团队 | `.easyapi/*.rules` |
| [内置 AI 助手](#内置-ai-助手) | 快速编写单条规则，或扫描项目中隐藏的框架行为 | Settings → EasyApi → Rules → Chat / Magic |
| [外部 `easy-yapi-assistant` skill](#外部-easy-yapi-assistant-skill) | 通过外部 AI 工具（CLI / IDE agent）驱动规则编写 | 已随插件打包 |

---

## 基于文件夹的规则文件

从 EasyYapi 3.0 起，规则文件按**文件夹**自动发现，取代了旧的单 `.easy.api.config` 文件工作流（旧文件仍会被读取以保持向后兼容）。

### 规则文件位置

| 范围 | 文件夹 | 作用于 |
|------|--------|--------|
| **项目** | `<project>/.easyapi/*.rules`（或 `*.properties`） | 仅当前项目 |
| **全局** | `~/.easyapi/*.rules` | 本机所有项目 |
| **内置** | 随插件打包 | 始终加载 |
| **远程** | 在 Settings → Remote 中配置的 URL | 重新加载时拉取 |

文件夹中的每个常规文件都会被自动加载——无需维护文件列表。文件夹是唯一的真相来源。

### 文件格式

规则文件是 UTF-8 文本文件，每行一条规则：

```properties
# 格式: <key>[<filter>]=<value>
#   key      — 规则键（参见 可用配置规则）
#   filter   — 可选；放在 key 之后的 [...] 中
#   value    — 字面文本、表达式或 Groovy 脚本

# 没有过滤器的规则对所有元素生效：
api.status=disabled

# 带过滤器的规则只对匹配元素生效：
api.tag[$class:com.example.UserController]=user

# Groovy 脚本以 "groovy:" 前缀标识：
field.ignore[groovy: it.name() == "internalCache"]=true
```

### 在 IDE 中管理文件

打开 **Settings → EasyApi → Rules**。该标签页包含三个子标签——**Project**、**Global**、**Remote**：

- 可直接在对话框中添加 / 编辑 / 重命名 / 删除文件。
- 取消文件旁的 **Enabled** 复选框可在不删除文件的情况下禁用它。被禁用的路径保存在 `Settings.disabledAutoRuleFiles`（项目级）或 `Settings.disabledGlobalRuleFiles`（全局级）中。
- 保存即重新加载，无需重启 IDE。

### 过滤器语法速查

过滤器位于 key 之后的 `[...]` 中，限制规则只对匹配的元素生效：

| 前缀 | 含义 | 示例 |
|------|------|------|
| `$class:` | 全限定类名精确匹配 | `$class:com.example.UserController` |
| `@` | 匹配带有指定注解的元素 | `@org.springframework.web.bind.annotation.RestController` |
| `#regex:` | 正则匹配；捕获组可用 `${1}`、`${2}` | `#regex:Mono<(.*?)>` |
| `#` | 标签匹配（来自注释或注解） | `#internal` |
| `!` | 对后续表达式取反 | `!@java.lang.Deprecated` |
| `groovy:` | 返回真值的 Groovy 脚本 | `groovy: it.hasAnn("X")` |
| *(无)* | 字面值，总是匹配 | `api.status=disabled` |

> **迁移提示：** 2.x 中的 `class:com.example.Foo` 与 `~regex` 形式在 3.x 中无效。请改用 `$class:`（精确匹配）或 `groovy:`（模式匹配）。完整规则键目录参见 [可用配置规则](./config-rule)。

---

## 内置 AI 助手

EasyYapi 3.0 内置了与供应商无关的 AI 助手，可用自然语言为你编写规则。它集成在 Rules 标签页中，使用与外部 skill 相同的知识库。

### 前置条件

1. 打开 **Settings → EasyApi → AI**（独立的顶级标签页）。
2. 选择供应商（`OPENAI`、`ANTHROPIC`、`GEMINI`、`OLLAMA`、`AZURE_OPENAI` 或 `CUSTOM`）。
3. 输入 API key（安全存储在 IntelliJ 的 `PasswordSafe` 中）、base URL（已知供应商会自动填充）和模型名。
4. 点击 **Test Connection** 验证。该测试使用界面上的字段值，因此可在点击 Apply/OK 之前先验证。
5. 点击 **Auto-detect** 让 EasyYapi 从环境变量（`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、`OLLAMA_HOST` 等）推断供应商。

### 工作流

1. 打开 **Settings → EasyApi → Rules**。
2. 点击底部操作栏的 **Chat** 打开内嵌 AI 面板，或点击 **Magic** 运行内置的"审查并检测"指令。
3. 用自然语言输入请求，例如：
   - "将 `UserController` 中所有端点重命名为以 `fetch_` 开头。"
   - "为 `internal` 包中所有类添加 `internal` 标签。"
   - "检测需要请求头的自定义 Filter 并为我生成规则。"
4. 助手会读取你现有的规则、推理你的请求，并提出规则内容。
5. 在提案卡片中审阅，可在保存前 **Edit** 内容。
6. 点击 **Save…**——选择 Global（`~/.easyapi/`）或 Project（`<project>/.easyapi/`）范围及文件名。
7. 规则文件写入所选文件夹，配置立即重新加载。

助手**永远不会在未经你明确批准的情况下写文件**——每个会改变状态的动作工具都需要点击 Approve。

### Magic 按钮

**Magic** 会运行一条内置指令，用于：

1. 审查现有规则的缺口。
2. 扫描项目中缺少规则的自定义框架模式（Filter、Interceptor、`ResponseBodyAdvice`、`HandlerMethodArgumentResolver`、元注解）。
3. 依据 [Custom-Pattern Catalog](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md#custom-pattern-catalog) 为每个检测结果提出规则。

---

## 外部 `easy-yapi-assistant` skill

对于希望通过外部 AI 工具（CLI agent、IDE 助手、CI 辅助）驱动规则编写的团队，EasyYapi 打包了 `easy-yapi-assistant` skill。该 skill 随插件发布，使用与内置助手相同的知识库，确保外部工具与内置助手始终从同一真相来源编写规则。

该 skill 提供：

- **Rule-key catalog** — 受支持规则键的权威清单。
- **Custom-Pattern Catalog** — 与 Magic 按钮相同的检测模式。
- **辅助脚本** — `list_rule_files.sh`、`read_rule_file.sh`、`get_existing_rules_for_key.sh`，用于检查 `.easyapi/` 文件夹中的现有规则。

适用于以下场景：

- 通过终端 AI 工具编写规则。
- 在 CI 中跨多个仓库批量检测自定义框架行为。
- 生成规则草稿，再由人工在 IDE 中最终确认。

---

## 3.1.x 新特性

近期值得了解的变更：

- **基于文件夹的规则管理** (`#1398`)——项目级和全局级的 `.easyapi/*.rules` 文件夹模型，取代旧的单文件工作流。旧 `.easy.api.config*` 文件仍会被读取以保持向后兼容。
- **内置 AI 助手** (`#1398`)——与供应商无关的 AI 服务（基于 LangChain4j），内嵌在 Rules 标签页的规则编写 agent。AI 设置已提升为独立的顶级标签页。
- **Postman 环境同步** (`#722`)——将 Postman 环境同步到 API Dashboard，可在端点详情面板内联编辑。
- **日志规范** (`#1393`、`#1394`、`#1396`)——EasyAPI 控制台默认 `SILENT`，当日志级别为 `SILENT` 时隐藏。插件失败时会显示自解释通知，而不是静默堆栈。
- **AI key 存储** (`#1403`)——AI 供应商密钥通过独立的 `AiApiKeyStore` 存储在 IntelliJ 的 `PasswordSafe` 中，不再以明文形式存于设置。

完整发布说明请参见 [changelog](https://github.com/tangcent/easy-yapi/blob/master/CHANGELOG.md)。
