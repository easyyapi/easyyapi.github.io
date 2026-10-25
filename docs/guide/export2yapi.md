# Export to YApi

## Usage

### Method 1: Right-Click Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Right-click on the file content or folder
3. Select `ExportYapi` to export all APIs in the file or folder

### Method 2: Shortcut Export

1. Open a file containing APIs in your project, or select files/folders in the IDEA project panel
2. Use shortcut `Alt + Shift + E` (Windows/Linux) or `Ctrl + E` (macOS)
3. Select the APIs to export, choose `YApi` as the export channel
4. Click the ✔ button or press Enter to complete the export

## Error Messages

When the YApi server refuses a request — an invalid or expired token, a missing project, insufficient permissions — the failure notification carries the server's own rejection text, so the message points at the setting that needs fixing instead of a generic line. Since v3.2.6 a sparse server response (for example a JSON `null` id on a cart entry) no longer fails the export either: the unusable entry is skipped and the rest is written.

## Next Steps

- On first export, the plugin pops up a dialog asking for the **YApi server URL** and the **project token** for the target module. You don't need to configure them in Settings beforehand — see [YApi Settings](/settings/yapi).
- Once familiar, you can try [YApi Mock](/settings/yapi-mock)
