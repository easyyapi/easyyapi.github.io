# groovy本地扩展

## 介绍

- 针对极其特殊的情况, 无法使用简单配置实现需求时, 可以使用groovy扩展以获得极高的定制化功能
- 相对普通配置来说, 对于开发者有一定的技术要求,包括groovy以及当前插件的结构等都要有一定的了解
- [wiki](https://en.wikipedia.org/wiki/Apache_Groovy)
- [offical](http://groovy-lang.org/)
- [demo](https://github.com/Earth-1610/spring-demo/tree/feature/ext/.easyapi/ext)

## 使用步骤

- 在项目目录下创建 `/.easyapi/ext`
- 创建扩展文件 `${ActionName}Ext.groovy`<br>当前可支持的操作有:
  - `ApiCallAction`
  - `ApiDashBoardAction`
  - `YApiDashBoardAction`
  - `FieldsToJsonAction`
  - `MarkdownExportAction`
  - `PostmanExportAction`
  - `YapiExportAction`

- 在扩展文件中声明扩展类:
```groovy
class ActionNameExt implements ActionExt {

    void init(ActionContext.ActionContextBuilder builder) {
        //在这里通过`bind`注入定制化组件,实现需要的功能
        builder.bind(Xxx.class, KtHelper.INSTANCE.ktFunction({
            it.to(Yyy.class).in(com.google.inject.Singleton.class)
            return null
        }))
    }
}
```

### demo

- `YapiExportActionExt.groovy`
```groovy
import com.intellij.psi.*
import com.itangcent.common.model.Request
import com.itangcent.idea.plugin.api.export.ClassExporter
import com.itangcent.idea.plugin.api.export.SpringRequestClassExporter
import com.itangcent.idea.plugin.api.export.yapi.YapiClassExportRuleKeys
import com.itangcent.idea.plugin.api.export.yapi.YapiRequestKitKt
import com.itangcent.idea.plugin.script.ActionExt
import com.itangcent.idea.plugin.utils.KtHelper
import com.itangcent.intellij.context.ActionContext

import java.util.stream.Collectors
import java.util.stream.Stream

class YapiExportActionExt implements ActionExt {

    void init(ActionContext.ActionContextBuilder builder) {

        builder.bind(ClassExporter.class, KtHelper.INSTANCE.ktFunction({
            it.to(CustomClassExporter.class).in(com.google.inject.Singleton.class)
            return null
        }))

    }

    static class CustomClassExporter extends SpringRequestClassExporter {

        void processCompleted(PsiMethod method, Request request) {
            super.processCompleted(method, request)

            String tags = ruleComputer.computer(YapiClassExportRuleKeys.TAG, method)
            if (tags != null && !tags.isEmpty()) {
                YapiRequestKitKt.setTags(request, Stream.of(tags.split("\n"))
                        .map { it.trim() }
                        .filter { !it.isEmpty() }
                        .collect(Collectors.toList())
                )
            }

            String status = ruleComputer.computer(YapiClassExportRuleKeys.STATUS, method)
            logger.info(YapiRequestKitKt.class.toString())
            YapiRequestKitKt.setStatus(request, status)
        }
    }
}
```

## 特别注意

### 由于插件源码语言是kotlin,在groovy中无法使用一些语法糖

- kotlin中声明的扩展方法如

```kotlin
fun Doc.setTags(tags: List<String>?) {
    ...
}
```
在groovy中使用如下:

```groovy
YapiRequestKitKt.setTags(request,tags)
```