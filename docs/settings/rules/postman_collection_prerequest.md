# postman.collection.prerequest

Set a pre-request script at the collection level for Postman export.

## Usage

```properties
postman.collection.prerequest=groovy:'''
console.log("Collection pre-request script")
'''
```

This event is executed once for the entire Postman collection during export, allowing you to set up collection-wide pre-request logic such as authentication tokens.

## See Also

- [postman.prerequest](./postman_prerequest) — Method-level pre-request script
- [postman.class.prerequest](./postman_class_prerequest) — Class-level pre-request script
