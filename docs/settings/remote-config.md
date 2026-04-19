# Remote Config File

EasyYapi supports loading configuration files from remote URLs, making it easy to share configs across a team.

## Configuration

Add remote URLs in your local config file:

```properties
remote.url=http://your-config-server.com/easy-api.config
```

## Features

- Remote config has the highest priority
- Supports multiple remote URLs (one per line)
- Supports auto-refresh

## Example

```properties
# Remote config
remote.url=http://config-server.com/common.easy.api.config
remote.url=http://config-server.com/project-specific.easy.api.config

# Local config (lower priority than remote)
field.mock=@mock
```
