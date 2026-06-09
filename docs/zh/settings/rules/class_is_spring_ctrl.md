# class.is.spring.ctrl

判断一个类是否为 Spring 控制器。

## 用法

```properties
class.is.spring.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController") || it.hasAnn("org.springframework.stereotype.Controller")
```
