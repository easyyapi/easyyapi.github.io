# json.additional.field

> 用于为JSON对象添加额外字段

该规则用于向JSON对象模型添加额外的字段，这些字段可能在原始类中不存在，但在API文档或接口中需要呈现。

## 配置格式

额外字段需要以JSON格式配置，包含以下字段：
- `name`: 字段名称
- `type`: 字段类型
- `defaultValue`: 默认值
- `desc`: 字段描述
- `required`: 是否必须

## 配置示例

``````properties
# 添加单个字段
json.additional.field={name: "timestamp", type: "long", desc: "记录创建时间戳", required: true, defaultValue: "", demo: "1634567890123"}

# 添加多个字段（每行一个字段配置）
json.additional.field={name: "version", type: "string", desc: "API版本", required: true, defaultValue: "1.0", demo: "1.0"}
json.additional.field={name: "trace_id", type: "string", desc: "追踪ID", required: false, defaultValue: "", demo: "abc123"}
``````

## 应用场景

1. **通用字段添加**：为所有JSON响应添加通用的审计字段（如创建时间、更新时间）
2. **版本控制**：添加API版本相关信息
3. **扩展现有模型**：在不修改源代码的情况下扩展JSON模型
4. **关联字段生成**：根据现有字段生成关联字段，例如从字段值生成对应的标签字段

## 配置规则

你可以使用条件表达式来控制字段添加的范围：

```properties
# 为特定类添加字段
json.additional.field[com.itangcent.model.UserInfo]={name: "label", defaultValue: "genius", type: "java.lang.String", desc: "label of the user", required: true}

# 为特定类的特定字段添加关联字段
json.additional.field[com.itangcent.model.UserInfo#name]={name: "firstName", defaultValue: "tang", type: "java.lang.String", desc: "a family name", required: false}
json.additional.field[com.itangcent.model.UserInfo#age]={name: "order", defaultValue: "12", type: "int", desc: "order of the age in family", required: true}

# 使用groovy条件表达式
json.additional.field[groovy:it.containingClass().name().startsWith("com.example.model")]={name: "timestamp", type: "long", desc: "记录创建时间戳", required: true, defaultValue: "", demo: "1634567890123"}

# 根据注解控制添加字段
json.additional.field[@com.example.annotation.NeedsTimestamp]={name: "timestamp", type: "long", desc: "记录创建时间戳", required: true, defaultValue: "", demo: "1634567890123"}
```

## 示例

***配置***

```properties
# 为User类添加额外字段
json.additional.field[com.example.model.User]={name: "createTime", type: "long", desc: "记录创建时间戳", required: true, defaultValue: "", demo: "1634567890123"}

# 为User类的特定字段添加关联字段
json.additional.field[com.example.model.User#name]={name: "label", type: "string", desc: "用户显示标签", required: false, defaultValue: "", demo: "VIP用户"}
json.additional.field[com.example.model.User#gender]={name: "genderText", type: "string", desc: "性别文本描述", required: false, defaultValue: "未知", demo: "男"}
```

***User.java***

```java
/**
 * 用户DTO
 */
public class User {
    /**
     * 用户ID
     */
    private Long id;
    
    /**
     * 用户名称
     */
    private String name;
    
    /**
     * 用户性别
     * 0-男, 1-女
     */
    private Integer gender;
    
    /**
     * 用户年龄
     */
    private Integer age;
    
    // getters and setters...
}
```

在上面的示例中，通过配置文件而非类注解添加了额外字段，当User类被序列化为JSON时，会额外包含以下字段：
1. `createTime` - 添加到整个User类的记录创建时间戳
2. `label` - 与name字段相关联的显示标签
3. `genderText` - 与gender字段相关联的文本描述

这种配置方式无需修改原始类的代码，可以在配置文件中集中管理所有额外字段的定义。 