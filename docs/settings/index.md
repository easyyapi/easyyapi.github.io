# Configuration

EasyYapi provides a flexible configuration system to customize API documentation generation behavior.

## Out of the Box

EasyApi understands standard HTTP frameworks (Spring MVC, WebFlux, JAX-RS, Feign) out of the box — **most projects need no custom rules**. For custom framework behaviour the scanner can't see (e.g. a `jakarta.servlet.Filter` that requires a header, or a `ResponseBodyAdvice` that wraps every response in an envelope), use the built-in AI Assistant or the external skill to detect it and generate the rule. See [Rule Authoring](./rule-authoring) for the guide.

## Ways to Write Rules

EasyYapi 3.x offers **two ways** to author rules. Both write to `.easyapi/*.rules` files. See [Rule Authoring](./rule-authoring) for the full guide.

| Way | Best for |
|--------|----------|
| [Built-in AI Assistant](./rule-authoring#built-in-ai-assistant) | Natural-language rule creation in Settings → Rules → Chat / Magic |
| [External `easy-yapi-assistant` skill](./rule-authoring#external-easy-yapi-assistant-skill) | Driving rule authoring from an external AI tool |

## Configuration Methods

### Local Config File

Create a `.easy.api.config` file in your project root directory — the folder you opened in the IDE (legacy, still supported). New projects should use the [`.easyapi/` folder model](./local-file-config). Rule files are resolved from the project base path only; there is no per-module config tier.

```properties
# Ignore specific fields
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# Type conversion
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

See [Local Config File](./local-file-config).

### Remote Config File

Configure a remote URL to fetch configuration:

```properties
remote.url=http://your-config-server.com/easy-api.config
```

See [Remote Config File](./remote-config).

### IDE Settings

Configure EasyYapi global settings in the IDE.

See [IDE Settings](./ide-setting).

## Configuration Content

| Category | Description |
|----------|-------------|
| [Config Rules](./config-rule) | Rules for customizing API documentation generation |
| [Callbacks & Events](./events/) | Execute custom logic at specific events |
| [Script Tools](./tools) | Tools available in Groovy scripts |
| [Advanced](./advanced/) | Advanced custom configuration |

## Configuration Priority

1. Project rules — `<project>/.easyapi/` + legacy `.easy.api.config*` walked up from the project root (highest priority)
2. Extension rules — bundled framework presets (Spring, Jackson, Validation, …)
3. Remote config — URLs from `remote.url`
4. Global rules — `~/.easyapi/` (lowest priority)
