# Local Config File

EasyYapi uses `.easy.api.config` files as local configuration files. Starting with EasyYapi 3.0, the recommended approach is the [`.easyapi/` folder model](./rule-authoring#folder-based-rule-files), where every regular file in `.easyapi/` is loaded automatically. The legacy `.easy.api.config*` files below are still read for backwards compatibility.

## File Location

Rule files are resolved from the **IntelliJ project base path** — the folder you
opened in the IDE (`project.basePath`). Discovery never walks *down* into child
directories, so config files placed in nested module folders are **not** loaded
when the parent is opened as the project.

> **Heads-up for multi-module projects:** there is no per-module config tier.
> If you open `your-project/` as the project, only `.easy.api.config` / `.easyapi/`
> at `your-project/` and its *ancestor* directories are read. To give a single
> module its own rules, open that module's folder as its own IntelliJ project,
> or keep everything in the shared `<project>/.easyapi/` folder.

### Project Root

The folder you opened in the IDE:

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

Legacy `.easy.api.config[.properties|.yml|.yaml]` files are also picked up by
walking **up** from the project base to its ancestors (e.g. a config in a parent
directory shared by several projects).

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

Configuration is merged from several sources by priority. Within the same
source, files in `.easyapi/` are read in sorted name order and appended in
sequence. Higher-priority sources override lower-priority ones for the same key.

| Priority | Source | Loaded from |
|:---:|---|---|
| 4 | **Project rules** | `<project>/.easyapi/*` (all regular files) + legacy `.easy.api.config*` walked up from `<project>` |
| 3 | Extension rules | Bundled framework presets (Spring, Jackson, Validation, Swagger, …) toggleable in Settings → Extensions |
| 3 | Remote rules | URLs configured in Settings → Rules → Remote |
| 2 | Global rules | `~/.easyapi/*` (all regular files) |

Project rules win over everything else; global rules are the lowest-tier
fallback. There is no separate module-level tier.

## Including Other Config Files

::: tip New in v3.2.0
The `###include <path-or-url>` directive (since v3.2.0, #1410) lets a rule
file pull in another local file or remote URL. It is the **preferred** way
to compose configs; the legacy `properties.additional` key is kept for
backward compatibility and behaves identically.
:::

A rule file can include another config source by writing the `###include`
directive on its **own line**:

```properties
# Load a shared rule file relative to this file's directory
###include ./shared/security.rules

# Absolute path
###include /etc/easyapi/team.rules

# Home-relative path
###include ~/easyapi/personal.rules

# Remote URL (http/https)
###include https://raw.githubusercontent.com/org/repo/main/easyapi/common.rules
```

### Behavior

- The directive must be on its own line. The argument is the path or URL to
  load (whitespace-trimmed).
- **Local paths** are resolved relative to the *including file's* directory
  (or `~/` home, or as an absolute path). **Remote URLs** (`http://` /
  `https://`) are fetched via the cached resource resolver.
- The included file is parsed with the **caller's directive state**, so
  `###set` options in effect before the include carry into the included
  file (e.g. `###set ignoreUnresolved = true` is inherited).
- Relative paths inside an included file resolve against the **included
  file's** directory (for remote includes, against the same host).
- If the resource cannot be resolved, EasyYapi raises an error — unless you
  silence it with `###set ignoreNotFoundFile = true` before the include:

```properties
# Optional include: missing file is silently ignored
###set ignoreNotFoundFile = true
###include ./optional/local-overrides.rules
###set ignoreNotFoundFile = false
```

### Legacy form: `properties.additional`

The older `properties.additional=<path-or-url>` key (one entry per line) is
the legacy equivalent of `###include`. It behaves identically — same
resolution rules, same directive-state inheritance, same
`ignoreNotFoundFile` gating. `###include` is now preferred for clarity;
`properties.additional` remains supported so existing configs keep working.

```properties
# Legacy form (still supported, identical behavior to ###include)
properties.additional=./shared/security.rules
properties.additional=https://raw.githubusercontent.com/org/repo/main/easyapi/common.rules
```
