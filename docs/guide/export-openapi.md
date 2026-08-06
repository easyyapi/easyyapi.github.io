# Export to OpenAPI

::: warning Beta feature
The OpenAPI channel is disabled by default. Enable it in the **Features** tab before using it.
:::

EasyYapi exports HTTP endpoints as an [OpenAPI](https://www.openapis.org/) 3.0.3 document. The result can be consumed by OpenAPI tooling, imported into API gateways, or checked into a repository as an API contract.

## Enable the channel

Open **Settings** > **Other Settings** > **EasyApi** > **Features**. Under **Export Channels**, enable **OpenAPI (Beta)**. The channel then appears in the export dialog and as the OpenAPI export action.

## Export

1. Open a file containing API endpoints, or select files/folders in the Project view.
2. Choose **EasyYapi** > **Export** > **OpenAPI (Beta)**, or use the OpenAPI action from the API Dashboard.
3. Select an output format when prompted, unless a format has already been saved in the OpenAPI settings.
4. Choose the destination file.

JSON is written to `openapi.json`; YAML is written to `openapi.yaml` by default. You can override the output directory and file name in the export dialog.

The channel is HTTP-only. gRPC endpoints are skipped because they cannot be represented by this OpenAPI exporter. If the selection contains no HTTP endpoints, the export reports that there is nothing to export.

## Output mapping

The exporter creates an OpenAPI 3.0.3 document with:

- `info.title`, `info.version`, and an optional description
- an optional `servers` entry
- paths and operations with unique operation IDs
- query, path, header, and cookie parameters
- JSON request bodies
- `application/x-www-form-urlencoded` and multipart request bodies, including file fields
- response schemas and reusable component schemas
- tags derived from the API folder or source class
- enum values and parameter examples when they are available

Path parameters are always marked as required, as required by the OpenAPI specification. Void responses are emitted as `204 No content` when no response model is available.

## Document metadata rules

Use project rules when the document envelope needs a stable value that should not depend on the current export selection:

```properties
openapi.info.title=Public API
openapi.info.version=2026.1
openapi.info.description=HTTP API for the public application
openapi.server.url=https://api.example.com
```

The preferred server rule is `openapi.server.url`. The legacy `openapi.host` key is also accepted. The `openapi.format.after` event runs after the document is built and before it is serialized, so advanced rules can adjust the in-memory document before JSON or YAML output is written.

See [Config Rules](/settings/config-rule) for rule syntax.
