# Custom Framework

The **Custom** framework lets you describe an API convention with configuration rules when a project does not use one of EasyYapi's built-in framework recognizers.

Unlike Spring, JAX-RS, Feign, and gRPC support, Custom has no hard-coded annotation detection. Class recognition, method recognition, HTTP method, path, and parameter binding are all controlled by `custom.*` rules. Once a rule produces a normal API endpoint, every enabled export channel—including YApi—can consume it.

## Enable Custom

Custom is disabled by default. Open **Settings** > **Other Settings** > **EasyApi** > **Features**, enable **custom** under **Framework Support**, and then add rules to a project or global `.easyapi/*.rules` file.

Custom line markers are also opt-in. If you want gutter icons for classes recognized by Custom rules, open the Custom framework settings and enable **line marker for Custom API classes**.

## Core rules

| Rule | Purpose |
|------|---------|
| `custom.class.is.api` | Identifies an API class |
| `custom.method.is.api` | Identifies an endpoint method |
| `custom.http.method` | Supplies the HTTP verb |
| `custom.path` | Supplies the class or method path |
| `custom.param.as.json.body` | Binds a parameter as a JSON body |
| `custom.param.as.form.body` | Binds a parameter as a form field |
| `custom.param.as.path.var` | Binds a parameter as a path variable |
| `custom.param.as.cookie` | Binds a parameter as a cookie |
| `custom.param.name` | Overrides a query or form parameter name |
| `custom.param.header` / `custom.param.cookie` | Supplies header or cookie names |

For less specific parameter rules, `param.http.type` can classify a parameter as `query`, `path`, `header`, `cookie`, `form`, or `body`. The specific `custom.param.as.*` classifiers take precedence.

## Example

The following is a starting point for a project whose API classes and methods use custom annotations. Replace the annotation names and paths with the conventions used by your project:

```properties
custom.class.is.api=groovy:it.hasAnn("com.example.ApiController")
custom.method.is.api=groovy:it.hasAnn("com.example.Api")
custom.http.method=groovy:it.ann("com.example.Api")?.value() ?: "GET"
custom.path=groovy:it.ann("com.example.Path")?.value() ?: ""
custom.param.as.json.body=groovy:it.hasAnn("com.example.JsonBody")
custom.param.as.path.var=groovy:it.hasAnn("com.example.PathVariable")
```

The HTTP method falls back to `method.default.http.method`, then to `POST` if no rule supplies a value. The final path combines the class path, method path, `class.prefix.path`, and `endpoint.prefix.path` with duplicate slashes normalized.

## Lifecycle hooks

Custom also provides framework-scoped hooks for rules that should run only during Custom extraction:

- `custom.class.parse.before` / `custom.class.parse.after`
- `custom.method.parse.before` / `custom.method.parse.after`
- `custom.export.after`

The shared API parse and export hooks remain available as well.

## Migrating from generic export rules

The old v2 `mdoc.class.filter` and `mdoc.method.filter` keys are not supported by the v3 rewrite. Use the Custom recognizer instead:

```properties
custom.class.is.api=groovy:it.hasAnn("com.example.ApiController")
custom.method.is.api=groovy:it.hasAnn("com.example.Api")
```

See [Config Rules](/settings/config-rule) and [Rule Authoring](/settings/rule-authoring) for the rule file format and AI-assisted authoring workflow.
