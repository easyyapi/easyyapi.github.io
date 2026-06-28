# Plugin Knowledge Base (AI)

This page provides a knowledge base for AI assistants to better understand and work with the EasyYapi plugin. It is also the page the Rules tab's **Help** button opens.

## What is EasyYapi?

EasyYapi is an IntelliJ IDEA plugin that generates API documentation from Java/Kotlin source code based on Javadoc, KDoc, and ScalaDoc comments.

## Out of the Box

EasyApi understands standard HTTP frameworks (Spring MVC, WebFlux, JAX-RS, Feign) out of the box — **most projects need no custom rules**. For custom framework behaviour the scanner can't see (e.g. a `jakarta.servlet.Filter` that requires a header, or a `ResponseBodyAdvice` that wraps every response in an envelope), use the built-in AI Assistant or the external skill to detect it and generate the rule. See [Rule Authoring](/settings/rule-authoring) for the guide.

## Key Concepts

- **Folder-based rule files** (3.0+): `.easyapi/*.rules` at project (`<project>/.easyapi/`) and global (`~/.easyapi/`) scopes — discovered automatically, reloaded on change. Legacy `.easy.api.config*` files are still read for backwards compatibility.
- **Built-in AI Assistant**: a provider-neutral AI service (LangChain4j-backed) embedded in the Rules tab (Chat / Magic buttons). Authors rules in natural language and never writes files without explicit approval.
- **External `easy-yapi-assistant` skill**: a skill you install (`npx skills add tangcent/easy-yapi -g -y`) so external AI coding assistants (Trae, Cursor, Cline, Continue, etc.) author rules from the same knowledge base as the built-in assistant.
- **Configuration Rules**: key-value pairs that customize documentation generation. See [Available Config Rules](/settings/config-rule).
- **Groovy Scripts**: advanced customization via the `groovy:` prefix. See [Script Tools](/settings/tools).
- **Parse Events**: callbacks that execute at specific points during the parsing process. See [Callbacks & Events](/settings/).
- **Script Tools**: built-in utilities available in Groovy scripts.

## Ways to Write Rules

EasyYapi 3.x offers **two ways** to author rules. Both write to `.easyapi/*.rules` files. See [Rule Authoring](/settings/rule-authoring) for the full guide.

| Way | Best for |
|--------|----------|
| [Built-in AI Assistant](/settings/rule-authoring#built-in-ai-assistant) | Natural-language rule creation in Settings → Rules → Chat / Magic |
| [External `easy-yapi-assistant` skill](/settings/rule-authoring#external-easy-yapi-assistant-skill) | Driving rule authoring from an external AI coding assistant |

## Common Workflows

1. Install the plugin from JetBrains Marketplace
2. Add Javadoc/KDoc comments to your code
3. (Optional) Author rules in `.easyapi/*.rules` files via the AI Assistant or the external skill
4. Export documentation to YApi, Postman, or Markdown

## Configuration File Locations

- **Project rules (3.0+)**: `<project>/.easyapi/*.rules`
- **Global rules (3.0+)**: `~/.easyapi/*.rules`
- **Legacy project config**: `.easy.api.config` (still read for backwards compatibility)
- **Remote**: configured via `remote.url`
