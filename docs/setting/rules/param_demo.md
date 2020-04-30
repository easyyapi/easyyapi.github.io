# param.demo

- 参数示例信息

## demo

***配置如下:***

```properties
param.demo=groovy:it.method().doc("demo",it.name())
```

***使用如下:*** 

```java
    /**
     * @demo newName tangcent
     */
    @RequestMapping(value = "/set", method = RequestMethod.PUT)
    public Object set(@RequestParam String newName) {
                      ...
    }
```