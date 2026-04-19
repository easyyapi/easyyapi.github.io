# yapi.save.before

保存数据到 YApi 之前触发的事件。

## 用法

```properties
yapi.save.before=groovy:'''
logger.info("即将保存 API 到 YApi: " + it.name())
'''
```

此事件在每个 API 保存到 YApi 之前执行。如果此事件中发生错误，将会抛出异常（不同于其他忽略错误的事件）。

## 另见

- [yapi.save.after](./yapi_save_after) — 保存后事件
- [yapi.export.before](/zh/settings/events/yapi_export_before) — 导出前事件
