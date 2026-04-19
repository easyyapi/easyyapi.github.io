# Postman 配置

## 基本配置

| 设置项 | 说明 |
|--------|------|
| postman.url | Postman 导出 URL |
| postman.token | Postman API Token |
| postman.host | Postman 基础 URL |

## 获取 Postman API Key

1. 登录 Postman
2. 进入 Account Settings > API Keys
3. 生成新的 API Key

## 配置方式

### 在 IDE 设置中配置

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Postman</kbd>

### 在配置文件中配置

```properties
postman.host=http://localhost:8080
postman.url=https://api.getpostman.com
postman.token=your-postman-api-key
```

## Postman 脚本

EasyYapi 支持为导出的 Postman 集合添加预请求脚本和测试脚本：

- [postman.prerequest](/zh/settings/rules/postman_prerequest) — 预请求脚本
- [postman.test](/zh/settings/rules/postman_test) — 测试脚本
