# Advanced Usage

## Custom Configuration Rules

EasyYapi provides a rich set of configuration rules to customize API documentation generation. See [Available Configuration Rules](/settings/config-rule) for details.

## Groovy Scripts

Many rules support Groovy scripts for advanced customization:

````properties
field.mock=groovy:```
if (it.type().name() == "java.lang.String") {
    return "mock_string"
}
return "default"
```
````

See [Script Tools](/settings/tools) for available tools in scripts.

## Multiple Config Files

Configuration is merged from several sources by priority (highest first):

1. Project rules — `<project>/.easyapi/` + legacy `.easy.api.config*` walked up from the project root
2. Extension rules — bundled framework presets (Spring, Jackson, Validation, …)
3. Remote config — URLs from `remote.url`
4. Global rules — `~/.easyapi/` (lowest priority)

There is no per-module config tier; rule files are resolved from the IntelliJ
project base path only.

See [Configuration](/settings/) for more details.
