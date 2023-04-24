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
