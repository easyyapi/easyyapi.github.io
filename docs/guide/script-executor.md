# Script Executor

EasyYapi provides a built-in script executor for testing Groovy scripts.

## Usage

1. Open <kbd>Tools</kbd> > <kbd>EasyApi</kbd> > <kbd>Script Executor</kbd>
2. Write your Groovy script in the editor
3. Click the run button to execute

## Available Tools

The following tools are available in the script executor:

- [it](/settings/tools/it) — Context object
- [tool](/settings/tools/tool) — Utility methods
- [logger](/settings/tools/logger) — Logging
- [httpClient](/settings/tools/httpClient) — HTTP client
- [localStorage](/settings/tools/localStorage) — Local storage
- [config](/settings/tools/config) — Configuration access
- [api](/settings/tools/api) — API utilities

## Example

```groovy
// Test a field mock rule
def field = it  // context object
if (field.type().name() == "java.lang.String") {
    logger.info("String field: " + field.name())
}
```
