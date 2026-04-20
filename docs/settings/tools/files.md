# files

File operations utility for reading and writing files in Groovy scripts. Provides simple methods for file I/O operations.

## Methods

### save(content, path)

Save content to a file with UTF-8 encoding.

```properties
export.after=groovy:'''
files.save(it.toJson(), "/tmp/api-export.json")
logger.info("API data saved to /tmp/api-export.json")
'''
```

### save(content, charset, path)

Save content to a file with specified encoding.

```properties
export.after=groovy:'''
files.save(it.toJson(), "UTF-8", "/tmp/api-export.json")
'''
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | `String` | The content to write to the file |
| `charset` | `String` | Character encoding (e.g., "UTF-8", "ISO-8859-1") |
| `path` | `String` | Absolute path to the file |

## Behavior

- **Directory Creation**: Parent directories are created automatically if they don't exist
- **Overwrite**: Existing files are overwritten without warning
- **Encoding**: Default encoding is UTF-8

## Examples

### Export API Data

```properties
export.after=groovy:'''
import groovy.json.JsonSlurper
import groovy.json.JsonOutput

def data = [
    apis: it.apis(),
    exportedAt: new Date().format("yyyy-MM-dd HH:mm:ss")
]

def json = JsonOutput.prettyPrint(JsonOutput.toJson(data))
files.save(json, "/tmp/api-export-" + System.currentTimeMillis() + ".json")
logger.info("Exported " + it.apis().size() + " APIs")
'''
```

### Save Response Data

```properties
http.call.after=groovy:'''
if (it.response().code() == 200) {
    def timestamp = new Date().format("yyyyMMdd_HHmmss")
    def path = "/tmp/response_" + timestamp + ".json"
    files.save(it.response().body(), path)
    logger.info("Response saved to " + path)
}
'''
```

### Log Export Results

```properties
export.after=groovy:'''
def log = new StringBuilder()
log.append("Export Log\n")
log.append("==========\n")
log.append("Time: " + new Date().format("yyyy-MM-dd HH:mm:ss") + "\n")
log.append("APIs: " + it.apis().size() + "\n")

files.save(log.toString(), "/tmp/export-log.txt")
'''
```

## Notes

- The `files` tool only supports writing files
- For reading files, use standard Groovy I/O:
  ```properties
  field.mock=groovy:'''
  def content = new File("/path/to/file.txt").text
  return content
  '''
  ```

## See Also

- [localStorage](./localStorage) - Persistent key-value storage
- [session](./session) - Session-level storage
- [config](./config) - Configuration access
