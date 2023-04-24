
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
 
 * 特殊需求参照:[class.doc](/setting/rules/class_doc.html) | [method.doc](/setting/rules/method_doc.html) | [api.name](/setting/rules/api_name.html)