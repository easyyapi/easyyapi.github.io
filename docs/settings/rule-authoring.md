# Rule Authoring

EasyApi understands standard HTTP frameworks (Spring MVC, WebFlux, JAX-RS, Feign) out of the box — **most projects need no custom rules**. For custom framework behaviour the scanner can't see (e.g. a `jakarta.servlet.Filter` that requires a header, or a `ResponseBodyAdvice` that wraps every response in an envelope), use the built-in AI Assistant or the external skill to detect it and generate the rule. See [Available Config Rules](./config-rule) for the full rule key catalog.

EasyYapi 3.x offers **two ways** to author rules. Both write to the same place — `.easyapi/*.rules` files at project (`<project>/.easyapi/`) or global (`~/.easyapi/`) scope. See [Local Config File](./local-file-config) for the folder model.

| Way | Best for |
|-----|----------|
| [Built-in AI Assistant](#built-in-ai-assistant) | Quick one-offs inside the IDE; scanning the current project for hidden framework behaviour |
| [External `easy-yapi-assistant` skill](#external-easy-yapi-assistant-skill) | Driving rule authoring from an external AI tool (CLI / IDE agent / CI); requires installing the skill |

---

## Built-in AI Assistant

EasyYapi 3.0 ships a provider-neutral AI assistant (LangChain4j-backed) embedded in the Rules tab. It reads your existing rules, reasons about your request in natural language, proposes rule content, and saves it to a `.easyapi/*.rules` file you choose. The assistant **never writes files without your explicit approval** — every state-changing action requires an Approve click.

### Prerequisites

1. Open **Settings → EasyApi → AI** (a dedicated top-level tab).
2. Choose a provider: `OPENAI`, `ANTHROPIC`, `GEMINI`, `OLLAMA`, `AZURE_OPENAI`, or `CUSTOM`.
3. Enter the API key (stored securely in IntelliJ's `PasswordSafe`), the base URL (auto-filled for known providers), and the model name.
4. Click **Test Connection** to verify. The test uses the on-screen field values, so you can verify before clicking Apply/OK.
5. (Optional) Click **Auto-detect** to let EasyYapi infer the provider from environment variables (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `OLLAMA_HOST`, …).

### Authoring a rule

1. Open **Settings → EasyApi → Rules**.
2. Click **Chat** (bottom action bar) to reveal the inline AI panel.
3. Describe what you want in natural language. Examples:
   - "Rename all endpoints in `UserController` to start with `fetch_`."
   - "Add the tag `internal` to all classes in the `internal` package."
   - "Ignore all fields named `internalCache` in `UserDto`."
4. The assistant reads your existing rules (`list_rule_keys`, `get_existing_rules`, `read_rule_file`), reasons about the request, and proposes rule content.
5. Review the proposal card. You can **Edit** the content before saving.
6. Click **Save…** — choose Global (`~/.easyapi/`) or Project (`<project>/.easyapi/`) scope + filename.
7. The rule file is written into the chosen folder and the config is reloaded immediately (the folder is the source of truth — no settings-list registration needed).

### Detecting hidden framework behaviour (Magic)

Click **Magic** (bottom action bar) instead of **Chat** to run a built-in review-and-detect instruction. Magic will:

1. Review your existing rules for gaps.
2. Scan the project for custom framework patterns the scanner can't see — Filters / Interceptors that require a header, `ResponseBodyAdvice` wrappers, `HandlerMethodArgumentResolver` injections, meta-annotations, custom security annotations.
3. Propose a rule for each detection.

Each proposal still goes through the same Approve → Save flow as Chat. You stay in control of what gets written.

### Tips

- The assistant has access to the plugin's knowledge base via its `get_plugin_doc` tool, so it knows the full rule key catalog.
- Ask it to "list my current rules" before proposing changes — useful for understanding the starting state.
- The assistant addresses rule files by **name** (e.g. `security.rules`), not absolute path. It resolves the name against the tracked `.easyapi/` folders.

---

## External `easy-yapi-assistant` skill

For teams that drive rule authoring from an external AI tool — a terminal-based agent, an IDE assistant, or a CI helper — install the `easy-yapi-assistant` skill. The skill uses the **same knowledge base** as the in-IDE assistant, so external tools and the built-in assistant always author rules from the same source of truth.

### What the skill exposes

- **Rule-key catalog** — the canonical list of supported rule keys and their aggregation modes.
- **Custom-Pattern Catalog** — the same patterns the Magic button detects (Filter / Interceptor / ResponseBodyAdvice / HandlerMethodArgumentResolver / meta-annotations), with detection signals and rule recipes for each.
- **Helper scripts** — `list_rule_files.sh`, `read_rule_file.sh`, `get_existing_rules_for_key.sh` for inspecting existing rules in `.easyapi/` folders without opening the IDE.

### When to use the skill

- Author rules from a terminal AI tool that has file access but not IntelliJ's PSI.
- Batch-detect custom framework behaviour across multiple repos in CI.
- Generate rule stubs that a human reviewer finalises inside the IDE.
- Keep rule authoring consistent when some team members use the IDE assistant and others use an external tool.

### How to use it

1. Install the skill globally:

   ```bash
   npx skills add tangcent/easy-yapi -g -y
   ```

   This installs the `easy-yapi-assistant` skill. Once installed, your AI coding assistant (Trae, Cursor, Cline, Continue, etc.) will automatically invoke it when you ask to add or modify EasyApi rules.
2. In your AI coding assistant, ask for the rule you want — e.g. "Add a rule that ignores all fields annotated with `@Internal`." The assistant uses the skill's bundled knowledge base (a synced copy of the rule guide) to author the rule.
3. (Optional) Use the skill's helper scripts to inspect the current state of `.easyapi/` folders before proposing changes:
   - `list_rule_files.sh` — list rule files in project/global `.easyapi/` folders.
   - `read_rule_file.sh <name>` — read a named rule file.
   - `get_existing_rules_for_key.sh <key>` — find existing rules for a given rule key.
4. The assistant writes the proposed rules into a `.easyapi/*.rules` file in your project (or `~/.easyapi/` for global rules). The IDE reloads on save.

Because the skill and the in-IDE assistant share the same knowledge base, a rule authored by one is immediately understood and editable by the other.
