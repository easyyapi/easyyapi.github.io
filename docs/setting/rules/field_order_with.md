# field.order.with

> 类似于comparator, 通过比较两个字段, 返回-1,0,1来表示被比较的两个字段在结果中的顺序

注意: 优先级高于[field.order](field_order.md), 一般不建议同时使用。


## 推荐配置中能找到一些field.order.with相关的配置

1. 通过注解JsonPropertyOrder控制顺序

``````properties

#[Jackson_JsonPropertyOrder]
#Support for Jackson annotation JsonPropertyOrder
field.order=@com.fasterxml.jackson.annotation.JsonProperty#index
json.class.parse.before[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonPropertyOrder")
    properties.each { property ->
        session.push("JsonPropertyOrder-properties-"+it.name(), property)
    }
    session.set("JsonPropertyOrder-alphabetic"+it.name(),
        it.annValue("com.fasterxml.jackson.annotation.JsonPropertyOrder","alphabetic") ?: false)
```
json.class.parse.after[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```
    session.remove("JsonPropertyOrder-properties-"+it.name())
    session.remove("JsonPropertyOrder-"+it.name())
```
field.order=groovy:```
    def index = session.get("JsonPropertyOrder-properties-"+ it.containingClass().name())?.indexOf(it.name())
    if (index == -1) {
        return null
    }else{
        return index
    }
```
field.order.with=groovy:```
    def orderedProperties = session.get("JsonPropertyOrder-properties-"+ a.containingClass().name())
    if(a.name() in orderedProperties) {
         if(b.name() in orderedProperties){
             return orderedProperties.indexOf(a.name()) - orderedProperties.indexOf(b.name())
         }else{
             return -1
         }
    } else if(b.name() in orderedProperties){
        return 1
    } else if(session.get("JsonPropertyOrder-alphabetic"+a.containingClass().name())){
        return a.name().compareTo(b.name())
    } else {
        return null
    }
```
``````

2. 子类字段优先

``````properties
# child fields first
field.order.with=groovy:```
    def aDefineClass = a.defineClass()
    def bDefineClass = b.defineClass()
    if(aDefineClass==bDefineClass){
        return null
    }else if(aDefineClass.isExtend(bDefineClass.name())){
        return -1
    }else{
        return 1
    }
```
``````

3. 父类字段优先

``````properties
# parent fields first
field.order.with=groovy:```
    def aDefineClass = a.defineClass()
    def bDefineClass = b.defineClass()
    if(aDefineClass==bDefineClass){
        return null
    }else if(aDefineClass.isExtend(bDefineClass.name())){
        return 1
    }else{
        return -1
    }
```
``````


4. 按字典升序

``````properties
# fields alphabetically ordered
field.order.with=groovy:```
    return a.name().compareTo(b.name())
```
``````

5. 按字典降序

``````properties
# fields descending alphabetically ordered
field.order.with=groovy:```
    return -a.name().compareTo(b.name())
```
``````

## demo

***在推荐配置中选中`Jackson_JsonPropertyOrder`***

***UserInfo.java***

```java
@JsonPropertyOrder(value = {"name", "birthDay"}, alphabetic = true)
public class UserInfo {

    private Long id;//用户id

    /**
     * @see com.itangcent.common.constant.UserType
     */
    private int type;//用户类型

    /**
     * @mock tangcent
     * @order 1
     */
    @NotBlank
    private String name;//用户名

    /**
     * 年龄
     *
     * @mock 1${digit}
     */
    @NotNull
    private Integer age;

    /**
     * @deprecated It's a secret
     */
    private Integer sex;

    //生日
    private LocalDate birthDay;

    //注册时间
    private LocalDateTime regtime;
}

```

### 解析为json5:

```json5
{
    "name": "",
    "birthDay": "", //生日
    "age": 0, //年龄
    "id": 0, //用户id
    "regtime": "", //注册时间
    "sex": 0, //「已废弃」It's a secret
    /**
     * 1 :管理员
     * 2 :成员
     * 3 :游客
     */
    "type": 0
}
```