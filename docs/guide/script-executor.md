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
- [regex](/settings/tools/regex) — Regular expression utilities
- [logger](/settings/tools/logger) — Logging
- [helper](/settings/tools/helper) — Common operation helpers
- [httpClient](/settings/tools/httpClient) — HTTP client
- [localStorage](/settings/tools/localStorage) — Persistent local storage
- [session](/settings/tools/session) — Session-level storage
- [config](/settings/tools/config) — Configuration access
- [api](/settings/tools/api) — API utilities
- [runtime](/settings/tools/runtime) — Runtime information
- [fieldContext](/settings/tools/fieldContext) — Field context utilities
- [files](/settings/tools/files) — File operations

## Example

```groovy
// Test a field mock rule
def field = it  // context object
if (field.type().name() == "java.lang.String") {
    logger.info("String field: " + field.name())
}
```
