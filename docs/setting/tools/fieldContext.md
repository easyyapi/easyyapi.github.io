# `fieldContext`提供字段解析过程中的上下文

在解析复杂的嵌套类的时候，可以通过`fieldContext`获得当前字段在最终结果中的路径等信息。 

## 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| path() | string | 当前全路径 | fieldContext.path() |
| property("propertyName") | string | 给出指定字段的全路径 | fieldContext.property("xxx") |

---

## 示例

对于如下类:

```java
class A{
    B b;
}
class B{
    C c;
}
class C{
    String d;
    String e;
}

```
当解析到`d`字段时
- 通过`fieldContext.path()`可以得到`b.c`
- 通过`fieldContext.property("e")`可以得到`b.c.e`