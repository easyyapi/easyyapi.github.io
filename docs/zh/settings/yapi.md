# YApi 配置

## 基本配置

| 设置项 | 说明 |
|--------|------|
| yapi.server | YApi 服务器地址 |
| yapi.token | YApi 项目 Token |

## 获取 YApi Token

1. 登录 YApi
2. 进入项目设置
3. 复制项目 Token

## 配置方式

### 在 IDE 设置中配置

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>YApi</kbd>

### 在配置文件中配置

```properties
yapi.server=http://your-yapi-server.com
yapi.token=your-project-token
```

## YApi Mock

EasyYapi 支持将字段 Mock 规则同步到 YApi Mock 服务。

详见 [YApi Mock](./yapi-mock)。
