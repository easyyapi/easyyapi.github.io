
***此插件配置过于灵活, 以下均为示例, 需根据实际情况做合适的处理。***

---


## 如何添加配置文件

   * see [local-file-config](/setting/local-file-config.html)
   
---


## 如何组织API到指定文件夹

   * `module`用于分类api
        * 导出`postman`时,每个`module`将作为一个单独的文件夹
        * 导出`yapi`时,每个`module`需要配置相应的`token`,即对应一个`yapi`中的项目

   * 默认情况下取当前模块名(单模块项目取项目名)

   * 默认推荐配置:

   ```properties
   #find module from comment tag 
   module=#module
   ```
   
   * 在类上这样注释:

   ```java
   /**
    * Mock Apis
    *
    * @module mock
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   }
   ```

---


## 如何忽略API

   * 增加配置:

   ```properties
   #ignore class or method which has comment tag 'ignore' 
   ignore=#ignore
   ```
   
   * 在类上注释@ignore忽略当前类

   ```java
   /**
    * Mock Apis
    *
    * @ignore
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   }
   ```
   
   * 在方法上注释@ignore忽略当前API

   ```java
   /**
    * Mock Apis
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   
        /**
         * Mock String
         * @ignore
         */
        @GetMapping("/string")
        public String mockString() {
            return Result.success("mock string");
        }

   }
   ```

---


## 如何设置API/文件夹的名称/描述

 * 一般来说:

    ```java
    /**
     * 第一行注释作为文件夹的标题
     * 剩余行注释作为文件夹的描述
     */
    @RestController
    @RequestMapping(value = "mock")
    public class MockCtrl {
    
        /**
         * 第一行行注释作为API的标题
         * 剩余行注释作为API的描述
         */
        @GetMapping("/string")
        public String mockString() {
            return Result.success("mock string");
        }
    }
    ```
 
 * 特殊需求参见:[class.doc](/setting/rules/class_doc.html) | [method.doc](/setting/rules/method_doc.html) | [api.name](/setting/rules/api_name.html)

---

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

---


    
## 如何在API描述中声明API需要的权限(javax annotation security)

   * 可考虑增加如下配置:

   ```properties
   ## security description
   method.doc[@javax.annotation.security.RolesAllowed]=groovy:"require role:"+it.ann("javax.annotation.security.RolesAllowed")
   ```
   
   * 示例:

   ```java
   /**
    * 第一行注释作为文件夹的标题
    * 剩余行注释作为文件夹的描述
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   
       /**
        * 第一行行注释作为API的标题
        * 剩余行注释作为API的描述
        */
       @GetMapping("/string")
       @RolesAllowed("admin")
       public String mockString() {
           return Result.success("mock string");
       }
   }

   ```

---



## 如何在API描述中声明API需要的权限(spring security)

   * 可考虑增加如下配置:

   ```properties
   ## security description
   find_role_in_PreAuthorize=(function(exp){var str="";if(exp.indexOf("hasRole")!=-1){var roles=exp.match(/hasRole\\((.*?)\\)/);if(roles&&roles.length>1){str+="require role:"+roles[1];}};return str})
   method.doc[@org.springframework.security.access.prepost.PreAuthorize]=js:${find_role_in_PreAuthorize}(it.ann("org.springframework.security.access.prepost.PreAuthorize"))
   ```
   
   * 示例:

   ```java
   /**
    * 第一行注释作为文件夹的标题
    * 剩余行注释作为文件夹的描述
    */
   @RestController
   @RequestMapping(value = "mock")
   public class MockCtrl {
   
       /**
        * 第一行行注释作为API的标题
        * 剩余行注释作为API的描述
        */
       @GetMapping("/string")
       @PreAuthorize("hasRole('admin')")
       public String mockString() {
           return Result.success("mock string");
       }
   }

   ```

---


 
## 如何忽略某些字段

* 使用规则:[json.rule.field.ignore](/setting/rules/json_rule_field_ignore.md.html)

   * 忽略特定名称的字段:

   ```properties
   ## ignore field 'log'
   json.rule.field.ignore=log
   ```
   
   * 忽略特定类型的字段:

   ```properties
   ## ignore field 'log' typed xxx.xxx.Log
   json.rule.field.ignore=groovy:it.type().name()=="xxx.xxx.Log"
   ```
   
   * 忽略特定限定符的字段:

   ```properties
   #ignore transient field
   json.rule.field.ignore=groovy:it.hasModifier("transient")
   ```

---




## 如何将指定类型转换为另一种类型处理

   * 将`java.time.LocalDateTime`作为`yyyy-mm-dd`形式字符串处理

   ```properties
   #Resolve 'java.time.LocalDateTime' as 'java.lang.String'
   json.rule.convert[java.time.LocalDateTime]=java.lang.String
   json.rule.convert[java.time.LocalDate]=java.lang.String
   ```
   
   * 将`java.time.LocalDateTime`作为`timestamp`处理
   
   ```properties
   #Resolve 'java.time.LocalDateTime' as 'java.lang.Long'
   json.rule.convert[java.time.LocalDateTime]=java.lang.Long
   json.rule.convert[java.time.LocalDate]=java.lang.Long
   ```
   

## 部分接口可能有不同的返回

   * 可以使用[method.doc](/setting/rules/method_doc.html)将可能的返回放在方法备注中

   ***配置如下:***

   ```properties
   method.doc[#result]=groovy: it.docs("result").collect{helper.resolveLink(it)}.grep{it!=null}.collect{"可能的返回:\n\n```json\n"+it.toJson(true)+"\n```\n\n"}.join("\n")
   ```

   ***使用如下:***

   ```java
    /**
     * @result {@link UserInfo}
     * @result {@link Result<UserInfo>}
     */
    public Result mockString() {
        ...
    }
   ```


## 有的字段可能有不同类型的值

   * 可以使用[field.doc](/setting/rules/field_doc.html)将可能的类型值放在字段备注中

   ***配置如下:***

   ```properties
    field.doc[#maybe]=groovy:it.docs("maybe").collect{helper.resolveLink(it)}.collect{"可能是:\n\n```json\n" + it.toJson(true) +"\n```\n\n"}.join("\n")
   ```

   ***使用如下:***

   ```java
    /**
     * @maybe {@link UserInfo}
     * @maybe {@link java.lang.String}
     */
    public Object target;
   ```


## 如何开启javax_validation分组校验

   * 参见[javax_validation](/framwork/javax_validation.html),
   在 <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> ><kbd>Recommend</kbd> 中移除勾选`javax.validation`, 勾选`javax.validation(grouped)`

## 如何激活对com.fasterxml.jackson.annotation.JsonIgnoreProperties的支持

   * 在 <kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> ><kbd>Recommend</kbd> 中勾选`Jackson_JsonIgnoreProperties`