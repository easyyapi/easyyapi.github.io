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