# json.rule.enum.convert

- 用于设置枚举类型的转换
- 优先级低于[json.rule.convert](json_rule_convert.md)


**假定有如下枚举类** 

```java
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int type;
    private String desc;

    public int getType() {
        return type;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int type, String desc) {
        this.type = type;
        this.desc = desc;
    }
}
```

**对于如下字段**

```java
/**
* 用户类型
*/
private UserType type;
```

### 默认情况

- 默认将枚举类型转换为`String`处理,给出可用值为枚举中的实例名

- 上述字段将被处理为

```java
/**
* 用户类型
* @see UserType
*/
private String type;
```
- 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| type | string | 非必须 | | 用户类型 | 枚举: ADMIN,MEMBER,GUEST<br>枚举备注: ADMIN :管理员 MEMBER :成员 GUEST :游客<br>mock: @pick(["ADMIN","MEMBER","GUEST"]))

### 增加配置

- 做如下配置,将其转换为`int`处理,给出可用值为枚举中的`type`字段

```properties
json.rule.enum.convert[com.itangcent.common.constant.UserType]=~#type
```

- 则上述字段将被处理为

```java
/**
* 用户类型
* @see UserType#type
*/
private int type;
```

- 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| type | integer | 非必须 | | 用户类型 | 枚举: 1,2,3<br>枚举备注: 1 :管理员 2 :成员 3 :游客<br>mock: @pick([1,2,3])



### 统一处理

- 特殊的，声明如下接口:

```java
package com.itangcent.common.constant;

public interface TypeAble {
    int getType();
}
```

- 改造`UserType`,使其继承`TypeAble`

```java
public enum UserType implements TypeAble {
    ...
}
```

- 则可做如下配置,将所有继承`TypeAble`的类转换为`int`处理,给出可用值为枚举中的`type`字段

```properties
json.rule.enum.convert[groovy:it.isExtend("com.itangcent.common.constant.TypeAble")]=~#type
```
