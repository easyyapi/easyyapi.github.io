# field.advanced

Advanced field configuration.

## Usage

```properties
field.advanced=groovy:'''
if (it.type().name() == "java.util.Date") {
    it.setJsonType("string")
    it.setFormat("date-time")
}
'''
```
