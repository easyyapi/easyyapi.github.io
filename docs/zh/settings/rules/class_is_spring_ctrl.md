# class.is.spring.ctrl

Determine if a class is a Spring controller.

## Usage

```properties
class.is.spring.ctrl=groovy:it.hasAnn("org.springframework.web.bind.annotation.RestController") || it.hasAnn("org.springframework.stereotype.Controller")
```
