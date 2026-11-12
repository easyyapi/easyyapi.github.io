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

Configure remote config URLs in **Settings → EasyApi → Rules → Remote**. You can also pull remote configs from within a rule file using the `###include` directive.

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

## Method Event Context

Since v3.2.7, method-level lifecycle events (`api.method.parse.before`,
`api.method.parse.after`, `export.after`, and the `custom.method.*` hooks)
receive the same `ResolvedMethod` context on every framework — Spring MVC,
JAX-RS, Feign, Spring Actuator, gRPC and Custom. In practice:

- **Feign**: `it.returnType()`, `it.args()` and `it.argTypes()` report
  substituted types on inherited generic methods. On inherited methods,
  `it.containingClass()` is the exported client and `it.defineClass()` is the
  declaring interface.
- A `#regex:` filter on one of these event rules matches the return type, not
  the method's whole source text — a pattern written against an annotation or
  comment in that text no longer fires.
- A failure during class-level setup now still fires `api.class.parse.after`.

Rule keys, config formats and trigger order are unchanged. See
[Parse Events](./events/api_method_parse_before) and
[Script tools: it](./tools/it) for the context methods.

## Configuration Priority

1. Project rules — `<project>/.easyapi/` + legacy `.easy.api.config*` walked up from the project root (highest priority)
2. Extension rules — bundled framework presets (Spring, Jackson, Validation, …)
3. Remote config — URLs configured in Settings → Rules → Remote
4. Global rules — `~/.easyapi/` (lowest priority)

## Features and channel settings

Use [IDE Settings](./ide-setting) > **Features** to control framework recognizers, export channels, and field-format channels. Experimental **Hoppscotch**, **OpenAPI**, and **ApiPost** channels are disabled by default. Most of these extension points can be turned off when they are not relevant to a project; the Features tab also controls API scanning (with automatic and concurrent options) and editor integration, all of which take effect immediately without an IDE restart. Their channel-specific settings are available from the EasyApi settings tree.
