# json.rule.convert

- 用于设置某些类型转换为其他类型处理，通常用于使用了Spring的自定义类型转换器的情况


### 默认推荐配置

```properties
#The ObjectId and Date are parsed as strings
json.rule.convert[org.bson.types.ObjectId]=java.lang.String
json.rule.convert[java.util.Date]=java.lang.String
json.rule.convert[java.sql.Timestamp]=java.lang.String
json.rule.convert[java.time.LocalDateTime]=java.lang.String
json.rule.convert[java.time.LocalDate]=java.lang.String

#resolve HttpEntity/RequestEntity/ResponseEntity
###set resolveProperty = false
json.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.HttpEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object
json.rule.convert[#regex:org.springframework.http.ResponseEntity<(.*?)>]=${1}
json.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object
###set resolveProperty = true
```