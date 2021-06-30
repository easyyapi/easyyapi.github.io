# `Yapi` `mock`规则

- 默认对于枚举类型或注释里引用的枚举类型的字段，会`mock`为目标枚举值
- 有两种额外的配置方式，根据实际情况选择适合的方式配置

---

## 通过合适的注释关联`枚举`/`常量`

### 字段名与关联的枚举值字段名相同

```java
/**
* 用户类型
* @see UserType
*/
private Integer type;
```

***导出API结果为:***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| type | integer | 非必须 | | 用户类型 | 枚举: 1,2,3<br>枚举备注: 1 :管理员 2 :成员 3 :游客<br>mock: @pick([1,2,3]) |


### 字段名与关联的枚举值字段名不同

```java
/**
* 用户类型
* @see UserType#type
*/
private Integer userType;
```


***导出API结果为:***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| userType | integer | 非必须 | | 用户类型 | 枚举: 1,2,3<br>枚举备注: 1 :管理员 2 :成员 3 :游客<br>mock: @pick([1,2,3]) |


### 关联一个类中的所有常量

```java
/**
* 用户类型
* @see com.itangcent.common.constant.UserTypeConstant
*/
private Integer type;
```


***导出API结果为:***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| type | integer | 非必须 | | 用户类型 | 枚举: 1,2,3<br>枚举备注: 1 :管理员 2 :成员 3 :游客<br>mock: @pick([1,2,3]) |

### 关联一个类中的部分常量

```java
/**
* 用户类型
* @see com.itangcent.common.constant.UserTypeConstant#ADMIN
* @see com.itangcent.common.constant.UserTypeConstant#MEMBER
*/
private Integer type;
```

***导出API结果为:***

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| type | integer | 非必须 | | 用户类型 | 枚举: 1,2<br>枚举备注: 1 :管理员 2 :成员 <br>mock: @pick([1,2]) |


---

## 从代码中获取`mock`规则

- 配置灵活, 但有`代码/注释`侵入性
- 非常适合有校验框架的情况, 如`javax.validation`
- 参见:[field.mock](rules/field_mock.md)

---

## 通过字段名及类型等特征来配置`mock`规则

- 配置稍难, 零侵入
- 非常适合字段名定义很规范的项目
- 配置方式为: ```mock.[field|type]=@mock```,参见下方示例.

***一般先增加一些自定义mock规则***

```properties
## 增加自定义mock规则
#mockjs官方示例: http://mockjs.com/examples.html
#定义一些基础的规则
#中国手机号
phone=1@pick(["34","35","36","37","38","39","50","5","52","58","59","57","82","87","88","70","47","30","3","32","55","56","85","86","33","53","80","89"])@string("number", 8)
#毫秒时间戳
mtimestamp=@now('T')
#0-9
digit=@natural(0,9)
#小于1000的自然数
natural_lt_1000=@natural(0,1000)
#小数点后两位
float_with_two=@natural(0,10000).@natural(0,100)
#http url
http_url=@pick(["http","https"])://www.@domain()/@string('lower',1,8)?@string('lower',2,4)=@string('number',1,2)
#objectId 只是字符和位数，不满足具体协议
objectId=@string("0123456789abcdef",24,24)
```

***然后使用 [mockjs](http://mockjs.com/examples.html) 提供的规则与自定义的规则来定制最后输出到`YAPI`的`mock`信息***

```properties
#常见的响应mock
mock.[c|integer]=0
mock.[code|integer]=0
mock.[status|integer]=0
mock.[ok|boolean]=true
mock.[success|boolean]=true
mock.[m|string]=
mock.[msg|string]=
mock.[message|string]=
mock.[errMsg|string]=

#常见的分页mock
mock.[*.p|integer]=1
mock.[*.l|integer]=@pick(["10","15","100"])
mock.[*.t|integer]=@natural(0,1000)
mock.[*.offset|integer]=1
mock.[*.page|integer]=1
mock.[*.pageIndex|integer]=1
mock.[*.pageSize|integer]=@pick(["10","15","100"])
mock.[*.limit|integer]=@pick(["10","15","100"])
mock.[*.total|integer]=@natural(0,1000)

# 整型的xxxTime mock为时间戳
mock.[*Time|integer]=${mtimestamp}

#性别
mock.[*.sex|integer]=@natural(0,2)
mock.[*.sex|string]=@pick(["男","女"])
mock.[*.gender|integer]=@natural(0,2)
mock.[*.gender|string]=@pick(["男","女"])

#用户信息相关
mock.[*.phone|string]=${phone}
mock.[*.mobile|string]=${phone}
mock.[*Phone|string]=${phone}
mock.[*Mobile|string]=${phone}
mock.[*.provinceName|string]=@province
mock.[*ProvinceName|string]=@province
mock.[*.cityName|string]=@city
mock.[*CityName|string]=@city
mock.[*.districtName|string]=@county
mock.[*DistrictName|string]=@county
mock.[*.address]=@cword(2,3)路@natural(1,1500)号

#链接
mock.[*.url|string]=${http_url}
mock.[*.link|string]=${http_url}
mock.[*.linkUrl|string]=${http_url}
mock.[*Link|string]=${http_url}

# integer和number更自然一些
mock.[*Type|integer]=${digit}
mock.[*Status|integer]=${digit}
mock.[*.type|integer]=${digit}
mock.[*.status|integer]=${digit}
mock.[*|integer]=@natural(0,10000)
mock.[*|number]=@float(0,10000)

```



