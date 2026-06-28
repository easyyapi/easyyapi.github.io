# How to add config file

EasyYapi supports multiple ways to add configuration files to your project.

## Option 1: Project root directory

Create a `.easy.api.config` file in the project root directory (the folder you opened in the IDE):

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

> **Multi-module projects note:** There is no module-level configuration layer. Rule files are
> resolved only from the project root directory; the discovery process does not recurse into
> subdirectories. If you open the parent directory as the project, configuration files placed in
> subdirectories such as `module-a/` will not be loaded. If you want a module to have its own
> rules, open that module folder as a separate project.

## Option 2: Remote configuration

Configure a remote URL in the local configuration file:

```properties
remote.url=http://your-config-server.com/easy-api.config
```

## Configuration priority

1. Project rules (`.easyapi/` or `.easy.api.config*` in the project root) — highest priority
2. Extension rules (built-in framework presets)
3. Remote configuration
4. Global rules (`~/.easyapi/`) — lowest priority

See [Local Config File](/settings/local-file-config) and [Remote Config File](/settings/remote-config).
