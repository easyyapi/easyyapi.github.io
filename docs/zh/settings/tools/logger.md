# logger

Logging utility for scripts.

## Usage

```properties
field.mock=groovy:'''
logger.info("Processing field: " + it.name())
logger.warn("Using default mock for: " + it.type().name())
return "mock_value"
'''
```

## Methods

- `logger.info(msg)` — Log info message
- `logger.warn(msg)` — Log warning message
- `logger.error(msg)` — Log error message
