# postman.class.prerequest

Set a pre-request script at the class level for Postman export.

## Usage

```properties
postman.class.prerequest=groovy:'''
console.log("Pre-request for class: " + it.name())
'''
```

This script will be applied to all API methods within the class when exporting to Postman.

## See Also

- [postman.prerequest](./postman_prerequest) — Method-level pre-request script
- [postman.collection.prerequest](./postman_collection_prerequest) — Collection-level pre-request event
