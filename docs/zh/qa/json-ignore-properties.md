# 启用 JsonIgnoreProperties 支持

对 Jackson 的 `@JsonIgnoreProperties` 注解的支持是**内置且默认启用**的——你无需添加任何规则。EasyYapi 自带的 `jackson` 扩展会自动处理。

## 工作原理

`jackson` 扩展会自动注册以下规则：

```properties
# 类上的 @JsonIgnoreProperties：忽略名字出现在列表中的字段。
field.ignore=groovy:it.containingClass().annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")?.contains(it.name())

# 字段上的 @JsonIgnoreProperties（嵌套解析时使用）。
field.parse.before[@com.fasterxml.jackson.annotation.JsonIgnoreProperties]=groovy:```
    if (!fieldContext) return
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
    for(property in properties){
        def path = fieldContext.property(property)
        session.set("json-ignore", path, true)
    }
```
field.ignore=groovy:```
    return fieldContext ? session.get("json-ignore", fieldContext.path()) : null
```
```

你**无需**把以上内容复制到自己的配置中——它们在启动时由 `extensions/jackson.config` 加载。

## 示例

```java
@JsonIgnoreProperties({"internalId", "createdAt"})
public class User {
    private Long id;
    private String name;
    private Long internalId;  // 被忽略
    private Date createdAt;   // 被忽略
}
```

`internalId` 和 `createdAt` 会自动从导出的请求/响应 schema 中排除。

> **提示：** 若要关闭该行为，请在 **Settings → EasyApi → Extensions** 中关掉 `jackson` 扩展。若因非 Jackson 原因需要忽略字段，请编写自定义的 [`field.ignore`](../settings/rules/field_ignore) 规则。

完整的 Jackson 注解支持列表详见 [Jackson](/zh/framework/jackson)。
