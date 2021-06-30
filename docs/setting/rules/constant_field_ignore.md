# constant.field.ignore

- 忽略常量字段


### 默认推荐配置(有误,待修复)

```properties
#ignore serialVersionUID
constant.field.ignore=serialVersionUID
```

使用如下配置代替:

```properties
#ignore serialVersionUID
constant.field.ignore=groovy:it.name()=="serialVersionUID"
```

### demo

```java

/**
 * 用户类型
 */
public class UserTypeConstant implements Serializable {

    private static final long serialVersionUID = -4607862808303533196L;

    public static final int ADMIN = 1;//管理员
    public static final int MEMBER = 2;//成员
    public static final int GUEST = 3;//游客

}
```

### 对于如下注释

```java
@see com.itangcent.common.constant.UserTypeConstant
```
或者
```java
{@link com.itangcent.common.constant.UserTypeConstant}
```

### 将被解析为:

```
枚举: 1,2,3

枚举备注: 1 :管理员 2 :成员 3 :游客

mock: @pick(["1","2","3"])
```