# Postman Settings

## IDE Settings

Configure Postman settings in the IDE:

<kbd>Settings</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Postman</kbd>

| Setting | Description |
|---------|-------------|
| Token | Postman API Token |
| Workspace | Postman workspace ID |
| Export Mode | How to handle collections on export (see below) |
| Build Example | Whether to build example data in exported collections (default: on) |
| JSON5 Format Type | Where to use JSON5 format (see below) |
| Collections | Module-to-collection mapping (`module:collectionId` per line) |

### Getting a Postman API Key

1. Log in to Postman
2. Go to Account Settings > API Keys
3. Generate a new API Key

### Export Mode

| Mode | Description |
|------|-------------|
| CREATE_NEW | Always create a new collection (default) |
| UPDATE_EXISTING | Try to update existing collection by module |

## Config File Rules

The following rules can be set in config files (`.easy.api.config`):

| Rule | Description |
|------|-------------|
| [postman.host](/settings/rules/postman_host) | Postman base URL |
| [postman.prerequest](/settings/rules/postman_prerequest) | Pre-request script |
| [postman.test](/settings/rules/postman_test) | Test script |
| [postman.class.prerequest](/settings/rules/postman_class_prerequest) | Class-level pre-request script |
| [postman.class.test](/settings/rules/postman_class_test) | Class-level test script |
| [postman.collection.prerequest](/settings/rules/postman_collection_prerequest) | Collection-level pre-request event |
| [postman.collection.test](/settings/rules/postman_collection_test) | Collection-level test event |
| [postman.format.after](/settings/rules/postman_format_after) | Post-format hook |

### JSON5 Format Type

Controls where JSON5 format is used in exported Postman collections:

| Type | Description |
|------|-------------|
| NONE | Never use JSON5 |
| REQUEST_ONLY | Use JSON5 for request bodies only |
| RESPONSE_ONLY | Use JSON5 for response bodies only |
| EXAMPLE_ONLY | Use JSON5 for examples only (default) |
| ALL | Always use JSON5 |
