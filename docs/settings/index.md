# Configuration

EasyYapi provides a flexible configuration system to customize API documentation generation behavior.

## Out of the Box

EasyApi understands standard HTTP frameworks (Spring MVC, WebFlux, JAX-RS, Feign) out of the box — **most projects need no custom rules**. For custom framework behaviour the scanner can't see (e.g. a `jakarta.servlet.Filter` that requires a header, or a `ResponseBodyAdvice` that wraps every response in an envelope), use the built-in AI Assistant or the external skill to detect it and generate the rule. See the [Rule Authoring Guide](https://github.com/tangcent/easy-yapi/blob/master/docs/knowledge-base/rule-guide.md) for the full Custom-Pattern Catalog.

## Ways to Write Rules

EasyYapi 3.x supports three ways to author rules. See [Rule Authoring](./rule-authoring) for the full guide.

| Method | Best for |
|--------|----------|
| [Folder-based rule files](./rule-authoring#folder-based-rule-files) | Plain-text rules under version control (`.easyapi/*.rules`) |
| [Built-in AI Assistant](./rule-authoring#built-in-ai-assistant) | Natural-language rule creation in Settings → Rules → Chat / Magic |
| [External `easy-yapi-assistant` skill](./rule-authoring#external-easy-yapi-assistant-skill) | Driving rule authoring from an external AI tool |

## Configuration Methods

### Local Config File

Create a `.easy.api.config` file in your project root or module root directory (legacy, still supported). New projects should use the [`.easyapi/` folder model](./rule-authoring#folder-based-rule-files).

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

1. Remote config (highest priority)
2. Module root config
3. Project root config
4. IDE settings (lowest priority)
