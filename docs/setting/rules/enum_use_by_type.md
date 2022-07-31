# enum.use.by.type

> 默认使用类型一致的字段, 优先级低于[enum.use.custom](enum_use_custom.md)


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

**推荐配置中有**

```properties
enum.use.by.type=true
```

- 上述注释将被处理为

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