# IDE Settings

EasyYapi provides IDE-level settings that can be configured within IDEA.

## Opening Settings

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## General Settings

| Setting | Description |
|---------|-------------|
| postman.url | Postman export URL |
| postman.token | Postman API Token |
| yapi.server | YApi server address |
| yapi.token | YApi project Token |
| project.name | Project name |

## Export Settings

| Setting | Description |
|---------|-------------|
| outputDemo | Generate response demo when exporting Markdown |
| outputCharset | Export character set |

## Framework Toggles

| Setting | Description | Default |
|---------|-------------|---------|
| feignEnable | Enable Feign client support | `false` |
| jaxrsEnable | Enable JAX-RS support | `true` |
| actuatorEnable | Enable Spring Actuator support | `false` |
| grpcEnable | Enable gRPC support | `true` |
| swaggerEnable | Enable Swagger support | `true` |
| swagger3Enable | Enable Swagger 3 / OpenAPI support | `true` |

## Recommended Config

EasyYapi includes built-in recommended configuration that can be enabled in settings. The recommended config contains commonly used rules and type conversions.

## Features

In EasyYapi 3.2, the **Features** tab is the single place to enable or disable extension points. Its lists are built dynamically from the installed plugin components:

| Section | What it controls |
|---------|------------------|
| **API Features** | API Scanning (master switch, default on), with nested Automatic API Scanning (default on) and Concurrent API Scanning (default off), plus Editor Integration (gutter icons/line markers, default on, requires API Scanning). The surfaces **Copy API URL** (default on) and **Search Everywhere** (default on) live here too — neither depends on API Scanning, because both read the retained API index, which an API Explorer Refresh refills even while API Scanning is off. |
| **Framework Support** | Framework recognizers such as Feign, JAX-RS, Actuator, gRPC, and Custom. |
| **Export Channels** | YApi, Postman, Markdown, cURL, HttpClient, Hoppscotch (Beta), OpenAPI (Beta), and ApiPost (Beta). Experimental channels are disabled by default. |
| **Field Format Channels** | Field serializers such as JSON, JSON5, Properties, and YAML. |

Most framework recognizers, export channels, field-format channels, and extension configs can be enabled or disabled from Settings. API scanning, automatic/concurrent scanning, and editor integration are now controlled from the **Features** tab (API Features group). The **API Scanning** toggle in the Features tab is the master switch for API discovery. Features take effect immediately without restarting the IDE.

Manual rescan stays available even when Automatic API Scanning is turned off. Disabling API Scanning automatically disables Automatic API Scanning, Concurrent API Scanning, and Editor Integration.

## cURL

The cURL settings tab controls variable rendering and the defaults used by both batch export and API Explorer **Copy as cURL**:

| Setting | Description |
|---------|-------------|
| **Render mode** | Keep placeholders, resolve with the active environment, or ask before each export. Environment values take precedence over config-reader values. |
| **Copy from edited** | Use the endpoint edited in the API Explorer instead of the source endpoint when copying cURL. |
| **Include comments and section dividers** | Add endpoint headings and separators to a batch script. |
| **Pretty-print JSON body** | Format JSON request bodies with indentation. |
| **Multi-line format** | Put one cURL flag on each line. |
| **Long flags** | Use `--request`, `--header`, `--data`, and `--form` instead of short flags. |
| **Response example** | Append an available response body as a comment. |
| **Run pre-request scripts** | Apply folder/class scripts during batch export and folder/class/endpoint scripts for single-endpoint copy. |

The export dialog exposes the formatting and pre-request-script options as per-export overrides.

## OpenAPI (Beta)

OpenAPI export is disabled by default. After enabling it in **Features**, the OpenAPI settings tab lets you choose **JSON**, **YAML**, or **Ask each export**. The default file names are `openapi.json` and `openapi.yaml`.

Document-level metadata is configured with `openapi.info.title`, `openapi.info.version`, `openapi.info.description`, and `openapi.server.url` rules. The legacy `openapi.host` rule is also supported. See [Export to OpenAPI](/guide/export-openapi).

## ApiPost (Beta)

Like the other beta channels, ApiPost is disabled by default. After enabling it in **Features**, its settings tab appears in Settings:

| Setting | Scope | Description |
|---------|-------|-------------|
| **Server** | Application | ApiPost open API host, default `https://open.apipost.net`. Only used to assemble open API requests. |
| **Token** | Application | The ApiPost open API token, sent as the `api-token` header. Without it the export falls back to writing a file. |
| **Team** | — | The teams the token can reach. Press **Load** (or change the token) to fetch them. |
| **Project** | Project | The target project. Press **Refresh** to list the projects of the selected team. |

The project id is per repository on purpose — an application-scoped id would leak across repositories and push one repository's endpoints into another repository's project with nothing to notice. See [Export to ApiPost](/guide/export-apipost).

## Markdown

The Markdown settings tab is a persistent channel tab that controls the
template used by Markdown export. These settings are reused across every
export — the export dialog only asks for Output Directory and File Name.

| Setting | Description |
|---------|-------------|
| **Template File** | Path to a local template file (`.tpl` or `.md.tpl`). |
| **Template URL** | Remote `http(s)` URL serving a template. Responses are cached for 10 minutes; redirects are **not** followed. |
| **Language** | Combo box of bundled locale templates (e.g. `zh-CN`, `ja`, `en`). Selecting a bundled locale renders the document with that locale's template. |
| **Show inline template** | Toggles the inline template editor — a multi-line text area for entering template content directly. |
| **Copy default template** | Saves the bundled default template to a file so you can edit it as a starting point. |

See [Export to Markdown](/guide/export2markdown) for the template resolution
order and the `markdown.template*` config rules.

## Custom framework

Custom framework support is disabled by default and is enabled from **Features** > **Framework Support**. Its dedicated settings provide an optional line-marker toggle. Extraction itself is configured with `custom.*` rules; see [Custom Framework](/framework/custom).
