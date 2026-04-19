# Spring 配置与属性

EasyYapi 提供了 Spring 配置和属性支持的扩展。

## Spring ConfigurationProperties

`spring-configuration` 扩展支持 `@ConfigurationProperties` 注解：

```properties
# 解析 @ConfigurationProperties 前缀
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties
properties.prefix=@org.springframework.boot.context.properties.ConfigurationProperties#prefix
```

这允许 EasyYapi 识别 `@ConfigurationProperties` 的前缀，并在导出属性文档时应用。

## Spring Properties

`spring-properties` 扩展（默认禁用）可以导入和解析 Spring 应用属性：

```properties
# 导入 spring 属性
properties.additional=${module_path}/src/main/resources/application.properties
properties.additional=${module_path}/src/main/resources/application.yml
properties.additional=${module_path}/src/main/resources/application.yaml

# 解析 spring 属性
class.prefix.path=${server.servlet.context-path}
```

启用后，`application.yml` 中的 `server.servlet.context-path` 将自动用作类前缀路径。

::: warning
Spring Properties 支持**默认禁用**。如需使用，请在 IDE 设置中启用。
:::

## Spring Validations

`spring-validations` 扩展支持 Spring 校验注解：

```properties
field.required=@org.springframework.lang.NonNull
param.ignore=groovy:it.type().isExtend("org.springframework.validation.BindingResult")
field.mock[@org.springframework.format.annotation.DateTimeFormat]=groovy:'''
    return "@datetime(\"" + it.ann("org.springframework.format.annotation.DateTimeFormat","pattern") + "\")"
'''
```

此扩展在 `org.springframework.lang.NonNull` 在类路径上时默认启用。
