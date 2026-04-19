# Export to HttpClient

Export API definitions as IntelliJ IDEA HttpClient requests.

## Usage

### Method 1: Right-Click Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Right-click on the file content or folder
3. Select `ExportHttpClient` to export all APIs in the file or folder

### Method 2: Shortcut Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Use shortcut `Alt + Shift + E` (Windows/Linux) or `Ctrl + E` (macOS)
3. Select the APIs to export, choose `HttpClient` as the export channel
4. Click the ✔ button or press Enter to complete the export

## Output

The export generates an `.http` file containing HttpClient requests for each API endpoint:

```http
GET http://localhost:8080/api/users
Content-Type: application/json

###
POST http://localhost:8080/api/users
Content-Type: application/json

{
  "name": "test"
}
```

## Using Exported Files

1. Save the exported `.http` file to your project
2. Open the file in IntelliJ IDEA
3. Click on the request to execute it directly in IDEA
4. Configure the [HttpClient test framework](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html) for advanced testing
