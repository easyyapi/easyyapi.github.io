# Advanced Usage

## Custom Configuration Rules

EasyYapi provides a rich set of configuration rules to customize API documentation generation. See [Available Configuration Rules](/settings/config-rule) for details.

## Groovy Scripts

Many rules support Groovy scripts for advanced customization:

```properties
field.mock=groovy:'''
if (it.type().name() == "java.lang.String") {
    return "mock_string"
}
return "default"
'''
```

See [Script Tools](/settings/tools) for available tools in scripts.

## Multiple Config Files

You can use multiple configuration files with different priorities:

1. Remote config (highest priority)
2. Module root config
3. Project root config
4. IDE settings (lowest priority)

See [Configuration](/settings/) for more details.
