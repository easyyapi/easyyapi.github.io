# 本地配置文件

EasyYapi 使用 `.easy.api.config` 文件作为本地配置文件。

## 文件位置

### 项目根目录

```
your-project/
├── .easy.api.config
├── src/
└── pom.xml
```

### 模块根目录

```
your-project/
├── module-a/
│   ├── .easy.api.config
│   └── src/
├── module-b/
│   ├── .easy.api.config
│   └── src/
└── pom.xml
```

## 文件格式

配置文件使用 `key=value` 格式：

```properties
# 注释以 # 开头

# API 名称规则
api.name=#name

# 字段忽略规则
field.ignore=groovy:it.hasAnn("com.fasterxml.jackson.annotation.JsonIgnore")

# 类型转换
json.rule.convert=groovy:it.type().name()=="java.util.Date" => java.lang.String
```

## 配置合并

多个配置文件会按优先级合并，高优先级的配置会覆盖低优先级的配置。
