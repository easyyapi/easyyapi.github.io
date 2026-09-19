# Export to ApiPost

::: warning Beta feature
The ApiPost channel is disabled by default. Enable it in the **Features** tab before using it.
:::

EasyYapi exports HTTP endpoints to an [ApiPost](https://www.apipost.cn/) project. Endpoints are pushed through ApiPost's open API when a token and a project are configured; otherwise an `apipost.json` import file is written so you can import it by hand.

## Enable the channel

Open <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Features</kbd>. Under **Export Channels**, enable **ApiPost (Beta)**, then reopen Settings to reach the ApiPost tab — the same chicken-and-egg path as the other beta channels.

## Configure the target

Open <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>ApiPost (Beta)</kbd>:

| Field | Scope | Description |
|-------|-------|-------------|
| **Server** | Application | Where ApiPost lives. Defaults to `https://open.apipost.net`. Only ever used to assemble `/open/apis/*` request URLs — never written into your document. |
| **Token** | Application | The ApiPost open API token, sent as the `api-token` header. |
| **Team** | — | Pick **Load** to fetch the teams the token can reach, then choose one. |
| **Project** | Project | Pick **Refresh** to list the projects of the selected team and choose the target. |

The token and server are stored once for the whole IDE; the project id is stored per repository, so switching repositories switches target projects instead of silently reusing the last one.

A project can only be picked, never typed: project ids are unreadable strings and a hand-typed one fails silently. An id that is already configured but not among the fetched rows is still kept as its own entry, so a repository pointing at a project outside the loaded team keeps working.

## Export

1. Open a file containing API endpoints, or select files/folders in the Project view.
2. Choose **EasyYapi** > **Export** > **ApiPost (Beta)**, or use the ApiPost action from the API Explorer.
3. Optionally pick a target project in the export dialog — otherwise the configured one is used.

The channel is HTTP-only. gRPC endpoints are skipped, because ApiPost has no representation for them. If the selection contains no HTTP endpoints, the export reports that there is nothing to export.

### Push vs. file

| Situation | Result |
|-----------|--------|
| Token **and** project id configured | The project is updated in place; the result is reported as created/updated endpoint counts. |
| Either one missing | An `apipost.json` file is written. Import it in ApiPost (**导入** → 选择「ApiPost 格式」→ 上传该文件). |

## Two URLs, deliberately separate

ApiPost export resolves two unrelated URLs and never derives one from the other:

| Rule | Meaning |
|------|---------|
| `apipost.host` | Where ApiPost lives. Only assembles open API requests. Defaults to the Server field. |
| `apipost.server.url` | The base URL of the API you are documenting. Written into the imported document's host/pre-URL (ApiPost's 前置 URL), so imported endpoints point at your service. |

Conflating them would point every imported endpoint at ApiPost itself. `apipost.server.url` is left empty when unset.

## ApiPost rules

```properties
# Target project for this export
apipost.project=1234567890abcdef

# Base URL written into the imported document
apipost.server.url=https://api.example.com

# Open API host override (rarely needed)
apipost.host=https://open.apipost.net
```

| Rule | Description |
|------|-------------|
| `apipost.project` | Target project id; overrides the configured project for this export |
| `apipost.host` | ApiPost open API base URL override |
| `apipost.server.url` | Base URL of the documented API, written to the document's host/base_path |
| `apipost.export.before` | Event that fires once before the export starts |
| `apipost.save.before` | Event that fires before an endpoint is pushed; the `document` binding can be mutated |
| `apipost.save.after` | Event that fires after an endpoint is pushed; `content` and `result` are exposed |

See [Config Rules](/settings/config-rule) for rule syntax.

## Re-export behavior

Re-exporting the same selection upserts rather than duplicates. Endpoints are matched against the project's existing nodes by **method + path**, and ApiPost's open API has no bulk import route, so the push is composed in dependency order:

1. **Folders** — reused by name when they already exist, because a child whose parent is missing is rejected.
2. **Models** — deduplicated by name and pushed before the APIs that `$ref` them.
3. **APIs** — created or updated in place.

Server-regenerated folder and model ids are remapped into `parent_id` and `$ref` before each child is sent, since the server's own ids are the only trustworthy source.

## Next steps

- [Export to OpenAPI](/guide/export-openapi) — a portable contract file instead of a project push
- [Export to YApi](/guide/export2yapi) — push endpoints to a YApi project
- [IDE Settings](/settings/ide-setting) — the ApiPost settings tab reference
