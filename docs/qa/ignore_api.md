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