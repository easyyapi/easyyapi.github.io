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
| **Framework Support** | Framework recognizers such as Feign, JAX-RS, Actuator, gRPC, and Custom. |
| **Export Channels** | YApi, Postman, Markdown, cURL, HttpClient, Hoppscotch (Beta), and OpenAPI (Beta). Experimental channels are disabled by default. |
| **Field Format Channels** | Field serializers such as JSON, JSON5, Properties, and YAML. |

Most framework recognizers, export channels, field-format channels, and extension configs can be enabled or disabled from Settings. The General tab provides additional switches for API scanning, automatic/concurrent scanning, and editor gutter navigation.

The **Enable API scanning** checkbox in the General tab is the master switch for API discovery. When it is off, automatic scanning, concurrent scanning, and the API gutter icon are all disabled.

## cURL

The cURL settings tab controls variable rendering and the defaults used by both batch export and Dashboard **Copy as cURL**:

| Setting | Description |
|---------|-------------|
| **Render mode** | Keep placeholders, resolve with the active environment, or ask before each export. Environment values take precedence over config-reader values. |
| **Copy from edited** | Use the endpoint edited in the Dashboard instead of the source endpoint when copying cURL. |
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

## Custom framework

Custom framework support is disabled by default and is enabled from **Features** > **Framework Support**. Its dedicated settings provide an optional line-marker toggle. Extraction itself is configured with `custom.*` rules; see [Custom Framework](/framework/custom).
