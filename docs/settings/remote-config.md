# Remote Config File

EasyYapi supports loading configuration files from remote URLs, making it easy to share configs across a team.

## Configuration

Add remote URLs in your local config file:

```properties
remote.url=http://your-config-server.com/easy-api.config
```

## Features

- Remote config overrides extension and global rules, but project rules (`.easyapi/` / `.easy.api.config*` at the project root) take precedence over it
- Supports multiple remote URLs (one per line)
- Supports auto-refresh

## Example

```properties
# Remote config (lower priority than project rules)
remote.url=http://config-server.com/common.easy.api.config
remote.url=http://config-server.com/project-specific.easy.api.config

# Local config
field.mock=@mock
```
