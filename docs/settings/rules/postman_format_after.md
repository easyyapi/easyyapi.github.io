# postman.format.after

Event triggered after Postman collection formatting is complete.

## Usage

```properties
postman.format.after=groovy:'''
// Modify the formatted Postman collection before it is exported
logger.info("Postman collection formatted successfully")
'''
```

This event allows you to modify the Postman collection after it has been formatted but before it is exported. If an error occurs in this event, it will be thrown (unlike other events which ignore errors).

## See Also

- [postman.prerequest](./postman_prerequest) — Pre-request script
- [postman.test](./postman_test) — Test script
