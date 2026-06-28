# Rule Authoring

EasyApi understands standard HTTP frameworks (Spring MVC, WebFlux, JAX-RS, Feign) out of the box — **most projects need no custom rules**. For custom framework behaviour the scanner can't see (e.g. a `jakarta.servlet.Filter` that requires a header, or a `ResponseBodyAdvice` that wraps every response in an envelope), use the built-in AI Assistant or the external skill to detect it and generate the rule. See the [Rule Authoring Guide](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md) for the full Custom-Pattern Catalog.

This page introduces the **three ways** to author rules in EasyYapi 3.x. Pick the one that matches your workflow.

| Method | Best for | Where it lives |
|--------|----------|----------------|
| [Folder-based rule files](#folder-based-rule-files) | Teams that want plain-text rules under version control | `.easyapi/*.rules` |
| [Built-in AI Assistant](#built-in-ai-assistant) | Quick one-offs, scanning a project for hidden framework behaviour | Settings → EasyApi → Rules → Chat / Magic |
| [External `easy-yapi-assistant` skill](#external-easy-yapi-assistant-skill) | Driving rule authoring from an external AI tool (CLI / IDE agent) | bundled inside the plugin |

---

## Folder-based rule files

Starting with EasyYapi 3.0, rule files are discovered by **folder**, replacing the legacy single `.easy.api.config` file workflow (legacy files are still read for backwards compatibility).

### Where rule files live

| Scope | Folder | Applies to |
|-------|--------|------------|
| **Project** | `<project>/.easyapi/*.rules` (or `*.properties`) | The current project only |
| **Global** | `~/.easyapi/*.rules` | Every project on this machine |
| **Built-in** | bundled inside the plugin | Always loaded |
| **Remote** | URLs configured in Settings → Remote | Pulled on reload |

Every regular file in a folder is loaded automatically — there is no list to maintain. The folder is the source of truth.

### File format

A rule file is a UTF-8 text file with one rule per line:

```properties
# Format: <key>[<filter>]=<value>
#   key      — a rule key (see Available Config Rules)
#   filter   — optional; goes INSIDE [...] AFTER the key
#   value    — literal text, expression, or Groovy script

# A rule with no filter applies to every element:
api.status=disabled

# A rule with a filter applies only to matching elements:
api.tag[$class:com.example.UserController]=user

# Groovy scripts are prefixed with "groovy:"
field.ignore[groovy: it.name() == "internalCache"]=true
```

### Managing files inside the IDE

Open **Settings → EasyApi → Rules**. The tab has three sub-tabs — **Project**, **Global**, **Remote**:

- Add / edit / rename / remove files directly from the dialog.
- Uncheck the **Enabled** box next to a file to disable it without deleting it. Disabled paths are persisted in `Settings.disabledAutoRuleFiles` (project) or `Settings.disabledGlobalRuleFiles` (global).
- Files are reloaded on save — no IDE restart needed.

### Filter syntax cheat sheet

Filters appear **inside `[...]` after the key** and restrict the rule to matching elements:

| Prefix | Meaning | Example |
|--------|---------|---------|
| `$class:` | Exact fully-qualified class-name match | `$class:com.example.UserController` |
| `@` | Matches elements annotated with the given annotation | `@org.springframework.web.bind.annotation.RestController` |
| `#regex:` | Regex match; capture groups available as `${1}`, `${2}` | `#regex:Mono<(.*?)>` |
| `#` | Tag match (from comments or annotations) | `#internal` |
| `!` | Negates the following expression | `!@java.lang.Deprecated` |
| `groovy:` | Truthy Groovy script | `groovy: it.hasAnn("X")` |
| *(none)* | Literal value, always matches | `api.status=disabled` |

> **Migration note:** the 2.x `class:com.example.Foo` and `~regex` forms are invalid in 3.x. Use `$class:` (exact match) or `groovy:` (pattern match) instead. See [Available Config Rules](./config-rule) for the full key catalog.

---

## Built-in AI Assistant

EasyYapi 3.0 ships a provider-neutral AI assistant that can author rules for you in natural language. It is wired into the Rules tab and reads the same knowledge base the external skill uses.

### Prerequisites

1. Open **Settings → EasyApi → AI** (a dedicated top-level tab).
2. Choose a provider (`OPENAI`, `ANTHROPIC`, `GEMINI`, `OLLAMA`, `AZURE_OPENAI`, or `CUSTOM`).
3. Enter the API key (stored securely in IntelliJ's `PasswordSafe`), base URL (auto-filled for known providers), and model name.
4. Click **Test Connection** to verify. The test uses the on-screen field values, so you can verify before clicking Apply/OK.
5. Click **Auto-detect** to let EasyYapi infer the provider from environment variables (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `OLLAMA_HOST`, …).

### Workflow

1. Open **Settings → EasyApi → Rules**.
2. Click **Chat** (bottom action bar) to reveal the inline AI panel, or **Magic** to run a built-in review-and-detect instruction.
3. Type a request in natural language. Examples:
   - "Rename all endpoints in `UserController` to start with `fetch_`."
   - "Add the tag `internal` to all classes in the `internal` package."
   - "Detect custom filters that require a header and add the rule for me."
4. The assistant reads your existing rules, reasons about the request, and proposes rule content.
5. Review the proposal card. You can **Edit** the content before saving.
6. Click **Save…** — choose Global (`~/.easyapi/`) or Project (`<project>/.easyapi/`) scope + filename.
7. The rule file is written into the chosen folder and the config is reloaded immediately.

The assistant **never writes files without your explicit approval** — every state-changing action tool requires an Approve click.

### The Magic button

**Magic** runs a built-in instruction that:

1. Reviews your existing rules for gaps.
2. Scans the project for custom framework patterns that lack a rule (Filters, Interceptors, `ResponseBodyAdvice`, `HandlerMethodArgumentResolver`, meta-annotations).
3. Proposes a rule for each detection, following the [Custom-Pattern Catalog](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md#custom-pattern-catalog).

---

## External `easy-yapi-assistant` skill

For teams that drive rule authoring from an external AI tool (CLI agent, IDE assistant, CI helper), EasyYapi bundles the `easy-yapi-assistant` skill. The skill ships inside the plugin and exposes the same knowledge base the in-IDE assistant uses, so external tools and the built-in assistant always author rules from the same source of truth.

The skill exposes:

- **Rule-key catalog** — the canonical list of supported rule keys.
- **Custom-Pattern Catalog** — the same patterns the Magic button detects.
- **Helper scripts** — `list_rule_files.sh`, `read_rule_file.sh`, `get_existing_rules_for_key.sh` for inspecting existing rules in `.easyapi/` folders.

Use the external skill when you want to:

- Author rules from a terminal-based AI tool.
- Batch-detect custom framework behaviour across multiple repos in CI.
- Generate rule stubs that a human reviewer finalises inside the IDE.

---

## What's new in 3.1.x

A few recent changes worth knowing about:

- **Folder-based rule management** (`#1398`) — `.easyapi/*.rules` folder model at project and global scopes, replacing the legacy single-file workflow. Legacy `.easy.api.config*` files are still read for backwards compatibility.
- **Built-in AI Assistant** (`#1398`) — provider-neutral AI service (LangChain4j-backed) with a rule-authoring agent embedded in the Rules tab. Dedicated AI settings tab promoted to top level.
- **Postman environment sync** (`#722`) — sync Postman environments to the API Dashboard with inline editing in the endpoint details panel.
- **Logging discipline** (`#1393`, `#1394`, `#1396`) — the EasyAPI console defaults to `SILENT` and is hidden when the log level is `SILENT`. When the plugin fails, it now surfaces a self-explanatory notification instead of a silent stack trace.
- **AI key storage** (`#1403`) — AI provider keys are stored in IntelliJ's `PasswordSafe` via a dedicated `AiApiKeyStore`, no longer in plain settings.

For the full release notes, see the [changelog](https://github.com/tangcent/easy-yapi/blob/master/CHANGELOG.md).
