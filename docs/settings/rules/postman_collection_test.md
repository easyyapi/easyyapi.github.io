# postman.collection.test

Set a test script at the collection level for Postman export.

## Usage

```properties
postman.collection.test=groovy:'''
console.log("Collection test script")
'''
```

This event is executed once for the entire Postman collection during export, allowing you to set up collection-wide test logic.

## See Also

- [postman.test](./postman_test) — Method-level test script
- [postman.class.test](./postman_class_test) — Class-level test script
