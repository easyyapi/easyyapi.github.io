# field.demo

> 字段示例信息, 作用于yapi内多处地方以及markdown/postman中展示json的地方

## demo

***配置如下:***

```properties
field.demo=#demo
```

***使用如下:*** 

```java
    /**
     * @demo tangcent
     */
    private String name;//用户名
```


---

## 通过字段名及类型等特征来配置`demo`规则

- 配置稍难, 零侵入
- 非常适合字段名定义很规范的项目
- 配置方式为: ```field.demo[field:path|type]=xxx```,参照下方示例.

```properties
#常见的响应mock
field.demo[field:c|int]=0
field.demo[field:code|int]=0
field.demo[field:status|int]=0
field.demo[field:ok|boolean]=true
field.demo[field:success|boolean]=true
field.demo[field:m|string]=ok
field.demo[field:msg|string]=ok
field.demo[field:message|string]=ok
field.demo[field:errMsg|string]=failed

#常见的分页mock
field.demo[field:*.p|int]=2
field.demo[field:*.l|int]=100
field.demo[field:*.t|int]=1000
field.demo[field:*.offset|int]=50
field.demo[field:*.page|int]=2
field.demo[field:*.pageIndex|int]=2
field.demo[field:*.pageSize|int]=100
field.demo[field:*.limit|int]=100
field.demo[field:*.total|int]=1000

# 整型的xxxTime mock为时间戳
field.demo[field:*Time|int]=1681649569869

#性别
field.demo[field:*.sex|int]=1
field.demo[field:*.sex|string]=男
field.demo[field:*.gender|int]=1
field.demo[field:*.gender|string]=女

#用户信息相关
field.demo[field:*.name|string]=tangcent
field.demo[field:*.age|int]=18
field.demo[field:*.phone|string]=18888888888
field.demo[field:*.mobile|string]=18888888888
field.demo[field:*Phone|string]=18888888888
field.demo[field:*Mobile|string]=18888888888
field.demo[field:*.provinceName|string]=广东省
field.demo[field:*ProvinceName|string]=广东省
field.demo[field:*.cityName|string]=深圳市
field.demo[field:*CityName|string]=深圳市
field.demo[field:*.districtName|string]=福田区
field.demo[field:*DistrictName|string]=福田区
field.demo[field:*.address]=福中三路市民中心C区

#链接
field.demo[field:*.url|string]=https://github.com/
field.demo[field:*.link|string]=https://github.com/
field.demo[field:*.linkUrl|string]=https://github.com/
field.demo[field:*Link|string]=https://github.com/

# integer和number更自然一些
field.demo[field:*Type|int]=1
field.demo[field:*Status|int]=1
field.demo[field:*.type|int]=1
field.demo[field:*.status|int]=1
field.demo[field:*|int]=9999
field.demo[field:*|number]=9999.99
```



