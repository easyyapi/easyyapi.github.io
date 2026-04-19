# Export to cURL

Export API definitions as cURL commands.

## Usage

### Method 1: Right-Click Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Right-click on the file content or folder
3. Select `ExportCurl` to export all APIs in the file or folder

### Method 2: Shortcut Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Use shortcut `Alt + Shift + E` (Windows/Linux) or `Ctrl + E` (macOS)
3. Select the APIs to export, choose `cURL` as the export channel
4. Click the ✔ button or press Enter to complete the export

## Output

The export generates a `.sh` file containing cURL commands for each API endpoint:

```bash
curl -X GET "http://localhost:8080/api/users" \
  -H "Content-Type: application/json"

curl -X POST "http://localhost:8080/api/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "test"}'
```
