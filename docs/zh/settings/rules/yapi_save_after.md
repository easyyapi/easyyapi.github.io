# yapi.save.after

保存数据到 YApi 之后触发的事件。

## 用法

```properties
yapi.save.after=groovy:'''
logger.info("API 已成功保存到 YApi: " + it.name())
'''
```

此事件在每个 API 保存到 YApi 之后执行。如果此事件中发生错误，将会抛出异常（不同于其他忽略错误的事件）。

## 另见

- [yapi.save.before](./yapi_save_before) — 保存前事件
- [yapi.export.before](/zh/settings/events/yapi_export_before) — 导出前事件
