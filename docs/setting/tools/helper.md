# `helper`是提供的特殊帮助类(v1.6.1+)

---

# 主要方法

| 方法  |  返回值  |  描述  |  示例  |
| ------------ | ------------ | ------------ |------------ |
| findClass(str) | class | 获取类,类似Class.forName() | helper.findClass("java.lang.String")| 
| resolveLink(str) | class | 解析字符串中的`link` | helper.resolveLink("{@link java.lang.String}")| 
| resolveLinks(str) | array<class/method/field> | 解析字符串中的所有`link` | helper.resolveLink("{@link java.lang.String},{@link java.lang.Long}")|