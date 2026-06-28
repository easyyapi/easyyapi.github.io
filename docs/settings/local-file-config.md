# Local Config File

EasyYapi uses `.easy.api.config` files as local configuration files. Starting with EasyYapi 3.0, the recommended approach is the [`.easyapi/` folder model](./rule-authoring#folder-based-rule-files), where every regular file in `.easyapi/` is loaded automatically. The legacy `.easy.api.config*` files below are still read for backwards compatibility.

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

### 3.0+ Folder Model (recommended)

Place any number of `.rules` (or `.properties`) files in the `.easyapi/` folder. Every regular file is loaded — no list to maintain.

```
your-project/
├── .easyapi/
│   ├── naming.rules
│   ├── security.rules
│   └── postman.rules
├── src/
└── pom.xml
```

The same model applies at the global scope: `~/.easyapi/*.rules` is loaded for every project on the machine. Manage files visually in **Settings → EasyApi → Rules** (Project / Global / Remote sub-tabs).

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
