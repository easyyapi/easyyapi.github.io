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