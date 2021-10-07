# Jackson

## JsonProperty&JsonIgnore

[推荐配置](https://github.com/tangcent/easy-yapi/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)中默认支持.

```properties
#Support for Jackson annotations
field.name=@com.fasterxml.jackson.annotation.JsonProperty#value
field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value
```

---

## JsonIgnoreProperties

[推荐配置](https://github.com/tangcent/easy-yapi/blob/master/idea-plugin/src/main/resources/.recommend.easy.api.config)中有提供选项，但默认未选中.

``````properties

#Support for Jackson annotation JsonIgnoreProperties

json.cache.disable=true
field.ignore=groovy:it.containingClass().annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")?.contains(it.name())
json.group=@com.fasterxml.jackson.annotation.JsonIgnoreProperties
field.parse.before[@com.fasterxml.jackson.annotation.JsonIgnoreProperties]=groovy:```
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
    for(property in properties){
        def path = fieldContext.property(property)
        session.set("json-ignore", path, true)
    }
```
field.parse.after[@com.fasterxml.jackson.annotation.JsonIgnoreProperties]=groovy:```
    def properties = it.annValue("com.fasterxml.jackson.annotation.JsonIgnoreProperties")
    for(property in properties){
        def path = fieldContext.property(property)
        session.remove("json-ignore", path)
    }
```
field.ignore=groovy:```
    return session.get("json-ignore", fieldContext.path())
```

``````