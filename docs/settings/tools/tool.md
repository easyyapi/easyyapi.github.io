# tool

General utility methods for string manipulation, collections, JSON operations, and more. This tool provides a wide range of helper functions commonly needed in Groovy scripts.

## Usage

```properties
field.name=groovy:'''
def name = tool.capitalize(it.name())
return tool.removePrefix(name, "get")
'''
```

## String Methods

### Basic String Operations

| Method | Description |
|--------|-------------|
| `tool.nullOrEmpty(str)` | Check if string is null or empty |
| `tool.nullOrBlank(str)` | Check if string is null or blank |
| `tool.notNullOrEmpty(str)` | Check if string is not null and not empty |
| `tool.notNullOrBlank(str)` | Check if string is not null and not blank |
| `tool.headLine(str)` | Get the first line of text (alias: `firstLine`) |
| `tool.capitalize(str)` | Capitalize the first letter |
| `tool.uncapitalize(str)` | Lowercase the first letter |
| `tool.upperCase(str)` | Convert to uppercase |
| `tool.lowerCase(str)` | Convert to lowercase |
| `tool.swapCase(str)` | Swap case of all characters |
| `tool.reverse(str)` | Reverse the string |
| `tool.repeat(str, n)` | Repeat string n times |
| `tool.repeat(str, separator, n)` | Repeat string n times with separator |
| `tool.isNumeric(str)` | Check if string contains only digits |
| `tool.isAlpha(str)` | Check if string contains only letters |

### Substring Operations

| Method | Description |
|--------|-------------|
| `tool.substringBefore(str, sep)` | Get substring before separator |
| `tool.substringAfter(str, sep)` | Get substring after separator |
| `tool.substringBeforeLast(str, sep)` | Get substring before last separator |
| `tool.substringAfterLast(str, sep)` | Get substring after last separator |
| `tool.substringBetween(str, tag)` | Get substring between matching tags |
| `tool.substringBetween(str, open, close)` | Get substring between open and close |
| `tool.substringsBetween(str, open, close)` | Get all substrings between markers |
| `tool.removePrefix(str, prefix)` | Remove prefix from string |
| `tool.removeSuffix(str, suffix)` | Remove suffix from string |

### Split and Join

| Method | Description |
|--------|-------------|
| `tool.split(str)` | Split string by whitespace |
| `tool.split(str, separators)` | Split string by separator characters |

### Case Conversion

| Method | Description |
|--------|-------------|
| `tool.toCamelCase(str, capitalizeFirst)` | Convert to camelCase or PascalCase |
| `tool.camel2Underline(str)` | Convert camelCase to snake_case |

## Collection Methods

| Method | Description |
|--------|-------------|
| `tool.newSet(vararg items)` | Create a new Set |
| `tool.newList(vararg items)` | Create a new List |
| `tool.newMap()` | Create a new LinkedHashMap |
| `tool.asList(any)` | Convert to List |
| `tool.asArray(any)` | Convert to Array |

## Any Methods

| Method | Description |
|--------|-------------|
| `tool.isNullOrEmpty(any)` | Check if value is null or empty (works for String, Collection, Map, Array) |
| `tool.notNullOrEmpty(any)` | Check if value is not null and not empty |
| `tool.intersect(any, other)` | Get intersection of two collections |
| `tool.anyIntersect(any, other)` | Check if collections have any common elements |
| `tool.equalOrIntersect(any, other)` | Check if equal or have common elements |

## JSON Methods

| Method | Description |
|--------|-------------|
| `tool.parseJson(json)` | Parse JSON string to object |
| `tool.toJson(obj)` | Convert object to JSON string |
| `tool.prettyJson(obj)` | Convert object to formatted JSON string |

## Date/Time Methods

| Method | Description |
|--------|-------------|
| `tool.now()` | Get current datetime as string (yyyy-MM-dd HH:mm:ss) |
| `tool.now(pattern)` | Get current datetime with custom pattern |
| `tool.today()` | Get current date as string (yyyy-MM-dd) |
| `tool.format(time, pattern)` | Format timestamp with pattern |

## Clipboard Methods

| Method | Description |
|--------|-------------|
| `tool.copy2Clipboard(str)` | Copy string to system clipboard |

## Debug Methods

| Method | Description |
|--------|-------------|
| `tool.debug(any)` | Get debug info about an object (type and available methods) |

## Example

```properties
field.mock=groovy:'''
def name = it.name()

// String manipulation
if (tool.notNullOrEmpty(name)) {
    def capitalizedName = tool.capitalize(name)
    def underscoreName = tool.camel2Underline(name)
    logger.info("Original: " + name)
    logger.info("Capitalized: " + capitalizedName)
    logger.info("Snake case: " + underscoreName)
}

// JSON operations
def data = [name: "test", value: 123]
def json = tool.toJson(data)
logger.info("JSON: " + json)

// Date/time
def now = tool.now()
def today = tool.today()
logger.info("Current time: " + now)

return "mock_" + name
'''
```

## See Also

- [regex](./regex) - Regular expression utilities
- [logger](./logger) - Logging utility
