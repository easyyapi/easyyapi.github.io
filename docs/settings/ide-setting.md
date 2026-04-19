# IDE Settings

EasyYapi provides IDE-level settings that can be configured within IDEA.

## Opening Settings

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd>

## General Settings

| Setting | Description |
|---------|-------------|
| postman.url | Postman export URL |
| postman.token | Postman API Token |
| yapi.server | YApi server address |
| yapi.token | YApi project Token |
| project.name | Project name |

## Export Settings

| Setting | Description |
|---------|-------------|
| outputDemo | Generate response demo when exporting Markdown |
| outputCharset | Export character set |

## Framework Toggles

| Setting | Description | Default |
|---------|-------------|---------|
| feignEnable | Enable Feign client support | `false` |
| jaxrsEnable | Enable JAX-RS support | `true` |
| actuatorEnable | Enable Spring Actuator support | `false` |
| grpcEnable | Enable gRPC support | `true` |
| swaggerEnable | Enable Swagger support | `true` |
| swagger3Enable | Enable Swagger 3 / OpenAPI support | `true` |

## Recommended Config

EasyYapi includes built-in recommended configuration that can be enabled in settings. The recommended config contains commonly used rules and type conversions.
