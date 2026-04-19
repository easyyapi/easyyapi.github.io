# Spring Configuration & Properties

EasyYapi provides extensions for Spring configuration and properties support.

## Spring ConfigurationProperties

The `spring-configuration` extension supports `@ConfigurationProperties` annotation:

```properties
# Resolve @ConfigurationProperties prefix
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties#prefix
```

This allows EasyYapi to recognize the prefix from `@ConfigurationProperties` and apply it when exporting property documentation.

## Spring Properties

The `spring-properties` extension (disabled by default) can import and resolve Spring application properties:

```properties
# Import spring properties
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml

# Resolve spring properties
class.prefix.path=${server.servlet.context-path}
```

When enabled, the `server.servlet.context-path` from your `application.yml` will be automatically used as the class prefix path.

::: warning
Spring Properties support is **disabled by default**. Enable it in IDE settings if needed.
:::

## Spring Validations

The `spring-validations` extension supports Spring validation annotations:

```properties
field.required=@org.springframework.lang.NonNull
param.ignore=groovy:it.type().isExtend("org.springframework.validation.BindingResult")
field.mock[@org.springframework.format.annotation.DateTimeFormat]=groovy:'''
    return "@datetime(\"" + it.ann("org.springframework.format.annotation.DateTimeFormat","pattern") + "\")"
'''
```

This extension is enabled by default when `org.springframework.lang.NonNull` is on the classpath.
