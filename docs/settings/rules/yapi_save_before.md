# yapi.save.before

Event triggered before saving data to YApi.

## Usage

```properties
yapi.save.before=groovy:'''
logger.info("About to save API to YApi: " + it.name())
'''
```

This event is executed before each API is saved to YApi. If an error occurs in this event, it will be thrown (unlike other events which ignore errors).

## See Also

- [yapi.save.after](./yapi_save_after) — Post-save event
- [yapi.export.before](/settings/events/yapi_export_before) — Pre-export event
