# YApi Settings

## IDE Settings

Configure YApi settings in the IDE:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd>

| Setting | Description |
|---------|-------------|
| Yapi Server | YApi server address |
| Tokens | Project tokens in `module=token` format (one per line) |
| Export Mode | How to handle existing APIs on export (see below) |
| Request body JSON5 | Use JSON5 format for request body (default: off) |
| Response body JSON5 | Use JSON5 format for response body (default: off) |

Additional options in the **General** tab:

| Setting | Default | Description |
|---------|---------|-------------|
| Enable URL Templating | `true` | Enable URL templating for path parameters |
| Switch Notice | `true` | Show notification when switching YApi project |

### Getting a YApi Token

1. Log in to YApi
2. Go to project settings
3. Copy the project Token

::: tip No need to fill tokens manually
You do **not** have to enter tokens (or the server address) in Settings
before exporting. When you export APIs, the plugin automatically pops up a
dialog prompting for the YApi server URL and the project token for the
target module. Enter them there and the plugin saves them for next time.

The **Tokens** field above is just a convenience for pre-filling tokens for
multiple modules at once; it is optional.
:::

### Token Format

Tokens are specified as `module=token` pairs, one per line in the IDE Tokens field. The module name is used to match APIs to the correct YApi project.

### Export Mode

| Mode | Description |
|------|-------------|
| ALWAYS_UPDATE | Always update existing APIs (default) |
| NEVER_UPDATE | Never update existing APIs |
| ALWAYS_ASK | Show a dialog to ask whether to override each API |
| UPDATE_IF_CHANGED | Update only when the API content has changed |

## Config File Rules

The following rules can be set in config files (`.easy.api.config`):

| Rule | Description |
|------|-------------|
| [yapi.project](/settings/rules/yapi_project) | Set the YApi project for API grouping |
| [yapi.export.before](/settings/events/yapi_export_before) | Event before YApi export |
| [yapi.save.before](/settings/rules/yapi_save_before) | Event before saving to YApi |
| [yapi.save.after](/settings/rules/yapi_save_after) | Event after saving to YApi |

## YApi Mock

EasyYapi supports syncing field mock rules to the YApi Mock service.

See [YApi Mock](./yapi-mock) for details.
