# postman.class.test

Set a test script at the class level for Postman export.

## Usage

```properties
postman.class.test=groovy:'''
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
'''
```

This script will be applied to all API methods within the class when exporting to Postman.

## See Also

- [postman.test](./postman_test) — Method-level test script
- [postman.collection.test](./postman_collection_test) — Collection-level test event
