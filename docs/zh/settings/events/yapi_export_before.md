# yapi.export.before

Callback executed before exporting to YApi.

## Usage

```properties
yapi.export.before=groovy:'''
logger.info("Exporting " + it.size() + " APIs to YApi")
'''
```

## Context

The `it` object contains the list of APIs being exported.
