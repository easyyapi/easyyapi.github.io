**Script Executor**

***功能介绍***

Script Executor 是一个脚本调试工具，它能帮助您更轻松地使用本插件提供的[丰富配置规则](/setting/config-rule.html)。
当您需要配置复杂规则但直接编写脚本有困难时，Script Executor 提供了一个交互式环境，让您能够：

- 实时测试和调试复杂的规则配置，立即看到执行结果
- 在友好的界面中尝试不同的脚本逻辑，无需反复修改项目配置
- 通过实例学习和掌握可用的 API 和工具对象
- 快速验证您的配置想法是否可行，提高开发效率
- 在正式应用前排查潜在问题，确保规则按预期工作

***使用方法***

- 鼠标点击最上方<kbd>Code</kbd> > <kbd>ScriptExecutor</kbd>, 将会打开脚本执行界面

![script-executor](../asset/idea-script-executor.png)

***书写并执行脚本***

- 点击`choose`选择上下文对象
- 左边选择调试脚本类型,具体可用类型视`JDK`支持情况:一般有`Groovy`/`JavaScript`/`General`
- 脚本停止输入`3s`左右自动执行,并将执行结果显示在下方
- 插件提供的工具/对象: [tools](/setting/tools.html)

***其他帮助按钮***

- 点击`reset`重置脚本为默认帮助脚本
- 点击`help`执行并输出默认帮助脚本
- 点击`copy`复制当前脚本到粘贴板