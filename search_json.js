window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "Introduction",
      "content": "基于javadoc&KDoc&ScalaDoc解析API文档\n注意, 你可以在保持代码零侵入的情况下得到相当完整的api文档, 但是特殊的需求还是需要部分特殊的注释/注解配合\n与之相对的是, 你可以灵活的运用配置规则来适应你的项目特性以减少代码侵入.\n特殊声明: 由于scala插件中提供的openapi变化过于频繁, 不再作为默认支持选项. 需要在scala项目中使用的开发者可自行从easy-yapi/releases获得支持scala的插件包\n",
      "url": "/documents/index.html",
      "children": [
        {
          "title": "功能特性",
          "url": "/documents/index.html#功能特性",
          "content": "功能特性导出API文档\n在IDEA中直接发起API请求\n"
        },
        {
          "title": "支持项列表",
          "url": "/documents/index.html#支持项列表",
          "content": "支持项列表\n\n\n默认支持\n额外(配置)支持\n\n\n\n\n语言\njava, kotlin\nscala\n\n\nweb\nspring, feign, jaxrs (quarkus / jersey)\ndubbo\n\n\n导出到\nPostman, Yapi, Markdown\n-\n\n\n常用框架\njavax.validation, Jackson, Gson\nswagger\n\n\n"
        },
        {
          "title": "Community",
          "url": "/documents/index.html#community",
          "content": "Community帮助维护文档: easyyapi.com\n请将您的PR提交到dev分支\n讨论 新的功能 or提交 BUG: Issues\n开发 新的功能 or修复 BUG: PR\n维护推荐配置: .recommend.easy.api.config\n丰富demo: web-demo\n修复IDE兼容问题: intellij-kotlin\n"
        },
        {
          "title": "Contributors",
          "url": "/documents/index.html#contributors",
          "content": "Contributorstangcent\necho-layker\nzjz6b6\ngcdd1993\nMiZhuo\nHEYANGLI23\nvisionarygit\n"
        }
      ]
    },
    {
      "title": "安装",
      "content": "支持以下IDEIntelliJ IDEA 173+(2017.3+)\nIntelliJ IDEA Community Edition 173+(2017.3+)\n从IDEA仓库中安装Preferences(Settings) > Plugins > Browse repositories... > find\"EasyYapi\" > Install Plugin\n手动下载安装:下载插件 Jetbrains or Github -> Preferences(Settings) > Plugins > Install plugin from disk...\n重启 IDE.",
      "url": "/documents/installation.html",
      "children": []
    },
    {
      "title": "使用",
      "content": "支持以下使用方法\n打开项目中的包含api的文件或者在IDEA的左边项目文件区域选择文件或者文件夹,\n使用快捷键alt shift E(windows)/ctrl E(mac),\n然后选择要导出的API,选择导出渠道Yapi/Markdown/Postman,\n点击[✔]按钮或者按回车键完成导出\n\n\n打开项目中的包含api的文件或者在IDEA的左边项目文件区域选择文件或者文件夹,\n鼠标右键点击文件内容或文件夹, 选择ExportYapi/ExportPostman/ExportMarkdown\n导出该文件或文件夹中所有的api\n\n\n打开项目中的包含api的文件,\n右键文件内容选择Call,就可以发起对当前文件中的API的请求\n\n",
      "url": "/documents/use.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2yapi.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2postman.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export2markdown.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export_methodDoc.html",
      "children": [
        {
          "title": "导出普通java method文档",
          "url": "/documents/export_methodDoc.html#导出普通java-method文档",
          "content": "导出普通java method文档\n导出普通method的功能默认是关闭的 , 开启需要勾选:Preferences(Settings) > Other Settings > EasyApi > Support > methodDoc & generic, 参照:IDEA配置\n\n\n普通method支持导出到markdown\n\n\n为了兼容旧用户, 目前依然保留了导出到yapi的功能, 但不建议新用户采用\n\n\n如果希望导出rpc到yapi/postman, 参照: Generic\n\n相关规则\n\n    规则的key\n规则目标(上下文)\n版本\n规则描述\n\n\n\n\n☆mdoc.class.filter\nclass\nv0.9.5+\n选择哪些类可以导出方法文档(rpc)\n\n\n    mdoc.method.filter\nmethod\nv0.9.5+\n选择哪些方法可以导出方法文档(rpc)\n\n\n☆mdoc.method.path\nmethod\nv0.9.5+\n设置方法文档(rpc)的路径仅用于兼容旧的导出方式, 不建议使用\n\n\n    mdoc.method.http.method\nmethod\nv0.9.5+\n设置方法文档(rpc)HTTP请求方式仅用于兼容旧的导出方式, 不建议使用\n\n\n点击规则配置查看更多."
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/export_rpc.html",
      "children": [
        {
          "title": "导出rpc",
          "url": "/documents/export_rpc.html#导出rpc",
          "content": "导出rpc\n如果所使用的的rpc框架不基于http协议, 仅希望导出rpc到markdown参照:导出普通java method文档\n\n\n如果所使用的的rpc框架基于http协议, 可以通过配置来支持导出到postman/yapi/markdown参照:自定义框架\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/login_mode_yapi.html",
      "children": []
    },
    {
      "title": "进阶使用",
      "content": "yapi备注渲染: Yapi Render\n内置API调试工具: Call Api\n脚本执行器: Script Executor\n自定义框架: Generic\n",
      "url": "/documents/advanced_use.html",
      "children": []
    },
    {
      "title": "Yapi Render(v1.6.1+)",
      "content": "重要更新: 最新版本的插件已内嵌markdown渲染器，默认情况下无需任何额外配置即可正常使用。以下配置仅在您需要自定义渲染效果时才需要参考。\n\n目前yapi的open api更新接口并不会渲染接口备注信息, 如果接口备注信息中含有markdown内容, 需要配置markdown渲染器\n\n\n插件内置了一个简单的markdown渲染器, 如果对渲染效果不满意, 可以按照以下步骤配置自定义的markdown渲染器\n\n",
      "url": "/documents/yapi_render.html",
      "children": [
        {
          "title": "markdown渲染器",
          "url": "/documents/yapi_render.html#markdown渲染器",
          "content": "markdown渲染器注意: 由于插件已内嵌高质量的markdown渲染器，以下配置仅在您需要替换默认渲染器时才需要设置。大多数用户可以直接使用内嵌渲染器，无需任何额外配置。\n渲染器目前分为两种, 一种是本地渲染器, 一种是远程渲染器本地渲染器有三条可用的配置规则:markdown.render.shell:渲染执行的shell, 插件将需要渲染的markdown暂存到临时目录, 将文件绝对路径作为参数追加到此shell后.\n如果希望将绝对路径放在其他位置, 使用#fileName占位.\nmarkdown.render.work.dir: 执行渲染shell的工作文件夹\nmarkdown.render.timeout:渲染超时时间\n配置示例:markdown.render.shell=/usr/local/bin/node render.jsmarkdown.render.work.dir=/项目路径/yapi-markdown-render\nmarkdown.render.timeout=3000\n远程渲染器只需要配置远程服务地址即可:markdown.render.server:远程服务地址, 这个地址接受POSTHTTP请求\n配置示例:markdown.render.server=http://localhost:3000/render"
        },
        {
          "title": "目前可用渲染器:",
          "url": "/documents/yapi_render.html#目前可用渲染器",
          "content": "目前可用渲染器:node版markdown渲染器:yapi-markdown-render\n目前提供的渲染服务注意: 之前提供的渲染服务 http://www.itangcent.com/render 已经废弃，不再提供服务。请使用插件内嵌的渲染器或自行部署yapi-markdown-render。\n服务保证不以任何途径保存用户上传的内容,服务运行的代码始终与yapi-markdown-render主分支保持一致.\n不保证此服务长期稳定有效.请尽量自行部署yapi-markdown-render使用\n为防止服务被攻击/滥用,服务可能记录访问ip,亦有可能将异常ip加入黑名单.如有顾虑,请自行部署.\n"
        }
      ]
    },
    {
      "title": "Call API - IDE 内置 API 调试工具",
      "content": "",
      "url": "/documents/call.html",
      "children": [
        {
          "title": "功能简介",
          "url": "/documents/call.html#功能简介",
          "content": "功能简介Call API 是一个轻量级的 API 调试工具，直接集成在 IDE 中，让您无需切换到外部应用即可快速测试和调试 API。它提供了简洁的界面和便捷的操作流程，特别适合开发过程中的日常 API 调试需求。适用场景：日常开发中的快速 API 测试和调试\n优势：无需切换到外部工具，直接在 IDE 中完成调试\n定位：针对开发流程中的快速验证；对于需要更复杂测试场景，可考虑使用 导出到 Postman 功能\n"
        },
        {
          "title": "使用方法",
          "url": "/documents/call.html#使用方法",
          "content": "使用方法打开项目中包含 API 的文件\n右键点击文件内容，选择 Call Api\n在API窗口中编辑请求参数、发送 API 请求\n"
        },
        {
          "title": "功能特点",
          "url": "/documents/call.html#功能特点",
          "content": "功能特点自动登录：通过 http.call.before 规则配置实现自动登录\n响应处理：通过 http.call.after 规则配置实现响应数据的后处理\n无缝集成：与 IDE 完美集成，提供流畅的开发体验\n"
        },
        {
          "title": "使用建议",
          "url": "/documents/call.html#使用建议",
          "content": "使用建议适合开发过程中需要快速验证 API 响应的场景\n对于需要保存测试用例、创建测试集合或构建复杂测试流程的场景，可使用 API 导出功能\n配合 规则配置 使用，可以实现自动化的测试流程和数据处理\n"
        },
        {
          "title": "Call 相关规则配置",
          "url": "/documents/call.html#call-相关规则配置",
          "content": "Call 相关规则配置\n\n规则的 key\n规则目标(上下文)\n版本\n规则描述\n\n\n\n\nhttp.call.before\nrequest\nv1.9.0+\nHTTP 请求前回调，可用于自动登录、添加通用请求头等\n\n\nhttp.call.after\nrequest&response\nv1.9.0+\nHTTP 请求后回调，可用于响应数据处理、日志记录等\n\n\n点击 规则配置 查看更多配置选项。"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/script_executor.html",
      "children": []
    },
    {
      "title": "Generic(自定义框架)",
      "content": "插件可以通过配置来支持自定义web框架, 步骤如下:启用generic\n配置generic相关配置\nGeneric相关规则\n\n    规则的key\n规则目标(上下文)\n版本\n规则描述\n\n\n\n\n    generic.class.has.api\nclass\nv2.2.1+\n判断一个类是否有API\n\n\n    generic.path\nclass/method\nv2.2.1+\n获取类/方法上的http路径\n\n\n    generic.http.method\nclass/method\nv2.2.1+\n获取类/方法上的httpMethod\n\n\n    generic.method.has.api\nclass\nv2.2.1+\n判断一个方法是否有API\n\n\n    generic.param.name\nparam\nv2.2.1+\n获取一个参数的名称\n\n\n    generic.param.as.json.body\nparam\nv2.2.1+\n判断一个参数是否应该处理为JsonBody\n\n\n    generic.param.as.form.body\nparam\nv2.2.1+\n判断一个参数是否应该处理为表单\n\n\n    generic.param.as.path.var\nparam\nv2.2.1+\n判断一个参数是否应该处理为url路径参数\n\n\n    generic.param.path.var\nparam\nv2.2.1+\n获取一个参数作为url路径参数的名称\n\n\n    generic.param.as.cookie\nparam\nv2.2.1+\n判断一个参数是否应该处理为Cookie\n\n\n    generic.param.cookie\nparam\nv2.2.1+\n获取一个参数作为Cookie的名称\n\n\n    generic.param.cookie.value\nparam\nv2.2.1+\n获取一个参数作为Cookie的值\n\n\n    generic.param.header\nparam\nv2.2.1+\n获取一个参数作为Header的内容\n\n\n以下是spring框架的等价generic配置# generic.class.has.apigeneric.class.has.api=@org.springframework.stereotype.Controller\ngeneric.class.has.api=@org.springframework.web.bind.annotation.RestController\n\n# generic.path\ngeneric.path[@org.springframework.web.bind.annotation.RequestMapping]=@org.springframework.web.bind.annotation.RequestMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.RequestMapping]=@org.springframework.web.bind.annotation.RequestMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.GetMapping]=@org.springframework.web.bind.annotation.GetMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.GetMapping]=@org.springframework.web.bind.annotation.GetMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.PostMapping]=@org.springframework.web.bind.annotation.PostMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.PostMapping]=@org.springframework.web.bind.annotation.PostMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.PutMapping]=@org.springframework.web.bind.annotation.PutMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.PutMapping]=@org.springframework.web.bind.annotation.PutMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.DeleteMapping]=@org.springframework.web.bind.annotation.DeleteMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.DeleteMapping]=@org.springframework.web.bind.annotation.DeleteMapping#path\ngeneric.path[@org.springframework.web.bind.annotation.PatchMapping]=@org.springframework.web.bind.annotation.PatchMapping#value\ngeneric.path[@org.springframework.web.bind.annotation.PatchMapping]=@org.springframework.web.bind.annotation.PatchMapping#path\n\n# generic.http.method\ngeneric.http.method[@org.springframework.web.bind.annotation.RequestMapping]=@org.springframework.web.bind.annotation.RequestMapping#method\ngeneric.http.method[@org.springframework.web.bind.annotation.GetMapping]=GET\ngeneric.http.method[@org.springframework.web.bind.annotation.PostMapping]=POST\ngeneric.http.method[@org.springframework.web.bind.annotation.PutMapping]=PUT\ngeneric.http.method[@org.springframework.web.bind.annotation.DeleteMapping]=DELETE\ngeneric.http.method[@org.springframework.web.bind.annotation.PatchMapping]=PATCH\n\n# generic.method.has.api\ngeneric.method.has.api=@org.springframework.web.bind.annotation.RequestMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.GetMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.PostMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.PutMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.DeleteMapping\ngeneric.method.has.api=@org.springframework.web.bind.annotation.PatchMapping\n\n# generic.param.as.json.body\ngeneric.param.as.json.body=@org.springframework.web.bind.annotation.RequestBody\n\n# generic.param.as.form.body\ngeneric.param.as.form.body=@org.springframework.web.bind.annotation.ModelAttribute\n\n# generic.param.as.path.var\ngeneric.param.as.path.var=@org.springframework.web.bind.annotation.PathVariable\n\n# generic.param.path.var\ngeneric.param.path.var=@org.springframework.web.bind.annotation.PathVariable#value\ngeneric.param.path.var=@org.springframework.web.bind.annotation.PathVariable#name\n\n# generic.param.as.cookie\ngeneric.param.as.cookie=@org.springframework.web.bind.annotation.CookieValue\n# generic.param.cookie\ngeneric.param.cookie=@org.springframework.web.bind.annotation.CookieValue#value\ngeneric.param.cookie=@org.springframework.web.bind.annotation.CookieValue#name\n# generic.param.cookie.value\ngeneric.param.cookie=@org.springframework.web.bind.annotation.CookieValue#defaultValue\n\n# generic.param.name\ngeneric.param.name=@org.springframework.web.bind.annotation.RequestParam#value\ngeneric.param.name=@org.springframework.web.bind.annotation.RequestParam#name\n\n# generic.param.header\ngeneric.param.header[@org.springframework.web.bind.annotation.RequestHeader]=groovy:```\ndef headerAnn = it.annMap(\"org.springframework.web.bind.annotation.RequestHeader\")\ndef header = [:]\nif(headerAnn.containsKey(\"name\")){\n    header[\"name\"] = headerAnn[\"name\"]\n}\nif(headerAnn.containsKey(\"value\")){\n    header[\"name\"] = headerAnn[\"value\"]\n}\nif(headerAnn.containsKey(\"defaultValue\")){\n    header[\"example\"] = headerAnn[\"defaultValue\"]\n}\nif(headerAnn.containsKey(\"required\")){\n    header[\"required\"] = headerAnn[\"required\"]\n}\nreturn tool.toJson(header)\n```\n\n# param.required\nparam.required=@org.springframework.web.bind.annotation.RequestParam#required\n",
      "url": "/documents/generic.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/docs.html",
      "children": [
        {
          "title": "Javadoc",
          "url": "/documents/docs.html#javadoc",
          "content": "Javadocwiki\noracle\nbaike\n"
        },
        {
          "title": "KDoc",
          "url": "/documents/docs.html#kdoc",
          "content": "KDockotlin-doc\n"
        },
        {
          "title": "ScalaDoc",
          "url": "/documents/docs.html#scaladoc",
          "content": "ScalaDocscaladoc\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/java_doc_demo.html",
      "children": [
        {
          "title": "api demo",
          "url": "/documents/java_doc_demo.html#api-demo",
          "content": "api demo/**\n * 分类名称\n * 分类备注/描述\n *\n * @module 归属项目\n */\n@RestController\n@RequestMapping(value = \"/pathOfCtrl\")\npublic class MockCtrl {\n\n    /**\n    * api名称\n    * api描述\n    * @param param1 参数1的名称或描述\n    * @param param2 可以用`@link`来表示当前参数的取值是某个枚举{@link some.enum.or.constant.class}\n    * @param param3 当目标枚举字段与当前字段名不一致,额外指定{@link some.enum.or.constant.class#property1}\n    * @return 响应描述\n    */\n    @RequestMapping(value = \"/pathOfApi1\")\n    public Result methodName1(long param1,\n                      @RequestParam String param2,\n                      @RequestParam(required = false, defaultValue = \"defaultValueOfParam3\") String param3){\n        ...\n    }\n\n\n    /**\n    * 默认使用`application/x-www-form-urlencoded`,\n    * 对于`@RequestBody`将使用`application/json`\n    * 可以用注解`@Deprecated`来表示api废弃\n    * 也可以用注释`@deprecated`\n    *\n    * @deprecated 改用{@link #methodName3(String)}\n    */\n    @Deprecated\n    @RequestMapping(value = \"/pathOfApi2\")\n    public Result methodName2(@RequestBody MockDtoOrVo jsonModel){\n        ...\n    }\n\n    /**\n    * 所有注释或者参数描述中都可以使用`@link`来引用另一个API\n    * 例如:\n    * 请先访问{@link #methodName4(String)}\n\n    * 也可以使用`@see`来引用另一个API\n    *\n    * @param param1 参数1的名称或描述 可以从{@link #methodName5(String)}中获得\n    * @see #methodName6(String)\n    * @deprecated 改用{@link #methodName7(String)}\n    */\n    @Deprecated\n    @RequestMapping(value = \"/pathOfApi3\")\n    public Result methodName3(long param1){\n        ...\n    }\n\n    ...\n}\n"
        },
        {
          "title": "model(dto/vo) demo",
          "url": "/documents/java_doc_demo.html#modeldtovo-demo",
          "content": "model(dto/vo) demopublic class MockDtoOrVo {\n    /**\n     * 字段注释\n     */\n    private Long field1;\n\n    private Double field2;//注释也可以写在这\n\n    /**\n     * 使用@see来说明当前字段的取值是某个枚举\n     * @see some.enum.or.constant.class\n     */\n    private int field3;\n\n    /**\n     * 当目标枚举字段与当前字段名不一致,额外指定\n     * @see some.enum.or.constant.class#property1\n     */\n    private int field4;\n\n    /**\n     * 可以用注解`@Deprecated`来表示字段被废弃\n     * 也可以用注释`@deprecated`\n     * @deprecated It's a secret\n     */\n    @Deprecated\n    private int field5;\n\n    /**\n     * 如果使用javax.validation的话\n     * 可以使用@NotBlank/@NotNull表示字段必须\n     */\n    @NotBlank\n    @NotNull\n    private String field6;\n\n    ...\n}\n"
        }
      ]
    },
    {
      "title": "Plugin Knowledge Base",
      "content": "This document contains core knowledge about the EasyYapi plugin to assist AI systems in understanding and using the plugin.",
      "url": "/documents/knowledge-base.html",
      "children": [
        {
          "title": "Plugin Overview",
          "url": "/documents/knowledge-base.html#plugin-overview",
          "content": "Plugin OverviewEasyYapi is an IntelliJ platform plugin designed to simplify API documentation generation and management. It supports exporting API interfaces from Java/Kotlin projects to various formats, including YApi, Postman, and Markdown."
        },
        {
          "title": "Rule Writing Guidelines",
          "url": "/documents/knowledge-base.html#rule-writing-guidelines",
          "content": "Rule Writing Guidelines"
        },
        {
          "title": "Simple Rules",
          "url": "/documents/knowledge-base.html#rule-writing-guidelines-simple-rules",
          "content": "Simple RulesRule Types and SyntaxThere are two main types of rules based on their return values:\nBoolean Rules (return true/false):\n\nUsed for decisions like whether to do something or not, whether to filter or not\nBasic syntax options:\n\n#xxx - Check if tag 'xxx' exists in comments\n@xxx - Check if annotation 'xxx' exists\n\n\nAdditional operators:\n\n! - Negate the result of a rule (e.g., !@Deprecated checks if annotation does NOT exist)\n\n\n\n\n\nString/Text Rules (return text content):\n\nUsed for getting content like API names, field descriptions, etc.\nBasic syntax options:\n\n#xxx - Get description from tag 'xxx' in comments\n@xxx - Get the 'value' attribute from annotation 'xxx'\n@xxx#yyy - Get the 'yyy' attribute from annotation 'xxx'\n\n\nAdditional operators:\n\n~ - Append a suffix to the result (e.g., ~suffix will append \"suffix\" to the result)\n\n\n\n\nExamplesBoolean Rule Examples:/** * @ignore\n */\npublic class Example {\n    // Use #ignore to check if @ignore tag exists\n    // Returns: true\n    \n    // Use !#ignore to check if @ignore tag does NOT exist\n    // Returns: false\n}\n\n@Deprecated\npublic class Example {\n    // Use @Deprecated to check if @Deprecated annotation exists\n    // Returns: true\n    \n    // Use !@Deprecated to check if @Deprecated annotation does NOT exist\n    // Returns: false\n}\nString Rule Examples:/** * @description This is an example API\n */\n@ApiOperation(value = \"Example API\", notes = \"Detailed notes\")\npublic class Example {\n    // Use #description to get \"This is an example API\"\n    // Use @ApiOperation to get \"Example API\" (default value attribute)\n    // Use @ApiOperation#notes to get \"Detailed notes\"\n    // Use ~\" (v1)\" to append \" (v1)\" to any result\n    // e.g., \"#description~\" (v1)\" would return \"This is an example API (v1)\"\n}\n"
        },
        {
          "title": "Advanced Script Rules",
          "url": "/documents/knowledge-base.html#rule-writing-guidelines-advanced-script-rules",
          "content": "Advanced Script RulesGroovy RulesGroovy scripts can be specified in two formats:Single line:\nrule=groovy:groovyScriptMulti-line:\nrule=groovy:```def result = someOperation()\nif (result) {\n    return \"success\"\n} else {\n    return \"failure\"\n}\n```\n"
        },
        {
          "title": "AI Assistant Guidelines",
          "url": "/documents/knowledge-base.html#ai-assistant-guidelines",
          "content": "AI Assistant GuidelinesWhen providing assistance for EasyYapi plugin questions, follow this structured approach:"
        },
        {
          "title": "1. Identify Applicable Rules",
          "url": "/documents/knowledge-base.html#ai-assistant-guidelines-1.-identify-applicable-rules",
          "content": "1. Identify Applicable RulesDetermine which EasyYapi rule(s) would address the user's needs\nReview the rule documentation to understand its purpose, context, and return type\nConsider possible combinations of rules if the requirement is complex\n"
        },
        {
          "title": "2. Analyze Code Context and Framework Usage",
          "url": "/documents/knowledge-base.html#ai-assistant-guidelines-2.-analyze-code-context-and-framework-usage",
          "content": "2. Analyze Code Context and Framework UsageAsk the user about existing frameworks in their project that might already provide necessary annotations\nLook for existing patterns in the user's code that can be leveraged:\n\nJavaDoc comments (@tag style)\nAnnotations from common frameworks (Spring, Jackson, Swagger, etc.)\nMethod/class naming conventions\nStructure of existing models/controllers\n\n\n"
        },
        {
          "title": "3. Prioritize Solutions (In Order of Preference)",
          "url": "/documents/knowledge-base.html#ai-assistant-guidelines-3.-prioritize-solutions-in-order-of-preference",
          "content": "3. Prioritize Solutions (In Order of Preference)\nFirst Option: Leverage existing frameworks\n# Example: If user has Jackson in their project\nfield.ignore=@com.fasterxml.jackson.annotation.JsonIgnore\n\n\n\nSecond Option: Use JavaDoc tags (preferred over custom annotations)\n# Example: Using JavaDoc tags\nfield.ignore=#ignore\n\n\n\nThird Option: Ask if user has any custom annotations for the purpose\n# Example: If user has custom annotations\nfield.ignore=@com.example.IgnoreField\n\n\n\nLast Option: Suggest adding one of the above approaches\n\n"
        },
        {
          "title": "4. Demonstrate Implementation with Examples",
          "url": "/documents/knowledge-base.html#ai-assistant-guidelines-4.-demonstrate-implementation-with-examples",
          "content": "4. Demonstrate Implementation with ExamplesShow complete examples with:\n\nConfiguration in .properties format\nSample Java/Kotlin code showing how to apply the solution\nExplanation of how the rule processes the code\n\n\n"
        },
        {
          "title": "5. Provide Framework-Specific Examples",
          "url": "/documents/knowledge-base.html#ai-assistant-guidelines-5.-provide-framework-specific-examples",
          "content": "5. Provide Framework-Specific ExamplesFor common tasks, demonstrate solutions using popular frameworks:Field Ignoring Example:# For Jackson usersfield.ignore=@com.fasterxml.jackson.annotation.JsonIgnore\n\n# For Spring users\nfield.ignore=@org.springframework.data.annotation.Transient\n\n# For Gson users\nfield.ignore=@com.google.gson.annotations.Expose#serialize[false]\n\n# Framework-agnostic solution (JavaDoc)\nfield.ignore=#ignore\n\n# By field name (ignores all fields named 'id' across all classes)\nfield.ignore=id\n\n# By qualified field name (ignores only 'id' field in specific class)\nfield.ignore=com.xxx.Xxxx#id\n"
        },
        {
          "title": "6. Offer Advanced Options for Complex Requirements",
          "url": "/documents/knowledge-base.html#ai-assistant-guidelines-6.-offer-advanced-options-for-complex-requirements",
          "content": "6. Offer Advanced Options for Complex RequirementsSuggest Groovy scripts for requirements that can't be solved by simple rules\nProvide sample code with explanations\n"
        },
        {
          "title": "Example Dialogue",
          "url": "/documents/knowledge-base.html#example-dialogue",
          "content": "Example DialogueUser: \"How can I ignore specific fields from appearing in my API documentation?\"AI Response:\"I can help you configure field ignoring in EasyYapi.First, are you using any frameworks like Jackson, Gson, or Spring in your project? This could help us leverage existing annotations."
        },
        {
          "title": "If using Jackson:",
          "url": "/documents/knowledge-base.html#example-dialogue-if-using-jackson",
          "content": "If using Jackson:# Leverage existing Jackson annotationsfield.ignore=@com.fasterxml.jackson.annotation.JsonIgnore\n"
        },
        {
          "title": "If not using any framework:",
          "url": "/documents/knowledge-base.html#example-dialogue-if-not-using-any-framework",
          "content": "If not using any framework:# Simple JavaDoc tag approachfield.ignore=#ignore\n"
        },
        {
          "title": "Example usage with JavaDoc tags:",
          "url": "/documents/knowledge-base.html#example-dialogue-example-usage-with-javadoc-tags",
          "content": "Example usage with JavaDoc tags:public class User {    private String username;\n    \n    /**\n     * @ignore\n     */\n    private String password;\n    \n    // Other fields and methods\n}\nThis configuration will prevent the password field from appearing in your API documentation while keeping the implementation simple with just JavaDoc comments.Would you like to know about more advanced configurations for field ignoring?\""
        },
        {
          "title": "Rule Reference",
          "url": "/documents/knowledge-base.html#rule-reference",
          "content": "Rule Reference"
        },
        {
          "title": "API Rules",
          "url": "/documents/knowledge-base.html#rule-reference-api-rules",
          "content": "API Rulesapi.nameRule Key: api.name\nPurpose: Sets the API name for documentation\nContext: Method level, Class level\nReturn Type: String\napi.tagRule Key: api.tag\nPurpose: Marks interface tags\nContext: Method level\nReturn Type: String\napi.openRule Key: api.open\nPurpose: Marks whether the interface is public\nContext: Method level\nReturn Type: Boolean\napi.statusRule Key: api.status\nPurpose: Marks interface status (should return done/undone)\nContext: Method level\nReturn Type: String (must be either \"done\" or \"undone\")\n"
        },
        {
          "title": "Class Rules",
          "url": "/documents/knowledge-base.html#rule-reference-class-rules",
          "content": "Class Rulesclass.docRule Key: class.doc\nPurpose: Additional comments on the class\nContext: Class level\nReturn Type: String\nclass.is.ctrlRule Key: class.is.ctrl\nPurpose: Allows exporting APIs from specified classes\nContext: Method level\nReturn Type: Boolean\nclass.prefix.pathRule Key: class.prefix.path\nPurpose: Sets API request prefix\nContext: Class level\nReturn Type: String\n"
        },
        {
          "title": "Field Rules",
          "url": "/documents/knowledge-base.html#rule-reference-field-rules",
          "content": "Field Rulesfield.docRule Key: field.doc\nPurpose: Additional documentation for fields\nContext: Field level\nReturn Type: String\nfield.ignoreRule Key: field.ignore\nPurpose: Ignores fields (prevents them from appearing in JSON or being required in requests)\nContext: Field level\nReturn Type: Boolean\nfield.mockRule Key: field.mock\nPurpose: Sets mock data for fields\nContext: Field level\nReturn Type: String\nfield.nameRule Key: field.name\nPurpose: Sets field name\nContext: Field level\nReturn Type: String\nfield.requiredRule Key: field.required\nPurpose: Marks field as required\nContext: Field level\nReturn Type: Boolean\nfield.advancedRule Key: field.advanced\nPurpose: Advanced field configuration\nContext: Field level\nReturn Type: String\nfield.default.valueRule Key: field.default.value\nPurpose: Sets default value for fields\nContext: Field level\nReturn Type: String\nfield.demoRule Key: field.demo\nPurpose: Sets demo value for fields\nContext: Field level\nReturn Type: String\nfield.orderRule Key: field.order\nPurpose: Sets field order in documentation\nContext: Field level\nReturn Type: Integer\nfield.order.withRule Key: field.order.with\nPurpose: Sets field order with specific grouping\nContext: Field level\nReturn Type: Integer\nfield.typeRule Key: field.type\nPurpose: Sets field type in documentation\nContext: Field level\nReturn Type: String\n"
        },
        {
          "title": "Method Rules",
          "url": "/documents/knowledge-base.html#rule-reference-method-rules",
          "content": "Method Rulesmethod.docRule Key: method.doc\nPurpose: Additional documentation for methods\nContext: Method level\nReturn Type: String\nmethod.content.typeRule Key: method.content.type\nPurpose: Sets content type for methods\nContext: Method level\nReturn Type: String\nmethod.default.http.methodRule Key: method.default.http.method\nPurpose: Sets default HTTP method\nContext: Method level\nReturn Type: String (HTTP method name: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD)\nmethod.additional.headerRule Key: method.additional.header\nPurpose: Adds additional headers to the request\nContext: Method level\nReturn Type: String (JSON format: {name: \"header name\", value: \"\", desc: \"\", required: false, demo: \"\"})\nmethod.additional.paramRule Key: method.additional.param\nPurpose: Adds additional parameters to the request\nContext: Method level\nReturn Type: String (JSON format: {name: \"param name\", value: \"\", desc: \"\", required: false, demo: \"\"})\nmethod.returnRule Key: method.return\nPurpose: Sets return type for methods\nContext: Method level\nReturn Type: String\nmethod.return.mainRule Key: method.return.main\nPurpose: Sets main return type for methods\nContext: Method level\nReturn Type: String\n"
        },
        {
          "title": "Parameter Rules",
          "url": "/documents/knowledge-base.html#rule-reference-parameter-rules",
          "content": "Parameter Rulesparam.default.valueRule Key: param.default.value\nPurpose: Sets default value for parameters\nContext: Parameter level\nReturn Type: String\nparam.demoRule Key: param.demo\nPurpose: Sets demo value for parameters\nContext: Parameter level\nReturn Type: String\nparam.docRule Key: param.doc\nPurpose: Additional documentation for parameters\nContext: Parameter level\nReturn Type: String\nparam.http.typeRule Key: param.http.type\nPurpose: Sets HTTP type for parameters\nContext: Parameter level\nReturn Type: String\nparam.ignoreRule Key: param.ignore\nPurpose: Ignores parameters in documentation\nContext: Parameter level\nReturn Type: Boolean\nparam.requiredRule Key: param.required\nPurpose: Marks parameters as required\nContext: Parameter level\nReturn Type: Boolean\n"
        },
        {
          "title": "JSON Rules",
          "url": "/documents/knowledge-base.html#rule-reference-json-rules",
          "content": "JSON Rulesjson.rule.convertRule Key: json.rule.convert\nPurpose: Sets JSON conversion rules\nContext: Global\nReturn Type: String\njson.rule.enum.convertRule Key: json.rule.enum.convert\nPurpose: Sets enum conversion rules for how enum types should be converted in JSON. This rule has lower priority than json.rule.convert.\nContext: Global\nReturn Type: String (Format: ~#fieldName where fieldName is the enum field to use for conversion)\njson.rule.field.ignoreRule Key: json.rule.field.ignore\nPurpose: Ignores fields in JSON output (deprecated, use field.ignore instead)\nContext: Field level\nReturn Type: Boolean\njson.rule.field.nameRule Key: json.rule.field.name\nPurpose: Sets field name for JSON output\nContext: Field level\nReturn Type: String\n"
        },
        {
          "title": "Enum Rules",
          "url": "/documents/knowledge-base.html#rule-reference-enum-rules",
          "content": "Enum Rulesenum.use.by.typeRule Key: enum.use.by.type\nPurpose: Automatically uses fields of the same type when a field references an enum\nContext: Global\nReturn Type: Boolean\nenum.use.customRule Key: enum.use.custom\nPurpose: Customizes which field to use from enum types\nContext: Global\nReturn Type: String (name of the field from enum types to use for JSON conversion)\nenum.use.nameRule Key: enum.use.name\nPurpose: Uses enum name value in JSON\nContext: Global\nReturn Type: Boolean\nenum.use.ordinalRule Key: enum.use.ordinal\nPurpose: Uses enum ordinal value in JSON\nContext: Global\nReturn Type: Boolean\n"
        },
        {
          "title": "Path Rules",
          "url": "/documents/knowledge-base.html#rule-reference-path-rules",
          "content": "Path Rulespath.multiRule Key: path.multi\nPurpose: Sets multiple path handling\nContext: Global\nReturn Type: String\n"
        },
        {
          "title": "Module Rules",
          "url": "/documents/knowledge-base.html#rule-reference-module-rules",
          "content": "Module RulesmoduleRule Key: module\nPurpose: Sets module configuration\nContext: Global\nReturn Type: String\n"
        },
        {
          "title": "Documentation Rules",
          "url": "/documents/knowledge-base.html#rule-reference-documentation-rules",
          "content": "Documentation Rulesfolder.nameRule Key: folder.name\nPurpose: Sets folder name for documentation\nContext: Global\nReturn Type: String\nignoreRule Key: ignore\nPurpose: Sets global ignore rules\nContext: Global\nReturn Type: Boolean\nmdoc.class.filterRule Key: mdoc.class.filter\nPurpose: Sets class filtering rules for documentation\nContext: Global\nReturn Type: Boolean\nmdoc.method.pathRule Key: mdoc.method.path\nPurpose: Sets method path rules for documentation\nContext: Global\nReturn Type: String\nmdoc.method.http.methodRule Key: mdoc.method.http.method\nPurpose: Sets HTTP method rules for documentation\nContext: Global\nReturn Type: String\n"
        },
        {
          "title": "Constant Field Rules",
          "url": "/documents/knowledge-base.html#rule-reference-constant-field-rules",
          "content": "Constant Field Rulesconstant.field.ignoreRule Key: constant.field.ignore\nPurpose: Ignores constant fields in enumeration extraction\nContext: Field level\nReturn Type: Boolean\n"
        },
        {
          "title": "HTTP Callback Rules",
          "url": "/documents/knowledge-base.html#rule-reference-http-callback-rules",
          "content": "HTTP Callback Ruleshttp.call.beforeRule Key: http.call.before\nPurpose: Callback before every HTTP request made by the plugin\nContext: None\nReturn Type: Void\nAdditional Context: request\nhttp.call.afterRule Key: http.call.after\nPurpose: Callback after every HTTP request made by the plugin\nContext: None\nReturn Type: Void\nAdditional Context: request, response\n"
        },
        {
          "title": "Export Rules",
          "url": "/documents/knowledge-base.html#rule-reference-export-rules",
          "content": "Export Rulesexport.afterRule Key: export.after\nPurpose: Callback after each API is exported\nContext: Method level\nReturn Type: Void\nAdditional Context: api\n"
        },
        {
          "title": "Postman Rules",
          "url": "/documents/knowledge-base.html#rule-reference-postman-rules",
          "content": "Postman Rulespostman.hostRule Key: postman.host\nPurpose: Sets the host for Postman collection\nContext: Global\nReturn Type: String\npostman.prerequestRule Key: postman.prerequest\nPurpose: Sets pre-request script for Postman API requests\nContext: Method level\nReturn Type: String\nclass.postman.prerequestRule Key: class.postman.prerequest\nPurpose: Sets pre-request script for Postman folders\nContext: Class level\nReturn Type: String\ncollection.postman.prerequestRule Key: collection.postman.prerequest\nPurpose: Sets pre-request script for Postman collection\nContext: None\nReturn Type: String\npostman.testRule Key: postman.test\nPurpose: Sets test script for Postman API requests\nContext: Method level\nReturn Type: String\nclass.postman.testRule Key: class.postman.test\nPurpose: Sets test script for Postman folders\nContext: Class level\nReturn Type: String\ncollection.postman.testRule Key: collection.postman.test\nPurpose: Sets test script for Postman collection\nContext: None\nReturn Type: String\n"
        },
        {
          "title": "Simple Configurations",
          "url": "/documents/knowledge-base.html#rule-reference-simple-configurations",
          "content": "Simple Configurationsyapi.serverRule Key: yapi.server\nPurpose: Sets YApi server address\nContext: Global\nReturn Type: String\nyapi.token.$moduleRule Key: yapi.token.$module\nPurpose: Sets YApi module token\nContext: Global\nReturn Type: String\ndevRule Key: dev\nPurpose: Enables development mode with detailed logging\nContext: Global\nReturn Type: Boolean\nmax.deepRule Key: max.deep\nPurpose: Sets maximum depth for JSON parsing\nContext: Global\nReturn Type: Integer\nmax.elementsRule Key: max.elements\nPurpose: Sets maximum number of fields for JSON parsing\nContext: Global\nReturn Type: Integer\n"
        }
      ]
    }
  ],
  "配置": [
    {
      "title": "通用配置",
      "content": "",
      "url": "/setting/index.html",
      "children": [
        {
          "title": "零配置,开箱即用",
          "url": "/setting/index.html#零配置,开箱即用",
          "content": "零配置,开箱即用插件安装后, 无需任何配置即可使用. 一般来说, 当导出API的过程中需要提供某些参数, 插件将以弹框的方式提供输入.\n按要求填入即可\n"
        },
        {
          "title": "额外的配置方法",
          "url": "/setting/index.html#额外的配置方法",
          "content": "额外的配置方法\n在IDEA中设置\n\n方便快捷, 可以对插件的默认行为做出调整\n\n\n\n使用项目内配置文件\n\n可定制化程度高, 可以高度适配个性化业务\n\n\n警告:文档所有规则均为示例,请自行按照需求调整."
        }
      ]
    },
    {
      "title": "在IDE中设置(全局)",
      "content": "Preferences(Settings) > Other Settings > EasyApi\n",
      "url": "/setting/ide-setting.html",
      "children": [
        {
          "title": "通用配置",
          "url": "/setting/ide-setting.html#通用配置",
          "content": "通用配置Common :log: 一般来说使用一段时间后,log可以设置为HIGH,减少不必要的输出当出现异常情况时,可以设置为LOW,获得更多信息\nSupport :methodDoc: 勾选后, 允许导出方法文档, 亦可用于导出rpc相关文档\n支持导出到markdown/yapi\n"
        },
        {
          "title": "Postman:",
          "url": "/setting/ide-setting.html#通用配置-postman",
          "content": "Postman:\ntoken: 用于设置或更新postman privateToken, 可以从Postman Integrations Dashboard获得\n\n\nworkspace: 设置当前项目的api导入到哪个workspace\n\n\nexport mode: 设置导出模式\n\n\nCREATE: 每次导出创建一个新的collection\n\n\nUPDATE: 每次导出更新已存在的一个collection\n\n\n\n\nwrapcollection: 仅export mode为CREATE时生效。 勾选时, 即使导出的api只有一个文件夹, 亦在外层包装一个collection\n\n\nauto merge script: 当一个集合/文件夹中子文件夹/API的script都相同时, 将其放置到当前集合/文件夹中\n\n\ncollections: 仅export mode为UPDATE时生效。 用于设置指定module中的api导入到哪个collection中\n\n"
        },
        {
          "title": "Yapi:",
          "url": "/setting/ide-setting.html#通用配置-yapi",
          "content": "Yapi:\nserver 即部署的yapi地址, 如:http://127.0.0.1:3000/\n\n\ntokens 即yapi项目中用于请求项目openapi的私有token, 获取方式为项目->设置->token 配置 -> 工具标识\n\nMarkdown :\noutputDemo: 导出markdown文档时, 为每个API生成一个响应demo\n\n\noutputCharset: 选择导出markdown文档时使用的字符集\n\nCache :\nglobal: 全局缓存\n\n\nproject: 当前项目缓存\n\nintelligent :\ninferEnable: 允许插件在遇到不确定的方法返回类型为(Object, Some)时尝试通过代码流进行推断,并根据项目需求设置maxDeep(最大推断深度)\n\n\nmaxDeep: 允许推断的最大深度\n\n\ngetter as field: 尝试读取getter方法作为json字段\n\n\nuse recommend config: 使用内置的推荐配置\n\n"
        },
        {
          "title": "内置可选推荐配置",
          "url": "/setting/ide-setting.html#内置可选推荐配置",
          "content": "内置可选推荐配置可以通过勾选来选择需要的配置\n内置推荐配置源代码: portal\n"
        }
      ]
    },
    {
      "title": "使用配置文件(当前项目)",
      "content": "",
      "url": "/setting/local-file-config.html",
      "children": [
        {
          "title": "将配置文件添加到项目或模块根目录中",
          "url": "/setting/local-file-config.html#将配置文件添加到项目或模块根目录中",
          "content": "将配置文件添加到项目或模块根目录中\n\n文件\n类型\n适用的操作\n\n\n\n\n.easy.api.config\nproperties\nmarkdown/postman/yapi/call\n\n\n.easy.api.yml/.easy.api.yaml\nyml\nmarkdown/postman/yapi/call\n\n\n.postman.config\nproperties\npostman\n\n\n.postman.yml/.postman.yaml\nyml\npostman\n\n\n.yapi.config\nproperties\nyapi\n\n\n.yapi.yml/.yapi.yaml\nyml\nyapi\n\n\n"
        },
        {
          "title": "properties类型配置(推荐)",
          "url": "/setting/local-file-config.html#properties类型配置推荐",
          "content": "properties类型配置(推荐)\n一般的配置是:key=value\n\n\n简单的多行配置,以\\结尾:\n\nkey=value\\    aaaa\\\n    bbb\nkey2=value2\n复杂的多行配置,以```结尾开启多行配置,以单独一行```表示结束:\nkey=groovy:```if(condition){\n    //some script\n}\n```\n带filter的配置:\nkey[filter]=value注意key[filter]=value有可能解析错误,可以尝试切换成\nkey=groovy:if(filter)value以下三条配置等价:\n#单行配置http.call.before=groovy:logger.info(\"call:\"+request.url())\n#以\\接新行\nhttp.call.before=groovy:\\\nlogger.info(\"call:\"+request.url())\n#以```包裹多行\nhttp.call.before=groovy:```\nlogger.info(\"call:\"+request.url())\n```\n"
        },
        {
          "title": "yml/yaml (兼容)",
          "url": "/setting/local-file-config.html#ymlyaml-兼容",
          "content": "yml/yaml (兼容)\n使用snakeyaml解析\n\n\n参考:\nbaike | wiki\n\n"
        },
        {
          "title": "properties.additional",
          "url": "/setting/local-file-config.html#properties.additional",
          "content": "properties.additional在配置文件中可以使用properties.additional来加载额外的配置文件:\nproperties.additional=/xxx/xxx/my.properties常用于存放开发者私有的配置\n"
        },
        {
          "title": "假设配置后的目录结构如下:",
          "url": "/setting/local-file-config.html#properties.additional-假设配置后的目录结构如下",
          "content": "假设配置后的目录结构如下:project-root├── java(module1)\n│   ├── common.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── java\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **.java\n│   │   │   └── resources\n│   │   └── test\n│   │       └── java\n│   └────.easy.api.config①\n├── kotlin(module2)\n│   ├── kotlin-demo.iml\n│   ├── pom.xml\n│   ├── src\n│   │   ├── main\n│   │   │   ├── kotlin\n│   │   │   │   └── com\n│   │   │   │       └── **\n│   │   │   │           └── **\n│   │   │   │               └── **\n│   │   │   │                   └── **\n│   │   │   │                       └── **.kt\n│   │   │   └── resources\n│   │   │       ├── application.yaml②\n│   │   │       ├── static\n│   │   │       └── templates\n│   │   └── test\n│   │       └── kotlin\n│   └────.easy.api.yml③\n├── springboot-demo(module3)\n│   ├── pom.xml\n│   ├── springboot-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── com\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **\n│       │   │                           └── **.java\n│       │   └── resources\n│       │       ├── application.properties④\n│       │       ├── static\n│       │       └── templates\n│       └── test\n├── springboot-webflux-demo(module4)\n│   ├── pom.xml\n│   ├── springboot-webflux-demo.iml\n│   └── src\n│       ├── main\n│       │   ├── java\n│       │   │   └── **\n│       │   │       └── **\n│       │   │           └── **\n│       │   │               └── **\n│       │   │                   └── **\n│       │   │                       └── **.java\n│       │   └── resources\n│       │       └── application.yml⑤\n│       └── test\n└────.easy.api.config⑥\n"
        },
        {
          "title": "上述结构中:",
          "url": "/setting/local-file-config.html#properties.additional-上述结构中",
          "content": "上述结构中:①: 只对java(module1)生效\n②: 如果开启了默认推荐配置的话,默认会加载,所以其中的参数可以在③中通过{property}来使用\n③: 只对kotlin(module2)生效\n④/⑤: 与②一样application.properties/application.yml/application.yaml都可以被加载\n⑥: 对java(module1)/kotlin(module2)/springboot-demo(module3)/springboot-webflux-demo(module4)都生效\n①/③/④/⑤/⑥均为可选配置. 一般来说尽量在项目根目录下创建配置文件(即⑥)来管理配置即可.\n"
        }
      ]
    },
    {
      "title": "使用远程配置文件",
      "content": "",
      "url": "/setting/remote-config.html",
      "children": [
        {
          "title": "方式1: [Settings > Remote]",
          "url": "/setting/remote-config.html#方式1-[settings->-remote]",
          "content": "方式1: [Settings > Remote]可在Preferences(Settings) > Other Settings > EasyApi > Remote中添加"
        },
        {
          "title": "方式2: Properties",
          "url": "/setting/remote-config.html#方式2-properties",
          "content": "方式2: Properties在本地文件中添加properties.additional=url例如:properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger.config"
        }
      ]
    },
    {
      "title": "Yapi相关参数配置",
      "content": "在导出过程中如果需要yapi相关参数, 将会以弹窗的方式提供输入\n也可以在Preferences(Settings) > Other Settings > EasyApi 中手动配置\n需要提供的参数有\n\nserver 即部署的yapi地址, 如:http://127.0.0.1:3000/\ntokens 即yapi项目中用于请求项目openapi的私有token, 获取方式为 项目->设置->token 配置 -> 工具标识\n\n\n",
      "url": "/setting/yapi.html",
      "children": []
    },
    {
      "title": "Postman相关参数配置",
      "content": "",
      "url": "/setting/postman.html",
      "children": [
        {
          "title": "token配置",
          "url": "/setting/postman.html#token配置",
          "content": "token配置\n可在Preferences(Settings) > Other Settings > EasyApi 中配置\n\n\npostman的token可以从Postman Integrations Dashboard获得\n\n\n未配置token的情况下, 默认导出一个可导入postman的json文件\n\n"
        }
      ]
    },
    {
      "title": "Yapi mock规则",
      "content": "默认对于枚举类型或注释里引用的枚举类型的字段, 会mock为目标枚举值\n有两种额外的配置方式, 根据实际情况选择适合的方式配置\n",
      "url": "/setting/yapi-mock.html",
      "children": [
        {
          "title": "通过合适的注释关联枚举/常量",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量",
          "content": "通过合适的注释关联枚举/常量"
        },
        {
          "title": "字段名与关联的枚举值字段名相同时",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-字段名与关联的枚举值字段名相同时",
          "content": "字段名与关联的枚举值字段名相同时/*** 用户类型\n*\n* @see UserType\n*/\nprivate Integer type;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "字段名与关联的枚举值字段名不同时",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-字段名与关联的枚举值字段名不同时",
          "content": "字段名与关联的枚举值字段名不同时推荐配置中默认使用了enum.use.by.type, 一般来说可以简单注释为:\n/*** 用户类型\n*\n* @see UserType\n*/\nprivate Integer userType;\n但为了防止错误的解析, 依然建议在注释中指明使用的枚举字段\n/*** 用户类型\n*\n* @see UserType#type\n*/\nprivate Integer userType;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nuserType\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "关联一个类中的所有常量",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-关联一个类中的所有常量",
          "content": "关联一个类中的所有常量/*** 用户类型\n* @see com.itangcent.common.constant.UserTypeConstant\n*/\nprivate Integer type;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "关联一个类中的部分常量",
          "url": "/setting/yapi-mock.html#通过合适的注释关联枚举常量-关联一个类中的部分常量",
          "content": "关联一个类中的部分常量/*** 用户类型\n* @see com.itangcent.common.constant.UserTypeConstant#ADMIN\n* @see com.itangcent.common.constant.UserTypeConstant#MEMBER\n*/\nprivate Integer type;\n导出API结果为:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2枚举备注: 1 :管理员 2 :成员 mock: @pick([1,2])\n\n\n"
        },
        {
          "title": "从代码中获取mock规则",
          "url": "/setting/yapi-mock.html#从代码中获取mock规则",
          "content": "从代码中获取mock规则配置灵活, 但有代码/注释侵入性\n非常适合有校验框架的情况, 如javax.validation\n参照:field.mock\n"
        },
        {
          "title": "通过字段名及类型等特征来配置mock规则",
          "url": "/setting/yapi-mock.html#通过字段名及类型等特征来配置mock规则",
          "content": "通过字段名及类型等特征来配置mock规则配置稍难, 零侵入\n非常适合字段名定义很规范的项目\n配置方式为: mock.[field|type]=@mock,参照下方示例.\n一般先增加一些自定义mock规则## 增加自定义mock规则#mockjs官方示例: http://mockjs.com/examples.html\n#定义一些基础的规则\n#中国手机号\nphone=1@pick([\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",\"50\",\"5\",\"52\",\"58\",\"59\",\"57\",\"82\",\"87\",\"88\",\"70\",\"47\",\"30\",\"3\",\"32\",\"55\",\"56\",\"85\",\"86\",\"33\",\"53\",\"80\",\"89\"])@string(\"number\", 8)\n#毫秒时间戳\nmtimestamp=@now('T')\n#0-9\ndigit=@natural(0,9)\n#小于1000的自然数\nnatural_lt_1000=@natural(0,1000)\n#小数点后两位\nfloat_with_two=@natural(0,10000).@natural(0,100)\n#http url\nhttp_url=@pick([\"http\",\"https\"])://www.@domain()/@string('lower',1,8)?@string('lower',2,4)=@string('number',1,2)\n#objectId 只是字符和位数, 不满足具体协议\nobjectId=@string(\"0123456789abcdef\",24,24)\n然后使用 mockjs 提供的规则与自定义的规则来定制最后输出到YAPI的mock信息#常见的响应mockmock.[c|integer]=0\nmock.[code|integer]=0\nmock.[status|integer]=0\nmock.[ok|boolean]=true\nmock.[success|boolean]=true\nmock.[m|string]=\nmock.[msg|string]=\nmock.[message|string]=\nmock.[errMsg|string]=\n\n#常见的分页mock\nmock.[*.p|integer]=1\nmock.[*.l|integer]=@pick([\"10\",\"15\",\"100\"])\nmock.[*.t|integer]=@natural(0,1000)\nmock.[*.offset|integer]=1\nmock.[*.page|integer]=1\nmock.[*.pageIndex|integer]=1\nmock.[*.pageSize|integer]=@pick([\"10\",\"15\",\"100\"])\nmock.[*.limit|integer]=@pick([\"10\",\"15\",\"100\"])\nmock.[*.total|integer]=@natural(0,1000)\n\n# 整型的xxxTime mock为时间戳\nmock.[*Time|integer]=${mtimestamp}\n\n#性别\nmock.[*.sex|integer]=@natural(0,2)\nmock.[*.sex|string]=@pick([\"男\",\"女\"])\nmock.[*.gender|integer]=@natural(0,2)\nmock.[*.gender|string]=@pick([\"男\",\"女\"])\n\n#用户信息相关\nmock.[*.phone|string]=${phone}\nmock.[*.mobile|string]=${phone}\nmock.[*Phone|string]=${phone}\nmock.[*Mobile|string]=${phone}\nmock.[*.provinceName|string]=@province\nmock.[*ProvinceName|string]=@province\nmock.[*.cityName|string]=@city\nmock.[*CityName|string]=@city\nmock.[*.districtName|string]=@county\nmock.[*DistrictName|string]=@county\nmock.[*.address]=@cword(2,3)路@natural(1,1500)号\n\n#链接\nmock.[*.url|string]=${http_url}\nmock.[*.link|string]=${http_url}\nmock.[*.linkUrl|string]=${http_url}\nmock.[*Link|string]=${http_url}\n\n# integer和number更自然一些\nmock.[*Type|integer]=${digit}\nmock.[*Status|integer]=${digit}\nmock.[*.type|integer]=${digit}\nmock.[*.status|integer]=${digit}\nmock.[*|integer]=@natural(0,10000)\nmock.[*|number]=@float(0,10000)\n\n"
        }
      ]
    },
    {
      "title": "Markdown模板配置",
      "content": "⭐ 推荐配置方式\n从 v2.7.9 版本开始，我们推荐使用模板配置来自定义API文档格式。相比旧的 markdown自定义规则，模板配置提供了更灵活和强大的自定义能力。\n",
      "url": "/setting/template.html",
      "children": [
        {
          "title": "配置方式",
          "url": "/setting/template.html#配置方式",
          "content": "配置方式在配置文件中添加以下配置：api.template=模板文件地址快速配置markdown文档导出为中文模板：api.template=https://raw.githubusercontent.com/tangcent/easy-yapi/refs/heads/master/third/template/api.template.zh.md"
        },
        {
          "title": "模板语法",
          "url": "/setting/template.html#模板语法",
          "content": "模板语法"
        },
        {
          "title": "基础变量",
          "url": "/setting/template.html#模板语法-基础变量",
          "content": "基础变量模板支持以下基础变量：\n\n变量\n描述\n\n\n\n\n$name\nAPI名称\n\n\n$path\nAPI路径\n\n\n$method\nHTTP请求方法\n\n\n$desc\nAPI描述\n\n\n$headers\n请求头信息\n\n\n$paths\n路径参数信息\n\n\n$querys\n查询参数信息\n\n\n$form\n表单数据信息\n\n\n$body\n请求体信息\n\n\n$response.headers\n响应头信息\n\n\n$response.body\n响应体信息\n\n\n"
        },
        {
          "title": "条件语句",
          "url": "/setting/template.html#模板语法-条件语句",
          "content": "条件语句使用 ${if condition} 和 ${end} 来控制内容的显示：${if headers}**请求头:**\n${md.table(headers).title([name:\"名称\", value:\"值\", required:\"是否必需\", desc:\"描述\"])}\n${end}\n"
        },
        {
          "title": "表格生成",
          "url": "/setting/template.html#模板语法-表格生成",
          "content": "表格生成使用 md.table() 和 md.objectTable() 来生成表格：普通表格：${md.table(data).title([column1:\"标题1\", column2:\"标题2\"])}\n对象表格：${md.objectTable(data).title([name:\"名称\", type:\"类型\", desc:\"描述\"])}\n"
        },
        {
          "title": "JSON格式化",
          "url": "/setting/template.html#模板语法-json格式化",
          "content": "JSON格式化使用 md.json() 和 md.json5() 来格式化JSON数据：**请求示例:**```json\n${md.json(body)}\n```\n\n**响应示例:**\n```json\n${md.json5(response.body)}\n```\n"
        },
        {
          "title": "文本替换",
          "url": "/setting/template.html#模板语法-文本替换",
          "content": "文本替换使用 ${@text.[type].[value]=默认值} 来定义文本替换规则, 例如：${@text.boolean.true=是}${@text.boolean.false=否}\n${@text.null.null=-}\n"
        },
        {
          "title": "完整示例",
          "url": "/setting/template.html#完整示例",
          "content": "完整示例以下是一个完整的中文API文档模板示例：${@text.boolean.true=是}${@text.boolean.false=否}\n${@text.null.null=-}\n\n## $name\n\n> 基本信息\n**路径:** $path\n**方法:** $method\n**描述:** $desc\n\n> 请求\n${if headers}\n**请求头:**\n${md.table(headers).title([name:\"名称\", value:\"值\", required:\"是否必需\", desc:\"描述\"])}\n${end}\n\n${if paths}\n**路径参数:**\n${md.table(paths).title([name:\"名称\", value:\"值\", required:\"是否必需\", desc:\"描述\"])}\n${end}\n\n${if querys}\n**查询参数:**\n${md.table(querys).title([name:\"名称\", value:\"值\", required:\"是否必需\", desc:\"描述\"])}\n${end}\n\n${if form}\n**表单数据:**\n${md.table(form).title([name:\"名称\", value:\"值\", required:\"是否必需\", type:\"类型\", desc:\"描述\"])}\n${end}\n\n${if body}\n**请求体:**\n${md.objectTable(body).title([name:\"名称\", type:\"类型\", desc:\"描述\"])}\n\n**请求示例:**\n\n```json\n${md.json(body)}\n```\n\n${end}\n\n> 响应\n${if response.headers}\n**响应头:**\n${md.table(response.headers).title([name:\"名称\", value:\"值\", required:\"是否必需\", desc:\"描述\"])}\n${end}\n\n${if response.body}\n**响应体:**\n${md.objectTable(response.body).title([name:\"名称\", type:\"类型\", desc:\"描述\"])}\n\n**响应示例:**\n\n```json\n${md.json5(response.body)}\n```\n\n${end}\n\n"
        },
        {
          "title": "快速开始",
          "url": "/setting/template.html#快速开始",
          "content": "快速开始创建你的自定义模板文件\n将模板文件放在以下任一位置：\n\n远程：托管到代码托管平台（如 GitHub），然后使用完整的 URL 地址\n本地：放在项目配置文件中，使用相对路径，例如：api.template=${_curr_path}/api.template.zh.md\n\n\n在配置文件中设置 api.template 为你的模板文件地址\n重新生成API文档即可看到新的格式\n"
        }
      ]
    },
    {
      "title": "Markdown自定义规则",
      "content": "⚠️ 已废弃\n该配置方式已被废弃，推荐使用 模板配置 来自定义输出的markdown文档格式。\n模板配置提供了更灵活和强大的自定义能力。\n可用于定制化输出的Markdown文档格式\n",
      "url": "/setting/markdown.html",
      "children": [
        {
          "title": "支持的规则",
          "url": "/setting/markdown.html#支持的规则",
          "content": "支持的规则\n\n    规则的key\n版本\n规则描述\n\n\n\n\n    md.title\nv2.3.4+\n输出标题\n\n\n    md.basic\nv2.3.4+\n替换默认的 [> Basic]\n\n\n    md.basic.path\nv2.3.4+\n输出API路径\n\n\n    md.basic.method\nv2.3.4+\n输出HTTP请求方法\n\n\n    md.basic.desc\nv2.3.4+\n输出API描述信息\n\n\n    md.request\nv2.3.4+\n替换默认的 [> REQUEST]\n\n\n    md.request.path\nv2.3.4+\n输出API路径参数信息, 替换默认的[**Path Params:**]\n\n\n    md.request.headers\nv2.3.4+\n输出API请求Header, 替换默认的[**Headers:**]\n\n\n    md.request.query\nv2.3.4+\n输出API请求参数, 替换默认的[**Query:**]\n\n\n    md.request.body\nv2.3.4+\n输出API请求Body, 替换默认的[**Request Body:**]\n\n\n    md.request.body.demo\nv2.3.4+\n输出API请求Body示例, 替换默认的[**Request Demo:**]\n\n\n    md.request.form\nv2.3.4+\n输出API请求Form, 替换默认的[**Form:**]\n\n\n    md.response\nv2.3.4+\n替换默认的 [> RESPONSE]\n\n\n    md.response.headers\nv2.3.4+\n输出API响应Header, 替换默认的[**Headers:**]\n\n\n    md.response.body\nv2.3.4+\n输出API响应Body, 替换默认的[**Body **]\n\n\n    md.response.body.demo\nv2.3.4+\n输出API响应Body示例, 替换默认的[**Response Demo:**]\n\n\n    md.methodDoc.desc\nv2.3.4+\n输出方法描述, 替换默认的[**Desc:**]\n\n\n    md.methodDoc.params\nv2.3.4+\n输出方法参数, 替换默认的[**Params:**]\n\n\n    md.methodDoc.return\nv2.3.4+\n输出方法响应, 替换默认的[**Return:**]\n\n\n    md.bool.true\nv2.3.5+\n表示是, 替换默认的[YES]\n\n\n    md.bool.false\nv2.3.5+\n表示否, 替换默认的[NO]\n\n\n    md.table.${tableId}.${column}.ignore\nv2.3.5+\n是否隐藏指定表格的指定列\n\n\n    md.table.${tableId}.${column}.name\nv2.3.5+\n设置指定表格的指定列的列名\n\n\n    md.table.${tableId}.${column}.align\nv2.3.5+\n设置指定表格的指定列的对齐方式\n\n\n"
        },
        {
          "title": "可用表格信息",
          "url": "/setting/markdown.html#可用表格信息",
          "content": "可用表格信息\n\n表格(tableId)\n列(column)\n版本\n描述\n\n\n\n\nrequest.pathParams\nname\nv2.3.5+\n请求路径参数表格中的名称\n\n\nrequest.pathParams\nvalue\nv2.3.5+\n请求路径参数表格中的值\n\n\nrequest.pathParams\ndesc\nv2.3.5+\n请求路径参数表格中的描述\n\n\nrequest.headers\nname\nv2.3.5+\n请求header表格中的名称\n\n\nrequest.headers\nvalue\nv2.3.5+\n请求header表格中的值\n\n\nrequest.headers\nrequired\nv2.3.5+\n请求header表格中的必须\n\n\nrequest.headers\ndesc\nv2.3.5+\n请求header表格中的描述\n\n\nrequest.querys\nname\nv2.3.5+\n请求参数表格中的名称\n\n\nrequest.querys\nvalue\nv2.3.5+\n请求参数表格中的值\n\n\nrequest.querys\nrequired\nv2.3.5+\n请求参数表格中的必须\n\n\nrequest.querys\ndesc\nv2.3.5+\n请求参数表格中的描述\n\n\nrequest.body\nname\nv2.3.5+\n请求Body表格中的名称\n\n\nrequest.body\ntype\nv2.3.5+\n请求Body表格中的类型\n\n\nrequest.body\nrequired\nv2.3.5+\n请求Body表格中的必须\n\n\nrequest.body\ndefault\nv2.3.5+\n请求Body表格中的默认值\n\n\nrequest.body\ndesc\nv2.3.5+\n请求Body表格中的描述\n\n\nrequest.form\nname\nv2.3.5+\n请求表单表格中的名称\n\n\nrequest.form\nvalue\nv2.3.5+\n请求表单表格中的值\n\n\nrequest.form\nrequired\nv2.3.5+\n请求表单表格中的必须\n\n\nrequest.form\ntype\nv2.3.5+\n请求表单表格中的类型\n\n\nrequest.form\ndesc\nv2.3.5+\n请求表单表格中的描述\n\n\nresponse.headers\nname\nv2.3.5+\n请求header表格中的名称\n\n\nresponse.headers\nvalue\nv2.3.5+\n请求header表格中的值\n\n\nresponse.headers\nrequired\nv2.3.5+\n请求header表格中的必须\n\n\nresponse.headers\ndesc\nv2.3.5+\n请求header表格中的描述\n\n\nresponse.body\nname\nv2.3.5+\n响应Body表格中的名称\n\n\nresponse.body\ntype\nv2.3.5+\n响应Body表格中的类型\n\n\nresponse.body\nrequired\nv2.3.5+\n响应Body表格中的必须\n\n\nresponse.body\ndefault\nv2.3.5+\n响应Body表格中的默认值\n\n\nresponse.body\ndesc\nv2.3.5+\n响应Body表格中的描述\n\n\nmethodDoc.params\nname\nv2.3.5+\n方法文档中的参数表格中的名称\n\n\nmethodDoc.params\ntype\nv2.3.5+\n方法文档中的参数表格中的类型\n\n\nmethodDoc.params\nrequired\nv2.3.5+\n方法文档中的参数表格中的必须\n\n\nmethodDoc.params\ndefault\nv2.3.5+\n方法文档中的参数表格中的默认值\n\n\nmethodDoc.params\ndesc\nv2.3.5+\n方法文档中的参数表格中的描述\n\n\nmethodDoc.return\nname\nv2.3.5+\n方法文档中的返回类型表格中的名称\n\n\nmethodDoc.return\ntype\nv2.3.5+\n方法文档中的返回类型表格中的类型\n\n\nmethodDoc.return\nrequired\nv2.3.5+\n方法文档中的返回类型表格中的必须\n\n\nmethodDoc.return\ndefault\nv2.3.5+\n方法文档中的返回类型表格中的默认值\n\n\nmethodDoc.return\ndesc\nv2.3.5+\n方法文档中的返回类型表格中的描述\n\n\n"
        },
        {
          "title": "规则上下文",
          "url": "/setting/markdown.html#规则上下文",
          "content": "规则上下文\n\n对象\n版本\n描述\n\n\n\n\ntype\nv2.3.4+\nmethodDoc(方法文档) / request(即api)\n\n\ndoc\nv2.3.4+\n当前API或methodDoc\n\n\napi\nv2.3.4+\n当前API,仅type为request时可用\n\n\nmethodDoc\nv2.3.4+\n当前方法文档,仅type为methodDoc时可用\n\n\ndeep\nv2.3.4+\n当前markdown层次\n\n\ntitle\nv2.3.4+\n当前title\n\n\n"
        },
        {
          "title": "通过配置输出为中文markdown文档",
          "url": "/setting/markdown.html#通过配置输出为中文markdown文档",
          "content": "通过配置输出为中文markdown文档# 提供中文markdown文档\n# title index\nmd.title=groovy:```\n    //increase index\n    def i = session.get(deep+\".i\")\n    i=i==null?1:i+1\n    session.set(deep+\".i\",i)\n\n    //title index\n    def t = \"\"\n    for(d in 1..deep){\n        if(d>1){\n            t += \".\"\n        }\n        t += session.get(d+\".i\")\n    }\n\n    return tool.repeat(\"#\",deep) + \" \" + t + \" \" + title\n```\n\n# for api\nmd.basic=> 基础信息\nmd.basic.path=groovy:\"**路径:** \"+doc.path\nmd.basic.method=groovy:\"**请求方法:** \"+doc.method\nmd.basic.desc=groovy:\"**备注:** \"+doc.desc\nmd.request=> 请求参数\nmd.request.path=**路径参数:**\nmd.request.headers=**Headers:**\nmd.request.query=**Query:**\nmd.request.body=**Body:**\nmd.request.body.demo=**Body示例:**\nmd.request.form=**表单:**\nmd.response=> 返回数据\nmd.response.headers=**Headers:**\nmd.response.body=**Body:**\nmd.response.body.demo=**响应示例:**\n\n# for method doc\nmd.methodDoc.desc=groovy:\"**描述:** \"+doc.desc\nmd.methodDoc.params=**参数:**\nmd.methodDoc.return=**返回:**\n\n# for tables(request)\nmd.table.request.pathParams.name.name=名称\nmd.table.request.pathParams.value.name=值\nmd.table.request.pathParams.desc.name=备注\n\nmd.table.request.headers.name.name=名称\nmd.table.request.headers.value.name=值\nmd.table.request.headers.desc.name=备注\nmd.table.request.headers.required.name=必须\n\nmd.table.request.querys.name.name=名称\nmd.table.request.querys.value.name=值\nmd.table.request.querys.desc.name=备注\nmd.table.request.querys.required.name=必须\n\nmd.table.request.form.name.name=名称\nmd.table.request.form.value.name=值\nmd.table.request.form.desc.name=备注\nmd.table.request.form.type.name=类型\nmd.table.request.form.required.name=必须\n\nmd.table.response.headers.name.name=名称\nmd.table.response.headers.value.name=值\nmd.table.response.headers.desc.name=备注\nmd.table.response.headers.required.name=必须\n\nmd.table.request.body.name.name=名称\nmd.table.request.body.default.name=默认值\nmd.table.request.body.desc.name=备注\nmd.table.request.body.type.name=类型\nmd.table.request.body.required.name=必须\n\nmd.table.response.body.name.name=名称\nmd.table.response.body.default.name=默认值\nmd.table.response.body.desc.name=备注\nmd.table.response.body.type.name=类型\nmd.table.response.body.required.name=必须\n\n# for tables(methodDoc)\nmd.table.methodDoc.params.name.name=名称\nmd.table.methodDoc.params.default.name=默认值\nmd.table.methodDoc.params.desc.name=备注\nmd.table.methodDoc.params.type.name=类型\nmd.table.methodDoc.params.required.name=必须\n\nmd.table.methodDoc.return.name.name=名称\nmd.table.methodDoc.return.default.name=默认值\nmd.table.methodDoc.return.desc.name=备注\nmd.table.methodDoc.return.type.name=类型\nmd.table.methodDoc.return.required.name=必须\n\n# alias for bool\nmd.bool.true=是\nmd.bool.false=否\n快速配置properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/markdown.cn.config或者properties.additional=https://gitee.com/tangcent/easy-yapi/raw/master/third/markdown.cn.config"
        }
      ]
    },
    {
      "title": "支持的规则支持的简单配置支持的回调规则语法",
      "content": "\n\n    规则的key\n规则目标(上下文it)\n版本\n规则描述\n\n\n\n\n    api.name\nmethod\nv1.4.1+\n设置api的名称\n\n\n    api.tag\nmethod\nv0.7.5+\n标记接口tag\n\n\n    api.open\nmethod\nv1.9.4+\n标记接口是否公开\n\n\n    api.status\nmethod\nv0.8.0+\n标记接口status(应返回done/undone)\n\n\n    class.doc\nclass\nv1.3.0+\n类上的额外注释\n\n\n    class.is.ctrl\nmethod\nv2.0.8+\n允许导出指定类中的api\n\n\n    class.postman.prerequest\nclass\nv1.9.5+\n设置postman·folder上的prerequest\n\n\n    class.postman.test\nclass\nv1.9.5+\n设置postman·folder上的test\n\n\n    class.prefix.path\nclass\nv1.3.0+\n设置API请求前缀\n\n\n    collection.postman.prerequest\nclass\nv1.9.5+\n设置postman·collection上的prerequest\n\n\n    collection.postman.test\nclass\nv1.9.5+\n设置postman·collection上的test\n\n\n    constant.field.ignore\nfield\nv1.3.8+\n忽略常量字段\n\n\n    enum.use.custom\nclass\nv2.4.1+\n用于设置使用@see枚举类型时的默认取值字段, 优先级高于enum.use.by.type\n\n\n    enum.use.by.type\nclass\nv2.4.1+\n用于设置使用@see枚举类型时的默认使用类型一致的字段, 优先级低于enum.use.custom\n\n\n    enum.use.ordinal\nclass\nv2.2.1+\n用于设置使用@see枚举类型时的默认使用ordinal作为取值\n\n\n    enum.use.name\nclass\nv2.2.1+\n用于设置使用@see枚举类型时的默认使用name作为取值\n\n\n    field.advanced\nfield\nv2.2.8+\n提供yapi的高级设置信息\n\n\n    field.default.value\n-\nv1.7.1+\n用以设置字段的默认值\n\n\n    field.demo\n-\nv1.9.3+\n用以设置字段的示例值\n\n\n☆field.doc\nfield\nv0.7.2+\n字段的额外注释\n\n\n    field.ignore\nfield\nv2.0.0+\n忽略字段(设置某些字段不出现在json中,或不需要请求时给出)\n\n\n☆field.mock\nfield\nv1.4.2+\n生成yapimock信息\n\n\n    field.mock.resolveProperty\n-\nv1.4.2+\n用以开关是否解析field.mock规则结果中的占位符\n\n\n    field.name\nfield\nv0.7.2+\n设置输出的字段名(用于json中字段名与类中字段名不一致)\n\n\n    field.required\nfield\nv0.7.3+\n字段是否为必须(即不可为空)\n\n\n    field.order\nfield\nv2.6.4+\n用于指定字段顺序\n\n\n    field.order.with\nfield\nv2.6.4+\n用于设置字段顺序\n\n\n    field.type\nfield\nv2.6.4+\n用于设置字段实际数据类型\n\n\n    folder.name\nmethod\nv1.9.2+\n设置api所属文件夹\n\n\n    ignore\nclass/method\nv0.7.2+\n忽略API\n\n\n☆json.rule.convert\n-\nv0.7.2+\n用于设置某些类型转换为其他类型处理, 通常用于使用了Spring的自定义类型转换器的情况\n\n\n    json.rule.enum.convert\nclass\nv1.2.0+\n用于枚举类型的特殊转换\n\n\n    json.rule.field.ignore\nfield\nv0.7.2+\n忽略字段(设置某些字段不出现在json中,或不需要请求时给出) 已废弃, 使用field.ignore代替\n\n\n    json.rule.field.name\nfield\nv0.7.2+\n设置输出的字段名(用于json中字段名与类中字段名不一致)\n\n\n    mdoc.class.filter\nclass\nv0.9.5+\n选择哪些类可以导出方法文档(rpc)\n\n\n    mdoc.method.filter\nmethod\nv0.9.5+\n选择哪些方法可以导出方法文档(rpc)\n\n\n    mdoc.method.path\nmethod\nv0.9.5+\n设置方法文档(rpc)的路径\n\n\n    mdoc.method.http.method\nmethod\nv0.9.5+\n设置方法文档(rpc)HTTP请求方式\n\n\n    method.additional.header\nmethod\nv1.3.0+\nAPI需要额外的header\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, demo:\"\"}\n\n\n    method.additional.param\nmethod\nv1.3.0+\nAPI需要额外的参数\n\n\n\n\n\n{name: \"param name\",value: \"defaultValue\",desc: \"\",required:false}\n\n\n    method.additional.response.header\nmethod\nv1.3.0+\nAPI的响应包含额外的header\n\n\n\n\n\n{name: \"header name\",value: \"\",desc: \"\",required:false, demo:\"\"}\n\n\n    method.content.type\n-\nv1.9.7+\n用以设置API请求的content-type\n\n\n    method.default.http.method\nmethod\nv1.4.2+\n设置默认的api的HttpMethod\n\n\n    method.doc\nmethod\nv0.7.2+\n方法(api)的额外注释\n\n\n☆method.return.main\nmethod\nv1.3.8+\n设置返回值的核心主体\n\n\n☆method.return\nmethod\nv1.6.1+\n设置返回值的类型\n\n\n    module\nclass\nv0.7.2+\n为api分组\n\n\n    param.default.value\narg\nv1.3.0+\nAPI参数的默认值\n\n\n    param.demo\n-\nv1.9.3+\n用以设置参数的示例值\n\n\n    param.doc\narg\nv1.3.0+\n参数的额外注释\n\n\n    param.http.type\narg\nv2.0.0+\n用于设置API参数在HTTP请求中的类型\n\n\n    param.ignore\narg\nv1.3.0+\n忽略API参数\n\n\n    param.required\narg\nv0.7.3+\nAPI参数是否为必须(即不可为空)\n\n\n    path.multi\nmethod\nv1.9.2+\n当API有多个路径时如何选择\n\n\n    postman.host\nclass\nv1.5.2+\n设置postmanAPI的host\n\n\n    postman.prerequest\nclass\nv1.9.5+\n设置postmanAPI的prerequest\n\n\n    postman.test\nclass\nv1.9.5+\n设置postmanAPI的test\n\n\n简单配置无上下文\n\n    规则的key\n版本\n配置类型\n规则描述\n示例\n\n\n\n\n    yapi.server\nv2.2.1+\nstring\n设置yapi地址,优先级高于setting. 可用于多个项目要导入不同yapi的情况\nyapi.server=http://yapi.itangcent.com/\n\n\n    yapi.token.$module\nv2.5.8+\nstring\n设置yapi模块的token,优先级高于setting. 可用于多人共享账号的情况下简化使用\nyapi.token.xxx=01234567890123456789\n\n\n    dev\nv2.2.1+\nbool\n启动开发模式,打印更详细的日志\ndev=true\n\n\n    max.deep\nv2.3.6+\nint\n解析json时最大深度,默认6\nmax.deep=8\n\n\n    max.elements\nv2.3.6+\nint\n解析json时最大字段数,默认256\nmax.elements=512\n\n\n    json.cache.disable\nv2.1.0+\nbool\n禁用json解析缓存\njson.cache.disable=true\n\n\n    http.timeOut\nv2.1.0+\nint\nhttp请求的超时时间(s),优先级高于setting\nhttp.timeOut=5\n\n\n    auto.format.url\nv2.1.0+\nbool\n导入yapi时是否格式化url,确保url以/开始，且将[a-zA-Z0-9-/_:.{}?=!]之外的字符替换为/\nauto.format.url=false\n\n\n    field.mock.resolveProperty\nv2.1.0+\nbool\n是否处理yapi mock信息中的占位符${xxx}\nfield.mock.resolveProperty=true\n\n\n    api.tag.delimiter\nv2.1.0+\nstring\nyapi tag的分割符, 默认为,\napi.tag.delimiter=,#\n\n\n    ignore_static_and_final_field\nv2.1.0+\nbool\n插件默认会忽略static final字段, 设置为false可以改变此行为\nignore_static_and_final_field=false\n\n\n    ignore_irregular_api_method\nv2.5.4+\nbool\n插件默认会忽略方法名与Object中基础方法名相同的API, 设置为false可以改变此行为\nignore_irregular_api_method=false\n\n\n    doc.source.disable\nv2.5.5+\nbool\n设置为true可以阻止插件读取注释\ndoc.source.disable=true\n\n\n部分回调方法中可能没有it, 但可能会有附加的上下文供使用\n\n    规则的key\n规则目标(上下文it)\n附加上下文\n版本\n规则描述\n\n\n\n\n    api.class.parse.before\nclass\n无\nv2.2.8+\n解析api前回调\n\n\n    api.class.parse.after\nclass\n无\nv2.2.8+\n解析api后回调\n\n\n    api.method.parse.before\nmethod\n无\nv2.2.8+\n解析api方法前回调\n\n\n    api.method.parse.after\nmethod\n无\nv2.2.8+\n解析api方法后回调\n\n\n    api.param.parse.before\nparam\n无\nv2.2.8+\n解析api参数前回调\n\n\n    api.param.parse.after\nparam\n无\nv2.2.8+\n解析api参数后回调\n\n\n    export.after\nmethod\napi\nv2.0.1+\n每个api导出完成后回调\n\n\n    http.call.before\n无\nrequest\nv1.9.0+\nhttp请求前回调\n\n\n    http.call.after\n无\nrequest, response\nv1.9.0+\nhttp请求后回调\n\n\n    json.class.parse.before\nclass\n无\nv2.2.8+\n解析类型前回调\n\n\n    json.class.parse.after\nclass\n无\nv2.2.8+\n解析类型后回调\n\n\n    json.field.parse.before\nfield\n无\nv2.2.8+\n解析类型字段前回调\n\n\n    json.field.parse.after\nfield\n无\nv2.2.8+\n解析类型字段后回调\n\n\n    json.method.parse.before\nmethod\n无\nv2.2.8+\n解析类型方法 (getter|setter)前回调\n\n\n    json.method.parse.after\nmethod\n无\nv2.2.8+\n解析类型方法(getter|setter)后回调\n\n\n    yapi.export.before\n无\n无\nv2.0.1+\n导出到yapi之前回调\n\n\nNOTES: 本地文件配置",
      "url": "/setting/config-rule.html",
      "children": [
        {
          "title": "简单规则",
          "url": "/setting/config-rule.html#简单规则",
          "content": "简单规则\n# 读取注释上的tag\n\n\n如 #fake对应取的注释如下:\n/**\n* @fake\n*/\n\n\n\n\n\n@ 读取注解\n\n\n@xxx 读取方法或字段上的注解,如@org.springframework.web.bind.annotation.RequestMapping\n@RequestMapping(\"path\")\npublic class FakeClass{...}\n\n\n\n@xxx#yyy 读取方法或字段上的注解中的attr值,如@org.springframework.web.bind.annotation.RequestMapping#value\n@RequestMapping(value = \"path\")\npublic class FakeClass{...}\n\n\n\n\n\n字面量\n\nboolean如: api.open=true\nstring如: api.status=done\n\n\n"
        },
        {
          "title": "高级脚本规则",
          "url": "/setting/config-rule.html#高级脚本规则",
          "content": "高级脚本规则由于JDK11后js引擎可能缺失, 故推荐使用groovy作为首选\ngroovy规则为 groovy:groovyScript\njs规则为 js:jsScript\n脚本中可用工具/对象: tools\n脚本调试: script-executor\n"
        }
      ]
    },
    {
      "title": "api.name",
      "content": "用于设置API名称\n缺省情况下, 默认使用api注释的第一行作为API的名称\n",
      "url": "/setting/rules/api_name.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/api_name.html#demo",
          "content": "demo配置如下:# read api name from tag `api.name`api.name=#api.name\n使用如下:/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @api.name Mock String\n    * @undone\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n"
        }
      ]
    },
    {
      "title": "api.open",
      "content": "可用上下文it为: method\n标记接口是否公开\n",
      "url": "/setting/rules/api_open.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/api_open.html#demo",
          "content": "demo配置如下:api.open=#open使用如下:/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    * @open\n    */\n    @ApiOperation(value = \"mock string\", opens = {\"swagger\", \"test\"})\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "api.status",
      "content": "标记接口status\n",
      "url": "/setting/rules/api_status.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/api_status.html#默认推荐配置",
          "content": "默认推荐配置#yapi statusapi.status[#undone]=undone\napi.status[#todo]=undone\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/api_status.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    * @undone\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "api.tagapi.tag.delimiter",
      "content": "标记接口tag\n用于分割tags, 默认tag的分隔符是,\\n\n\n如规则得到的tag是a,b,则会被切割为[a,b]\n如希望a,b视为一个规则,可以设置api.tag.delimiter=\\n,则不再对,进行切割\n如希望将a|b|c切割为[a,b,c],可以设置api.tag.delimiter=|\\n\n如希望将a,b|c,d切割为[a,b,c,d],可以设置api.tag.delimiter=|,\\n\n\n\n",
      "url": "/setting/rules/api_tag.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/api_tag.html#默认推荐配置",
          "content": "默认推荐配置#yapi tagapi.tag[@java.lang.Deprecated]=deprecated\napi.tag[#deprecated]=deprecated\napi.tag[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=deprecated\napi.tag[groovy:it.containingClass().hasDoc(\"deprecated\")]=deprecated\n\n#yapi tag for kotlin\napi.tag[@kotlin.Deprecated]=deprecated\napi.tag[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=deprecated\n"
        },
        {
          "title": "添加对swagger @ApiOperation支持",
          "url": "/setting/rules/api_tag.html#添加对swagger-apioperation支持",
          "content": "添加对swagger @ApiOperation支持api.tag=@io.swagger.annotations.ApiOperation#tags"
        },
        {
          "title": "demo",
          "url": "/setting/rules/api_tag.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @ApiOperation(value = \"mock string\", tags = {\"swagger\", \"test\"})\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        },
        {
          "title": "导出效果",
          "url": "/setting/rules/api_tag.html#导出效果",
          "content": "导出效果列表页\n\n\n接口名称\n接口路径\n接口分类\n状态\ntag\n\n\n\n\nMock String\n/mock/string\nMock Apis\n已完成\nswaggertest\n\n\n详情页\n\n\n基本信息\n\n\n\n\n接口名称： Mock String               创 建 人：  admin\n\n\n状  态： 已完成                 更新时间：  2019-12-07 22:31:28\n\n\nTag ：    swagger, test\n\n\n接口路径： GET /mock/string\n\n\nMock地址： http://127.0.0.1:3000/mock/172/mock/string\n\n\n"
        }
      ]
    },
    {
      "title": "class.doc(doc.class)",
      "content": "类上的额外注释\n将作为yapi接口分类的描述, 但是由于yapi openapi并未提供修改分类的接口,故当分类已存在时, 此配置实质上无法生效\n",
      "url": "/setting/rules/class_doc.html",
      "children": [
        {
          "title": "添加对swagger @Api支持",
          "url": "/setting/rules/class_doc.html#添加对swagger-api支持",
          "content": "添加对swagger @Api支持class.doc=@io.swagger.annotations.Api#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/class_doc.html#demo",
          "content": "demo@Api(value = \"mock api tools\", @RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "class.is.ctrl",
      "content": "默认的只会导出注解有org.springframework.stereotype.Controller或org.springframework.web.bind.annotation.RestController\n的类中的api.\n当有导出未注解org.springframework.stereotype.Controller或org.springframework.web.bind.annotation.RestController\n的类中的api的需求时,可以配置此规则\n",
      "url": "/setting/rules/class_is_ctrl.html",
      "children": [
        {
          "title": "允许导出所有类中的api",
          "url": "/setting/rules/class_is_ctrl.html#允许导出所有类中的api",
          "content": "允许导出所有类中的api则可配置\nclass.is.ctrl=true"
        },
        {
          "title": "允许导出注释有ctrl类中的api",
          "url": "/setting/rules/class_is_ctrl.html#允许导出注释有ctrl类中的api",
          "content": "允许导出注释有ctrl类中的api如果配置为导出所有类中的api出现卡顿, 希望通过注释@ctrl来控制哪些类会包含api, 那可配置为\nclass.is.ctrl=#ctrlDemo/** * @ctrl\n */\n@RequestMapping(\"/base\")\npublic interface BaseController {\n\n   /**\n    * 当前ctrl名称\n    *\n    * @public\n    */\n   @RequestMapping(\"/ctrl/name\")\n   String ctrlName();\n}\n"
        }
      ]
    },
    {
      "title": "postman.testclass.postman.testcollection.postman.test",
      "content": "设置postmanAPI的test\n允许设置多条规则\n\n设置folder上的test\n\n\n允许设置多条规则\n\n\n上下文为class\n\n\n设置collection上的test\n\n\n允许设置多条规则\n\n\n注意collection.postman.test无上下文,即it为null\n\n",
      "url": "/setting/rules/postman_test.html",
      "children": [
        {
          "title": "固定test配置示例如下",
          "url": "/setting/rules/postman_test.html#固定test配置示例如下",
          "content": "固定test配置示例如下postman.test=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "为有指定注解的api加上test",
          "url": "/setting/rules/postman_test.html#为有指定注解的api加上test",
          "content": "为有指定注解的api加上testpostman.test[@com.itangcent.common.annotation.RequiredLogin]=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "为没有指定注解的api加上test",
          "url": "/setting/rules/postman_test.html#为没有指定注解的api加上test",
          "content": "为没有指定注解的api加上testpostman.test[!@com.itangcent.common.annotation.Public]=```pm.test(\"Body is correct\", function () {\n    pm.response.to.have.body(\"response_body_string\");\n});\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\npm.test(\"Status code name has string\", function () {\n    pm.response.to.have.status(\"Created\");\n});\nvar jsonObject = xml2Json(responseBody);\nvar schema = {\n  \"items\": {\n    \"type\": \"boolean\"\n  }\n};\n\nvar data1 = [true, false];\nvar data2 = [true, 123];\n\npm.test('Schema is valid', function() {\n  pm.expect(tv4.validate(data1, schema)).to.be.true;\n  pm.expect(tv4.validate(data2, schema)).to.be.true;\n});\n```\n"
        },
        {
          "title": "在配置中提供多个test,由代码注释来选择使用哪个",
          "url": "/setting/rules/postman_test.html#在配置中提供多个test,由代码注释来选择使用哪个",
          "content": "在配置中提供多个test,由代码注释来选择使用哪个postman.test.groupA=```pm.test(\"Body is correct\", function () {    pm.response.to.have.body(\"response_body_string\");\n});\n```\npostman.test.groupB=```\npm.test(\"Content-Type is present\", function () {\n    pm.response.to.have.header(\"Content-Type\");\n});\n```\npostman.test.groupC=```\npm.test(\"Response time is less than 200ms\", function () {\n    pm.expect(pm.response.responseTime).to.be.below(200);\n});\n```\npostman.test.groupD=```\npm.test(\"Successful POST request\", function () {\n    pm.expect(pm.response.code).to.be.oneOf([201,202]);\n});\n```\npostman.test[#test]=groovy:config.get(\"postman.test.\"+it.doc(\"test\"))\n使用如下:/**  * 获取用户列表\n  *\n  * @param type 用户类型 {@link com.itangcent.common.constant.UserType}\n  * @test groupA\n  */\n@RequestMapping(value = \"/list\", method = RequestMethod.GET)\npublic IResult list(Integer type) {\n    ...\n    return Result.success(Collections.singletonList(userInfo));\n}\n"
        }
      ]
    },
    {
      "title": "postman.prerequestclass.postman.prerequestcollection.postman.prerequest",
      "content": "设置postmanAPI的prerequest\n允许设置多条规则\n\n设置folder上的prerequest\n\n\n允许设置多条规则\n\n\n上下文为class\n\n\n设置collection上的prerequest\n\n\n允许设置多条规则\n\n\n注意collection.postman.prerequest无上下文,即it为null\n\n",
      "url": "/setting/rules/postman_prerequest.html",
      "children": [
        {
          "title": "固定prerequest配置示例如下",
          "url": "/setting/rules/postman_prerequest.html#固定prerequest配置示例如下",
          "content": "固定prerequest配置示例如下postman.prerequest=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "为有指定注解的api加上prerequest",
          "url": "/setting/rules/postman_prerequest.html#为有指定注解的api加上prerequest",
          "content": "为有指定注解的api加上prerequestpostman.prerequest[@com.itangcent.common.annotation.RequiredLogin]=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "为没有指定注解的api加上prerequest",
          "url": "/setting/rules/postman_prerequest.html#为没有指定注解的api加上prerequest",
          "content": "为没有指定注解的api加上prerequestpostman.prerequest[!@com.itangcent.common.annotation.Public]=```pm.environment.get(\"variable_key\");\npm.globals.get(\"variable_key\");\npm.variables.get(\"variable_key\");\npm.environment.set(\"variable_key\", \"variable_value\");\npm.globals.set(\"variable_key\", \"variable_value\");\npm.environment.unset(\"variable_key\");\npm.globals.unset(\"variable_key\");\npm.sendRequest(\"https://postman-echo.com/get\", function (err, response) {\n    console.log(response.json());\n});\n```\n"
        },
        {
          "title": "在配置中提供多个prerequest,由代码注释来选择使用哪个",
          "url": "/setting/rules/postman_prerequest.html#在配置中提供多个prerequest,由代码注释来选择使用哪个",
          "content": "在配置中提供多个prerequest,由代码注释来选择使用哪个postman.prerequest.groupA=```pm.environment.get(\"variable_key\");\n```\npostman.prerequest.groupB=```\npm.globals.get(\"variable_key\");\n```\npostman.prerequest.groupC=```\npm.environment.set(\"variable_key\", \"variable_value\");\n```\npostman.prerequest.groupD=```\npm.globals.set(\"variable_key\", \"variable_value\");\n```\npostman.prerequest[#prerequest]=groovy:config.get(\"postman.prerequest.\"+it.doc(\"prerequest\"))\n使用如下:/**  * 获取用户列表\n  *\n  * @param type 用户类型 {@link com.itangcent.common.constant.UserType}\n  * @prerequest groupA\n  */\n@RequestMapping(value = \"/list\", method = RequestMethod.GET)\npublic IResult list(Integer type) {\n    ...\n    return Result.success(Collections.singletonList(userInfo));\n}\n"
        }
      ]
    },
    {
      "title": "class.prefix.path",
      "content": "设置API请求前缀\n",
      "url": "/setting/rules/class_prefix_path.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/class_prefix_path.html#默认推荐配置",
          "content": "默认推荐配置#Resolve spring properties###set ignoreUnresolved = true\nclass.prefix.path=${server.servlet.context-path}\n###set ignoreUnresolved = false\n"
        },
        {
          "title": "使用推荐配置后, 可识别如下spring配置",
          "url": "/setting/rules/class_prefix_path.html#使用推荐配置后,-可识别如下spring配置",
          "content": "使用推荐配置后, 可识别如下spring配置spring application.properties\nserver.servlet.context-path=/demospring application.yaml/application.yml\nserver:  servlet:\n      context-path: /demo\n"
        },
        {
          "title": "自定义demo",
          "url": "/setting/rules/class_prefix_path.html#自定义demo",
          "content": "自定义democlass.prefix.path=/demo"
        }
      ]
    },
    {
      "title": "constant.field.ignore",
      "content": "忽略常量字段\n",
      "url": "/setting/rules/constant_field_ignore.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/constant_field_ignore.html#默认推荐配置",
          "content": "默认推荐配置#ignore serialVersionUIDconstant.field.ignore=serialVersionUID\n使用如下配置代替:#ignore serialVersionUIDconstant.field.ignore=groovy:it.name()==\"serialVersionUID\"\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/constant_field_ignore.html#demo",
          "content": "demo/**\n * 用户类型\n */\npublic class UserTypeConstant implements Serializable {\n\n    private static final long serialVersionUID = -4607862808303533196L;\n\n    public static final int ADMIN = 1;//管理员\n    public static final int MEMBER = 2;//成员\n    public static final int GUEST = 3;//游客\n\n}\n"
        },
        {
          "title": "对于如下注释",
          "url": "/setting/rules/constant_field_ignore.html#对于如下注释",
          "content": "对于如下注释@see com.itangcent.common.constant.UserTypeConstant或者{@link com.itangcent.common.constant.UserTypeConstant}"
        },
        {
          "title": "将被解析为:",
          "url": "/setting/rules/constant_field_ignore.html#将被解析为",
          "content": "将被解析为:枚举: 1,2,3\n枚举备注: 1 :管理员 2 :成员 3 :游客\n\nmock: @pick([\"1\",\"2\",\"3\"])\n"
        }
      ]
    },
    {
      "title": "field.advanced",
      "content": "提供yapi的高级设置信息, 返回一个json字符串或者map来将信息设置到yapi的高级设置中\n",
      "url": "/setting/rules/field_advanced.html",
      "children": [
        {
          "title": "例如: 支持javax.validation.constraints.Max&Min",
          "url": "/setting/rules/field_advanced.html#例如-支持javax.validation.constraints.max&min",
          "content": "例如: 支持javax.validation.constraints.Max&Min# Max、Min  -advanced\nfield.advanced[@javax.validation.constraints.Max]=groovy:```\n    return [maximum:it.ann(\"javax.validation.constraints.Max\")]\n```\nfield.advanced[@javax.validation.constraints.Min]=groovy:```\n    return [minimum:it.ann(\"javax.validation.constraints.Min\")]\n```\n\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_advanced.html#demo",
          "content": "demoValidationDemoDto.javapublic class ValidationDemoDto {\n    @Min(666)\n    private Integer minInt;\n\n    @Max(999)\n    private Integer maxInt;\n\n    @Min(666)\n    private Double minDouble;\n\n    @Max(999)\n    private double maxDouble;\n\n    @Min(666)\n    @Max(999)\n    private Integer rangeInt;\n\n    @Min(66)\n    @Max(9999)\n    private float rangeFloat;\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_advanced.html#作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nminInt\ninteger\n非必须\n\n\n最小值: 666\n\n\nmaxInt\ninteger\n非必须\n\n\n最大值: 999\n\n\nminDouble\nnumber\n非必须\n\n\n最小值: 666\n\n\nmaxDouble\nnumber\n非必须\n\n\n最大值: 999\n\n\nrangeInt\ninteger\n非必须\n\n\n最大值: 999最小值: 666\n\n\nrangeFloat\nnumber\n非必须\n\n\n最大值: 9999最小值: 666\n\n\n"
        }
      ]
    },
    {
      "title": "enum.use.custom",
      "content": "用于设置使用@see枚举类型时的默认取值字段\n假定有如下枚举类public enum UserType {    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\n对于如下字段/*** 用户类型\n*\n* @see UserType\n*/\nprivate int type;\n",
      "url": "/setting/rules/enum_use_custom.html",
      "children": [
        {
          "title": "默认情况",
          "url": "/setting/rules/enum_use_custom.html#默认情况",
          "content": "默认情况由于UserType中不存在字段type, 默认情况下这里的@see UserType会被忽略掉\n"
        },
        {
          "title": "增加配置",
          "url": "/setting/rules/enum_use_custom.html#增加配置",
          "content": "增加配置做如下配置,设置@see UserType时默认使用code字段作为取值\nenum.use.custom[com.itangcent.common.constant.UserType]=code则上述注释将等价于\n/*** 用户类型\n* @see UserType#code\n*/\nprivate int type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "统一处理",
          "url": "/setting/rules/enum_use_custom.html#统一处理",
          "content": "统一处理特殊的, 声明如下接口:\npackage com.itangcent.common.constant;\npublic interface BaseEnum {\n\n    Long getCode();\n}\n改造UserType,使其继承BaseEnum\npublic enum UserType implements BaseEnum {    ...\n}\n则可做如下配置,将所有继承BaseEnum的类默认使用code字段作为取值\nenum.use.custom[groovy:it.isExtend(\"com.itangcent.common.constant.BaseEnum\")]=code"
        }
      ]
    },
    {
      "title": "enum.use.by.type",
      "content": "默认使用类型一致的字段, 优先级低于enum.use.custom\n假定有如下枚举类public enum UserType {    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\n对于如下字段/*** 用户类型\n*\n* @see UserType\n*/\nprivate int type;\n推荐配置中有enum.use.by.type=true上述注释将被处理为\n/*** 用户类型\n* @see UserType#code\n*/\nprivate int type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n",
      "url": "/setting/rules/enum_use_by_type.html",
      "children": []
    },
    {
      "title": "enum.use.ordinal",
      "content": "用于设置使用@see枚举类型时的默认使用ordinal作为取值\n优先级低于enum.use.custom和enum.use.by.type\n所以要使用enum.use.ordinal需要先在推荐配置中取消enum.use.by.type\n假定有如下枚举类public enum UserType {    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\n对于如下字段/*** 用户类型\n*\n* @see UserType\n*/\nprivate int type;\n",
      "url": "/setting/rules/enum_use_ordinal.html",
      "children": [
        {
          "title": "默认情况",
          "url": "/setting/rules/enum_use_ordinal.html#默认情况",
          "content": "默认情况由于UserType中不存在字段type, 默认情况下这里的@see UserType会被忽略掉\n"
        },
        {
          "title": "增加配置",
          "url": "/setting/rules/enum_use_ordinal.html#增加配置",
          "content": "增加配置做如下配置,设置@see UserType时默认使用ordinal字段作为取值\nenum.use.ordinal[com.itangcent.common.constant.UserType]=true则上述注释将等价于\n/*** 用户类型\n* @see UserType#ordinal()\n*/\nprivate int type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 0,1,2枚举备注: 0 :管理员 1 :成员 2 :游客mock: @pick([0,1,2])\n\n\n"
        },
        {
          "title": "统一处理",
          "url": "/setting/rules/enum_use_ordinal.html#统一处理",
          "content": "统一处理特殊的, 声明如下接口:\npackage com.itangcent.common.constant;\npublic interface BaseEnum {\n}\n改造UserType,使其继承BaseEnum\npublic enum UserType implements BaseEnum {    ...\n}\n则可做如下配置,将所有继承BaseEnum的类默认使用ordinal作为取值\nenum.use.ordinal[groovy:it.isExtend(\"com.itangcent.common.constant.BaseEnum\")]=true"
        },
        {
          "title": "整个项目所有@see 枚举类都默认使用ordinal作为取值",
          "url": "/setting/rules/enum_use_ordinal.html#整个项目所有see-枚举类都默认使用ordinal作为取值",
          "content": "整个项目所有@see 枚举类都默认使用ordinal作为取值enum.use.ordinal=true"
        }
      ]
    },
    {
      "title": "enum.use.name",
      "content": "用于设置使用@see枚举类型时的默认使用name作为取值\n优先级低于enum.use.custom和enum.use.by.type\n所以要使用enum.use.name需要先在推荐配置中取消enum.use.by.type\n假定有如下枚举类public enum UserType {    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int code;\n    private String desc;\n\n    public int getCode() {\n        return code;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int code, String desc) {\n        this.code = code;\n        this.desc = desc;\n    }\n}\n对于如下字段/*** 用户类型\n*\n* @see UserType\n*/\nprivate int type;\n",
      "url": "/setting/rules/enum_use_name.html",
      "children": [
        {
          "title": "默认情况",
          "url": "/setting/rules/enum_use_name.html#默认情况",
          "content": "默认情况由于UserType中不存在字段type, 默认情况下这里的@see UserType会被忽略掉\n"
        },
        {
          "title": "增加配置",
          "url": "/setting/rules/enum_use_name.html#增加配置",
          "content": "增加配置做如下配置,设置@see UserType时默认使用name字段作为取值\nenum.use.name[com.itangcent.common.constant.UserType]=true则上述注释将等价于\n/*** 用户类型\n* @see UserType#name()\n*/\nprivate String type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\nstring\n非必须\n\n用户类型\n枚举: ADMIN,MEMBER,GUEST枚举备注: ADMIN :管理员 MEMBER :成员 GUEST :游客mock: @pick([ADMIN,MEMBER,GUEST])\n\n\n"
        },
        {
          "title": "统一处理",
          "url": "/setting/rules/enum_use_name.html#统一处理",
          "content": "统一处理特殊的, 声明如下接口:\npackage com.itangcent.common.constant;\npublic interface BaseEnum {\n}\n改造UserType,使其继承BaseEnum\npublic enum UserType implements BaseEnum {    ...\n}\n则可做如下配置,将所有继承BaseEnum的类默认使用name作为取值\nenum.use.name[groovy:it.isExtend(\"com.itangcent.common.constant.BaseEnum\")]=true"
        },
        {
          "title": "整个项目所有@see 枚举类都默认使用name作为取值",
          "url": "/setting/rules/enum_use_name.html#整个项目所有see-枚举类都默认使用name作为取值",
          "content": "整个项目所有@see 枚举类都默认使用name作为取值enum.use.name=true"
        }
      ]
    },
    {
      "title": "field.default.value(v1.7.1+)",
      "content": "用于设置字段的默认值\n",
      "url": "/setting/rules/field_default_value.html",
      "children": [
        {
          "title": "原生编码支持",
          "url": "/setting/rules/field_default_value.html#原生编码支持",
          "content": "原生编码支持默认的所有含有默认初始值的字段, 取其默认初始值.如:private Integer code = 200;//响应码"
        },
        {
          "title": "额外的配置",
          "url": "/setting/rules/field_default_value.html#额外的配置",
          "content": "额外的配置配置如下:field.default.value=#defaultDemoDto.javapublic class DemoDto{\n    /**\n     * 价格\n     * @default 666\n     */\n    @NotNull\n    private Float price;\n\n    ...\n}\n导出结果如下:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nprice\nnumber\n必须\n666\n价格\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.demo",
      "content": "字段示例信息, 作用于yapi内多处地方以及markdown/postman中展示json的地方\n",
      "url": "/setting/rules/field_demo.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/field_demo.html#demo",
          "content": "demo配置如下:field.demo=#demo使用如下:    /**     * @demo tangcent\n     */\n    private String name;//用户名\n"
        },
        {
          "title": "通过字段名及类型等特征来配置demo规则",
          "url": "/setting/rules/field_demo.html#通过字段名及类型等特征来配置demo规则",
          "content": "通过字段名及类型等特征来配置demo规则配置稍难, 零侵入\n非常适合字段名定义很规范的项目\n配置方式为: field.demo[field:path|type]=xxx,参照下方示例.\n#常见的响应mockfield.demo[field:c|int]=0\nfield.demo[field:code|int]=0\nfield.demo[field:status|int]=0\nfield.demo[field:ok|boolean]=true\nfield.demo[field:success|boolean]=true\nfield.demo[field:m|string]=ok\nfield.demo[field:msg|string]=ok\nfield.demo[field:message|string]=ok\nfield.demo[field:errMsg|string]=failed\n\n#常见的分页mock\nfield.demo[field:*.p|int]=2\nfield.demo[field:*.l|int]=100\nfield.demo[field:*.t|int]=1000\nfield.demo[field:*.offset|int]=50\nfield.demo[field:*.page|int]=2\nfield.demo[field:*.pageIndex|int]=2\nfield.demo[field:*.pageSize|int]=100\nfield.demo[field:*.limit|int]=100\nfield.demo[field:*.total|int]=1000\n\n# 整型的xxxTime mock为时间戳\nfield.demo[field:*Time|int]=1681649569869\n\n#性别\nfield.demo[field:*.sex|int]=1\nfield.demo[field:*.sex|string]=男\nfield.demo[field:*.gender|int]=1\nfield.demo[field:*.gender|string]=女\n\n#用户信息相关\nfield.demo[field:*.name|string]=tangcent\nfield.demo[field:*.age|int]=18\nfield.demo[field:*.phone|string]=18888888888\nfield.demo[field:*.mobile|string]=18888888888\nfield.demo[field:*Phone|string]=18888888888\nfield.demo[field:*Mobile|string]=18888888888\nfield.demo[field:*.provinceName|string]=广东省\nfield.demo[field:*ProvinceName|string]=广东省\nfield.demo[field:*.cityName|string]=深圳市\nfield.demo[field:*CityName|string]=深圳市\nfield.demo[field:*.districtName|string]=福田区\nfield.demo[field:*DistrictName|string]=福田区\nfield.demo[field:*.address]=福中三路市民中心C区\n\n#链接\nfield.demo[field:*.url|string]=https://github.com/\nfield.demo[field:*.link|string]=https://github.com/\nfield.demo[field:*.linkUrl|string]=https://github.com/\nfield.demo[field:*Link|string]=https://github.com/\n\n# integer和number更自然一些\nfield.demo[field:*Type|int]=1\nfield.demo[field:*Status|int]=1\nfield.demo[field:*.type|int]=1\nfield.demo[field:*.status|int]=1\nfield.demo[field:*|int]=9999\nfield.demo[field:*|number]=9999.99\n"
        }
      ]
    },
    {
      "title": "field.doc(doc.field)",
      "content": "字段的额外注释\n",
      "url": "/setting/rules/field_doc.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/field_doc.html#默认推荐配置",
          "content": "默认推荐配置#deprecated info(java)field.doc[#deprecated]=groovy:\"\\n「已废弃」\" + it.doc(\"deprecated\")\nfield.doc[@java.lang.Deprecated]=「已废弃」\n\n#deprecated info(kotlin)\nfield.doc[@kotlin.Deprecated]=groovy:\"\\n「已废弃」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "添加对swagger @ApiModelProperty支持",
          "url": "/setting/rules/field_doc.html#添加对swagger-apimodelproperty支持",
          "content": "添加对swagger @ApiModelProperty支持field.doc=@io.swagger.annotations.ApiModelProperty#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_doc.html#demo",
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    /**\n     * @deprecated 不再使用\n     */\n    @ApiModelProperty(value = \"字段A\", required = true)\n    private String a;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_doc.html#作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\nstring\n非必须\n\n字段A「已废弃」不再使用\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.ignore",
      "content": "忽略字段(设置某些字段不出现在json中,或不需要请求时给出)\n",
      "url": "/setting/rules/field_ignore.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/field_ignore.html#默认推荐配置",
          "content": "默认推荐配置#Support for Jackson annotationsfield.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value\n\n#Support for Gson annotations\nfield.ignore=!@com.google.gson.annotations.Expose#serialize\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_ignore.html#demo",
          "content": "demoTestJsonIgnoreBean.javapublic class TestJsonIgnoreBean {\n    @Expose(serialize = true)\n    private Long shouldNotIgnoreForGson;\n\n    @Expose(serialize = false)\n    private Long shouldIgnoreForGson;\n\n    @JsonIgnore(false)\n    private Long shouldNotIgnoreForJackson;\n\n    @JsonIgnore\n    private Long shouldIgnoreForJackson;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_ignore.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nshouldNotIgnoreForGson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nshouldNotIgnoreForJackson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "定制化配置示例",
          "url": "/setting/rules/field_ignore.html#定制化配置示例",
          "content": "定制化配置示例\n忽略指定名称的字段:\n\n\n配置如下\n# ignore field 'log'\nfield.ignore=log\n\n\n\n将忽略如下字段\nprivate String log;\n\n\n\n\n\n忽略指定类型的字段:\n\n\n配置如下\n# ignore field 'log' typed xxx.xxx.Log\nfield.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n\n将忽略如下字段\nprivate Log xxx;\n\n\n\n\n\n忽略指定modifier的字段:\n\n\n配置如下\n#ignore transient field\nfield.ignore=groovy:it.hasModifier(\"transient\")||it.hasModifier(\"protected\")\n\n\n\n将忽略如下字段\nprivate transient Int xxx;\nprotected Long yyy;\n\n\n\n\n"
        }
      ]
    },
    {
      "title": "field.mockfield.mock.resolveProperty",
      "content": "用于生成yapi相关mock信息\n用以开关是否解析field.mock规则结果中的占位符如${float_with_two}\n默认为true,如果不希望解析, 可以设置为关闭\nfield.mock.resolveProperty=false",
      "url": "/setting/rules/field_mock.html",
      "children": [
        {
          "title": "默认推荐配置有三部分",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分",
          "content": "默认推荐配置有三部分"
        },
        {
          "title": "允许通过注释@mock定义mock规则",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-允许通过注释mock定义mock规则",
          "content": "允许通过注释@mock定义mock规则#yapi mockfield.mock=#mock\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-demo",
          "content": "demoValidationDemoDto.javapublic class ValidationDemoDto {\n    @NotNull\n    private String str;\n\n    @Min(666)\n    private Integer minInt;\n\n    @Max(999)\n    private Integer maxInt;\n\n    @Min(666)\n    private Double minDouble;\n\n    @Max(999)\n    private double maxDouble;\n\n    @Min(666)\n    @Max(999)\n    private Integer rangeInt;\n\n    @Min(66)\n    @Max(9999)\n    private float rangeFloat;\n\n    @Negative\n    private Integer negative;\n\n    @NegativeOrZero\n    private Integer negativeOrZero;\n\n    @Positive\n    private Integer positive;\n\n    @PositiveOrZero\n    private Integer positiveOrZero;\n\n    @Positive\n    private Float positiveFloat;\n\n    @PositiveOrZero\n    private float positiveOrZeroFloat;\n\n    @Email\n    private String email;\n\n    @AssertTrue\n    private boolean assertTrue;\n\n    @AssertFalse\n    private boolean assertFalse;\n\n    //getter&setter\n}\n\n作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nrangeInt\ninteger\n非必须\n\n\nmock: @integer(666,999)\n\n\npositiveOrZeroFloat\nnumber\n非必须\n\n\nmock: @float(0,88888888,6)\n\n\nmaxInt\ninteger\n非必须\n\n\nmock: @integer(0,999)\n\n\nminInt\ninteger\n非必须\n\n\nmock: @integer(666)\n\n\nassertFalse\nboolean\n非必须\n\n\nmock: false\n\n\nmaxDouble\nnumber\n非必须\n\n\nmock: @float(0,999)\n\n\nminDouble\nnumber\n非必须\n\n\nmock: @float(666)\n\n\npositive\ninteger\n非必须\n\n\nmock: @integer(1,88888888)\n\n\npositiveOrZero\ninteger\n非必须\n\n\nmock: @integer(0,88888888)\n\n\nstr\nstring\n必须\n\n\n\n\n\nnegative\ninteger\n非必须\n\n\nmock: @integer(-888888888,-1)\n\n\nrangeFloat\nnumber\n非必须\n\n\nmock: @float(66,9999,6)\n\n\nassertTrue\nboolean\n非必须\n\n\nmock: true\n\n\nnegativeOrZero\ninteger\n非必须\n\n\nmock: @integer(-888888888,0)\n\n\npositiveFloat\nnumber\n非必须\n\n\nmock: @float(0.01,88888888,6)\n\n\nemail\nstring\n非必须\n\n\nmock: @email\n\n\n"
        },
        {
          "title": "通用mock",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-通用mock",
          "content": "通用mock#mock for date\n###set resolveMulti = first\njava_date_types=[\"java.util.Date\",\"java.sql.Timestamp\",\"java.time.LocalDate\",\"java.time.LocalDateTime\"]\nfield.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()==\"java.lang.String\"] = groovy:\"@date\"\nfield.mock[groovy:${java_date_types}.contains(it.type().name())&&it.jsonType().name()==\"java.lang.Long\"] = groovy:\"@timestamp@string(\\\"number\\\", 3)\"\n###set resolveMulti = error\n"
        },
        {
          "title": "javax.validation相关mock",
          "url": "/setting/rules/field_mock.html#默认推荐配置有三部分-javax.validation相关mock",
          "content": "javax.validation相关mock# mock for javax.validation\n###set resolveMulti = first\n# define var\nnumber_min=-9999\nnumber_max=9999\nfloat_dmin=2\njava_integer_types=[\"java.lang.Integer\",\"int\",\"java.lang.Long\",\"long\",\"java.lang.Short\",\"short\",\"java.math.BigInteger\"]\njava_float_types=[\"java.lang.Float\",\"float\",\"java.lang.Double\",\"double\",\"java.math.BigDecimal\"]\n# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?\"@integer\":\"@float\"\n\n# AssertTrue|AssertFalse|Email\nfield.mock[@javax.validation.constraints.AssertTrue]=true\nfield.mock[@javax.validation.constraints.AssertFalse]=false\nfield.mock[@javax.validation.constraints.Email]=groovy:\"@email\"\n\n# Positive&PositiveOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(1,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0.01,${number_max},${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,${number_max},${float_dmin})\"\n\n# Negative&NegativeOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},-1)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},0)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0.01,${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0,${float_dmin})\"\n\n# Max+Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\",${float_dmin})\"\n\n# Max|Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\")\"\n\n# DecimalMax+DecimalMin\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\n\n# DecimalMax|DecimalMin\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",${float_dmin})\"\n\n###set resolveMulti = error\n"
        },
        {
          "title": "使用示例",
          "url": "/setting/rules/field_mock.html#使用示例",
          "content": "使用示例配置如下#yapi mockfield.mock=#mock\n\n#小数点后两位\nfloat_with_two=@natural(0,10000).@natural(0,100)\nDemoDto.javapublic class DemoDto {\n    /**\n     * 价格\n     * @mock ${float_with_two}\n     */\n    @NotNull\n    private Float price;\n\n}\n导出结果\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nprice\nnumber\n必须\n\n价格\nmock: @natural(0,10000).@natural(0,100)\n\n\n"
        }
      ]
    },
    {
      "title": "field.name",
      "content": "用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)\n",
      "url": "/setting/rules/field_name.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/field_name.html#默认推荐配置",
          "content": "默认推荐配置#Support for Jackson annotationsfield.name=@com.fasterxml.jackson.annotation.JsonProperty#value\n\n#Support for Gson annotations\nfield.name=@com.google.gson.annotations.SerializedName#value\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_name.html#demo",
          "content": "demoTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(\"a\")\n    private Long propertyA;\n\n    @SerializedName(\"b\")\n    private Long propertyB;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_name.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nb\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "配置驼峰转下划线",
          "url": "/setting/rules/field_name.html#配置驼峰转下划线",
          "content": "配置驼峰转下划线#convert camel to underlinefield.name=groovy:tool.camel2Underline(it.name())\n"
        }
      ]
    },
    {
      "title": "field.required",
      "content": "用于标记字段是否为必须(即不可为空)\n",
      "url": "/setting/rules/field_required.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/field_required.html#默认推荐配置",
          "content": "默认推荐配置#Support for javax.validation annotationsfield.required=@\"javax.validation.constraints.NotBlank\nfield.required=@javax.validation.constraints.NotNull\nfield.required=@javax.validation.constraints.NotEmpty\n"
        },
        {
          "title": "添加对swagger @ApiModelProperty支持",
          "url": "/setting/rules/field_required.html#添加对swagger-apimodelproperty支持",
          "content": "添加对swagger @ApiModelProperty支持field.required=@io.swagger.annotations.ApiModelProperty#required"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_required.html#demo",
          "content": "demoSwaggerModel.javapublic class SwaggerModel {\n    @ApiModelProperty(value = \"字段A\", required = true)\n    private String a;\n\n    public String getA() {\n        return a;\n    }\n\n    public void setA(String a) {\n        this.a = a;\n    }\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_required.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\ninteger\n必须\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "field.order",
      "content": "返回一个int值, 用于设置字段在结果中的顺序\n注意: 优先级低于field.order.with，一般不建议同时使用。",
      "url": "/setting/rules/field_order.html",
      "children": [
        {
          "title": "推荐配置中能找到一些field.order相关的配置",
          "url": "/setting/rules/field_order.html#推荐配置中能找到一些field.order相关的配置",
          "content": "推荐配置中能找到一些field.order相关的配置通过字段上注释顺序\nfield.order=#order通过JsonProperty设置顺序\nfield.order=@com.fasterxml.jackson.annotation.JsonProperty#index"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_order.html#demo",
          "content": "demo在推荐配置中选中field.order=@com.fasterxml.jackson.annotation.JsonProperty#indexTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(value = \"a\", index = 99)\n    private Long propertyA;\n\n    private Long propertyB;\n\n    @JsonProperty(value = \"c\", index = 0)\n    private Long propertyC;\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_order.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n\n\n\n\nc\ninteger\n\n\npropertyB\ninteger\n\n\na\ninteger\n\n\n"
        }
      ]
    },
    {
      "title": "field.order.with",
      "content": "类似于comparator, 通过比较两个字段, 返回-1,0,1来表示被比较的两个字段在结果中的顺序\n注意: 优先级高于field.order, 一般不建议同时使用。",
      "url": "/setting/rules/field_order_with.html",
      "children": [
        {
          "title": "推荐配置中能找到一些field.order.with相关的配置",
          "url": "/setting/rules/field_order_with.html#推荐配置中能找到一些field.order.with相关的配置",
          "content": "推荐配置中能找到一些field.order.with相关的配置通过注解JsonPropertyOrder控制顺序\n#[Jackson_JsonPropertyOrder]\n#Support for Jackson annotation JsonPropertyOrder\nfield.order=@com.fasterxml.jackson.annotation.JsonProperty#index\njson.class.parse.before[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```\n    def properties = it.annValue(\"com.fasterxml.jackson.annotation.JsonPropertyOrder\")\n    properties.each { property ->\n        session.push(\"JsonPropertyOrder-properties-\"+it.name(), property)\n    }\n    session.set(\"JsonPropertyOrder-alphabetic\"+it.name(),\n        it.annValue(\"com.fasterxml.jackson.annotation.JsonPropertyOrder\",\"alphabetic\") ?: false)\n```\njson.class.parse.after[@com.fasterxml.jackson.annotation.JsonPropertyOrder]=groovy:```\n    session.remove(\"JsonPropertyOrder-properties-\"+it.name())\n    session.remove(\"JsonPropertyOrder-\"+it.name())\n```\nfield.order=groovy:```\n    def index = session.get(\"JsonPropertyOrder-properties-\"+ it.containingClass().name())?.indexOf(it.name())\n    if (index == -1) {\n        return null\n    }else{\n        return index\n    }\n```\nfield.order.with=groovy:```\n    def orderedProperties = session.get(\"JsonPropertyOrder-properties-\"+ a.containingClass().name())\n    if(a.name() in orderedProperties) {\n         if(b.name() in orderedProperties){\n             return orderedProperties.indexOf(a.name()) - orderedProperties.indexOf(b.name())\n         }else{\n             return -1\n         }\n    } else if(b.name() in orderedProperties){\n        return 1\n    } else if(session.get(\"JsonPropertyOrder-alphabetic\"+a.containingClass().name())){\n        return a.name().compareTo(b.name())\n    } else {\n        return null\n    }\n```\n子类字段优先\n# child fields firstfield.order.with=groovy:```\n    def aDefineClass = a.defineClass()\n    def bDefineClass = b.defineClass()\n    if(aDefineClass==bDefineClass){\n        return null\n    }else if(aDefineClass.isExtend(bDefineClass.name())){\n        return -1\n    }else{\n        return 1\n    }\n```\n父类字段优先\n# parent fields firstfield.order.with=groovy:```\n    def aDefineClass = a.defineClass()\n    def bDefineClass = b.defineClass()\n    if(aDefineClass==bDefineClass){\n        return null\n    }else if(aDefineClass.isExtend(bDefineClass.name())){\n        return 1\n    }else{\n        return -1\n    }\n```\n按字典升序\n# fields alphabetically orderedfield.order.with=groovy:```\n    return a.name().compareTo(b.name())\n```\n按字典降序\n# fields descending alphabetically orderedfield.order.with=groovy:```\n    return -a.name().compareTo(b.name())\n```\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/field_order_with.html#demo",
          "content": "demo在推荐配置中选中Jackson_JsonPropertyOrderUserInfo.java@JsonPropertyOrder(value = {\"name\", \"birthDay\"}, alphabetic = true)public class UserInfo {\n\n    private Long id;//用户id\n\n    /**\n     * @see com.itangcent.common.constant.UserType\n     */\n    private int type;//用户类型\n\n    /**\n     * @mock tangcent\n     * @order 1\n     */\n    @NotBlank\n    private String name;//用户名\n\n    /**\n     * 年龄\n     *\n     * @mock 1${digit}\n     */\n    @NotNull\n    private Integer age;\n\n    /**\n     * @deprecated It's a secret\n     */\n    private Integer sex;\n\n    //生日\n    private LocalDate birthDay;\n\n    //注册时间\n    private LocalDateTime regtime;\n}\n\n"
        },
        {
          "title": "解析为json5:",
          "url": "/setting/rules/field_order_with.html#demo-解析为json5",
          "content": "解析为json5:{    \"name\": \"\",\n    \"birthDay\": \"\", //生日\n    \"age\": 0, //年龄\n    \"id\": 0, //用户id\n    \"regtime\": \"\", //注册时间\n    \"sex\": 0, //「已废弃」It's a secret\n    /**\n     * 1 :管理员\n     * 2 :成员\n     * 3 :游客\n     */\n    \"type\": 0\n}\n"
        }
      ]
    },
    {
      "title": "field.type",
      "content": "指定字段的实际数据类型(用于json中字段类型与类中字段类型不一致)\n",
      "url": "/setting/rules/field_type.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/field_type.html#demo",
          "content": "demo配置如下:field.type=#typefield.type[com.itangcent.common.model.TestJsonFieldBean#b]=java.lang.Integer\nTestJsonFieldBean.java    /**     * @type java.lang.Integer\n     */\n    private String a;\n\n    private String b;\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/field_type.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nb\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "folder.name",
      "content": "用于设置API所属文件夹的名称\n缺省情况下, 默认使用api所在类作为所属文件夹\n",
      "url": "/setting/rules/folder_name.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/folder_name.html#demo",
          "content": "demo配置如下:# read folder name from tag `folder`folder.name=#folder\n使用如下:/*** 一些Mock相关的API\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @folder Mock字符串\n    */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n默认情况下上述api会归属到文件夹一些Mock相关的API,加上注释@folder Mock字符串后归属到Mock字符串"
        }
      ]
    },
    {
      "title": "ignore",
      "content": "用于忽略class/method, 不进行解析\n注释在class上时,整个类将被忽略\n注释在method上时,当前方法将被忽略\n",
      "url": "/setting/rules/ignore.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/ignore.html#默认推荐配置",
          "content": "默认推荐配置ignore=#ignore"
        },
        {
          "title": "demo",
          "url": "/setting/rules/ignore.html#demo",
          "content": "demo在类上注释@ignore忽略当前类\n/*** Mock Apis\n*\n* @ignore\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n在方法上注释@ignore忽略当前API\n/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n        * Mock String\n        * @ignore\n        */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "mdoc.class.filter",
      "content": "用于选择哪些类可以导出方法(rpc)文档, 根据当前项目情况\nDemo如果所有的RPC接口类都以Client结尾, 则可配置:\nmdoc.class.filter=groovy:it.name().endsWith(\"Client\")如果所有的RPC接口类包都在a.b.c.client, 则可配置:\nmdoc.class.filter=groovy:it.name().startsWith(\"a.b.c.client\")",
      "url": "/setting/rules/mdoc_class_filter.html",
      "children": []
    },
    {
      "title": "mdoc.method.path",
      "content": "用于设置方法文档(rpc)的路径\n为了防止重载方法覆盖,默认生成的path后加上了参数信息:$className/$methodName/$args\n根据项目情况, 可自行配置以简化路径长度\n",
      "url": "/setting/rules/mdoc_method_path.html",
      "children": [
        {
          "title": "修改默认行为",
          "url": "/setting/rules/mdoc_method_path.html#修改默认行为",
          "content": "修改默认行为假设有如下类package com.itangcent.dubbo.demo.client;\n/**\n * 用户相关Client\n *\n * @module user_dubbo\n */\npublic interface UserClient {\n\n    /**\n     * 更新用户名\n     *\n     * @param id      用户id\n     * @param newName 新的用户名\n     * @param slogon  个人签名\n     * @deprecated 改用{@link #update(UserInfo)}\n     */\n    public UserInfo set(long id, String newName,\n                        String slogon,\n                        long times);\n}\n默认情况下导出的路径为:\n/com.itangcent.dubbo.demo.client.UserClient/set/long/java.lang.String/java.lang.String/long/\n如果确认无重载方法, 可以尝试去掉参数信息:配置如下:\nmdoc.method.path=groovy:it.containingClass().name()+\"/\"+it.name()导出的接口路径为: /com.itangcent.dubbo.demo.client.UserClient/set\n可以尝试去掉包名:配置如下:\nmdoc.method.path=groovy:it.containingClass().getSimpleName()+\"/\"+it.name()导出的接口路径为:/UserClient/set\n可以进一步将类名转换为小写:配置如下:\nmdoc.method.path=groovy:it.containingClass().getSimpleName().toLowerCase()+\"/\"+it.name()导出的接口路径为:/userclient/update\n"
        }
      ]
    },
    {
      "title": "mdoc.method.http.method",
      "content": "设置方法文档(rpc)HTTP请求方式, 默认POST\n",
      "url": "/setting/rules/mdoc_method_http_method.html",
      "children": [
        {
          "title": "修改默认行为",
          "url": "/setting/rules/mdoc_method_http_method.html#修改默认行为",
          "content": "修改默认行为将无参方法设置为GET配置如下:\nmdoc.method.http.method=groovy:it.argCnt()==0?\"GET\":null"
        }
      ]
    },
    {
      "title": "method.doc(doc.method)",
      "content": "方法(API)的额外注释\n",
      "url": "/setting/rules/method_doc.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/method_doc.html#默认推荐配置",
          "content": "默认推荐配置#deprecated info(java)method.doc[#deprecated]=groovy:\"\\n「已废弃」\" + it.doc(\"deprecated\")\nmethod.doc[@java.lang.Deprecated]=「已废弃」\n\nmethod.doc[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「已废弃」\" + it.containingClass().doc(\"deprecated\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「已废弃」\n\n\n#deprecated info(kotlin)\nmethod.doc[@kotlin.Deprecated]=groovy:\"\\n「已废弃」\" + it.ann(\"kotlin.Deprecated\",\"message\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「已废弃」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n"
        },
        {
          "title": "添加对swagger @ApiOperation支持",
          "url": "/setting/rules/method_doc.html#添加对swagger-apioperation支持",
          "content": "添加对swagger @ApiOperation支持method.doc=@io.swagger.annotations.ApiOperation#value"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_doc.html#demo",
          "content": "demo/**\n* Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @ApiOperation(value = \"mock string\")\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "method.content.type",
      "content": "用于设置API请求默认的content-type, 插件依然会在必要的时候强行覆盖掉\n如当遇到@RequestBody时, 将被强行覆盖为application/json\n",
      "url": "/setting/rules/method_content_type.html",
      "children": [
        {
          "title": "默认情况下, 插件优先使用application/x-www-form-urlencoded, 如希望优先使用multipart/form-data",
          "url": "/setting/rules/method_content_type.html#默认情况下,-插件优先使用applicationx-www-form-urlencoded,-如希望优先使用multipartform-data",
          "content": "默认情况下, 插件优先使用application/x-www-form-urlencoded, 如希望优先使用multipart/form-data配置如下:method.content.type=multipart/form-data"
        }
      ]
    },
    {
      "title": "method.default.http.method",
      "content": "设置默认的api的HttpMethod\n缺省情况下, 当API上未指定HttpMethod, 且无特殊参数时默认使用GET\n",
      "url": "/setting/rules/method_default_http_method.html",
      "children": [
        {
          "title": "如希望默认使用POST",
          "url": "/setting/rules/method_default_http_method.html#如希望默认使用post",
          "content": "如希望默认使用POST配置如下:method.default.http.method=POST"
        }
      ]
    },
    {
      "title": "method.additional.header",
      "content": "API需要额外的header\n",
      "url": "/setting/rules/method_additional_header.html",
      "children": [
        {
          "title": "如JWT, 所有的接口都需要在header中携带token",
          "url": "/setting/rules/method_additional_header.html#如jwt,-所有的接口都需要在header中携带token",
          "content": "如JWT, 所有的接口都需要在header中携带tokenmethod.additional.header={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true, demo:\"\"}"
        },
        {
          "title": "如果需要排除指定开放的接口不需要token可以这样配置:",
          "url": "/setting/rules/method_additional_header.html#如果需要排除指定开放的接口不需要token可以这样配置",
          "content": "如果需要排除指定开放的接口不需要token可以这样配置:假定有如下注解:\npackage com.itangcent.common.annotation;\n/**\n * 声明接口为公开接口\n */\n@Documented\n@Retention(RUNTIME)\n@Target({TYPE, METHOD})\npublic @interface Public {\n}\n\n则可如此配置\nmethod.additional.header[!@com.itangcent.common.annotation.Public]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}等价于\nmethod.additional.header[groovy:!it.hasAnn(\"com.itangcent.common.annotation.Public\")]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_additional_header.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * public api\n    * Token is not required\n    */\n    @Public\n    @GetMapping(\"/apiWithoutToken\")\n    public Result apiWithoutToken() {\n        return Result.success(\"no token\");\n    }\n\n    /**\n    * private api\n    * Token is required\n    */\n    @GetMapping(\"/apiWithToken\")\n    public Result apiWithToken() {\n        return Result.success(\"wow,you got a token\");\n    }\n\n}\n"
        },
        {
          "title": "如果需要针对指定包下添加header",
          "url": "/setting/rules/method_additional_header.html#如果需要针对指定包下添加header",
          "content": "如果需要针对指定包下添加headermethod.additional.header[groovy:it.containingClass().name().startsWith(\"com.test.api\")]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}"
        },
        {
          "title": "同理如果指定包下不需要添加header则取反就行了",
          "url": "/setting/rules/method_additional_header.html#同理如果指定包下不需要添加header则取反就行了",
          "content": "同理如果指定包下不需要添加header则取反就行了method.additional.header[groovy:!it.containingClass().name().startsWith(\"com.test.api\")]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}"
        },
        {
          "title": "支持添加多个header",
          "url": "/setting/rules/method_additional_header.html#支持添加多个header",
          "content": "支持添加多个headermethod.additional.header[groovy:it.containingClass().name().startsWith(\"com.test.api\")]={name: \"a\",value: \"\",desc: \"\",required:true}method.additional.header[groovy:it.containingClass().name().startsWith(\"com.test.api\")]={name: \"b\",value: \"\",desc: \"\",required:true}\n"
        }
      ]
    },
    {
      "title": "method.additional.param",
      "content": "API需要额外的param\n仅适用于url参数,不支持form/body\n",
      "url": "/setting/rules/method_additional_param.html",
      "children": [
        {
          "title": "例如接口都需要在param中携带token",
          "url": "/setting/rules/method_additional_param.html#例如接口都需要在param中携带token",
          "content": "例如接口都需要在param中携带tokenmethod.additional.param={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true}"
        },
        {
          "title": "如果需要排除指定开放的接口不需要token可以这样配置:",
          "url": "/setting/rules/method_additional_param.html#如果需要排除指定开放的接口不需要token可以这样配置",
          "content": "如果需要排除指定开放的接口不需要token可以这样配置:假定有如下注解:\npackage com.itangcent.common.annotation;\n/**\n * 声明接口为公开接口\n */\n@Documented\n@Retention(RUNTIME)\n@Target({TYPE, METHOD})\npublic @interface Public {\n}\n\n则可如此配置\nmethod.additional.param[!@com.itangcent.common.annotation.Public]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true, demo:\"\"}等价于\nmethod.additional.param[groovy:!it.hasAnn(\"com.itangcent.common.annotation.Public\")]={name: \"Authorization\",value: \"\",desc: \"认证Token\",required:true, demo:\"\"}"
        },
        {
          "title": "demo",
          "url": "/setting/rules/method_additional_param.html#demo",
          "content": "demo/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * public api\n    * Token is not required\n    */\n    @Public\n    @GetMapping(\"/apiWithoutToken\")\n    public Result apiWithoutToken() {\n        return Result.success(\"no token\");\n    }\n\n    /**\n    * private api\n    * Token is required\n    */\n    @GetMapping(\"/apiWithToken\")\n    public Result apiWithToken() {\n        return Result.success(\"wow,you got a token\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "module",
      "content": "用于API分组\n当无配置生效时, 默认使用当前模块/项目名\n导出postman时,将为每个module创建一个文件夹\n导出yapi时,每个module对应yapi中的一个项目\n",
      "url": "/setting/rules/module.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/module.html#默认推荐配置",
          "content": "默认推荐配置module=#module"
        },
        {
          "title": "demo",
          "url": "/setting/rules/module.html#demo",
          "content": "demo/*** Mock Apis\n*\n* @module mock\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n"
        }
      ]
    },
    {
      "title": "method.return",
      "content": "设置方法的返回值\n常用于以下情况:\n方法响应统一封装\n方法返回Object\n方法返回类型中的泛型类型未明确//\n方法返回类型与实际响应无关, 例如通过操作HttpServletResponse来返回响应\n",
      "url": "/setting/rules/method_return.html",
      "children": [
        {
          "title": "方法响应统一封装",
          "url": "/setting/rules/method_return.html#方法响应统一封装",
          "content": "方法响应统一封装API:/*** Mock Apis\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n        * Mock String\n        * @ignore\n        */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n\n}\n这个方法返回的是String, 但实际响应的是com.itangcent.common.dto.Result, 所以额外做如下配置\nmethod.return=groovy: \"com.itangcent.common.dto.Result\""
        },
        {
          "title": "方法返回值与响应无关",
          "url": "/setting/rules/method_return.html#方法返回值与响应无关",
          "content": "方法返回值与响应无关API:    /**     * 通过`HttpServletResponse`写入响应\n     */\n    @RequestMapping(value = \"/writeByResponse\", method = RequestMethod.GET)\n    public void writeByResponse(HttpServletResponse response) throws IOException {\n        UserInfo userInfo = new UserInfo();\n        userInfo.setId(1l);\n        userInfo.setName(\"Tom\");\n        userInfo.setAge(25);\n        response.getOutputStream().write(new Gson().toJson(Result.success(userInfo)).getBytes(Charsets.UTF_8));\n    }\n这个方法返回的是void,但实际响应的是Result, 所以需要通过额外的途径来表明此API的实际响应.\n简单的,可做如下配置:method.return=#real_return使用方法:/** * @real_return com.itangcent.common.dto.Result\n */\n为了方便书写, 我们可以尝试使用{@link}来设置实际响应类型, 利用helper.resolveLink来解析例如做如下配置:method.return[#real_return]=groovy: helper.resolveLink(it.doc(\"real_return\"))使用方法:/** * @real_return {@link Result}\n */\n更进一步的, 如果所有的响应都由com.itangcent.common.dto.Result包装做如下配置:method.return[#real_return]=groovy: \"com.itangcent.common.dto.Result\"使用方法:/** * @real_return {@link UserInfo}\n */\n"
        }
      ]
    },
    {
      "title": "method.return.main",
      "content": "此配置仅设置返回值的核心主体, 使得@return的注释落在主体属性上,不影响返回类型及字段.\n",
      "url": "/setting/rules/method_return_main.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/method_return_main.html#demo",
          "content": "demoResult.javapackage com.itangcent.common.dto;\npublic class Result implements IResult {\n\n    private Integer code;//响应码\n\n    private String msg;//响应消息\n\n    private T data;//响应数据\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "可做如下配置",
          "url": "/setting/rules/method_return_main.html#demo-可做如下配置",
          "content": "可做如下配置method.return.main[groovy:it.returnType().isExtend(\"com.itangcent.common.dto.Result\")]=data"
        },
        {
          "title": "接口示例1:",
          "url": "/setting/rules/method_return_main.html#demo-接口示例1",
          "content": "接口示例1:接口代码:\n    /**     * 获取当前用户类型\n     *\n     * @return 当前用户类型,{@link com.itangcent.common.constant.UserTypeConstant}\n     */\n    @GetMapping(\"/type\")\n    public Result currUserType() {\n        return Result.success(UserType.values()[new Random(System.currentTimeMillis()).nextInt(UserType.values().length)].getType());\n    }\n导出API的响应:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nmsg\nstring\n非必须\n\n响应消息\nmock:\n\n\ncode\ninteger\n非必须\n\n响应码\nmock: 0\n\n\ndata\ninteger\n非必须\n\n响应数据当前用户类型,[用户类型]\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "接口示例2:",
          "url": "/setting/rules/method_return_main.html#demo-接口示例2",
          "content": "接口示例2:接口代码:\n    /**     * 获取所有用户类型\n     *\n     * @return {@link com.itangcent.common.constant.UserType#getType()}\n     */\n    @GetMapping(\"/types\")\n    public Result> types() {\n        final List types = Stream.of(UserType.values()).map(UserType::getType).collect(Collectors.toList());\n        return Result.success(types);\n    }\n导出API的响应:\n\n\n    名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\n    msg\nstring\n非必须\n\n响应消息\nmock:\n\n\n    code\ninteger\n非必须\n\n响应码\nmock: 0\n\n\n＋data\ninteger[]\n非必须\n\n响应数据[用户类型]\nitem 类型: integer\n\n\n\ninteger\n\n\n\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "附:",
          "url": "/setting/rules/method_return_main.html#demo-附",
          "content": "附:UserTypeConstant.java/** * 用户类型\n */\npublic class UserTypeConstant implements Serializable {\n\n    private static final long serialVersionUID = -4607862808303533196L;\n\n    public static final int ADMIN = 1;//管理员\n    public static final int MEMBER = 2;//成员\n    public static final int GUEST = 3;//游客\n\n}\nUserType.javapackage com.itangcent.common.constant;\n/**\n * 用户类型\n */\npublic enum UserType {\n    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int type;//用户类型\n\n    private String desc;\n\n    //constructors...\n\n    //getters...\n}\n"
        }
      ]
    },
    {
      "title": "json.rule.convert",
      "content": "用于设置某些类型转换为其他类型处理, 通常用于使用了Spring的自定义类型转换器的情况\n",
      "url": "/setting/rules/json_rule_convert.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/json_rule_convert.html#默认推荐配置",
          "content": "默认推荐配置#The ObjectId and Date are parsed as stringsjson.rule.convert[org.bson.types.ObjectId]=java.lang.String\njson.rule.convert[java.util.Date]=java.lang.String\njson.rule.convert[java.sql.Timestamp]=java.lang.String\njson.rule.convert[java.time.LocalDateTime]=java.lang.String\njson.rule.convert[java.time.LocalDate]=java.lang.String\n\n#resolve HttpEntity/RequestEntity/ResponseEntity\n###set resolveProperty = false\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.HttpEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.RequestEntity]=java.lang.Object\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=${1}\njson.rule.convert[#regex:org.springframework.http.ResponseEntity]=java.lang.Object\n###set resolveProperty = true\n"
        }
      ]
    },
    {
      "title": "json.rule.enum.convert",
      "content": "用于设置枚举类型的转换\n优先级低于json.rule.convert\n假定有如下枚举类public enum UserType {    //管理员\n    ADMIN(1, \"管理员\"),\n\n    //成员\n    MEMBER(2, \"成员\"),\n\n    //游客\n    GUEST(3, \"游客\");\n\n    private int type;\n    private String desc;\n\n    public int getType() {\n        return type;\n    }\n\n    public String getDesc() {\n        return desc;\n    }\n\n    UserType(int type, String desc) {\n        this.type = type;\n        this.desc = desc;\n    }\n}\n对于如下字段/*** 用户类型\n*/\nprivate UserType type;\n",
      "url": "/setting/rules/json_rule_enum_convert.html",
      "children": [
        {
          "title": "默认情况",
          "url": "/setting/rules/json_rule_enum_convert.html#默认情况",
          "content": "默认情况\n默认将枚举类型转换为String处理,给出可用值为枚举中的实例名\n\n\n上述字段将被处理为\n\n/*** 用户类型\n* @see UserType\n*/\nprivate String type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\nstring\n非必须\n\n用户类型\n枚举: ADMIN,MEMBER,GUEST枚举备注: ADMIN :管理员 MEMBER :成员 GUEST :游客mock: @pick([\"ADMIN\",\"MEMBER\",\"GUEST\"]))\n\n\n"
        },
        {
          "title": "增加配置",
          "url": "/setting/rules/json_rule_enum_convert.html#增加配置",
          "content": "增加配置做如下配置,将其转换为int处理,给出可用值为枚举中的type字段\njson.rule.enum.convert[com.itangcent.common.constant.UserType]=~#type则上述字段将被处理为\n/*** 用户类型\n* @see UserType#type\n*/\nprivate int type;\n导出API结果为:\n\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\ntype\ninteger\n非必须\n\n用户类型\n枚举: 1,2,3枚举备注: 1 :管理员 2 :成员 3 :游客mock: @pick([1,2,3])\n\n\n"
        },
        {
          "title": "统一处理",
          "url": "/setting/rules/json_rule_enum_convert.html#统一处理",
          "content": "统一处理特殊的, 声明如下接口:\npackage com.itangcent.common.constant;\npublic interface TypeAble {\n    int getType();\n}\n改造UserType,使其继承TypeAble\npublic enum UserType implements TypeAble {    ...\n}\n则可做如下配置,将所有继承TypeAble的类转换为int处理,给出可用值为枚举中的type字段\njson.rule.enum.convert[groovy:it.isExtend(\"com.itangcent.common.constant.TypeAble\")]=~#type"
        }
      ]
    },
    {
      "title": "json.rule.field.ignore",
      "content": "忽略字段(设置某些字段不出现在json中,或不需要请求时给出)\ndeprcated, 改用field.ignore\n",
      "url": "/setting/rules/json_rule_field_ignore.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/json_rule_field_ignore.html#默认推荐配置",
          "content": "默认推荐配置#Support for Jackson annotationsjson.rule.field.ignore=@com.fasterxml.jackson.annotation.JsonIgnore#value\n\n#Support for Gson annotations\njson.rule.field.ignore=!@com.google.gson.annotations.Expose#serialize\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/json_rule_field_ignore.html#demo",
          "content": "demoTestJsonIgnoreBean.javapublic class TestJsonIgnoreBean {\n    @Expose(serialize = true)\n    private Long shouldNotIgnoreForGson;\n\n    @Expose(serialize = false)\n    private Long shouldIgnoreForGson;\n\n    @JsonIgnore(false)\n    private Long shouldNotIgnoreForJackson;\n\n    @JsonIgnore\n    private Long shouldIgnoreForJackson;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/json_rule_field_ignore.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\nshouldNotIgnoreForGson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nshouldNotIgnoreForJackson\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        },
        {
          "title": "定制化配置示例",
          "url": "/setting/rules/json_rule_field_ignore.html#定制化配置示例",
          "content": "定制化配置示例\n忽略指定名称的字段:\n\n\n配置如下\n# ignore field 'log'\njson.rule.field.ignore=log\n\n\n\n将忽略如下字段\nprivate String log;\n\n\n\n\n\n忽略指定类型的字段:\n\n\n配置如下\n# ignore field 'log' typed xxx.xxx.Log\njson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n\n将忽略如下字段\nprivate Log xxx;\n\n\n\n\n\n忽略指定modifier的字段:\n\n\n配置如下\n#ignore transient field\njson.rule.field.ignore=groovy:it.hasModifier(\"transient\")||it.hasModifier(\"protected\")\n\n\n\n将忽略如下字段\nprivate transient Int xxx;\nprotected Long yyy;\n\n\n\n\n"
        }
      ]
    },
    {
      "title": "json.rule.field.name",
      "content": "用于设置输出/输入的字段名(用于json中字段名与类中字段名不一致)\ndeprcated, 改用field.name\n",
      "url": "/setting/rules/json_rule_field_name.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/json_rule_field_name.html#默认推荐配置",
          "content": "默认推荐配置#Support for Jackson annotationsfield.name=@com.fasterxml.jackson.annotation.JsonProperty#value\n\n#Support for Gson annotations\nfield.name=@com.google.gson.annotations.SerializedName#value\n"
        },
        {
          "title": "demo",
          "url": "/setting/rules/json_rule_field_name.html#demo",
          "content": "demoTestJsonFieldBean.javapublic class TestJsonFieldBean {    @JsonProperty(\"a\")\n    private Long propertyA;\n\n    @SerializedName(\"b\")\n    private Long propertyB;\n\n    //constructors...\n\n    //getters...\n}\n"
        },
        {
          "title": "作为API返回值导出:",
          "url": "/setting/rules/json_rule_field_name.html#demo-作为api返回值导出",
          "content": "作为API返回值导出:\n\n名称\n类型\n是否必须\n默认值\n备注\n其他信息\n\n\n\n\na\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\nb\ninteger\n非必须\n\n\nmock: @natural(0,10000)\n\n\n"
        }
      ]
    },
    {
      "title": "param.default.value",
      "content": "用于设置API参数的默认值\n",
      "url": "/setting/rules/param_default_value.html",
      "children": [
        {
          "title": "添加对swagger @ApiParam支持",
          "url": "/setting/rules/param_default_value.html#添加对swagger-apiparam支持",
          "content": "添加对swagger @ApiParam支持param.default.value=@io.swagger.annotations.ApiParam#defaultValue"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_default_value.html#demo",
          "content": "demo@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\",defaultValue = \"666\")  long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "param.demo",
      "content": "参数示例信息\n",
      "url": "/setting/rules/param_demo.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/param_demo.html#demo",
          "content": "demo配置如下:param.demo=groovy:it.method().doc(\"demo\",it.name())使用如下:    /**     * @demo newName tangcent\n     */\n    @RequestMapping(value = \"/set\", method = RequestMethod.PUT)\n    public Object set(@RequestParam String newName) {\n                      ...\n    }\n"
        }
      ]
    },
    {
      "title": "param.doc(doc.param)",
      "content": "参数的额外注释\n",
      "url": "/setting/rules/param_doc.html",
      "children": [
        {
          "title": "在注释中给出参数类型",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型",
          "content": "在注释中给出参数类型param.doc=js:\"类型:\"+it.type().name()"
        },
        {
          "title": "在注释中给出参数类型并去掉java包名",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型并去掉java包名",
          "content": "在注释中给出参数类型并去掉java包名param.doc=groovy:\"类型:\"+tool.uncapitalize(it.type().name().replace(\"java.lang.\",\"\"))"
        },
        {
          "title": "示例API",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型并去掉java包名-示例api",
          "content": "示例API    /**     * 更新用户名\n     *\n     * @param id      用户id\n     * @param newName 新的用户名\n     * @param slogon  个人签名\n     * @deprecated 改用{@link #update(UserInfo)}\n     */\n    @RequestMapping(value = \"/set\", method = RequestMethod.PUT)\n    public Object set(long id,\n                      @RequestParam String newName,\n                      @RequestParam(required = false, defaultValue = \"haha\") String slogon,\n                      @RequestParam(required = false, defaultValue = \"10\") long times) {\n            ...\n    }\n"
        },
        {
          "title": "导出结果如下:",
          "url": "/setting/rules/param_doc.html#在注释中给出参数类型并去掉java包名-导出结果如下",
          "content": "导出结果如下:请求参数:\n\n参数名称\n是否必须\n示例\n备注\n\n\n\n\nid\n是\n\n用户id类型:long\n\n\nnewName\n是\n\n新的用户名 类型:string\n\n\nslogon\n否\n\n个人签名 类型:string\n\n\ntimes\n否\n\n类型:long\n\n\n"
        }
      ]
    },
    {
      "title": "param.http.type",
      "content": "用于设置API参数在HTTP请求中的类型(位置:body/form/query)\n@RequestBody/@ModelAttribute/@RequestHeader/@PathVariable等忽略此规则\n参数注解有@RequestParam且HttpMehotd为GET也忽略此规则\n其他不满足规则的参数在规则缺省的情况下, 优先采取query模式\n",
      "url": "/setting/rules/param_http_type.html",
      "children": [
        {
          "title": "配置示例",
          "url": "/setting/rules/param_http_type.html#配置示例",
          "content": "配置示例"
        },
        {
          "title": "全设置为form, 优先使用表单进行提交:",
          "url": "/setting/rules/param_http_type.html#配置示例-全设置为form,-优先使用表单进行提交",
          "content": "全设置为form, 优先使用表单进行提交:param.http.type=form"
        },
        {
          "title": "RequestParam作为query, 其他做为form:",
          "url": "/setting/rules/param_http_type.html#配置示例-requestparam作为query,-其他做为form",
          "content": "RequestParam作为query, 其他做为form:param.http.type[@org.springframework.web.bind.annotation.RequestParam]=queryparam.http.type=form\n"
        }
      ]
    },
    {
      "title": "param.ignore",
      "content": "忽略API参数\n",
      "url": "/setting/rules/param_ignore.html",
      "children": [
        {
          "title": "添加对swagger @ApiParam支持",
          "url": "/setting/rules/param_ignore.html#添加对swagger-apiparam支持",
          "content": "添加对swagger @ApiParam支持param.ignore=@io.swagger.annotations.ApiParam#hidden"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_ignore.html#demo",
          "content": "demo@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\",hidden = true)  long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        }
      ]
    },
    {
      "title": "param.required",
      "content": "用于标记API参数是否为必须(即不可为空)\n",
      "url": "/setting/rules/param_required.html",
      "children": [
        {
          "title": "默认推荐配置",
          "url": "/setting/rules/param_required.html#默认推荐配置",
          "content": "默认推荐配置#Support for javax.validation annotationsparam.required=@javax.validation.constraints.NotBlank\nparam.required=@\"javax.validation.constraints.NotNull\nparam.required=@javax.validation.constraints.NotEmpty\n"
        },
        {
          "title": "添加对swagger @ApiParam支持",
          "url": "/setting/rules/param_required.html#添加对swagger-apiparam支持",
          "content": "添加对swagger @ApiParam支持param.required=@io.swagger.annotations.ApiParam#required"
        },
        {
          "title": "demo",
          "url": "/setting/rules/param_required.html#demo",
          "content": "demoMockCtrl.java@RestController@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * Mock String\n    */\n    @GetMapping(\"/string\")\n    public String mockString(\n            @ApiParam(value = \"seed for mock\", required = true, defaultValue = \"666666\") long seed) {\n        return Result.success(\"mock string\");\n    }\n\n}\n"
        },
        {
          "title": "导出结果如下:",
          "url": "/setting/rules/param_required.html#demo-导出结果如下",
          "content": "导出结果如下:请求参数:\n\n参数名称\n是否必须\n示例\n备注\n\n\n\n\nseed\n是\n666666\nseed for mock\n\n\n"
        }
      ]
    },
    {
      "title": "path.multi",
      "content": "用于当API有多个可用路径时如何处理\n目前可用策略(策略不区分大小写):\n\n\n可用策略\n策略描述\n\n\n\n\nFIRST\n选择第一个可用路径\n\n\nLAST\n选择最后一个可用路径\n\n\nLONGEST\n选择最长的可用路径\n\n\nSHORTEST\n选择最短的可用路径\n\n\nALL\n为每一个可用路径生成一个api\n\n\n可能的配置如下:选择第一个可用路径\npath.multi=first选择最后一个可用路径\npath.multi=last选择最长的可用路径\npath.multi=longest选择最短的可用路径\npath.multi=shortest为每一个可用路径生成一个api\npath.multi=all也可以由api自行决定选择策略path.multi=#multi使用如下:/*** 一些Mock相关的API\n*/\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n    * @multi all\n    */\n    @GetMapping(value = {\"/string\", \"string2\"})\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n",
      "url": "/setting/rules/path_multi.html",
      "children": []
    },
    {
      "title": "postman.host",
      "content": "设置postmanAPI的host\n默认使用当前模块名作为API的host,例如{{user}}\n",
      "url": "/setting/rules/postman_host.html",
      "children": [
        {
          "title": "固定host配置如下",
          "url": "/setting/rules/postman_host.html#固定host配置如下",
          "content": "固定host配置如下postman.host=http://localhost:8080"
        }
      ]
    },
    {
      "title": "export.after",
      "content": "每个api导出完成后回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nmethod\napi\n\n\n",
      "url": "/setting/rules/export_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/export_after.html#demo",
          "content": "demo增加接口描述信息export.after=groovy:api.appendDesc(\"\\n这个接口已废弃\\n\")header中token不需要显示传参export.after=groovy:api.removeHeader(\"token\")修改urlexport.after=groovy:api.setPath(\"/pre\"+api.path())response的header中会返回当前用户会员等级export.after=groovy:api.addResponseHeader(\"level\",\"\",\"true\",\"当前用户会员等级\")将method上的@version xxx加入到url中export.after[#version]=groovy:```    def tag = it.doc(\"version\")\n    def url = api.path()\n    if(url.contains(\"?\")){\n        url = url +\"&version=\" + tag\n    }else{\n        url = url +\"?version=\" + tag\n    }\n    api.setPath(url)\n```\n"
        }
      ]
    },
    {
      "title": "yapi.export.before",
      "content": "导出到yapi之前回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\n无\n无\n\n\n",
      "url": "/setting/events/yapi_export_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/yapi_export_before.html#demo",
          "content": "demo兼容旧版本yapi/定制化yapi"
        }
      ]
    },
    {
      "title": "http.call.after",
      "content": "http请求后回调\n注意:插件所有的http请求都将触发此回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\n无\nrequest, response\n\n\n",
      "url": "/setting/rules/http_call_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/http_call_after.html#demo",
          "content": "demo记录插件所有的请求的响应http.call.after=groovy:logger.info(\"response:\"+response.string())某个接口请求成功后执行其他接口http.call.after=groovy:```//判断是不是指定接口\nif(request.code()==200&&request.url().endsWith(\"/xxx\")){\n    httpClient.post(\"http://xxx/xxx\")\n    .contentType(\"application/json\")\n    .body({\"xxx\":\"xxx\",\"xxx\":\"xxx\"})\n    .call()\n}\n```\nCall自动登陆(Cookie)http.call.after=groovy:```//判断是不是需要登录的接口\nif(response.code()==401){\n    httpClient.post(\"http://xxx/login\")\n        .contentType(\"application/json\")\n        .body({\"username\":\"xxx\",\"passwd\":\"xxx\"})\n        .call()\n    response.discard()//丢弃这一次的请求结果\n}\n```\nCall自动登陆(Token)http.call.after=groovy:```//判断是不是需要登录的接口\nif(response.code()==401){\n    def loginResponse = httpClient.post(\"http://xxx/login\")\n        .contentType(\"application/json\")\n        .body({\"username\":\"xxx\",\"passwd\":\"xxx\"})\n        .call()\n    def token = loginResponse.firstHeader(\"token\")\n    localStorage.set(\"token\",token)\n    response.discard()//丢弃这一次的请求结果\n}\n```\nhttp.call.before=groovy:```\n//从localStorage取token\nrequest.header(\"token\",localStorage.get(\"token\"))\n```\nhost不固定//可以尝试通过正则获取当前请求的hostdef host = regex.getGroup1(\"(https?://.+?)/.*?\",request.url());\nx-www-form-urlencoded提交httpClient.post(\"http://xxx/login\")    .contentType(\"application/x-www-form-urlencoded\")\n    .param(\"username\",\"name\")\n    .param(\"password\",\"pwd\")\n    .call();\n"
        }
      ]
    },
    {
      "title": "http.call.before",
      "content": "http请求前回调\n注意:插件所有的http请求都将触发此回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\n无\nrequest\n\n\n",
      "url": "/setting/rules/http_call_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/rules/http_call_before.html#demo",
          "content": "demo记录插件所有的请求http.call.before=groovy:logger.info(\"call:\"+request.url())自动加入指定toeknhttp.call.before=groovy:```request.header(\"token\",\"xxxxxxxxxxxxx\")\n```\n自动加入从localStorage获取的toeknhttp.call.before=groovy:```//从localStorage取token\nrequest.header(\"token\",localStorage.get(\"token\"))\n```\n"
        }
      ]
    },
    {
      "title": "api.class.parse.before",
      "content": "解析controller类前回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nclass\n无\n\n\n",
      "url": "/setting/events/api_class_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_class_parse_before.html#demo",
          "content": "demo增加logapi.class.parse.before=groovy:logger.info(\"开始解析controller:\"+it.name())"
        }
      ]
    },
    {
      "title": "api.class.parse.after",
      "content": "解析controller类后回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nclass\n无\n\n\n",
      "url": "/setting/events/api_class_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_class_parse_after.html#demo",
          "content": "demo增加logapi.class.parse.after=groovy:logger.info(\"controller:\"+it.name()+\"解析完成\")"
        }
      ]
    },
    {
      "title": "api.method.parse.before",
      "content": "解析api方法前回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nmethod\n无\n\n\n",
      "url": "/setting/events/api_method_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_method_parse_before.html#demo",
          "content": "demo增加logapi.method.parse.before=groovy:logger.info(\"开始解析api:\"+it.name())"
        }
      ]
    },
    {
      "title": "api.method.parse.after",
      "content": "解析api方法后回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nmethod\n无\n\n\n",
      "url": "/setting/events/api_method_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_method_parse_after.html#demo",
          "content": "demo增加logapi.method.parse.after=groovy:logger.info(\"api:\"+it.name()+\"解析完成\")"
        }
      ]
    },
    {
      "title": "api.param.parse.before",
      "content": "解析api参数前回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nparam\n无\n\n\n",
      "url": "/setting/events/api_param_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_param_parse_before.html#demo",
          "content": "demo增加logapi.method.parse.before=groovy:logger.info(\"开始解析api参数:\"+it.name())"
        }
      ]
    },
    {
      "title": "api.param.parse.after",
      "content": "解析api参数后回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nparam\n无\n\n\n",
      "url": "/setting/events/api_param_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/api_param_parse_after.html#demo",
          "content": "demo增加logapi.param.parse.after=groovy:logger.info(\"api参数:\"+it.name()+\"解析完成\")"
        }
      ]
    },
    {
      "title": "json.class.parse.before",
      "content": "解析类型前回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nclass\n无\n\n\n",
      "url": "/setting/events/json_class_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_class_parse_before.html#demo",
          "content": "demo增加logjson.class.parse.before=groovy:logger.info(\"开始解析类:\"+it.name())"
        }
      ]
    },
    {
      "title": "json.class.parse.after",
      "content": "解析类型后回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nclass\n无\n\n\n",
      "url": "/setting/events/json_class_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_class_parse_after.html#demo",
          "content": "demo增加logjson.class.parse.after=groovy:logger.info(\"类:\"+it.name()+\"解析完成\")"
        }
      ]
    },
    {
      "title": "json.field.parse.before",
      "content": "解析属性(字段)前回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nfield\n无\n\n\n",
      "url": "/setting/events/json_field_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_field_parse_before.html#demo",
          "content": "demo增加logjson.field.parse.before=groovy:logger.info(\"开始解析属性:\"+it.name())"
        }
      ]
    },
    {
      "title": "json.field.parse.after",
      "content": "解析属性(字段)后回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nfield\n无\n\n\n",
      "url": "/setting/events/json_field_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_field_parse_after.html#demo",
          "content": "demo增加logjson.field.parse.after=groovy:logger.info(\"属性:\"+it.name()+\"解析完成\")"
        }
      ]
    },
    {
      "title": "json.method.parse.before",
      "content": "解析getter/setter方法前回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nmethod\n无\n\n\n",
      "url": "/setting/events/json_method_parse_before.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_method_parse_before.html#demo",
          "content": "demo增加logjson.method.parse.before=groovy:logger.info(\"开始解析方法:\"+it.name())"
        }
      ]
    },
    {
      "title": "json.method.parse.after",
      "content": "解析getter/setter方法后回调\n\n\n规则目标(上下文it)\n附加上下文\n\n\n\n\nmethod\n无\n\n\n",
      "url": "/setting/events/json_method_parse_after.html",
      "children": [
        {
          "title": "demo",
          "url": "/setting/events/json_method_parse_after.html#demo",
          "content": "demo增加logjson.method.parse.after=groovy:logger.info(\"方法:\"+it.name()+\"解析完成\")"
        }
      ]
    },
    {
      "title": "提供的工具/对象",
      "content": "\n\n    工具/对象\n规则描述\n\n\n\n\n☆it\n当前规则的应用对象(大多数规则可用)\n\n\n☆tool\n主工具类\n\n\n    regex\n正则工具\n\n\n    logger\n日志工具\n\n\n    helper\n特殊帮助类\n\n\n    httpClient\nhttp相关帮助类\n\n\n    localStorage\n本地存储\n\n\n    session\n临时存储\n\n\n    config\n配置读取工具\n\n\n    runtime\n运行时信息\n\n\n    fieldContext\n字段上下文类\n\n\n",
      "url": "/setting/tools.html",
      "children": []
    },
    {
      "title": "it表示当前规则的应用对象(少数规则没有应用对象)",
      "content": "大部分应用对象只提供方法即it.method()✅,不提供属性it.property❎\n",
      "url": "/setting/tools/it.html",
      "children": [
        {
          "title": "对于class(类)、method(方法/API)、field(字段/属性)、param(参数)都支持如下方法",
          "url": "/setting/tools/it.html#对于class类、method方法api、field字段属性、param参数都支持如下方法",
          "content": "对于class(类)、method(方法/API)、field(字段/属性)、param(参数)都支持如下方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nname()\nstring\n名称\nit.name()\n\n\nhasAnn(\"annotation_name\")\nboolean\n是否有指定注解\nit.hasAnn(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\")\nstring\n获取指定注解值(默认value)\nit.ann(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nann(\"annotation_name\",\"attr\")\nstring\n获取指定注解中的指定参数值\nit.ann(\"org.springframework.web.bind.annotation.RequestMapping\",\"path\")\n\n\nannMap(\"annotation_name\")\nmap\n获取指定注解所有的参数\nit.annMap(\"org.springframework.web.bind.annotation.RequestMapping\")\n\n\nannMaps(\"annotation_name\")\nmap[]\n获取指定可重复注解所有的参数\nit.annMaps(\"javax.validation.constraints.Max\")\n\n\nannValue(\"annotation_name\")\nobject\n获取指定注解值(默认value),与ann不同,会保持原有类型,不强制转换为string\nit.annValue(\"org.springframework.web.bind.annotation.RequestBody\")\n\n\nannValue(\"annotation_name\",\"attr\")\nobject\n获取指定注解中的指定参数值,与ann不同,会保持原有类型,不强制转换为string\nit.annValue(\"org.springframework.web.bind.annotation.RequestMapping\",\"path\")\n\n\ndoc()\nstring\n获取注释值\nit.doc()\n\n\ndoc(\"tag\")\nstring\n获取注释tag值(不需要加@)\nit.doc(\"return\")\n\n\ndocs(\"tag\")\narray\n获取多个注释tag值(不需要加@)\nit.docs(\"see\")\n\n\ndoc(\"tag\",\"subTag\")\nstring\n获取二级注释tag值\nit.doc(\"param\",\"a\")\n\n\nhasDoc(\"tag\")\nstring\n是否有指定注释tag\nit.hasDoc(\"ignore\")\n\n\nhasModifier(\"modifier\")\nstring\n是否有指定修饰\nit.hasModifier(\"public\")\n\n\nmodifiers()\nstring\n获取所有修饰\nit.modifiers()\n\n\nsourceCode()\nstring\n获取当前对象源码\nit.sourceCode()\n\n\ndefineCode()\nstring\n获取当前对象纯定义代码\nit.defineCode()\n\n\ncontextType()\nstring\n当前上下文类型 class/field/method/param\nit.contextType()\n\n\n"
        },
        {
          "title": "不同的应用对象提供额外的方法",
          "url": "/setting/tools/it.html#不同的应用对象提供额外的方法",
          "content": "不同的应用对象提供额外的方法class(类)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\nmethods()\nmethod[]\n类中的所有方法\nit.methods()\n\n\nmethodCnt()\nint\n类中的方法数\nit.methodCnt()\n\n\nfield()\nfield[]\n类中的所有字段\nit.field()\n\n\nfieldCnt()\nint\n类中的字段数\nit.fieldCnt()\n\n\nisExtend(superClass)\nboolean\n是否继承某个类\nit.isExtend(\"some.class.qualifiedName\")\n\n\nisMap()\nboolean\n是否为Map\nit.isMap()\n\n\nisCollection()\nboolean\n是否为集合\nit.isCollection()\n\n\nisArray()\nboolean\n是否为数组\nit.isArray()\n\n\ntoJson(readGetter)\nstring\n获取当前类型的json字符串\nit.toJson(true)\n\n\ntoJson5(readGetter)\nstring\n获取当前类型的json5字符串\nit.toJson5(true)\n\n\nmavenId()\nMavenId\n返回 Maven ID 信息\nit.mavenId()\n\n\nmethod(方法/API)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\nreturnType()\nclass\n方法返回类型\nit.returnType()\n\n\nisVarArgs()\nboolean\n是否有不定参\nit.isVarArgs()\n\n\nargs()\nparam[]\n方法的所有参数\nit.args()\n\n\nargTypes()\nclass[]\n方法的所有参数类型\nit.argTypes()\n\n\nargCnt()\nint\n方法参数个数\nit.argCnt()\n\n\ncontainingClass()\nclass\n方法所属类\nit.containingClass()\n\n\nreturnJson(needInfer, readGetter)\nclass\n当前方法返回对象的json字符串\nit.returnJson(true,true)\n\n\nfield(字段/属性)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\ntype()\nclass\n字段类型\nit.type()\n\n\ncontainingClass()\nclass\n字段所属类\nit.containingClass()\n\n\njsonName()\nstring\n字段json名\nit.jsonName()\n\n\njsonType()\nclass\n字段json类型(被转换过的)\nit.jsonType()\n\n\nparam(参数)\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\ntype()\nclass\n参数类型\nit.type()\n\n\nisVarArgs()\nboolean\n是否为不定参\nit.isVarArgs()\n\n\nMavenId\n\n\n方法\n返回值\n描述\n示例\n\n\n\n\ngroupId\nstring\ngroupId\nit.groupId()\n\n\nartifactId\nstring\nartifactId\nit.artifactId()\n\n\nversion\nstring\nversion\nit.version()\n\n\nmaven()\nString\n生成 Maven 依赖代码片段\nit.maven()\n\n\ngradle()\nString\n生成 Gradle 实现依赖代码片段\nit.gradle()\n\n\ngradleShort()\nString\n生成 Gradle 实现依赖代码片段（简短格式）\nit.gradleShort()\n\n\ngradleKotlin()\nString\n生成 Gradle Kotlin DSL 依赖代码片段\nit.gradleKotlin()\n\n\nsbt()\nString\n生成 SBT 依赖代码片段\nit.sbt()\n\n\nivy()\nString\n生成 Ivy 依赖代码片段\nit.ivy()\n\n\n"
        }
      ]
    },
    {
      "title": "tool是提供的主工具类主要方法其他一些方法",
      "content": "\n\n方法\n返回值\n描述\n示例\n\n\n\n\ndebug(obj)\nvoid\ndebug对象,获取对象所有可用方法\ntool.debug(tool)\n\n\nisNullOrEmpty(obj)\nBoolean\n判断对象为null或空,支持null、空字符串、空数组、空集合、空Map\ntool.isNullOrEmpty(obj)\n\n\nnotNullOrEmpty(obj)\nBoolean\n等价于!isNullOrEmpty\ntool.notNullOrEmpty(obj)\n\n\nasArray(obj)\nArray\n将对象转换为数组\ntool.asArray(obj)\n\n\nasList(obj)\nList\n将对象转换为集合\ntool.asList(obj)\n\n\nintersect(any, other)\nArray\n取两个对象的交集\ntool.intersect(any, other)\n\n\nanyIntersect(any, other)\nBoolean\n判断两个对象是否有交集\ntool.anyIntersect(any, other)\n\n\nequalOrIntersect(any, other)\nBoolean\n判断两个对象是否相同或有交集,与anyIntersect不同的是, 对于两个空对象, 将返回true\ntool.equalOrIntersect(any, other)\n\n\nnewSet(items...)\nSet\n创建Set对象\ntool.newSet(\"ele1\",\"ele2\")\n\n\nnewList(items...)\nList\n创建List对象\ntool.newList(\"ele1\",\"ele2\")\n\n\nnewMap()\nMap\n创建Map对象\ntool.newMap()\n\n\nparseJson(json)\nObject\n解析json字符串\ntool.parseJson(\"{\"key\":\"value\"}\")\n\n\ntoJson(obj)\nObject\n对象转json字符串\ngroovy:tool.toJson([key:\"value\"])js:tool.toJson({key:\"value\"})\n\n\nprettyJson(obj)\nObject\n对象转json字符串(格式化)\ngroovy:tool.prettyJson([key:\"value\"])js:tool.prettyJson({key:\"value\"})\n\n\nheadLine(str)\nstring\n获取字符串第一行\ntool.headLine(\"multi\\nline\")\n\n\ncapitalize(str)\nstring\n字符串首字母大写\ntool.capitalize(\"words\")\n\n\nuncapitalize(str)\nstring\n字符串首字母小写\ntool.uncapitalize(\"Words\")\n\n\nswapCase(str)\nstring\n字符串每个字符大小写转换\ntool.swapCase(\"WoRdS\")\n\n\nupperCase(str)\nstring\n字符串全部大写\ntool.upperCase(\"words\")\n\n\nlowerCase(str)\nstring\n字符串全部小写\ntool.lowerCase(\"words\")\n\n\nreverse(str)\nstring\n字符串反转\ntool.reverse(\"sdrow\")\n\n\nrepeat(str,repeat)\nstring\n重复指定字符串\ntool.repeat(\"x\",10)\n\n\nisNumeric(str)\nstring\n判断字符串是纯数字\ntool.isNumeric(\"123\")\n\n\ntoCamelCase(str)\nstring\n字符串转驼峰式\ntool.toCamelCase(\"some words\",true)\n\n\nnow()\nstring\n获取当前时间 格式为:yyyy-MM-dd HH:mm:ss\ntool.now()\n\n\nnow(pattern)\nstring\n获取当前时间并指定格式\ntool.now(\"yyyy-MM-dd\")\n\n\ntoday()\nstring\n获取当前时间 格式为:yyyy-MM-dd\ntool.today()\n\n\nformat()\nstring\n格视化时间戳\ntool.format(1000000000000,\"yyyy-MM-dd HH:mm:ss\")\n\n\n",
      "url": "/setting/tools/tool.html",
      "children": [
        {
          "title": "isAlpha",
          "url": "/setting/tools/tool.html#isalpha",
          "content": "isAlpha Desc：Checks if the CharSequence contains only Unicode letters.{@code null} will return {@code false}.An empty CharSequence (length()=0) will return {@code false}.tool.isAlpha(null)   = false\ntool.isAlpha(\"\")     = false\ntool.isAlpha(\"  \")   = false\ntool.isAlpha(\"abc\")  = true\ntool.isAlpha(\"ab2c\") = false\ntool.isAlpha(\"ab-c\") = false\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n{@code true} if only contains letters, and is non-null\n\n\n"
        },
        {
          "title": "substringBefore",
          "url": "/setting/tools/tool.html#substringbefore",
          "content": "substringBefore Desc：Gets the substring before the first occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nA {@code null} separator will return the input string.If nothing is found, the string input is returned.tool.substringBefore(null, *)      = null\ntool.substringBefore(\"\", *)        = \"\"\ntool.substringBefore(\"abc\", \"a\")   = \"\"\ntool.substringBefore(\"abcba\", \"b\") = \"a\"\ntool.substringBefore(\"abc\", \"c\")   = \"ab\"\ntool.substringBefore(\"abc\", \"d\")   = \"abc\"\ntool.substringBefore(\"abc\", \"\")    = \"\"\ntool.substringBefore(\"abc\", null)  = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring before the first occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringAfter",
          "url": "/setting/tools/tool.html#substringafter",
          "content": "substringAfter Desc：Gets the substring after the first occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nA {@code null} separator will return the empty string if the\ninput string is not {@code null}.If nothing is found, the empty string is returned.tool.substringAfter(null, *)      = null\ntool.substringAfter(\"\", *)        = \"\"\ntool.substringAfter(*, null)      = \"\"\ntool.substringAfter(\"abc\", \"a\")   = \"bc\"\ntool.substringAfter(\"abcba\", \"b\") = \"cba\"\ntool.substringAfter(\"abc\", \"c\")   = \"\"\ntool.substringAfter(\"abc\", \"d\")   = \"\"\ntool.substringAfter(\"abc\", \"\")    = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring after the first occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringBeforeLast",
          "url": "/setting/tools/tool.html#substringbeforelast",
          "content": "substringBeforeLast Desc：Gets the substring before the last occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nAn empty or {@code null} separator will return the input string.If nothing is found, the string input is returned.tool.substringBeforeLast(null, *)      = null\ntool.substringBeforeLast(\"\", *)        = \"\"\ntool.substringBeforeLast(\"abcba\", \"b\") = \"abc\"\ntool.substringBeforeLast(\"abc\", \"c\")   = \"ab\"\ntool.substringBeforeLast(\"a\", \"a\")     = \"\"\ntool.substringBeforeLast(\"a\", \"z\")     = \"a\"\ntool.substringBeforeLast(\"a\", null)    = \"a\"\ntool.substringBeforeLast(\"a\", \"\")      = \"a\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring before the last occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringAfterLast",
          "url": "/setting/tools/tool.html#substringafterlast",
          "content": "substringAfterLast Desc：Gets the substring after the last occurrence of a separator.The separator is not returned.A {@code null} string input will return {@code null}.An empty (\"\") string input will return the empty string.\nAn empty or {@code null} separator will return the empty string if\nthe input string is not {@code null}.If nothing is found, the empty string is returned.tool.substringAfterLast(null, *)      = null\ntool.substringAfterLast(\"\", *)        = \"\"\ntool.substringAfterLast(*, \"\")        = \"\"\ntool.substringAfterLast(*, null)      = \"\"\ntool.substringAfterLast(\"abc\", \"a\")   = \"bc\"\ntool.substringAfterLast(\"abcba\", \"b\") = \"a\"\ntool.substringAfterLast(\"abc\", \"c\")   = \"\"\ntool.substringAfterLast(\"a\", \"a\")     = \"\"\ntool.substringAfterLast(\"a\", \"z\")     = \"\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparator\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring after the last occurrence of the separator,{@code null} if null String input\n\n\n"
        },
        {
          "title": "substringBetween",
          "url": "/setting/tools/tool.html#substringbetween",
          "content": "substringBetween Desc：Gets the String that is nested in between two Strings.Only the first match is returned.A {@code null} input String returns {@code null}.A {@code null} open/close returns {@code null} (no match).\nAn empty (\"\") open and close returns an empty string.tool.substringBetween(\"wxbyz\", \"\", \"\") = \"b\"\ntool.substringBetween(null, *, *)          = null\ntool.substringBetween(*, null, *)          = null\ntool.substringBetween(*, *, null)          = null\ntool.substringBetween(\"\", \"\", \"\")          = \"\"\ntool.substringBetween(\"\", \"\", \"]\")         = null\ntool.substringBetween(\"\", \"\", \"\")        = null\ntool.substringBetween(\"yabcz\", \"\", \"\")     = \"\"\ntool.substringBetween(\"yabcz\", \"y\", \"z\")   = \"abc\"\ntool.substringBetween(\"yabczyabcz\", \"y\", \"z\")   = \"abc\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nopen\nstring\n\n\n\nclose\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\nthe substring, {@code null} if no match\n\n\n"
        },
        {
          "title": "substringsBetween",
          "url": "/setting/tools/tool.html#substringsbetween",
          "content": "substringsBetween Desc：Searches a String for substrings delimited by a start and end tag,returning all matching substrings in an array.A {@code null} input String returns {@code null}.A {@code null} open/close returns {@code null} (no match).\nAn empty (\"\") open/close returns {@code null} (no match).tool.substringsBetween(\"abc\", \"\", \"\") = \"a\",\"b\",\"c\"\ntool.substringsBetween(null, *, *)            = null\ntool.substringsBetween(*, null, *)            = null\ntool.substringsBetween(*, *, null)            = null\ntool.substringsBetween(\"\", \"\", \"\")          = \nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nopen\nstring\n\n\n\nclose\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\na String Array of substrings, or {@code null} if no match\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "split",
          "url": "/setting/tools/tool.html#split",
          "content": "split Desc：Splits the provided text into an array, separators specified.This is an alternative to using StringTokenizer.The separator is not included in the returned String array.Adjacent separators are treated as one separator.\nFor more control over the split use the StrTokenizer class.A {@code null} input String returns {@code null}.A {@code null} separatorChars splits on whitespace.tool.split(null, *)         = null\ntool.split(\"\", *)           = \ntool.split(\"abc def\", null) = \"abc\", \"def\"\ntool.split(\"abc def\", \" \")  = \"abc\", \"def\"\ntool.split(\"abc  def\", \" \") = \"abc\", \"def\"\ntool.split(\"ab:cd:ef\", \":\") = \"ab\", \"cd\", \"ef\"\nParams：\n\nname\ntype\ndesc\n\n\n\n\nstr\nstring\n\n\n\nseparatorChars\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\nan array of parsed Strings, {@code null} if null String input\n\n\n\nstring\n\n\n\n"
        }
      ]
    },
    {
      "title": "regex是提供的正则工具",
      "content": "",
      "url": "/setting/tools/regex.html",
      "children": [
        {
          "title": "getGroup0",
          "url": "/setting/tools/regex.html#getgroup0",
          "content": "getGroup0 Desc：return the group 0 value($0) if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "getGroup1",
          "url": "/setting/tools/regex.html#getgroup1",
          "content": "getGroup1 Desc：return the group 1 value($1) if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "get",
          "url": "/setting/tools/regex.html#get",
          "content": "get Desc：return the special group value if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\ngroupIndex\ninteger\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "getAllGroups",
          "url": "/setting/tools/regex.html#getallgroups",
          "content": "getAllGroups Desc：return all group value as List if matchedotherwise null if not matchedParams：\n\nname\ntype\ndesc\n\n\n\n\npattern\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "extract",
          "url": "/setting/tools/regex.html#extract",
          "content": "extract Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\ntemplate\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delFirst",
          "url": "/setting/tools/regex.html#delfirst",
          "content": "delFirst Desc：Remove the first subString of the input String that matches thepattern with the given replacement string.Params：\n\nname\ntype\ndesc\n\n\n\n\npattern\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delAll",
          "url": "/setting/tools/regex.html#delall",
          "content": "delAll Desc：Remove the first subString of the input String that matches thepatternParams：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "delBefore",
          "url": "/setting/tools/regex.html#delbefore",
          "content": "delBefore Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAllGroup0",
          "url": "/setting/tools/regex.html#findallgroup0",
          "content": "findAllGroup0 Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAllGroup1",
          "url": "/setting/tools/regex.html#findallgroup1",
          "content": "findAllGroup1 Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "findAll",
          "url": "/setting/tools/regex.html#findall",
          "content": "findAll Params：\n\nname\ntype\ndesc\n\n\n\n\npattern\nobject\n\n\n\n  |─pattern\nstring\nThe original regular-expression pattern string.\n\n\n  |─flags\ninteger\nThe original pattern flags.\n\n\ncontent\nstring\n\n\n\ngroup\ninteger\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\narray\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "count",
          "url": "/setting/tools/regex.html#count",
          "content": "count Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\ninteger\n\n\n\n"
        },
        {
          "title": "contains",
          "url": "/setting/tools/regex.html#contains",
          "content": "contains Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n\n\n\n"
        },
        {
          "title": "isMatch",
          "url": "/setting/tools/regex.html#ismatch",
          "content": "isMatch Params：\n\nname\ntype\ndesc\n\n\n\n\nregex\nstring\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nobject\n\n\n\n"
        },
        {
          "title": "replaceAll",
          "url": "/setting/tools/regex.html#replaceall",
          "content": "replaceAll Params：\n\nname\ntype\ndesc\n\n\n\n\ncontent\nstring\n\n\n\nregex\nstring\n\n\n\nreplacementTemplate\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        },
        {
          "title": "escape",
          "url": "/setting/tools/regex.html#escape",
          "content": "escape Desc：escape for Regex keywordsParams：\n\nname\ntype\ndesc\n\n\n\n\ncontent\nstring\n\n\n\nReturn：\n\nname\ntype\ndesc\n\n\n\n\n\nstring\n\n\n\n"
        }
      ]
    },
    {
      "title": "logger是提供的日志工具类",
      "content": "可以打印日志到控制台, 受日志级别设置控制, 部分级别的日志会被忽略不显示\n\n方法\n返回值\n描述\n示例\n\n\n\n\nlog(str)\nvoid\n打印日志\nlogger.log(\"some log\")\n\n\ntrace(str)\nvoid\n打印日志(日志级别trace)\nlogger.trace(\"some log\")\n\n\ndebug(str)\nvoid\n打印日志(日志级别debug)\nlogger.debug(\"some log\")\n\n\ninfo(str)\nvoid\n打印日志(日志级别info)\nlogger.info(\"some log\")\n\n\nwarn(str)\nvoid\n打印日志(日志级别warn)\nlogger.warn(\"some log\")\n\n\nerror(str)\nvoid\n打印日志(日志级别error)\nlogger.error(\"some log\")\n\n\n",
      "url": "/setting/tools/logger.html",
      "children": []
    },
    {
      "title": "helper是提供的特殊帮助类(v1.6.1+)主要方法",
      "content": "\n\n方法\n返回值\n描述\n示例\n\n\n\n\nfindClass(str)\nclass\n获取类, 类似Class.forName()\nhelper.findClass(\"java.lang.String\")\n\n\nresolveLink(str)\nclass\n解析字符串中的link\nhelper.resolveLink(\"{@link java.lang.String}\")\n\n\nresolveLinks(str)\narray\n解析字符串中的所有link\nhelper.resolveLink(\"{@link java.lang.String},{@link java.lang.Long}\")\n\n\n",
      "url": "/setting/tools/helper.html",
      "children": []
    },
    {
      "title": "httpClient是提供的http相关帮助类(v1.9.0+)requestresponsecookieStore",
      "content": "可以由httpClient创建\n可以由request.call()得到\n可以由httpClient.cookieStore()获得\n",
      "url": "/setting/tools/httpClient.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/httpClient.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\ncookieStore()\ncookieStore\n获取cookie管理器\nhttpClient.cookieStore()\n\n\nrequest()\nrequest\n创建request\nhttpClient.request()\n\n\ndelete()\nrequest\n创建request,并设置method为DELETE\nhttpClient.delete()\n\n\ndelete(str)\nrequest\n创建request,并设置method为DELETE、设置url\nhttpClient.delete(\"http://www.easyyapi.com\")\n\n\nget()\nrequest\n创建request,并设置method为GET\nhttpClient.get()\n\n\nget(str)\nrequest\n创建request,并设置method为GET、设置url\nhttpClient.get(\"http://www.easyyapi.com\")\n\n\noptions()\nrequest\n创建request,并设置method为OPTIONS\nhttpClient.options()\n\n\noptions(str)\nrequest\n创建request,并设置method为OPTIONS、设置url\nhttpClient.options(\"http://www.easyyapi.com\")\n\n\npost()\nrequest\n创建request,并设置method为POST\nhttpClient.post()\n\n\npost(str)\nrequest\n创建request,并设置method为POST、设置url\nhttpClient.post(\"http://www.easyyapi.com\")\n\n\nput()\nrequest\n创建request,并设置method为PUT\nhttpClient.put()\n\n\nput(str)\nrequest\n创建request,并设置method为PUT、设置url\nhttpClient.put(\"http://www.easyyapi.com\")\n\n\ntrace()\nrequest\n创建request,并设置method为TRACE\nhttpClient.trace()\n\n\ntrace(str)\nrequest\n创建request,并设置method为TRACE、设置url\nhttpClient.trace(\"http://www.easyyapi.com\")\n\n\n"
        },
        {
          "title": "主要方法有:",
          "url": "/setting/tools/httpClient.html#主要方法有",
          "content": "主要方法有:\n\n方法\n返回值\n描述\n示例\n\n\n\n\naddCookie(cookie)\nvoid\n添加一个cookie\nhttpClient.cookieStore().addCookie(cookie)\n\n\naddCookies(cookies)\nvoid\n添加多个cookie\nhttpClient.cookieStore().addCookies(cookies)\n\n\nclear()\nvoid\n清除cookie\nhttpClient.cookieStore().clear()\n\n\ncookies()\narray\n获得当前的cookies\nhttpClient.cookieStore().cookies()\n\n\nnewCookie()\ncookie\n创建一个cookie,注意:并不会自动添加到cookieStore中, 需要手动调用addCookie加入\nhttpClient.cookieStore().newCookie()\n\n\n"
        }
      ]
    },
    {
      "title": "localStorage是提供的本地存储(v1.9.1+)",
      "content": "未指定分组时所有操作都在默认分组\nlocalStorage默认是存储在用户根目录下,可以跨项目读写,如果需要仅在当前项目读写,所有的操作都需要指定一个group.\n注意:set(key,value)中的value与get(key)得到的value并非同一对象.\ndef obj = [\"a\":\"b\"]localStorage.set(\"key\",obj)\nlocalStorage.get(\"key\")[\"a\"]=c //这里对get(\"key\")得到的对象进行赋值不会影响到原始的obj\nobj[\"a\"] == \"b\" //obj还是[\"a\":\"b\"]\n",
      "url": "/setting/tools/localStorage.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/localStorage.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nset(key, value)\nvoid\n设置一个键值\nsession.set(\"key\", \"value\")\n\n\nset(group, key, value)\nvoid\n设置一个键值(指定分组)\nsession.set(\"groupA\",\"key\", \"value\")\n\n\nget(key)\nobject\n获取一个设置的键值\nsession.get(\"key\")\n\n\nget(group, key)\nobject\n获取一个设置的键值(指定分组)\nsession.get(\"groupA\", \"key\")\n\n\npop(key)\nobject\n弹出一个队列中的元素\nsession.pop(\"key\")\n\n\npop(group, key)\nobject\n弹出一个队列中的元素(指定分组)\nsession.pop(\"groupA\", \"key\")\n\n\npeek(key)\nobject\n查看一个队列中的首个元素\nsession.peek(\"key\")\n\n\npeek(group, key)\nobject\n查看一个队列中的首个元素(指定分组)\nsession.peek(\"groupA\", \"key\")\n\n\npush(key, value)\nobject\n将一个元素加入到队列中\nsession.push(\"key\", value)\n\n\npush(group, key, value)\nobject\n将一个元素加入到队列中(指定分组)\nsession.push(\"groupA\", \"key\", value)\n\n\nremove(key)\nvoid\n删除一个设置的键值\nsession.remove(\"key\")\n\n\nremove(group, key)\nvoid\n删除一个设置的键值(指定分组)\nsession.remove(\"groupA\", \"key\")\n\n\nclear()\nvoid\n移除所有设置的键值(仅默认分组)\nsession.clear()\n\n\nclear(group)\nvoid\n移除所有设置的键值(指定分组)\nsession.clear(\"groupA\")\n\n\nkeys()\narray\n获取所有设置的键值(仅默认分组)\nsession.keys()\n\n\nkeys(group)\narray\n获取所有设置的键值(指定分组)\nsession.keys(\"groupA\")\n\n\n"
        }
      ]
    },
    {
      "title": "session是提供的临时存储(v1.9.1+)",
      "content": "未指定分组时所有操作都在默认分组\nsession是存储在内存当下,不可以跨项目读写\n注意:set(key,value)中的value与get(key)得到的value是同一对象.\ndef obj = [\"a\":\"b\"]session.set(\"key\",obj)\nsession.get(\"key\")[\"a\"]=\"c\" //这里对get(\"key\")得到的对象进行赋值会影响到原始的obj\nobj[\"a\"] == \"c\" //obj已经被变更为了[\"a\":\"c\"]\n",
      "url": "/setting/tools/session.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/session.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nset(key, value)\nvoid\n设置一个键值\nsession.set(\"key\", \"value\")\n\n\nset(group, key, value)\nvoid\n设置一个键值(指定分组)\nsession.set(\"groupA\",\"key\", \"value\")\n\n\nget(key)\nobject\n获取一个设置的键值\nsession.get(\"key\")\n\n\nget(group, key)\nobject\n获取一个设置的键值(指定分组)\nsession.get(\"groupA\", \"key\")\n\n\npop(key)\nobject\n弹出一个队列中的元素\nsession.pop(\"key\")\n\n\npop(group, key)\nobject\n弹出一个队列中的元素(指定分组)\nsession.pop(\"groupA\", \"key\")\n\n\npeek(key)\nobject\n查看一个队列中的首个元素\nsession.peek(\"key\")\n\n\npeek(group, key)\nobject\n查看一个队列中的首个元素(指定分组)\nsession.peek(\"groupA\", \"key\")\n\n\npush(key, value)\nobject\n将一个元素加入到队列中\nsession.push(\"key\", value)\n\n\npush(group, key, value)\nobject\n将一个元素加入到队列中(指定分组)\nsession.push(\"groupA\", \"key\", value)\n\n\nremove(key)\nvoid\n删除一个设置的键值\nsession.remove(\"key\")\n\n\nremove(group, key)\nvoid\n删除一个设置的键值(指定分组)\nsession.remove(\"groupA\", \"key\")\n\n\nclear()\nvoid\n移除所有设置的键值(仅默认分组)\nsession.clear()\n\n\nclear(group)\nvoid\n移除所有设置的键值(指定分组)\nsession.clear(\"groupA\")\n\n\nkeys()\narray\n获取所有设置的键值(仅默认分组)\nsession.keys()\n\n\nkeys(group)\narray\n获取所有设置的键值(指定分组)\nsession.keys(\"groupA\")\n\n\n"
        }
      ]
    },
    {
      "title": "config是提供的配置读取工具(v1.9.5+)",
      "content": "读取当前配置\n",
      "url": "/setting/tools/config.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/config.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nget(key)\nstring\n获取配置中的一个值\nconfig.get(\"key\")\n\n\ngetValues(key)\narray\n获取配置中的多个值\nconfig.getValues(\"key\")\n\n\nresolveProperty(str)\nstring\n解析字符串中的占位符\nconfig.resolveProperty(\"${key}\")\n\n\nresolvePropertyWith(str, placeHolder, context)\nstring\n使用自定义占位符和上下文解析字符串中的占位符\nconfig.resolvePropertyWith(\"${key}\", \"$\", {\"key\": \"value\"})\n\n\n"
        }
      ]
    },
    {
      "title": "api即为当前导出的api",
      "content": "应用对象只提供方法即api.method()✅, 不提供属性api.property❎\n",
      "url": "/setting/tools/api.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/api.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nname()\nstring\napi名称\napi.name()\n\n\nsetName(\"name\")\nvoid\n设置api名称\napi.setName(\"xxx\")\n\n\ndesc()\nstring\napi描述\napi.desc()\n\n\nsetDesc(\"desc\")\nvoid\n设置api描述\napi.setDesc(\"这是一个...\")\n\n\nappendDesc(\"desc\")\nvoid\n追加api描述\napi.appendDesc(\"这是一个...\")\n\n\nmethod()\nstring\napi的Http Method\napi.method()\n\n\nsetMethod(\"method\")\nvoid\n设置api的Http Method\napi.setMethod(\"POST\")\n\n\nsetMethodIfMissed(\"method\")\nvoid\n如果api的Http Method不存在则设置为指定值\napi.setMethodIfMissed(\"POST\")\n\n\npath()\nstring\napi路径, 如果此api有多个路径, 返回第一个\napi.path()\n\n\npaths()\nstring[]\napi路径数组\napi.paths()\n\n\nsetPath(\"path\")\nvoid\n设置api路径\napi.setPath(\"/a/b/c\")\n\n\nsetPaths([\"path\"*])\nvoid\n设置api路径\napi.setPaths([\"/a/b/c\".\"/a/b/d\"])\n\n\nbodyAttr()\nstring\napi body的描述\napi.bodyAttr()\n\n\nsetBody(object)\nvoid\n设置api body\napi.setBody([\"x\":\"y\"])\n\n\nsetBodyClass(\"class\")\nvoid\n通过类型名设置api body\napi.setBodyClass(\"com.itangcent.XxxxDTO\")\n\n\nsetJsonBody(object,\"attr\")\nvoid\n设置api body\napi.setBody([\"x\":\"y\"],\"描述\")\n\n\naddModelAsParam(object)\nvoid\n设置api参数\napi.addModelAsParam([\"x\":\"y\"])\n\n\naddModelClass(\"class\")\nvoid\n通过类型名设置api参数\napi.addModelClass(\"com.itangcent.XxxxDTO\")\n\n\naddParam(paramName,defaultVal,desc)\nvoid\n增加参数\napi.addParam(\"name\",\"tang\",\"user name\")\n\n\naddParam(paramName,defaultVal,required,desc)\nvoid\n增加参数\napi.addParam(\"name\",\"tang\",false,\"user name\")\n\n\nsetParam(paramName,defaultVal,required,desc)\nvoid\n设置参数(如果参数已存在会被覆盖)\napi.setParam(\"name\",\"tang\",false,\"user name\")\n\n\naddFormParam(paramName,defaultVal,desc)\nvoid\n增加表单参数\napi.addFormParam(\"name\",\"tang\",\"user name\")\n\n\naddFormParam(paramName,defaultVal,required,desc)\nvoid\n增加表单参数\napi.addFormParam(\"name\",\"tang\",false,\"user name\")\n\n\nsetFormParam(paramName,defaultVal,required,desc)\nvoid\n设置表单参数(如果参数已存在会被覆盖)\napi.setFormParam(\"name\",\"tang\",false,\"user name\")\n\n\naddFormFileParam(paramName,required,desc)\nvoid\n增加文件类型的表单参数\napi.setFormParam(\"avatar\",false,\"user's avatar\")\n\n\nsetFormFileParam(paramName,required,desc)\nvoid\n增加文件类型的表单参数(如果参数已存在会被覆盖)\napi.setFormFileParam(\"avatar\",false,\"user's avatar\")\n\n\naddPathParam(paramName,desc)\nvoid\n增加路径参数\napi.addPathParam(\"id\",\"user id\")\n\n\naddPathParam(paramName,value,desc)\nvoid\n增加路径参数\napi.addPathParam(\"id\",\"1\",\"user id\")\n\n\nsetPathParam(paramName,value,desc)\nvoid\n设置路径参数(如果参数已存在会被覆盖)\napi.setPathParam(\"id\",\"1\",\"user id\")\n\n\nheaders()\narray\n获取api所有的Header\napi.headers()\n\n\nheader(\"name\")\nHeader\n获取api中指定名称的Header\napi.header(\"Content-Type\")\n\n\nheaders(\"name\")\narray\n获取api中指定名称的所有Header\napi.headers(\"token\")\n\n\nremoveHeader(\"name\")\nHeader\n移除api中指定名称的Header\napi.removeHeader(\"token\")\n\n\naddHeader(\"name\",\"value\")\nvoid\n增加Header\napi.addHeader(\"Content-Type\",\"application/json\")\n\n\naddHeaderIfMissed(\"name\",\"value\")\nvoid\n如果指定名称的Header不存在则增加此Header\napi.addHeaderIfMissed(\"Content-Type\",\"application/json\")\n\n\naddHeader(\"name\",\"value\",required,\"desc\")\nvoid\n增加Header\napi.addHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\nsetHeader(\"name\",\"value\",required,\"desc\")\nvoid\n设置Header(如果Header已存在会被覆盖)\napi.setHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\n以下为response相关的方法\n-----\n-----\n-----\n\n\nsetResponseBody(body)\nvoid\n设置api响应的bodybodyType默认为raw\napi.setResponseBody([\"x\":\"y\"])\n\n\nsetResponseBody(\"bodyType\",body)\nvoid\n设置api响应的bodybodyType:raw/json/xml\napi.setResponseBody(\"json\",[\"x\":\"y\"])\n\n\nsetResponseBodyClass(\"bodyClass\")\nvoid\n通过类型名设置api响应的bodybodyType默认为raw\napi.setResponseBody(\"com.itangcent.XxxxVO\")\n\n\nsetResponseBodyClass(\"bodyType\",\"bodyClass\")\nvoid\n通过类型名设置api响应的bodybodyType:raw/json/xml\napi.setResponseBody(\"json\",\"com.itangcent.XxxxVO\")\n\n\nsetResponseCode(code)\nvoid\n设置响应code\napi.setResponseCode(200)\n\n\nappendResponseBodyDesc(\"bodyDesc\")\nvoid\n设置响应描述\napi.appendResponseBodyDesc(\"user info\")\n\n\naddResponseHeader(\"name\",\"value\")\nvoid\n增加响应Header\napi.addResponseHeader(\"Content-Type\",\"application/json\")\n\n\naddResponseHeader(\"name\",\"value\",required,\"desc\")\nvoid\n增加响应Header\napi.addResponseHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\nsetResponseHeader(\"name\",\"value\",required,\"desc\")\nvoid\n设置响应Header\napi.setResponseHeader(\"Content-Type\",\"application/json\",true,\"header which is used to indicate the original media type of the resource\")\n\n\n"
        }
      ]
    },
    {
      "title": "runtime是提供运行时的一些信息(v2.5.5+)",
      "content": "",
      "url": "/setting/tools/runtime.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/runtime.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\nchannel()\nstring\n获取当前导出的渠道, markdown/postman/yapi\nruntime.channel()\n\n\nprojectName()\nstring\n获取当前项目名\nruntime.projectName()\n\n\nprojectPath()\nstring\n获取当前项目路径\nruntime.projectPath()\n\n\nmodule()\nstring\n获取当前模块名(应用规则之后的)\nruntime.module()\n\n\nmoduleName()\nstring\n获取当前模块名(原始的)\nruntime.moduleName()\n\n\nmodulePath()\nstring\n获取当前模块路径\nruntime.modulePath()\n\n\nfilePath()\nstring\n正在解析的文件路径\nruntime.filePath()\n\n\ngetBean(className)\nobject\n获得插件内的Bean(仅支持com.itangcent.*)\nruntime.getBean(\"com.itangcent.intellij.jvm.DocHelper\")\n\n\nasync(runnable)\nnull\n异步执行操作\nruntime.async{logger.info(\"async\")}\n\n\n"
        }
      ]
    },
    {
      "title": "fieldContext提供字段解析过程中的上下文",
      "content": "在解析复杂的嵌套类的时候，可以通过fieldContext获得当前字段在最终结果中的路径等信息。",
      "url": "/setting/tools/fieldContext.html",
      "children": [
        {
          "title": "主要方法",
          "url": "/setting/tools/fieldContext.html#主要方法",
          "content": "主要方法\n\n方法\n返回值\n描述\n示例\n\n\n\n\npath()\nstring\n当前全路径\nfieldContext.path()\n\n\nproperty(\"propertyName\")\nstring\n给出指定字段的全路径\nfieldContext.property(\"xxx\")\n\n\n"
        },
        {
          "title": "示例",
          "url": "/setting/tools/fieldContext.html#示例",
          "content": "示例对于如下类:class A{    B b;\n}\nclass B{\n    C c;\n}\nclass C{\n    String d;\n    String e;\n}\n\n当解析到d字段时通过fieldContext.path()可以得到b.c\n通过fieldContext.property(\"e\")可以得到b.c.e\n"
        }
      ]
    },
    {
      "title": "groovy本地扩展",
      "content": "此方案已废弃, 请不要再使用\n",
      "url": "/setting/advanced/groovy-ext-config.html",
      "children": [
        {
          "title": "介绍",
          "url": "/setting/advanced/groovy-ext-config.html#介绍",
          "content": "介绍针对极其特殊的情况, 无法使用简单配置实现需求时, 可以使用groovy扩展以获得极高的定制化功能\n相对普通配置来说, 对于开发者有一定的技术要求,包括groovy以及当前插件的结构等都要有一定的了解\nwiki\noffical\ndemo\n"
        },
        {
          "title": "使用步骤",
          "url": "/setting/advanced/groovy-ext-config.html#使用步骤",
          "content": "使用步骤\n在项目目录下创建 /.easyapi/ext\n\n\n创建扩展文件 ${ActionName}Ext.groovy当前可支持的操作有:\n\nApiCallAction\nApiDashBoardAction\nYApiDashBoardAction\nFieldsToJsonAction\nMarkdownExportAction\nPostmanExportAction\nYapiExportAction\n\n\n\n在扩展文件中声明扩展类:\n\nclass ActionNameExt implements ActionExt {\n    void init(ActionContext.ActionContextBuilder builder) {\n        //在这里通过`bind`注入定制化组件,实现需要的功能\n        builder.bind(Xxx.class, KtHelper.INSTANCE.ktFunction({\n            it.to(Yyy.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n    }\n}\n"
        },
        {
          "title": "demo",
          "url": "/setting/advanced/groovy-ext-config.html#使用步骤-demo",
          "content": "demoYapiExportActionExt.groovy\nimport com.intellij.psi.*import com.itangcent.common.model.Request\nimport com.itangcent.idea.plugin.api.export.ClassExporter\nimport com.itangcent.idea.plugin.api.export.SpringRequestClassExporter\nimport com.itangcent.idea.plugin.api.export.yapi.YapiClassExportRuleKeys\nimport com.itangcent.idea.plugin.api.export.yapi.YapiRequestKitKt\nimport com.itangcent.idea.plugin.script.ActionExt\nimport com.itangcent.idea.plugin.utils.KtHelper\nimport com.itangcent.intellij.context.ActionContext\n\nimport java.util.stream.Collectors\nimport java.util.stream.Stream\n\nclass YapiExportActionExt implements ActionExt {\n\n    void init(ActionContext.ActionContextBuilder builder) {\n\n        builder.bind(ClassExporter.class, KtHelper.INSTANCE.ktFunction({\n            it.to(CustomClassExporter.class).in(com.google.inject.Singleton.class)\n            return null\n        }))\n\n    }\n\n    static class CustomClassExporter extends SpringRequestClassExporter {\n\n        void processCompleted(PsiMethod method, Request request) {\n            super.processCompleted(method, request)\n\n            String tags = ruleComputer.computer(YapiClassExportRuleKeys.TAG, method)\n            if (tags != null && !tags.isEmpty()) {\n                YapiRequestKitKt.setTags(request, Stream.of(tags.split(\"\\n\"))\n                        .map { it.trim() }\n                        .filter { !it.isEmpty() }\n                        .collect(Collectors.toList())\n                )\n            }\n\n            String status = ruleComputer.computer(YapiClassExportRuleKeys.STATUS, method)\n            logger.info(YapiRequestKitKt.class.toString())\n            YapiRequestKitKt.setStatus(request, status)\n        }\n    }\n}\n"
        },
        {
          "title": "特别注意",
          "url": "/setting/advanced/groovy-ext-config.html#特别注意",
          "content": "特别注意"
        },
        {
          "title": "由于插件源码语言是kotlin,在groovy中无法使用一些语法糖",
          "url": "/setting/advanced/groovy-ext-config.html#特别注意-由于插件源码语言是kotlin,在groovy中无法使用一些语法糖",
          "content": "由于插件源码语言是kotlin,在groovy中无法使用一些语法糖kotlin中声明的扩展方法如\nfun Doc.setTags(tags: List?) {    ...\n}\n在groovy中使用如下:\nYapiRequestKitKt.setTags(request,tags)"
        }
      ]
    }
  ],
  "demo": [
    {
      "title": "demo项目介绍",
      "content": "\nspringboot\n\n\nspringboot-webflux\n\n\nkotlin\n\n",
      "url": "/demo/index.html",
      "children": []
    }
  ],
  "框架支持": [
    {
      "title": "使用配置支持不同的框架",
      "content": "基于性能考虑, 插件对大部分框架都通过推荐配置或者远程配置的方式支持springboot\nspringboot-webflux\nswagger\nswagger3\nJAX-RS\n\nquarkus\njersey\n\n\njavax.validation\n\n简单-不分组\n简单-分组\n完全-不分组\n完全-分组\n\n\njackson\ndubbo\n",
      "url": "/framwork/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/springboot.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/springboot-webflux.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/swagger.html",
      "children": [
        {
          "title": "默认推荐配置中不包含swagger的支持",
          "url": "/framwork/swagger.html#默认推荐配置中不包含swagger的支持",
          "content": "默认推荐配置中不包含swagger的支持如果完全依赖swagger注解提供API相关信息，可以配置doc.source.disable=true来阻止插件使用注释\n"
        },
        {
          "title": "swagger2",
          "url": "/framwork/swagger.html#默认推荐配置中不包含swagger的支持-swagger2",
          "content": "swagger2如果需要支持swagger2,可在Preferences(Settings) > Other Settings > EasyApi > Remote中添加swagger.config和swagger.advanced.config"
        },
        {
          "title": "swagger3",
          "url": "/framwork/swagger.html#默认推荐配置中不包含swagger的支持-swagger3",
          "content": "swagger3如果需要支持swagger3,可在Preferences(Settings) > Other Settings > EasyApi > Remote中添加swagger3.config"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/swagger3.html",
      "children": [
        {
          "title": "默认推荐配置中不包含swagger3的支持",
          "url": "/framwork/swagger3.html#默认推荐配置中不包含swagger3的支持",
          "content": "默认推荐配置中不包含swagger3的支持如果完全依赖swagger注解提供API相关信息，可以配置doc.source.disable=true来阻止插件使用注释\n如果需要支持swagger3,可在Preferences(Settings) > Other Settings > EasyApi > Remote中勾选https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/swagger3.config"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/jaxrs.html",
      "children": [
        {
          "title": "插件支持JAX-RS协议",
          "url": "/framwork/jaxrs.html#插件支持jax-rs协议",
          "content": "插件支持JAX-RS协议quarkus\njersey\n"
        },
        {
          "title": "确认勾选:Preferences(Settings) > Other Settings > EasyApi > Support > jaxrs(quarkus | jersey)",
          "url": "/framwork/jaxrs.html#插件支持jax-rs协议-确认勾选preferencessettings->-other-settings->-easyapi->-support->-jaxrsquarkus-|-jersey",
          "content": "确认勾选:Preferences(Settings) > Other Settings > EasyApi > Support > jaxrs(quarkus | jersey)"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/javax_validation.html",
      "children": [
        {
          "title": "javax.validation",
          "url": "/framwork/javax_validation.html#javax.validation",
          "content": "javax.validation不分组\n分组\nmock\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/javax_validation_basic.html",
      "children": [
        {
          "title": "在推荐配置中有部分javax.validation相关的简单配置",
          "url": "/framwork/javax_validation_basic.html#在推荐配置中有部分javax.validation相关的简单配置",
          "content": "在推荐配置中有部分javax.validation相关的简单配置默认选择的就是不分组模式javax.validation\n可以在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中检查是否有勾选javax.validation, 并移除勾选javax.validation(strict)\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/javax_validation_strict.html",
      "children": [
        {
          "title": "在推荐配置中有部分javax.validation相关的简单配置",
          "url": "/framwork/javax_validation_strict.html#在推荐配置中有部分javax.validation相关的简单配置",
          "content": "在推荐配置中有部分javax.validation相关的简单配置默认选择的是不分组模式javax.validation\n如果需要开启分组校验, 可以在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中移除勾选javax.validation, 勾选javax.validation(strict)\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/framwork/javax_validation_mock.html",
      "children": [
        {
          "title": "需要通过javax.validation增加mock信息到yapi, 可自行增加如下配置",
          "url": "/framwork/javax_validation_mock.html#需要通过javax.validation增加mock信息到yapi,-可自行增加如下配置",
          "content": "需要通过javax.validation增加mock信息到yapi, 可自行增加如下配置# rules for javax.validation\n# define var\nnumber_min=-9999\nnumber_max=9999\nfloat_dmin=2\njava_integer_types=[\"java.lang.Integer\",\"int\",\"java.lang.Long\",\"long\",\"java.lang.Short\",\"short\",\"java.math.BigInteger\"]\njava_float_types=[\"java.lang.String\",\"java.lang.Float\",\"float\",\"java.lang.Double\",\"double\",\"java.math.BigDecimal\"]\n# mock_integer_or_float=${java_integer_types}.contains(it.type().name())?\"@integer\":\"@float\"\n\n# AssertTrue|AssertFalse\nfield.mock[@javax.validation.constraints.AssertFalse]=false\nfield.demo[@javax.validation.constraints.AssertFalse]=false\nfield.mock[@javax.validation.constraints.AssertTrue]=true\nfield.demo[@javax.validation.constraints.AssertTrue]=true\n\n# DecimalMax+DecimalMin -mock\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\n\n# DecimalMax|DecimalMin  -mock\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMax\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.DecimalMax\")+\",${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.DecimalMin\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.DecimalMin\")+\",${number_max},${float_dmin})\"\n\n# DecimalMax、DecimalMin  -advanced\nfield.advanced[@javax.validation.constraints.DecimalMax]=groovy:```\n    def ann = it.annMap(\"javax.validation.constraints.DecimalMax\")\n    return [maximum:ann[\"value\"],exclusiveMaximum:(ann[\"inclusive\"]==false)]\n```\nfield.advanced[@javax.validation.constraints.DecimalMin]=groovy:```\n    def ann = it.annMap(\"javax.validation.constraints.DecimalMin\")\n    return [minimum:ann[\"value\"],exclusiveMinimum:(ann[\"inclusive\"]==false)]\n```\n\n# javax.validation.constraints.Digits\n\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Digits\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:```\n    def max = \"9\".repeat(it.annValue(\"javax.validation.constraints.Digits\",\"integer\")).toInteger()\n    return \"@integer(\"+(-max)+\",\"+max+\")\"\n```\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Digits\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:```\n    def max = (\"9\".repeat(it.annValue(\"javax.validation.constraints.Digits\",\"integer\"))+\".\"+\"9\".repeat(it.annValue(\"javax.validation.constraints.Digits\",\"fraction\"))).toDouble()\n    return \"@float(\"+(-max)+\",\"+max+\",0,\"+it.ann(\"javax.validation.constraints.Digits\",\"fraction\")+\")\"\n```\n\nfield.advanced[groovy:it.hasAnn(\"javax.validation.constraints.Digits\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:```\n    def max = \"9\".repeat(it.annValue(\"javax.validation.constraints.Digits\",\"integer\")).toInteger()\n    return [minimum:-max,maximum:max]\n```\nfield.advanced[groovy:it.hasAnn(\"javax.validation.constraints.Digits\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:```\n    def max = (\"9\".repeat(it.annValue(\"javax.validation.constraints.Digits\",\"integer\"))+\".\"+\"9\".repeat(it.annValue(\"javax.validation.constraints.Digits\",\"fraction\"))).toDouble()\n    return [minimum:-max,maximum:max]\n```\n\n\n# javax.validation.constraints.Email\nfield.mock[@javax.validation.constraints.Email]=groovy:\"@email\"\nfield.advanced[@javax.validation.constraints.Email]={\"format\":\"email\"}\n\n# Max+Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\",\"+it.ann(\"javax.validation.constraints.Max\")+\",${float_dmin})\"\n\n# Max|Min\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(\"+it.ann(\"javax.validation.constraints.Min\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Max\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,\"+it.ann(\"javax.validation.constraints.Max\")+\")\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Min\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(\"+it.ann(\"javax.validation.constraints.Min\")+\",${number_max},${float_dmin})\"\n\n# Max、Min  -advanced\nfield.advanced[@javax.validation.constraints.Max]=groovy:```\n    return [maximum:it.ann(\"javax.validation.constraints.Max\")]\n```\nfield.advanced[@javax.validation.constraints.Min]=groovy:```\n    return [minimum:it.ann(\"javax.validation.constraints.Min\")]\n```\n\n# Negative&NegativeOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},-1)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(${number_min},0)\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0.01,${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.NegativeOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(${number_min},0,${float_dmin})\"\n\nfield.advanced[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_integer_types}.contains(it.jsonType().name())]={maximum:-1}\nfield.advanced[groovy:it.hasAnn(\"javax.validation.constraints.Negative\")&&${java_float_types}.contains(it.jsonType().name())]={maximum:-0.001}\nfield.advanced[@javax.validation.constraints.NegativeOrZero]={\"maximum\":0}\n\n# javax.validation.constraints.Pattern\nfield.advanced[@javax.validation.constraints.Pattern]=groovy:```\n    return tool.toJson([pattern:it.ann(\"javax.validation.constraints.Pattern\",\"regexp\")])\n```\n\n# Positive&PositiveOrZero\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(1,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_integer_types}.contains(it.jsonType().name())]=groovy:\"@integer(0,${number_max})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0.01,${number_max},${float_dmin})\"\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.PositiveOrZero\")&&${java_float_types}.contains(it.jsonType().name())]=groovy:\"@float(0,${number_max},${float_dmin})\"\n\nfield.advanced[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_integer_types}.contains(it.jsonType().name())]={minimum:1}\nfield.advanced[groovy:it.hasAnn(\"javax.validation.constraints.Positive\")&&${java_float_types}.contains(it.jsonType().name())]={minimum:0.001}\nfield.advanced[@javax.validation.constraints.PositiveOrZero]={minimum:0}\n\n# javax.validation.constraints.Size\n\nfield.mock[groovy:it.hasAnn(\"javax.validation.constraints.Size\")&&it.jsonType().name()==\"java.lang.String\"]=groovy:```\n    def ann = it.annMap(\"javax.validation.constraints.Size\")\n    if(ann.containsKey(\"min\")&&ann.containsKey(\"max\")){\n        return \"@string(\"+ann[\"min\"]+\",\"+ann[\"max\"]+\")\"\n    }else if(ann.containsKey(\"min\")){\n        return \"@string(\"+ann[\"min\"]+\")\"\n    }else if(ann.containsKey(\"max\")){\n        return \"@string(0,\"+ann[\"max\"]+\")\"\n    }\n```\nfield.advanced[@javax.validation.constraints.Size]=groovy:```\n    def element = (it.jsonType().name() == \"java.lang.String\")?\"Length\":\"Items\"\n    def ann = it.annMap(\"javax.validation.constraints.Size\")\n    def advanced = [:]\n    if(ann.containsKey(\"min\")){\n        advanced[\"min\"+element] = ann[\"min\"]\n    }\n    if(ann.containsKey(\"max\")){\n        advanced[\"max\"+element] = ann[\"max\"]\n    }\n    return advanced\n```\n上述配置可根据实际情况予以必要的调整\n\n\nkey\ndesc\n\n\n\n\nnumber_min\n数字最小值\n\n\nnumber_max\n数字最大值\n\n\nfloat_dmin\n浮点数小数位数\n\n\n快速配置properties.additional=https://raw.githubusercontent.com/tangcent/easy-yapi/master/third/javax.validation.config或者properties.additional=https://gitee.com/tangcent/easy-yapi/raw/master/third/javax.validation.config"
        }
      ]
    },
    {
      "title": "Jackson",
      "content": "通过推荐配置提供部分支持, 但出于性能考虑, 部分功能默认未选中, 如果需要开启, 请在推荐配置中选中.\n\nAnnotation\n是否支持\n默认\n\n\n\n\nJsonProperty\n是\n是\n\n\nJsonIgnore\n是\n是\n\n\nJsonFormat\n是\n否\n\n\nJsonPropertyOrder\n是\n否\n\n\nJsonIgnoreProperties\n是\n否\n\n\nJsonUnwrapped\n是\n否\n\n\nJsonNaming\n是\n否\n\n\n",
      "url": "/framwork/jackson.html",
      "children": []
    },
    {
      "title": "导出dubbo文档",
      "content": "如果仅希望导出markdown参照导出普通java method文档即可\n如果希望导出到postman/yapi参照自定义框架\n\n取消勾选 Preferences(Settings) > Other Settings > EasyApi > Support > methodDoc\n\n\n勾选 Preferences(Settings) > Other Settings > EasyApi > Support > generic export\n\n\n在Preferences(Settings) > Other Settings > EasyApi > Remote中添加dubbo.config\n\n\n如果配置不满足预期, 可以复制并修改dubbo.config的内容放在本地文件里\n\n",
      "url": "/framwork/dubbo.html",
      "children": []
    }
  ],
  "QA": [
    {
      "title": "",
      "content": "",
      "url": "/qa/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/add_confg.html",
      "children": [
        {
          "title": "如何添加配置文件",
          "url": "/qa/add_confg.html#如何添加配置文件",
          "content": "如何添加配置文件see local-file-config"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/group_apis_to_folder.html",
      "children": [
        {
          "title": "如何组织API到指定文件夹",
          "url": "/qa/group_apis_to_folder.html#如何组织api到指定文件夹",
          "content": "如何组织API到指定文件夹\nmodule用于分类api\n\n导出postman时,每个module将作为一个单独的文件夹\n导出yapi时,每个module需要配置相应的token,即对应一个yapi中的项目\n\n\n\n默认情况下取当前模块名(单模块项目取项目名)\n\n\n默认推荐配置:\n\n#find module from comment tag module=#module\n在类上这样注释:\n/** * Mock Apis\n *\n * @module mock\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/ignore_api.html",
      "children": [
        {
          "title": "如何忽略API",
          "url": "/qa/ignore_api.html#如何忽略api",
          "content": "如何忽略API增加配置:\n#ignore class or method which has comment tag 'ignore' ignore=#ignore\n在类上注释@ignore忽略当前类\n/** * Mock Apis\n *\n * @ignore\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n}\n在方法上注释@ignore忽略当前API\n/** * Mock Apis\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n     /**\n      * Mock String\n      * @ignore\n      */\n     @GetMapping(\"/string\")\n     public String mockString() {\n         return Result.success(\"mock string\");\n     }\n\n}\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_doc.html",
      "children": [
        {
          "title": "如何设置API/文件夹的名称/描述",
          "url": "/qa/api_doc.html#如何设置api文件夹的名称描述",
          "content": "如何设置API/文件夹的名称/描述\n一般来说:\n/**\n * 第一行注释作为文件夹的标题\n * 剩余行注释作为文件夹的描述\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * 第一行行注释作为API的标题\n     * 剩余行注释作为API的描述\n     */\n    @GetMapping(\"/string\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n\n\n特殊需求参照:class.doc | method.doc | api.name\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_deprecated.html",
      "children": [
        {
          "title": "如何在API/文件夹的描述中说明API/文件夹被废弃了",
          "url": "/qa/api_deprecated.html#如何在api文件夹的描述中说明api文件夹被废弃了",
          "content": "如何在API/文件夹的描述中说明API/文件夹被废弃了\n默认推荐配置如下:\nmethod.doc[#deprecated]=groovy:\"\\n「deprecated」\" + it.doc(\"deprecated\")\nmethod.doc[@java.lang.Deprecated]=「deprecated」\nmethod.doc[@kotlin.Deprecated]=groovy:\"\\n「deprecated」\" + it.ann(\"kotlin.Deprecated\",\"message\")\n\nmethod.doc[groovy:it.containingClass().hasDoc(\"deprecated\")]=groovy:\"\\n「deprecated」\" + it.containingClass().doc(\"deprecated\")\nmethod.doc[groovy:it.containingClass().hasAnn(\"java.lang.Deprecated\")]=「deprecated」\nmethod.doc[groovy:it.containingClass().hasAnn(\"kotlin.Deprecated\")]=groovy:\"\\n「deprecated」 \" + it.containingClass().ann(\"kotlin.Deprecated\",\"message\")\n\n\n\n\n使用注解或者注释标记API废弃即可:\n/**\n* 可以用注解`@Deprecated`来表示api废弃\n* 也可以用注释`@deprecated`\n*\n* @deprecated 改用{@link #methodName3(String)}\n*/\n@Deprecated\n@RequestMapping(value = \"/pathOfApi2\")\npublic Result methodName2(@RequestBody MockDtoOrVo jsonModel){\n    ...\n}\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_permission_javax.html",
      "children": [
        {
          "title": "如何在API描述中声明API需要的权限(javax annotation security)",
          "url": "/qa/api_permission_javax.html#如何在api描述中声明api需要的权限javax-annotation-security",
          "content": "如何在API描述中声明API需要的权限(javax annotation security)可考虑增加如下配置:\n## security descriptionmethod.doc[@javax.annotation.security.RolesAllowed]=groovy:\"require role:\"+it.ann(\"javax.annotation.security.RolesAllowed\")\n示例:\n/** * 第一行注释作为文件夹的标题\n * 剩余行注释作为文件夹的描述\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * 第一行行注释作为API的标题\n     * 剩余行注释作为API的描述\n     */\n    @GetMapping(\"/string\")\n    @RolesAllowed(\"admin\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/api_permission_spring.html",
      "children": [
        {
          "title": "如何在API描述中声明API需要的权限(spring security)",
          "url": "/qa/api_permission_spring.html#如何在api描述中声明api需要的权限spring-security",
          "content": "如何在API描述中声明API需要的权限(spring security)可考虑增加如下配置:\n## security descriptiondoc.method[@org.springframework.security.access.prepost.PreAuthorize]=groovy:```\n   def preAuthorize = it.ann(\"org.springframework.security.access.prepost.PreAuthorize\")\n   if(tool.nullOrBlank(preAuthorize)){\n        return\n   }\n   def role = regex.getGroup1(\"hasRole\\\\('(.*?)'\\\\)\",preAuthorize)\n   return \"require role: $role\"\n```\n示例:\n/** * 第一行注释作为文件夹的标题\n * 剩余行注释作为文件夹的描述\n */\n@RestController\n@RequestMapping(value = \"mock\")\npublic class MockCtrl {\n\n    /**\n     * 第一行行注释作为API的标题\n     * 剩余行注释作为API的描述\n     */\n    @GetMapping(\"/string\")\n    @PreAuthorize(\"hasRole('admin')\")\n    public String mockString() {\n        return Result.success(\"mock string\");\n    }\n}\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/ignore_fields.html",
      "children": [
        {
          "title": "如何忽略某些字段",
          "url": "/qa/ignore_fields.html#如何忽略某些字段",
          "content": "如何忽略某些字段\n使用规则:json.rule.field.ignore\n\n忽略特定名称的字段:\n\n## ignore field 'log'\njson.rule.field.ignore=log\n\n\n忽略特定类型的字段:\n\n## ignore field 'log' typed xxx.xxx.Log\njson.rule.field.ignore=groovy:it.type().name()==\"xxx.xxx.Log\"\n\n\n忽略特定限定符的字段:\n\n#ignore transient field\njson.rule.field.ignore=groovy:it.hasModifier(\"transient\")\n\n\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/type_convert.html",
      "children": [
        {
          "title": "如何将指定类型转换为另一种类型处理",
          "url": "/qa/type_convert.html#如何将指定类型转换为另一种类型处理",
          "content": "如何将指定类型转换为另一种类型处理将java.time.LocalDateTime作为yyyy-mm-dd形式字符串处理\n#Resolve 'java.time.LocalDateTime' as 'java.lang.String'json.rule.convert[java.time.LocalDateTime]=java.lang.String\njson.rule.convert[java.time.LocalDate]=java.lang.String\n将java.time.LocalDateTime作为timestamp处理\n#Resolve 'java.time.LocalDateTime' as 'java.lang.Long'json.rule.convert[java.time.LocalDateTime]=java.lang.Long\njson.rule.convert[java.time.LocalDate]=java.lang.Long\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/multiple_return_types.html",
      "children": [
        {
          "title": "部分接口可能有不同的返回",
          "url": "/qa/multiple_return_types.html#部分接口可能有不同的返回",
          "content": "部分接口可能有不同的返回可以使用method.doc将可能的返回放在方法备注中\n配置如下:method.doc[#result]=groovy: it.docs(\"result\").collect{helper.resolveLink(it)}.grep{it!=null}.collect{\"可能的返回:\\n\\n```json\\n\"+it.toJson(true)+\"\\n```\\n\\n\"}.join(\"\\n\")使用如下: /**  * @result {@link UserInfo}\n  * @result {@link Result}\n  */\n public Result mockString() {\n     ...\n }\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/field_multiple_types.html",
      "children": [
        {
          "title": "有的字段可能有不同类型的值",
          "url": "/qa/field_multiple_types.html#有的字段可能有不同类型的值",
          "content": "有的字段可能有不同类型的值可以使用field.doc将可能的类型值放在字段备注中\n配置如下: field.doc[#maybe]=groovy:it.docs(\"maybe\").collect{helper.resolveLink(it)}.collect{\"可能是:\\n\\n```json\\n\" + it.toJson(true) +\"\\n```\\n\\n\"}.join(\"\\n\")使用如下: /**  * @maybe {@link UserInfo}\n  * @maybe {@link java.lang.String}\n  */\n public Object target;\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/javax_validation_grouped.html",
      "children": [
        {
          "title": "如何开启javax_validation分组校验",
          "url": "/qa/javax_validation_grouped.html#如何开启javax_validation分组校验",
          "content": "如何开启javax_validation分组校验参照javax_validation,\n在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中移除勾选javax.validation, 勾选javax.validation(strict)\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/json_ignore_properties.html",
      "children": [
        {
          "title": "如何激活对com.fasterxml.jackson.annotation.JsonIgnoreProperties的支持",
          "url": "/qa/json_ignore_properties.html#如何激活对com.fasterxml.jackson.annotation.jsonignoreproperties的支持",
          "content": "如何激活对com.fasterxml.jackson.annotation.JsonIgnoreProperties的支持在 Preferences(Settings) > Other Settings > EasyApi >Recommend 中勾选Jackson_JsonIgnoreProperties\n"
        }
      ]
    },
    {
      "title": "",
      "content": "",
      "url": "/qa/method_complex.html",
      "children": [
        {
          "title": "导出时出现com.xxx.Xxx is to complex. Blocked cause by xxx reached xxx, 如何处理",
          "url": "/qa/method_complex.html#导出时出现com.xxx.xxx-is-to-complex.-blocked-cause-by-xxx-reached-xxx,-如何处理",
          "content": "导出时出现com.xxx.Xxx is to complex. Blocked cause by xxx reached xxx, 如何处理检查错误信息中的类是否不应该出现在请求体/响应中, 可尝试做如下配置:\n# ignore field with type com.xxx.Xxxfield.ignore=groovy:it.type().name()==\"com.xxx.Xxx\"\n如果此类确实字段繁多, 需要完全解析, 可通过配置放宽解析限制:\nmax.deep=8max.elements=512\n"
        }
      ]
    }
  ]
}