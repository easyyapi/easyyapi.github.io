# config

Configuration access tool for scripts.

## Usage

```properties
field.mock=groovy:'''
def mockValue = config.get("custom.mock." + it.name())
return mockValue ?: "default_mock"
'''
```

## Methods

- `config.get(key)` — Get a configuration value
- `config.get(key, defaultValue)` — Get a configuration value with default
