# Plugin Knowledge Base (AI)

This page provides a knowledge base for AI assistants to better understand and work with the EasyYapi plugin. It is also the page the Rules tab's **Help** button opens.

## What is EasyYapi?

EasyYapi is an IntelliJ IDEA plugin that generates API documentation from Java/Kotlin source code based on Javadoc, KDoc, and ScalaDoc comments.

## Out of the Box

EasyApi understands standard HTTP frameworks (Spring MVC, WebFlux, JAX-RS, Feign) out of the box — **most projects need no custom rules**. For custom framework behaviour the scanner can't see (e.g. a `jakarta.servlet.Filter` that requires a header, or a `ResponseBodyAdvice` that wraps every response in an envelope), use the built-in AI Assistant or the external skill to detect it and generate the rule. See the [Rule Authoring Guide](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md) for the full Custom-Pattern Catalog.

## Key Concepts

- **Folder-based rule files** (3.0+): `.easyapi/*.rules` at project (`<project>/.easyapi/`) and global (`~/.easyapi/`) scopes — discovered automatically, reloaded on change. Legacy `.easy.api.config*` files are still read for backwards compatibility.
- **Built-in AI Assistant**: a provider-neutral AI service (LangChain4j-backed) embedded in the Rules tab (Chat / Magic buttons). Authors rules in natural language and never writes files without explicit approval.
- **External `easy-yapi-assistant` skill**: bundled inside the plugin so external AI assistants author rules from the same knowledge base.
- **Configuration Rules**: key-value pairs that customize documentation generation. See [Available Config Rules](/settings/config-rule).
- **Groovy Scripts**: advanced customization via the `groovy:` prefix. See [Script Tools](/settings/tools).
- **Parse Events**: callbacks that execute at specific points during the parsing process. See [Callbacks & Events](/settings/).
- **Script Tools**: built-in utilities available in Groovy scripts.

## Ways to Write Rules

EasyYapi 3.x supports three ways to author rules. See [Rule Authoring](/settings/rule-authoring) for the full guide.

| Method | Best for |
|--------|----------|
| [Folder-based rule files](/settings/rule-authoring#folder-based-rule-files) | Plain-text rules under version control (`.easyapi/*.rules`) |
| [Built-in AI Assistant](/settings/rule-authoring#built-in-ai-assistant) | Natural-language rule creation in Settings → Rules → Chat / Magic |
| [External `easy-yapi-assistant` skill](/settings/rule-authoring#external-easy-yapi-assistant-skill) | Driving rule authoring from an external AI tool |

## Common Workflows

1. Install the plugin from JetBrains Marketplace
2. Add Javadoc/KDoc comments to your code
3. (Optional) Author rules in `.easyapi/*.rules` files or via the AI Assistant
4. Export documentation to YApi, Postman, or Markdown

## Configuration File Locations

- **Project rules (3.0+)**: `<project>/.easyapi/*.rules`
- **Global rules (3.0+)**: `~/.easyapi/*.rules`
- **Legacy project config**: `.easy.api.config` (still read for backwards compatibility)
- **Remote**: configured via `remote.url`

## What's New in 3.1.x

- **Folder-based rule management** (`#1398`) — `.easyapi/*.rules` folder model at project and global scopes, replacing the legacy single-file workflow.
- **Built-in AI Assistant** (`#1398`) — provider-neutral AI service with a rule-authoring agent embedded in the Rules tab. Dedicated AI settings tab promoted to top level.
- **Postman environment sync** (`#722`) — sync Postman environments to the API Dashboard with inline editing.
- **Logging discipline** (`#1393`, `#1394`, `#1396`) — the EasyAPI console defaults to `SILENT` and is hidden when the log level is `SILENT`. The plugin now surfaces a self-explanatory notification when it fails.
- **AI key storage** (`#1403`) — AI provider keys are stored in IntelliJ's `PasswordSafe` via a dedicated `AiApiKeyStore`.

For the full release notes, see the [changelog](https://github.com/tangcent/easy-yapi/blob/master/CHANGELOG.md).
