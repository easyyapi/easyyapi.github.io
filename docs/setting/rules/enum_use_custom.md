# enum.use.custom

- 用于设置使用`@see`枚举类型时的默认取值字段


**假定有如下枚举类** 

```java
public enum UserType {
    //管理员
    ADMIN(1, "管理员"),

    //成员
    MEMBER(2, "成员"),

    //游客
    GUEST(3, "游客");

    private int code;
    private String desc;

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

    UserType(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }
}
```

**对于如下字段**

```java
/**
* 用户类型
*
* @see UserType
*/
private int type;
```

### 默认情况

- 由于UserType中不存在字段type, 默认情况下这里的`@see UserType`会被忽略掉

### 增加配置

- 做如下配置,设置`@see UserType`时默认使用`code`字段作为取值

```properties
enum.use.custom[com.itangcent.common.constant.UserType]=code
```

- 则上述注释将等价于

```java
/**
* 用户类型
* @see UserType#code
*/
private int type;
```

- 导出API结果为:

| 名称 | 类型 | 是否必须 | 默认值 | 备注 | 其他信息 |
| --- | --- | --- | --- | --- | --- |
| type | integer | 非必须 | | 用户类型 | 枚举: 1,2,3<br>枚举备注: 1 :管理员 2 :成员 3 :游客<br>mock: @pick([1,2,3])



### 统一处理

- 特殊的, 声明如下接口:

```java
package com.itangcent.common.constant;

public interface BaseEnum {

    Long getCode();
}
```

- 改造`UserType`,使其继承`BaseEnum`

```java
public enum UserType implements BaseEnum {
    ...
}
```

- 则可做如下配置,将所有继承`BaseEnum`的类默认使用`code`字段作为取值

```properties
enum.use.custom[groovy:it.isExtend("com.itangcent.common.constant.BaseEnum")]=code
```
