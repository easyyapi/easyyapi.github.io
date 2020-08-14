# method.content.type

- 用于设置API请求默认的`content-type`, 插件依然会在必要的时候强行覆盖掉.
    - 如当遇到`@RequestBody`时，将被强行覆盖为`application/json`

### 默认情况下，插件优先使用`application/x-www-form-urlencoded`, 如希望优先使用`multipart/form-data`

***配置如下:***

```properties
method.content.type=multipart/form-data
```