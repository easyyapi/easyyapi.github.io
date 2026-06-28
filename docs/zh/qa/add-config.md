# 如何添加配置文件

EasyYapi 支持多种方式向项目添加配置文件。

## 方式一：项目根目录配置

在项目根目录（你在 IDE 中打开的文件夹）创建 `.easy.api.config` 文件：

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

> **多模块工程注意：** 不存在按模块划分的配置层。规则文件仅基于工程根目录
> 解析，发现过程不会向下递归到子目录。若你将父目录作为工程打开，放在
> `module-a/` 等子目录中的配置文件不会被加载。若希望某个模块拥有独立规则，
> 请将该模块文件夹单独作为工程打开。

## 方式二：远程配置

在本地配置文件中配置远程 URL：

```properties
remote.url=http://your-config-server.com/easy-api.config
```

## 配置优先级

1. 工程规则（`.easyapi/` / 项目根目录下的 `.easy.api.config*`）—— 最高优先级
2. 扩展规则（内置框架预设）
3. 远程配置
4. 全局规则（`~/.easyapi/`）—— 最低优先级

详见 [本地配置文件](/zh/settings/local-file-config) 和 [远程配置文件](/zh/settings/remote-config)。
