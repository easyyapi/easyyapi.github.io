# YApi Settings

## Basic Configuration

| Setting | Description |
|---------|-------------|
| yapi.server | YApi server address |
| yapi.tokens | Project tokens in `module=token` format (one per line) |

## Getting a YApi Token

1. Log in to YApi
2. Go to project settings
3. Copy the project Token

## Token Format

Tokens are specified as `module=token` pairs, one per line. The module name is used to match APIs to the correct YApi project.

```properties
# In config file
yapi.server=http://your-yapi-server.com
yapi.tokens=user-module=abc123\norder-module=def456
```

In IDE settings, enter one `module=token` pair per line in the Tokens field.

## Export Mode

Controls how existing APIs are handled when exporting to YApi:

| Mode | Description |
|------|-------------|
| ALWAYS_UPDATE | Always update existing APIs (default) |
| NEVER_UPDATE | Never update existing APIs |
| ALWAYS_ASK | Show a dialog to ask whether to override each API |
| UPDATE_IF_CHANGED | Update only when the API content has changed |

Configure via IDE settings or config file:

```properties
yapi.export.mode=ALWAYS_UPDATE
```

## Additional Options

| Setting | Default | Description |
|---------|---------|-------------|
| enableUrlTemplating | `true` | Enable URL templating for path parameters |
| switchNotice | `true` | Show notification when switching YApi project |
| yapi.req.body.json5 | `false` | Use JSON5 format for request body |
| yapi.res.body.json5 | `false` | Use JSON5 format for response body |

## Configuration Methods

### Via IDE Settings

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd>

### Via Config File

```properties
yapi.server=http://your-yapi-server.com
yapi.tokens=my-project=your-project-token
yapi.export.mode=ALWAYS_UPDATE
enable.url.templating=true
switch.notice=true
yapi.req.body.json5=false
yapi.res.body.json5=false
```

## YApi Mock

EasyYapi supports syncing field mock rules to the YApi Mock service.

See [YApi Mock](./yapi-mock) for details.
