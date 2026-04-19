# export.after

Post-export callback.

## Usage

```properties
export.after=groovy:'''
logger.info("Export completed: " + it.size() + " APIs")
'''
```

This callback is executed after the export process completes.
