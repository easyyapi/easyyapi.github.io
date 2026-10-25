# MCP Client Integration

Since v3.2.6, EasyYapi adds two tools to IntelliJ IDEA's built-in MCP (Model Context Protocol) server, so an external agent connected to the IDE can drive EasyYapi without any dialog:

- `easyapi_scan_endpoints` — read-only: reports the endpoints EasyYapi would export for the classes, methods, or source files the agent names.
- `easyapi_export` — exports those endpoints to YApi, as [Export to YApi](./export2yapi) does, without any dialog.

Unlike the built-in AI assistant, which works inside the IDE and writes rules for you, these tools let an external agent drive the running EasyYapi. Each tool describes its parameters, its result, and its error codes to the client; this page covers the workflow around them.

## Setup

1. IntelliJ IDEA 2025.2 or later, with the bundled **MCP Server** plugin enabled.
2. Turn the server on in <kbd>Settings</kbd> > <kbd>Tools</kbd> > <kbd>MCP Server</kbd>, then connect your client as described in the [IntelliJ IDEA MCP Server documentation](https://www.jetbrains.com/help/idea/mcp-server.html).
3. If that page lists the tools the server exposes, make sure `easyapi_scan_endpoints` and `easyapi_export` are enabled.
4. For `easyapi_export`, set up YApi first — see [YApi Settings](/settings/yapi).

## Scanning Endpoints

The agent names the targets in `classes`, `methods` (`ClassName#methodName`), or `files` (paths relative to the project root), and the project in `projectPath` (see [Choosing the Project](#choosing-the-project)). Only the named targets are scanned, with the same scanner and rules as a normal export, and every target must resolve, or nothing is scanned. A target without endpoints — a request or response model, a service, an unmapped method, or a class whose export failed (see `idea.log`) — is listed in `skipped` with the reason; if you changed a model or a service, pass the controllers or methods that use it.

### Files Changed Outside the IDE

Before the targets resolve, the IDE loads from disk the files they live in and the other changes under the project root it has already noticed, so a call made right after the agent wrote a file sees the new content. Pass a class created outside the IDE by its file, in `files`.

- **Unsaved changes in the IDE stop the call** (`UNSAVED_IN_IDE`) when they are in a file to scan, or in another file under the project root that also changed on disk. Save them, or drop them with **File | Reload from Disk**.
- **In IntelliJ IDEA 2025.2, a modal dialog stops the call.** That version loads the files only while no modal dialog, such as Settings, is open, so the call fails with `SYNC_TIMEOUT` after about 10 seconds, even if no file changed. Later versions load the files while a dialog is open.
- **Limits:** a request or response class changed together with a target may not be reloaded yet, or at all outside the project root: add its file to `files` (outside the root, its name to `classes`); it then shows in `skipped`, as expected. A file that is not a target, has unsaved editor changes and changed on disk may be scanned as the editor shows it: save before calling.

## Exporting to YApi

`easyapi_export` takes the targets as the scan tool does, sync included, then runs the export of **Export to YAPI**, with the same rules, server, and export mode, without any dialog. `channel` is `yapi`, the default and for now the only one. An export of stale code still succeeds, so mind the limits above.

### Tokens

A call never asks anything: a missing server or token comes back in the result.

1. Fill in **Yapi Server** under <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd>.
2. Pass a token in `options.token` (checked with YApi first, never saved; every endpoint of the call then goes to that token's project), or add `<destination>=<token>` under **Tokens** on the same page. An endpoint's destination is its `yapi.project` rule (the built-in rules map the `@project` and `@module` doc tags to it), else the module of its class, else the project name.

### What Gets Written

The result has one item per endpoint:

- `updated`: an API with the same path and method was overwritten. YApi matches path and method across the whole YApi project, so one in another folder is moved into the target folder (`movedFrom`), whatever the export mode; that folder may be left empty.
- `created`: no such API was found in the YApi project before the save.
- `not_written`: kept by the **Export Mode** (`NEVER_UPDATE`, or `UPDATE_IF_CHANGED` when nothing changed; `ALWAYS_ASK` counts as yes), or not taken by YApi, such as a gRPC endpoint; `reason` says which.
- `failed`: `reason` says why; a destination without a token fails only its own endpoints. The call succeeds as long as one endpoint did not fail, so `failed` above 0 means a partial export.

No dialog or success notification appears; a warning about failing rules does, as for any export.

## Choosing the Project

Pass `projectPath` on every call: the absolute path of the project's root or of anything inside it, such as the agent's working directory. The innermost open project that contains it answers, and `project` in every successful result names it. Without `projectPath`, a call fails with `PROJECT_AMBIGUOUS` when several projects are open; with one open, IntelliJ IDEA 2025.2 accepts it. Newer IDE versions check the project before the tool runs, and reject a call they cannot place with their own error text, not an `{"error": …}` result.

## Error Codes

A call that fails returns `{"error": {"code": …, "message": …}}` instead of its result; the message says what to do.

| `code` | Meaning |
|--------|---------|
| `TARGETS_REQUIRED` | No target was given. |
| `TARGETS_UNRESOLVED` | A target did not resolve; `failures` lists each one. |
| `NO_ENDPOINTS` | No target yields an endpoint; `skipped` says why. |
| `TARGETS_CHANGED` | A target changed during the scan. Retry. |
| `INDEX_NOT_READY` | The IDE is indexing, as it does after many files changed outside it at once. Retry when it is done. |
| `UNSAVED_IN_IDE` | The listed `files` have unsaved changes in the IDE. Save or reload them, then retry. |
| `SYNC_TIMEOUT` | The IDE did not load the files changed outside it within 10 seconds. Retry; if it times out again, close any modal dialog open in the IDE, such as Settings, and retry a little later. |
| `CHANNEL_NOT_FOUND` | Export: unknown channel; `channels` lists those that can export. |
| `CHANNEL_NOT_SUPPORTED` | Export: the channel needs a dialog; `channels` lists those that can export. |
| `CHANNEL_DISABLED` | Export: turn the channel on under <kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Features</kbd>. |
| `OPTIONS_INVALID` | Export: an unknown option or an empty value; `acceptedOptions` lists the accepted ones. |
| `EXPORT_FAILED` | Export: nothing was written; `items` lists each endpoint, when known. |
| `PROJECT_AMBIGUOUS` | Several projects are open and `projectPath` was not passed. |
| `PROJECT_NOT_FOUND` | No open project contains `projectPath`. |
| `INTERNAL_ERROR` | Something unexpected failed; see `idea.log`. |

::: warning The token and idea.log
The token never appears in the result, in an error, or in what the tool writes to the EasyYapi console. But EasyYapi's HTTP log writes every request address to `idea.log`, and YApi's GET requests carry the token in the address, so a token used by an export, passed or from the token table, lands in `idea.log` in plain text, as for **Export to YAPI** in the IDE.
:::
