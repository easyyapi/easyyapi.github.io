# YApi Settings

## Basic Configuration

| Setting | Description |
|---------|-------------|
| yapi.server | YApi server address |
| yapi.token | YApi project Token |

## Getting a YApi Token

1. Log in to YApi
2. Go to project settings
3. Copy the project Token

## Configuration Methods

### Via IDE Settings

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd>

### Via Config File

```properties
yapi.server=http://your-yapi-server.com
yapi.token=your-project-token
```

## YApi Mock

EasyYapi supports syncing field mock rules to the YApi Mock service.

See [YApi Mock](./yapi-mock) for details.
