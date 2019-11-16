
### 使用配置文件(当前项目)

 - 将配置文件添加到项目或模块根目录中

| 文件  |  类型  |  适用的操作  |
| ------------ | ------------ | ------------ |
| .easy.api.config | property | markdown/postman/yapi |
| .easy.api.yml/.easy.api.yaml | yml | markdown/postman/yapi |
| .postman.config | property | postman |
| .postman.yml/.postman.yaml | yml | postman |
| .yapi.config | property | yapi |
| .yapi.yml/.yapi.yaml | yml | yapi |

- 在配置文件中可以使用`properties.additional`来加载额外的配置文件:
```properties
properties.additional=$additional_properties_file_path$
```

### 配置后的目录结构如下:

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