## 如何在API描述中声明API需要的权限(spring security)

   * 可考虑增加如下配置:

``````properties
## security description
doc.method[@org.springframework.security.access.prepost.PreAuthorize]=groovy:```
   def preAuthorize = it.ann("org.springframework.security.access.prepost.PreAuthorize")
   if(tool.nullOrBlank(preAuthorize)){
        return
   }
   def role = regex.getGroup1("hasRole\\('(.*?)'\\)",preAuthorize)
   return "require role: $role"
```
``````
   
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