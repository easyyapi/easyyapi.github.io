# 规则编写

EasyApi 开箱即用地支持标准 HTTP 框架（Spring MVC、WebFlux、JAX-RS、Feign）—— **大多数项目无需自定义规则**。对于扫描器无法察觉的自定义框架行为（例如要求添加请求头的 `jakarta.servlet.Filter`，或将每个响应包装在信封中的 `ResponseBodyAdvice`），可使用内置的 AI 助手或外部 skill 来检测并生成规则。完整的规则键目录请参见 [可用配置规则](./config-rule)。

EasyYapi 3.x 提供 **两种方式** 来编写规则。两种方式都写入同一位置——项目级（`<project>/.easyapi/`）或全局级（`~/.easyapi/`）的 `.easyapi/*.rules` 文件。文件夹模型请参见 [使用项目内配置文件](./local-file-config)。

| 方式 | 适用场景 |
|------|---------|
| [内置 AI 助手](#内置-ai-助手) | 在 IDE 内快速生成；扫描当前项目中隐藏的框架行为 |
| [外部 `easy-yapi-assistant` skill](#外部-easy-yapi-assistant-skill) | 从外部 AI 工具（CLI / IDE agent / CI）驱动规则编写；需自行安装该 skill |

---

## 内置 AI 助手

EasyYapi 3.0 内置了一个与提供商无关的 AI 助手（基于 LangChain4j），嵌入在 Rules 标签页中。它会读取你现有的规则、用自然语言推理你的请求、提出规则内容，并保存到你选择的 `.easyapi/*.rules` 文件中。助手**绝不会在未经你明确批准的情况下写入文件**——每个会改变状态的操作都需要点击 Approve。

### 前置准备

1. 打开 **Settings → EasyApi → AI**（独立的顶级标签页）。
2. 选择提供商：`OPENAI`、`ANTHROPIC`、`GEMINI`、`OLLAMA`、`AZURE_OPENAI` 或 `CUSTOM`。
3. 输入 API key（安全存储在 IntelliJ 的 `PasswordSafe` 中）、base URL（已知提供商会自动填充）和模型名称。
4. 点击 **Test Connection** 验证。测试使用界面上的字段值，因此你可以在点击 Apply/OK 之前先验证。
5. （可选）点击 **Auto-detect**，让 EasyYapi 从环境变量（`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、`OLLAMA_HOST`……）推断提供商。

### 编写规则

1. 打开 **Settings → EasyApi → Rules**。
2. 点击 **Chat**（底部操作栏）展开内联 AI 面板。
3. 用自然语言描述你的需求。示例：
   - "将 `UserController` 中所有端点的名称改为以 `fetch_` 开头。"
   - "给 `internal` 包下所有类添加标签 `internal`。"
   - "忽略 `UserDto` 中名为 `internalCache` 的字段。"
4. 助手会读取你现有的规则（`list_rule_keys`、`get_existing_rules`、`read_rule_file`），推理请求，并提出规则内容。
5. 在提案卡片中查看。保存前你可以 **Edit** 修改内容。
6. 点击 **Save…**——选择 Global（`~/.easyapi/`）或 Project（`<project>/.easyapi/`）范围 + 文件名。
7. 规则文件会写入所选文件夹，配置立即重新加载（文件夹是唯一真相来源——无需在设置列表中登记）。

### 检测隐藏的框架行为（Magic）

点击 **Magic**（底部操作栏）而不是 **Chat**，可运行内置的审查与检测指令。Magic 会：

1. 审查你现有规则的缺口。
2. 扫描项目中扫描器无法察觉的自定义框架模式——要求添加请求头的 Filter / Interceptor、`ResponseBodyAdvice` 包装器、`HandlerMethodArgumentResolver` 注入、元注解、自定义安全注解。
3. 为每个检测结果提出规则。

每个提案仍然经过与 Chat 相同的 Approve → Save 流程。写入什么完全由你掌控。

### 提示

- 助手可通过 `get_plugin_doc` 工具访问插件的知识库，因此它知道完整的规则键目录。
- 在提出修改前，可以让它"列出我当前的规则"——有助于了解起始状态。
- 助手通过**名称**（如 `security.rules`）而非绝对路径来定位规则文件。它会根据已跟踪的 `.easyapi/` 文件夹解析名称。

---

## 外部 `easy-yapi-assistant` skill

对于从外部 AI 工具驱动规则编写的团队——基于终端的 agent、IDE 助手或 CI 辅助工具——可以安装 `easy-yapi-assistant` skill。该 skill 使用与 IDE 内助手**相同的知识库**，因此外部工具和内置助手始终基于同一真相来源编写规则。

### 该 skill 暴露的内容

- **规则键目录**——支持规则键及其聚合模式的权威列表。
- **自定义模式目录**——Magic 按钮检测的相同模式（Filter / Interceptor / ResponseBodyAdvice / HandlerMethodArgumentResolver / 元注解），每个模式带有检测信号和规则配方。
- **辅助脚本**——`list_rule_files.sh`、`read_rule_file.sh`、`get_existing_rules_for_key.sh`，无需打开 IDE 即可检查 `.easyapi/` 文件夹中的现有规则。

### 何时使用该 skill

- 从有文件访问权限但没有 IntelliJ PSI 的终端 AI 工具编写规则。
- 在 CI 中跨多个仓库批量检测自定义框架行为。
- 生成规则桩，再由人工审查者在 IDE 中定稿。
- 当部分团队成员使用 IDE 助手、其他人使用外部工具时，保持规则编写的一致性。

### 如何使用

1. 全局安装该 skill：

   ```bash
   npx skills add tangcent/easy-yapi -g -y
   ```

   这会安装 `easy-yapi-assistant` skill。安装后，你的 AI 编程助手（Trae、Cursor、Cline、Continue 等）会在你要求添加或修改 EasyApi 规则时自动调用它。
2. 在 AI 编程助手中描述你想要的规则——例如"添加一条规则，忽略所有标注了 `@Internal` 的字段"。助手会使用 skill 捆绑的知识库（规则指南的同步副本）来编写规则。
3. （可选）在提出修改前，使用 skill 的辅助脚本检查 `.easyapi/` 文件夹的当前状态：
   - `list_rule_files.sh`——列出项目/全局 `.easyapi/` 文件夹中的规则文件。
   - `read_rule_file.sh <name>`——读取指定名称的规则文件。
   - `get_existing_rules_for_key.sh <key>`——查找给定规则键的现有规则。
4. 助手将提议的规则写入项目中的 `.easyapi/*.rules` 文件（或全局的 `~/.easyapi/`）。IDE 会在保存时重新加载。

由于 skill 和 IDE 内助手共享同一知识库，一方编写的规则可立即被另一方理解和编辑。
