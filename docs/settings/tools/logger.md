# logger

Logging utility for scripts. Provides methods to output messages to the IDE console for debugging and information purposes.

## Usage

```properties
field.mock=groovy:'''
logger.info("Processing field: " + it.name())
logger.warn("Using default mock for: " + it.type().name())
return "mock_value"
'''
```

## Methods

| Method | Description |
|--------|-------------|
| `logger.info(msg)` | Log an info message |
| `logger.warn(msg)` | Log a warning message |
| `logger.error(msg)` | Log an error message |

## Log Levels

| Level | Purpose |
|-------|---------|
| `info` | General information about script execution |
| `warn` | Warnings about potential issues |
| `error` | Errors that may affect the result |

## Examples

### Basic Logging

```properties
field.mock=groovy:'''
def name = it.name()
def type = it.type().name()

logger.info("Field: " + name)
logger.info("Type: " + type)

if (type == "java.lang.String") {
    return "mock_string"
}
return null
'''
```

### Debug Logging

```properties
method.name=groovy:'''
def name = it.name()
def annotations = it.annMaps("org.springframework.web.bind.annotation.RequestMapping")

logger.info("Processing method: " + name)
annotations?.each { ann ->
    logger.info("  Annotation: " + ann)
}

return name
'''
```

### Error Handling

```properties
field.mock=groovy:'''
try {
    def value = config.get("mock." + it.name())
    if (value) {
        logger.info("Using configured mock: " + value)
        return value
    }
} catch (Exception e) {
    logger.error("Error getting mock config: " + e.message)
}
return "default"
'''
```

### Conditional Logging

```properties
export.before=groovy:'''
def debug = config.get("debug") == "true"
if (debug) {
    logger.info("Debug mode enabled")
    logger.info("Export settings: " + config.getValues("export.settings"))
}
'''
```

### Progress Logging

```properties
class.parse.before=groovy:'''
logger.info("Starting to parse class: " + it.name())
'''

class.parse.after=groovy:'''
logger.info("Finished parsing class: " + it.name())
logger.info("  Methods: " + it.methodCnt())
logger.info("  Fields: " + it.fieldCnt())
'''
```

### Warning for Missing Data

```properties
field.description=groovy:'''
def doc = it.doc()
if (!doc) {
    logger.warn("No documentation for field: " + it.name())
}
return doc
'''
```

## Notes

- Log messages appear in the IDE's console/output window
- Use appropriate log levels for different types of messages
- Excessive logging can slow down processing - use sparingly in production
- Consider using `config.get("debug")` to control verbose logging

## See Also

- [config](./config) - Configuration access
- [runtime](./runtime) - Runtime information
