# Postman Settings

## Basic Configuration

| Setting | Description |
|---------|-------------|
| postman.url | Postman export URL |
| postman.token | Postman API Token |
| postman.host | Postman base URL |

## Getting a Postman API Key

1. Log in to Postman
2. Go to Account Settings > API Keys
3. Generate a new API Key

## Configuration Methods

### Via IDE Settings

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Postman</kbd>

### Via Config File

```properties
postman.host=http://localhost:8080
postman.url=https://api.getpostman.com
postman.token=your-postman-api-key
```

## Postman Scripts

EasyYapi supports adding pre-request and test scripts to exported Postman collections:

- [postman.prerequest](/settings/rules/postman_prerequest) — Pre-request script
- [postman.test](/settings/rules/postman_test) — Test script
- [postman.class.prerequest](/settings/rules/postman_class_prerequest) — Class-level pre-request script
- [postman.class.test](/settings/rules/postman_class_test) — Class-level test script
- [postman.collection.prerequest](/settings/rules/postman_collection_prerequest) — Collection-level pre-request event
- [postman.collection.test](/settings/rules/postman_collection_test) — Collection-level test event
