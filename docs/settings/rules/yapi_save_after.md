# yapi.save.after

Event triggered after saving data to YApi.

## Usage

```properties
yapi.save.after=groovy:'''
logger.info("API saved to YApi successfully: " + it.name())
'''
```

This event is executed after each API is saved to YApi. If an error occurs in this event, it will be thrown (unlike other events which ignore errors).

## See Also

- [yapi.save.before](./yapi_save_before) — Pre-save event
- [yapi.export.before](/settings/events/yapi_export_before) — Pre-export event
