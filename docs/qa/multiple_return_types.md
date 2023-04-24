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