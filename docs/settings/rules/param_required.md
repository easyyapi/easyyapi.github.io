# param.required

Set whether a parameter is required.

## Resolution order

Requiredness is resolved through a three-layer chain — **an explicit rule always wins, and the framework gets a say when no rule matches**:

```
param.required rule  >  framework annotation  >  framework default
```

The middle layer is what makes framework semantics work without a rule. For Spring MVC, `@RequestParam`, `@RequestHeader`, `@CookieValue`, `@PathVariable`, and `@RequestPart` count as required unless `required = false` is declared, a `defaultValue` is supplied, or the type is `Optional`. A parameter with no binding annotation — including `@ModelAttribute` — keeps Spring's own default and stays optional.

Annotations declared on a super method are honored, so a `@RequestParam(required = false)` on an interface method still applies to its implementation.

Use `field.required` for the same semantics on model fields.

## Usage

```properties
param.required=groovy:it.hasAnn("javax.validation.constraints.NotNull") || it.hasAnn("javax.validation.constraints.NotBlank")
```
