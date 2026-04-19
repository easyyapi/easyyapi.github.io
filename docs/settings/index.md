# Configuration

EasyYapi provides a flexible configuration system to customize API documentation generation behavior.

## Configuration Methods

### Local Config File

Create a `.easy.api.config` file in your project root or module root directory:

```properties
# Ignore specific fields
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# Type conversion
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

See [Local Config File](./local-file-config).

### Remote Config File

Configure a remote URL to fetch configuration:

```properties
remote.url=http://your-config-server.com/easy-api.config
```

See [Remote Config File](./remote-config).

### IDE Settings

Configure EasyYapi global settings in the IDE.

See [IDE Settings](./ide-setting).

## Configuration Content

| Category | Description |
|----------|-------------|
| [Config Rules](./config-rule) | Rules for customizing API documentation generation |
| [Callbacks & Events](./events/) | Execute custom logic at specific events |
| [Script Tools](./tools) | Tools available in Groovy scripts |
| [Advanced](./advanced/) | Advanced custom configuration |

## Configuration Priority

1. Remote config (highest priority)
2. Module root config
3. Project root config
4. IDE settings (lowest priority)
