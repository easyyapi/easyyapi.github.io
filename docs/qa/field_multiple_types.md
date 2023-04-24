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