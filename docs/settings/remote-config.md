# Remote Config File

EasyYapi supports loading configuration files from remote URLs, making it easy to share configs across a team.

## Configuration

Remote config URLs are configured in the IDE settings, **not** in a config file key.

Open **Settings → EasyApi → Rules → Remote** sub-tab and add one URL per line:

```
http://your-config-server.com/easy-api.config
```

- Each line is a remote URL that returns rule/config content.
- Prefix a URL with `!` to disable it without removing it (e.g. `!http://config-server.com/legacy.config`).
- Blank lines and whitespace are ignored.

## Including Remote URLs from a Config File

You can also pull a remote config from within a rule file using the `###include` directive:

```properties
###include https://raw.githubusercontent.com/org/repo/main/easyapi/common.rules
```

See [Local Config File → Including Other Config Files](./local-file-config#including-other-config-files) for full details on `###include` and the legacy `properties.additional` form.

## Features

- Remote config overrides extension and global rules, but project rules (`.easyapi/` / `.easy.api.config*` at the project root) take precedence over it
- Supports multiple remote URLs (one per line in the Settings UI)
- Supports auto-refresh

## Example

Settings → EasyApi → Rules → Remote:

```
http://config-server.com/common.easy.api.config
http://config-server.com/project-specific.easy.api.config
```

Local config (lower priority than remote):

```properties
field.mock=@mock
```
