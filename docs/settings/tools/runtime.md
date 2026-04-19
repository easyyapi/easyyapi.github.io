# runtime

Runtime information tool for scripts.

## Usage

```properties
field.mock=groovy:'''
logger.info("Running on: " + runtime.osName())
logger.info("Plugin version: " + runtime.pluginVersion())
'''
```

## Methods

- `runtime.osName()` — Get the OS name
- `runtime.pluginVersion()` — Get the plugin version
- `runtime.ideVersion()` — Get the IDE version
