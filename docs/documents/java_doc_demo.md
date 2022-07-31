
### api demo

```java

/**
 * 分类名称
 * 分类备注/描述
 *
 * @module 归属项目
 */
@RestController
@RequestMapping(value = "/pathOfCtrl")
public class MockCtrl {

    /**
    * api名称
    * api描述
    * @param param1 参数1的名称或描述
    * @param param2 可以用`@link`来表示当前参数的取值是某个枚举{@link some.enum.or.constant.class}
    * @param param3 当目标枚举字段与当前字段名不一致,额外指定{@link some.enum.or.constant.class#property1}
    * @return 响应描述
    */
    @RequestMapping(value = "/pathOfApi1")
    public Result methodName1(long param1,
                      @RequestParam String param2,
                      @RequestParam(required = false, defaultValue = "defaultValueOfParam3") String param3){
        ...
    }


    /**
    * 默认使用`application/x-www-form-urlencoded`,
    * 对于`@RequestBody`将使用`application/json`
    * 可以用注解`@Deprecated`来表示api废弃
    * 也可以用注释`@deprecated`
    *
    * @deprecated 改用{@link #methodName3(String)}
    */
    @Deprecated
    @RequestMapping(value = "/pathOfApi2")
    public Result methodName2(@RequestBody MockDtoOrVo jsonModel){
        ...
    }

    /**
    * 所有注释或者参数描述中都可以使用`@link`来引用另一个API
    * 例如:
    * 请先访问{@link #methodName4(String)}

    * 也可以使用`@see`来引用另一个API
    *
    * @param param1 参数1的名称或描述 可以从{@link #methodName5(String)}中获得
    * @see #methodName6(String)
    * @deprecated 改用{@link #methodName7(String)}
    */
    @Deprecated
    @RequestMapping(value = "/pathOfApi3")
    public Result methodName3(long param1){
        ...
    }

    ...
}
```

### model(dto/vo) demo

```java
public class MockDtoOrVo {

    /**
     * 字段注释
     */
    private Long field1;

    private Double field2;//注释也可以写在这

    /**
     * 使用@see来说明当前字段的取值是某个枚举
     * @see some.enum.or.constant.class
     */
    private int field3;

    /**
     * 当目标枚举字段与当前字段名不一致,额外指定
     * @see some.enum.or.constant.class#property1
     */
    private int field4;

    /**
     * 可以用注解`@Deprecated`来表示字段被废弃
     * 也可以用注释`@deprecated`
     * @deprecated It's a secret
     */
    @Deprecated
    private int field5;

    /**
     * 如果使用javax.validation的话
     * 可以使用@NotBlank/@NotNull表示字段必须
     */
    @NotBlank
    @NotNull
    private String field6;

    ...
}
```