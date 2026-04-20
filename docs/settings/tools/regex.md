# regex

Regular expression utilities with pattern caching for performance. Provides common regex operations without needing to compile patterns manually.

## Usage

```properties
field.name=groovy:'''
def match = regex.find(it.name(), /_(\w)/)
return match ? match[1].toUpperCase() : it.name()
'''
```

## Methods

### Extraction

| Method | Return Type | Description |
|--------|-------------|-------------|
| `regex.getGroup0(regex, content)` | `String?` | Get the full match (group 0) |
| `regex.getGroup1(regex, content)` | `String?` | Get the first captured group |
| `regex.get(regex, content, groupIndex)` | `String?` | Get a specific captured group |
| `regex.getAllGroups(regex, content)` | `List<String>?` | Get all captured groups from first match |

### Find All

| Method | Return Type | Description |
|--------|-------------|-------------|
| `regex.findAllGroup0(regex, content)` | `List<String>?` | Find all full matches |
| `regex.findAllGroup1(regex, content)` | `List<String>?` | Find all first group matches |
| `regex.findAll(regex, content, group)` | `List<String>` | Find all matches for a specific group |

### Replacement

| Method | Return Type | Description |
|--------|-------------|-------------|
| `regex.extract(regex, content, template)` | `String?` | Replace matches using template (use `$1`, `$2` for groups) |
| `regex.replaceAll(content, regex, template)` | `String?` | Alias for extract |
| `regex.delFirst(regex, content)` | `String` | Delete first match |
| `regex.delAll(regex, content)` | `String` | Delete all matches |
| `regex.delBefore(regex, content)` | `String?` | Delete everything before first match |

### Testing

| Method | Return Type | Description |
|--------|-------------|-------------|
| `regex.contains(regex, content)` | `Boolean` | Check if pattern matches anywhere |
| `regex.isMatch(regex, content)` | `Boolean` | Check if entire content matches pattern |
| `regex.count(regex, content)` | `Int` | Count number of matches |

### Utility

| Method | Return Type | Description |
|--------|-------------|-------------|
| `regex.escape(content)` | `String?` | Escape special regex characters |

## Examples

### Extract First Match

```properties
field.name=groovy:'''
def name = it.name()
def match = regex.getGroup1("get(\\w+)", name)
return match ? match.uncapitalize() : name
'''
```

### Find All Matches

```properties
method.path=groovy:'''
def paths = regex.findAllGroup1("/(\\w+)", it.ann("RequestMapping", "value"))
return "/" + paths.join("/")
'''
```

### Replace with Groups

```properties
field.name=groovy:'''
def name = it.name()
return regex.extract("_(\\w)", name, "$1")
'''
```

### Delete Patterns

```properties
field.name=groovy:'''
def name = it.name()
name = regex.delFirst("^get", name)
name = regex.delAll("_", name)
return name
'''
```

### Count Occurrences

```properties
field.description=groovy:'''
def comment = it.doc()
if (comment) {
    def paramCount = regex.count("@param", comment)
    return "Has " + paramCount + " parameters"
}
return null
'''
```

### Escape User Input

```properties
field.mock=groovy:'''
def userInput = config.get("mock.pattern")
if (userInput) {
    def escaped = regex.escape(userInput)
    return "Pattern: " + escaped
}
return null
'''
```

### Complex Extraction

```properties
method.description=groovy:'''
def doc = it.doc()
if (!doc) return null

def lines = doc.split("\n")
def result = []

lines.each { line ->
    def paramMatch = regex.getGroup1("@param\\s+(\\w+)", line)
    if (paramMatch) {
        result.add("Parameter: " + paramMatch)
    }
    
    def returnMatch = regex.getGroup1("@return\\s+(.+)", line)
    if (returnMatch) {
        result.add("Returns: " + returnMatch)
    }
}

return result.join("\n")
'''
```

## Pattern Caching

All patterns are automatically cached for performance. You don't need to worry about recompiling patterns used multiple times.

## Special Characters

The following characters are automatically escaped by `regex.escape()`:

`\ $ ( ) * + . [ ] ? ^ { } |`

## See Also

- [tool](./tool) - General utility methods including string operations
- [logger](./logger) - Logging utility
