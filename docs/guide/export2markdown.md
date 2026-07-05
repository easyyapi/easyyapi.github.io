# Export to Markdown

## Usage

### Method 1: Right-Click Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Right-click on the file content or folder
3. Select `ExportMarkdown` to export all APIs in the file or folder

### Method 2: Shortcut Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Use shortcut `Alt + Shift + E` (Windows/Linux) or `Ctrl + E` (macOS)
3. Select the APIs to export, choose `Markdown` as the export channel
4. Click the ✔ button or press Enter to complete the export

## Markdown Settings

- **outputDemo**: Generate a response demo for each API when exporting Markdown
- **outputCharset**: Select the character set for Markdown export. Try changing this if exported documents show garbled text

See [IDE Settings](/settings/ide-setting) for more details.

## Customizing the Template

::: tip New in v3.2.0
Free-form Markdown export templates with internationalization (i18n) and
remote source support landed in v3.2.0 (#1411). The Markdown export dialog
and the `markdown.template*` config rules below describe the full system.
:::

When you trigger a Markdown export, EasyYapi opens a dialog that lets you
override the output location and the template used to render the document.
The dialog exposes the following fields:

| Field | Description |
|-------|-------------|
| Output Directory | Target folder for the generated `.md` file. Blank uses the default output directory. |
| File Name | Output file name (without extension). Blank uses the default name. |
| Template File | Path to a local template file (`.tpl` or `.md.tpl`). |
| Template URL | Remote `http(s)` URL serving a template. Responses are cached for 10 minutes; redirects are **not** followed. |
| Language | Combo box of bundled locale templates (e.g. `zh-CN`, `ja`, `en`). Selecting a bundled locale renders the document with that locale's template. |
| Show inline template | Reveals a multi-line text area for entering template content directly. |
| Copy default template | Copies the bundled default template into the inline area so you can edit it as a starting point. |

### Template Resolution Order

The resolver walks the tiers below; the **first non-blank tier that
succeeds wins**. A tier that is blank or fails (missing file, HTTP error,
oversize response) is skipped and the next tier is tried.

1. **Inline template** from the dialog (the multi-line text area).
2. **Local template file** from the dialog (Template File field).
3. **Remote template URL** from the dialog (Template URL field).
4. The **`markdown.template` config rule**. Its value is auto-detected:
   - an `http(s)` URL is fetched remotely,
   - a single-line path is read as a local file,
   - anything else (multi-line text or content using double-curly-brace
     placeholders) is treated as inline template content.
5. **Convention-based project file** `<project>/.easyapi/markdown.tpl`, if
   it exists. This lets a team share a template by simply committing the
   file — no config key needed.
6. The **bundled locale template** selected by the `markdown.template.language`
   config rule **or** the Language combo box (combo box takes precedence).
7. The **bundled `default.md.tpl`** as the floor — always present.

::: tip Template placeholders use double-curly braces
Template content interpolates variables using double-curly-brace
placeholders. When you author Markdown **documentation prose** (like this
page), never write the literal opening braces side by side — VitePress/Vue
interprets that sequence as Vue interpolation and the build will fail.
Refer to them as "double-curly-brace placeholders" in prose instead.
:::

### Config Rules

| Rule | Description |
|------|-------------|
| `markdown.template` | Auto-detected template source (remote URL, local file path, or inline content). Replaces the legacy `markdown.template.file` / `markdown.template.url` / inline `markdown.template` keys, which are merged into this single key. |
| `markdown.template.language` | BCP-47 locale tag (e.g. `zh-CN`) selecting a bundled locale template. BCP-47 fallback applies when the exact tag is not bundled. |
| `markdown.template.url.ttl.seconds` | Cache TTL for remote template fetches. Default: `600` (10 minutes). |
| `markdown.template.url.max.bytes` | Maximum response size for a remote template fetch. Default: `1048576` (1 MiB). |

::: note Legacy keys merged
The legacy separate keys `markdown.template.file`, `markdown.template.url`
and the inline form of `markdown.template` are merged into the single
`markdown.template` key (tier 4). The value is auto-detected as a remote
URL when it starts with `http://` or `https://`, otherwise it is treated
as a local file path, falling back to inline content.
:::

### Bundled Locales

EasyYapi ships localized templates for the following locales (the `en`
default uses the bundled `default.md.tpl`):

`zh-CN`, `zh-TW`, `zh`, `ja`, `ko`, `es`, `fr`, `de`, `ru`, `pt-BR`, `pt`,
`it`, `ar`, `hi`, `vi`, `id`, `tr`, `pl`, `uk`, `nl`, `th`, `en`.
