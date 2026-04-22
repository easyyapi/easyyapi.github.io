# YApi Mock

EasyYapi 支持将字段 Mock 规则同步到 YApi Mock 服务，方便前端开发使用。

## 配置

### 启用 Mock

在配置文件中添加 Mock 规则：

```properties
field.mock=@mock
```

### Mock 规则

在 Javadoc 中使用 `@mock` 标签：

```java
public class User {
    /**
     * 用户名
     * @mock admin
     */
    private String name;

    /**
     * 邮箱
     * @mock user@example.com
     */
    private String email;

    /**
     * 年龄
     * @mock 25
     */
    private Integer age;
}
```

## 内置 Mock 规则

EasyYapi 提供基于字段名和类型的内置 Mock 规则，导出到 YApi 时自动应用。

### 联系方式 & 身份

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.email` | `@email` | 随机邮箱 |
| `*.phone` | `@phone` | 随机手机号 |
| `*.mobile` | `@phone` | 随机手机号 |
| `*.uuid` | `@uuid` | 随机 UUID |

### ID 字段

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.id` (integer) | `@integer` | 随机整数 |
| `*.id` (long) | `@integer` | 随机整数 |
| `*.id` (string) | `@id` | 随机 ID 字符串 |

### 姓名 & 个人信息

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.name` | `@string` | 随机字符串 |
| `*.age` (integer) | `@integer(0, 120)` | 0-120 年龄 |

### 地址

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.address` | `@county(true)` | 完整地址 |
| `*.city` | `@city` | 随机城市 |
| `*.country` | `@county` | 随机县区 |
| `*.province` | `@province` | 随机省份 |
| `*.zip` | `@zip` | 随机邮编 |
| `*.ip` | `@ip` | 随机 IP 地址 |

### URL & 媒体

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.url` | `@url` | 随机 URL |
| `*.link` | `@url` | 随机 URL |
| `*.image` | `@image` | 随机图片 URL |
| `*.avatar` | `@image` | 随机图片 URL |

### 数字 & 金额

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.price` (double/float) | `@float(0, 10000, 2, 2)` | 两位小数价格 |
| `*.amount` (double/float) | `@float(0, 10000, 2, 2)` | 两位小数金额 |
| `*.count` (integer) | `@integer(0, 100)` | 0-100 计数 |
| `*.page` (integer) | `@integer(1, 100)` | 1-100 页码 |
| `*.size` (integer) | `@integer(1, 100)` | 1-100 分页大小 |

### 安全

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.password` | `******` | 遮蔽密码 |
| `*.token` | `@string(32)` | 32位 token |

### 日期 & 时间

| 字段模式 | Mock 值 | 说明 |
|----------|---------|------|
| `*.date` | `@date` | 随机日期 |
| `*.datetime` | `@datetime` | 随机日期时间 |

## 额外 Mock 启发式规则

除了内置规则，EasyYapi 还会根据字段名智能推断：

| 名称包含 | Mock 值 | 说明 |
|----------|---------|------|
| `tel`, `mobile` | `@phone` | 手机号 |
| `website` | `@url` | 网站链接 |
| `guid` | `@uuid` | UUID/GUID |
| `user`, `first`, `last` (含 name) | `@cname` | 中文姓名 |
| `state` | `@province` | 省份/州 |
| `postal` | `@zip` | 邮编 |
| `birth` (含 date) | `@date('yyyy-MM-dd')` | 出生日期 |
| `money` | `@float(0, 10000, 2, 2)` | 金额 |
| `num`, `number`, `qty`, `quantity` | `@integer(0, 100)` | 数字 |
| `pwd` | `******` | 遮蔽密码 |
| `key` | `@string(32)` | API 密钥 |
| `img`, `photo` | `@image` | 图片 URL |
| `desc`, `description`, `content`, `remark`, `comment` | `@cparagraph` | 中文段落 |
| `title` | `@ctitle` | 中文标题 |
| `code` | `@string(6)` | 6位验证码 |

## 类型推断 Mock

当没有匹配的名称规则时，EasyYapi 会根据类型生成 Mock：

| 类型 | Mock 值 | 说明 |
|------|---------|------|
| String | `@string` | 随机字符串 |
| Short | `@integer(0, 32767)` | 随机短整数 |
| Integer | `@integer` | 随机整数 |
| Long | `@integer` | 随机整数 |
| Float | `@float` | 随机浮点数 |
| Double | `@float` | 随机浮点数 |
| Boolean | `@boolean` | 随机布尔值 |
| Array | `@array` | 随机数组 |
| Object | `@object` | 随机对象 |
| File | `@file` | 文件占位符 |
| Date | `@date` | 随机日期 |
| DateTime | `@datetime` | 随机日期时间 |

## 自定义 Mock 规则

可以在配置文件中添加自定义 Mock 规则：

```properties
# 格式: mock.rule=字段名|类型=mock值
mock.rule=*.orderId|string=@id
mock.rule=*.status|integer=@integer(0, 5)
```

格式说明：
- `字段名` - 字段名模式（支持 `*` 通配符）
- `类型` - JSON 类型（string, integer, long, double, float, boolean 等）
- `mock值` - Mock.js 表达式
