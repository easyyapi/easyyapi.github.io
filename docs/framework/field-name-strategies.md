# Field Name Strategy Extensions

EasyYapi ships nine opt-in built-in extensions that normalize every exported
field name to a naming convention. They were added in v3.2.7 and all nine are
**disabled by default**.

## Available Extensions

| Extension code | Rule value | Example |
|----------------|------------|---------|
| `field.name.uncapitalize` | `tool.uncapitalize(it.fieldName())` | `Barcode` → `barcode` |
| `field.name.capitalize` | `tool.capitalize(it.fieldName())` | `barcode` → `Barcode` |
| `field.name.camel-case` | `tool.toCamelCase(it.fieldName())` | `user_name` → `userName` |
| `field.name.pascal-case` | `tool.toPascalCase(it.fieldName())` | `user_name` → `UserName` |
| `field.name.snake-case` | `tool.toSnakeCase(it.fieldName())` | `URLValue` → `url_value` |
| `field.name.kebab-case` | `tool.toKebabCase(it.fieldName())` | `URLValue` → `url-value` |
| `field.name.lower-dot-case` | `tool.toLowerDotCase(it.fieldName())` | `URLValue` → `url.value` |
| `field.name.upper-snake-case` | `tool.upperCase(tool.toSnakeCase(it.fieldName()))` | `URLValue` → `URL_VALUE` |
| `field.name.upper-kebab-case` | `tool.upperCase(tool.toKebabCase(it.fieldName()))` | `URLValue` → `URL-VALUE` |

Each extension is a single `field.name` Groovy rule, so no new rule key, parser,
setting, or config syntax is involved.

## Enabling an Extension

Enable the one you need in the **Extensions** tab:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Extensions</kbd>

The selection is stored as a comma-separated `extensionConfigs` value, so it can
also be set in a rule file. All nine write the same `field.name` key — enable
**one at a time**.

## Acronym Handling

`toCamelCase`, `toSnakeCase`, `toKebabCase`, `toPascalCase` and `toLowerDotCase`
share one word splitter. Separators (`_`, `-`, `.`, space), camel humps and
acronym boundaries are all word boundaries, so `URLValue` splits into `url` +
`value`. This is the mainstream boundary used by System.Text.Json,
Newtonsoft.Json, Rails, Pydantic, lodash and Jackson's `KebabCaseStrategy`.

`tool.camel2Underline` is the legacy exception: it follows Jackson's
`SnakeCaseStrategy`, keeps consecutive capitals glued, and turns `URLValue`
into `urlvalue`. It is kept for existing rules that call it by name; the
`field.name.snake-case` extension uses `toSnakeCase` instead. See
[tool](/settings/tools/tool).

Bean property names follow `java.beans.Introspector.decapitalize` since v3.2.7:
`getURLValue()` resolves to `URLValue` instead of `uRLValue`. A field and its
accessor therefore collide and export as one property — useful for generated
models that declare `public String Barcode` alongside `getBarcode()`. Enabling
`field.name.uncapitalize` maps both to `barcode`.

## Writing Your Own

Use the same `tool` helpers directly in a rule file when the nine presets do
not fit:

````properties
field.name=groovy:```
    return tool.toSnakeCase(it.fieldName())
```
````

See [field.name](/settings/rules/field_name) for the rule and
[Script Tools](/settings/tools) for the full helper catalog.

## See Also

- [Field Order Extensions](/framework/field-order)
- [tool](/settings/tools/tool) — string and case helpers
