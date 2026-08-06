# Export to Hoppscotch

::: warning Beta feature
Hoppscotch export is disabled by default. Enable **Hoppscotch (Beta)** in the **Features** tab before using it.
:::

EasyYapi can export HTTP endpoints as a Hoppscotch collection. The channel supports both a local JSON file and upload to a Hoppscotch server.

## Enable the channel

Open **Settings** > **Other Settings** > **EasyApi** > **Features**. Under **Export Channels**, enable **Hoppscotch (Beta)**.

For cloud upload, open the Hoppscotch settings tab and either log in with the browser flow or enter an access token manually. Without a token, the export remains a local file export.

## Export a collection

1. Open a file containing API endpoints, or select files/folders in the Project view.
2. Choose **EasyYapi** > **Export** > **Hoppscotch (Beta)**.
3. If you are not logged in, choose an output directory and file name. The default file is `hoppscotch_collection.json`.
4. If you are logged in, choose **(New) Create new collection** or select an existing collection to update.

When no token is configured, the generated JSON can be imported into Hoppscotch manually. With a token, EasyYapi uploads the collection through the Hoppscotch API.

## Server and self-hosted settings

The Hoppscotch settings tab provides:

| Setting | Description |
|---------|-------------|
| **Server URL** | Hoppscotch server URL; defaults to `https://hoppscotch.io`. |
| **Backend URL** | Optional backend API URL for a self-hosted deployment. |
| **Login / Logout** | Start or clear the browser-based Hoppscotch session. |
| **Manual Token** | Fallback access token when browser login is unavailable. |

Hoppscotch export is HTTP-only; gRPC endpoints are not included in the collection.

## Updating an existing collection

Updating a collection uses a create-first-then-delete flow. EasyYapi asks for confirmation because the replacement collection receives a new ID. Shared links to the old collection therefore stop working after the update.

## Rules

The following channel rules can customize the collection:

- `hopp.host` — override the collection host
- `hopp.prerequest`, `hopp.class.prerequest`, and `hopp.collection.prerequest` — add pre-request scripts at endpoint, class, or collection scope
- `hopp.test`, `hopp.class.test`, and `hopp.collection.test` — add response tests
- `hopp.format.after` — run after collection formatting

See [Config Rules](/settings/config-rule) for rule syntax.
