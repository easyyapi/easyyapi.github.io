# Script Tools Overview

EasyYapi provides a set of built-in tools that can be used in Groovy scripts within configuration rules. These tools are automatically available as variables in all Groovy script contexts.

## Available Tools

| Tool | Description |
|------|-------------|
| [it](./tools/it) | Current context object - the most important tool providing access to the element being processed |
| [tool](./tools/tool) | General utility methods for string manipulation, collections, JSON, and more |
| [regex](./tools/regex) | Regular expression utilities with pattern caching for performance |
| [logger](./tools/logger) | Logging utility for debugging and information output |
| [helper](./tools/helper) | Common operation helpers for type resolution and other utilities |
| [httpClient](./tools/httpClient) | HTTP client for making requests in scripts |
| [localStorage](./tools/localStorage) | Persistent local storage that survives IDE restarts |
| [session](./tools/session) | Session-level storage cleared when IDE is restarted |
| [config](./tools/config) | Configuration access for reading rule values |
| [api](./tools/api) | API utilities for modifying endpoint metadata |
| [runtime](./tools/runtime) | Runtime information about the environment |
| [fieldContext](./tools/fieldContext) | Field context utilities for JSON path operations |
| [files](./tools/files) | File operations for reading and writing files |

## Usage

Tools are available as variables in Groovy scripts:

```properties
field.mock=groovy:'''
if (it.type().name() == "java.lang.String") {
    return "mock_string"
}
logger.info("Generating mock for: " + it.name())
'''
```

## Tool Categories

### Context Tools

- **it** - The primary context object. Its type depends on the rule context:
  - Class rules → `ScriptPsiClassContext`
  - Method rules → `ScriptPsiMethodContext`
  - Field rules → `ScriptPsiFieldContext`
  - Parameter rules → `ScriptPsiParameterContext`

### Storage Tools

- **localStorage** - Persistent storage that survives IDE restarts
- **session** - Temporary storage cleared on IDE restart

### Utility Tools

- **tool** - String manipulation, collections, JSON operations
- **regex** - Regular expression matching and extraction
- **helper** - Type resolution and common operations
- **files** - File I/O operations

### Communication Tools

- **httpClient** - HTTP requests
- **config** - Configuration access
- **api** - API endpoint modification

### Information Tools

- **logger** - Logging output
- **runtime** - Environment information
- **fieldContext** - JSON path context

## See Also

- [Config Rules](../config-rule.md) - How to use tools in configuration rules
- [Events](../events/) - Event hooks where scripts can be used
