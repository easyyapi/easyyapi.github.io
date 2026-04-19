# regex

Regular expression utilities.

## Usage

```properties
field.name=groovy:'''
def match = regex.find(it.name(), /_(\w)/)
return match ? match[1].toUpperCase() : it.name()
'''
```
