# Markdown Template Settings

EasyYapi supports custom Markdown export templates.

## Default Template

By default, the built-in Markdown template is used for export.

## Custom Template

Specify a template path in your config file:

```properties
markdown.template=path/to/template.md
```

## Template Variables

| Variable | Description |
|----------|-------------|
| `${api.name}` | API name |
| `${api.method}` | HTTP method |
| `${api.path}` | API path |
| `${api.description}` | API description |
| `${api.params}` | Parameter list |
| `${api.response}` | Response information |
