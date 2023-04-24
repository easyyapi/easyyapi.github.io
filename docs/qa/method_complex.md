## 导出时出现`com.xxx.Xxx is to complex. Blocked cause by xxx reached xxx`, 如何处理

   - 检查错误信息中的类是否不应该出现在请求体/响应中, 可尝试做如下配置:
   ```
   # ignore field with type com.xxx.Xxx
   field.ignore=groovy:it.type().name()=="com.xxx.Xxx"
   ```
   
   - 如果此类确实字段繁多, 需要完全解析, 可通过配置放宽解析限制:
   ```
   max.deep=8
   max.elements=512
   ```

