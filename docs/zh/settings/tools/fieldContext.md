# fieldContext

Field context utilities for scripts.

## Usage

```properties
field.mock=groovy:'''
def context = fieldContext.of(it)
return context.mockValue()
'''
```

## Methods

- `fieldContext.of(field)` — Get the context for a field
