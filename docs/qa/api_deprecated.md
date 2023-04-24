## 如何在API/文件夹的描述中说明API/文件夹被废弃了

*   默认推荐配置如下:

    ```properties
    method.doc[#deprecated]=groovy:"\n「deprecated」" + it.doc("deprecated")
    method.doc[@java.lang.Deprecated]=「deprecated」
    method.doc[@kotlin.Deprecated]=groovy:"\n「deprecated」" + it.ann("kotlin.Deprecated","message")

    method.doc[groovy:it.containingClass().hasDoc("deprecated")]=groovy:"\n「deprecated」" + it.containingClass().doc("deprecated")
    method.doc[groovy:it.containingClass().hasAnn("java.lang.Deprecated")]=「deprecated」
    method.doc[groovy:it.containingClass().hasAnn("kotlin.Deprecated")]=groovy:"\n「deprecated」 " + it.containingClass().ann("kotlin.Deprecated","message")

    ```

*  使用注解或者注释标记API废弃即可:

    ```java
    /**
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
    ```