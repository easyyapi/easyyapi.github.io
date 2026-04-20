# runtime

Runtime information tool for scripts. Provides access to environment and system information.

## Usage

```properties
field.mock=groovy:'''
logger.info("Running on: " + runtime.osName())
logger.info("Plugin version: " + runtime.pluginVersion())
'''
```

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `runtime.osName()` | `String` | Get the operating system name |
| `runtime.pluginVersion()` | `String` | Get the EasyYapi plugin version |
| `runtime.ideVersion()` | `String` | Get the IDE version |

## Examples

### Log Environment Info

```properties
export.before=groovy:'''
logger.info("=== Export Environment ===")
logger.info("OS: " + runtime.osName())
logger.info("IDE: " + runtime.ideVersion())
logger.info("Plugin: " + runtime.pluginVersion())
logger.info("========================")
'''
```

### Conditional Behavior by OS

```properties
field.default=groovy:'''
def os = runtime.osName().toLowerCase()
if (os.contains("windows")) {
    return "windows_default"
} else if (os.contains("mac")) {
    return "macos_default"
} else if (os.contains("linux")) {
    return "linux_default"
}
return "default"
'''
```

### Version Check

```properties
export.before=groovy:'''
def version = runtime.pluginVersion()
logger.info("Exporting with EasyYapi version: " + version)

if (version.startsWith("1.")) {
    logger.warn("Using legacy version - some features may not be available")
}
'''
```

### Debug Information

```properties
export.after=groovy:'''
def info = """
Export completed
================
Time: ${new Date().format("yyyy-MM-dd HH:mm:ss")}
OS: ${runtime.osName()}
IDE: ${runtime.ideVersion()}
Plugin: ${runtime.pluginVersion()}
APIs exported: ${it.apis()?.size() ?: 0}
"""
logger.info(info)
'''
```

### Environment-based Configuration

```properties
api.path.prefix=groovy:'''
def os = runtime.osName().toLowerCase()
def ide = runtime.ideVersion()

if (ide.contains("IntelliJ IDEA")) {
    return "/idea-api"
} else if (ide.contains("PyCharm")) {
    return "/pycharm-api"
}

return "/api"
'''
```

## Use Cases

1. **Debugging**: Log environment info for troubleshooting
2. **Conditional Logic**: Adjust behavior based on OS or IDE
3. **Version Compatibility**: Check plugin version for feature availability
4. **Reporting**: Include environment info in export reports

## See Also

- [logger](./logger) - Logging utility
- [config](./config) - Configuration access
