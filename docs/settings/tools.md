# Script Tools Overview

EasyYapi provides a set of built-in tools that can be used in Groovy scripts within configuration rules.

## Available Tools

| Tool | Description |
|------|-------------|
| [it](./tools/it) | Current context object |
| [tool](./tools/tool) | General utility methods |
| [regex](./tools/regex) | Regular expression utilities |
| [logger](./tools/logger) | Logging |
| [helper](./tools/helper) | Common operation helpers |
| [httpClient](./tools/httpClient) | HTTP client |
| [localStorage](./tools/localStorage) | Persistent local storage |
| [session](./tools/session) | Session-level storage |
| [config](./tools/config) | Configuration access |
| [api](./tools/api) | API utilities |
| [runtime](./tools/runtime) | Runtime information |
| [fieldContext](./tools/fieldContext) | Field context utilities |
| [files](./tools/files) | File operations |

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
