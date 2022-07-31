
# 使用配置文件(当前项目)

## 将配置文件添加到项目或模块根目录中

| 文件  |  类型  |  适用的操作  |
| ------------ | ------------ | ------------ |
| .easy.api.config | properties | markdown/postman/yapi/call |
| .easy.api.yml/.easy.api.yaml | yml | markdown/postman/yapi/call |
| .postman.config | properties | postman |
| .postman.yml/.postman.yaml | yml | postman |
| .yapi.config | properties | yapi |
| .yapi.yml/.yapi.yaml | yml | yapi |

## properties类型配置(推荐)

- 一般的配置是:`key=value`

- 简单的多行配置,以`\`结尾:
```
key=value\
    aaaa\
    bbb
key2=value2
```

- 复杂的多行配置,以\`\`\`结尾开启多行配置,以单独一行\`\`\`表示结束:
``````
key=groovy:```
if(condition){
    //some script
}
```
``````

- 带`filter`的配置:
```
key[filter]=value
```

- 注意`key[filter]=value`有可能解析错误,可以尝试切换成
```
key=groovy:if(filter)value
```

- 以下三条配置等价:
``````
#单行配置
http.call.before=groovy:logger.info("call:"+request.url())
#以\接新行
http.call.before=groovy:\
logger.info("call:"+request.url())
#以```包裹多行
http.call.before=groovy:```
logger.info("call:"+request.url())
```
``````

## yml/yaml (兼容)

- 使用`snakeyaml`解析

- ***参考:***
[baike](https://baike.baidu.com/item/YAML) | [wiki](https://en.wikipedia.org/wiki/YML)


## properties.additional

- 在配置文件中可以使用`properties.additional`来加载额外的配置文件:

```properties
properties.additional=$additional_properties_file_path$
```

- 常用于需要存放用户相关的配置

---

### 假设配置后的目录结构如下:

```
project-root
├── java(module1)
│   ├── common.iml
│   ├── pom.xml
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── **
│   │   │   │           └── **
│   │   │   │               └── **
│   │   │   │                   └── **.java
│   │   │   └── resources
│   │   └── test
│   │       └── java
│   └────.easy.api.config①
├── kotlin(module2)
│   ├── kotlin-demo.iml
│   ├── pom.xml
│   ├── src
│   │   ├── main
│   │   │   ├── kotlin
│   │   │   │   └── com
│   │   │   │       └── **
│   │   │   │           └── **
│   │   │   │               └── **
│   │   │   │                   └── **
│   │   │   │                       └── **.kt
│   │   │   └── resources
│   │   │       ├── application.yaml②
│   │   │       ├── static
│   │   │       └── templates
│   │   └── test
│   │       └── kotlin
│   └────.easy.api.yml③
├── springboot-demo(module3)
│   ├── pom.xml
│   ├── springboot-demo.iml
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── com
│       │   │       └── **
│       │   │           └── **
│       │   │               └── **
│       │   │                   └── **
│       │   │                       └── **
│       │   │                           └── **.java
│       │   └── resources
│       │       ├── application.properties④
│       │       ├── static
│       │       └── templates
│       └── test
├── springboot-webflux-demo(module4)
│   ├── pom.xml
│   ├── springboot-webflux-demo.iml
│   └── src
│       ├── main
│       │   ├── java
│       │   │   └── **
│       │   │       └── **
│       │   │           └── **
│       │   │               └── **
│       │   │                   └── **
│       │   │                       └── **.java
│       │   └── resources
│       │       └── application.yml⑤
│       └── test
└────.easy.api.config⑥
```

### 上述结构中:

- ①: 只对`java(module1)`生效
- ②: 如果开启了默认推荐配置的话,默认会加载,所以其中的参数可以在③中通过`{property}`来使用
- ③: 只对`kotlin(module2)`生效
- ④/⑤: 与②一样`application.properties/application.yml/application.yaml`都可以被加载
- ⑥: 对`java(module1)`/`kotlin(module2)`/`springboot-demo(module3)`/`springboot-webflux-demo(module4)`都生效
- ①/③/④/⑤/⑥均为可选配置. 一般来说尽量在项目根目录下创建配置文件(即⑥)来管理配置即可.