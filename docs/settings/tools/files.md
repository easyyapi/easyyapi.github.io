# files

File operations utility for reading and writing files in Groovy scripts.

## Methods

### save(path, content)

Save content to a file.

```properties
export.after=groovy:'''
files.save("/tmp/api-export.json", it.toJson())
logger.info("API data saved to /tmp/api-export.json")
'''
```

### read(path)

Read content from a file.

```properties
method.additional.header=groovy:'''
def headers = files.read("/path/to/headers.json")
return new JsonSlurper().parseText(headers)
'''
```

## See Also

- [localStorage](./localStorage) — Persistent key-value storage
- [session](./session) — Session-level storage
