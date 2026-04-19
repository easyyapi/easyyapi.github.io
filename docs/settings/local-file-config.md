# Local Config File

EasyYapi uses `.easy.api.config` files as local configuration files.

## File Location

### Project Root

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

### Module Root

```
your-project/
├── module-a/
│   ├── .easy.api.config
│   └── src/
├── module-b/
│   ├── .easy.api.config
│   └── src/
└── pom.xml
```

## File Format

The config file uses `key=value` format:

```properties
# Comments start with #

# API name rule
api.name=#name

# Field ignore rule
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# Type conversion
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

## Config Merging

Multiple config files are merged by priority. Higher priority configs override lower priority ones.
