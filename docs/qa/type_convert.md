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