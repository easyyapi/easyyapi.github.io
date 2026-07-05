# 使用

EasyYapi 支持以下使用方法：

## 方式一：快捷键导出

1. 打开项目中包含 API 的文件，或者在 IDEA 左边项目文件区域选择文件或文件夹
2. 使用快捷键 `Alt + Shift + E` (Windows/Linux) 或 `Ctrl + E` (macOS)
3. 选择要导出的 API
4. 选择导出渠道：`YApi` / `Markdown` / `Postman`
5. 点击 ✔ 按钮或按回车键完成导出

## 方式二：右键导出

1. 打开项目中包含 API 的文件，或者在 IDEA 左边项目文件区域选择文件或文件夹
2. 鼠标右键点击文件内容或文件夹
3. 选择 `ExportYapi` / `ExportPostman` / `ExportMarkdown` 导出该文件或文件夹中所有的 API

## 方式三：调用 API

1. 打开项目中包含 API 的文件
2. 右键文件内容选择 `Call`
3. 在 IDE 中直接发起 API 请求

详见 [Call API](./call.md)。

## 仅导出选中的方法

自 v3.2.0 起，EasyYapi 在导出时会尊重方法级选择。在触发导出之前，在编辑器中选中一个或多个方法（通过光标定位或拖选覆盖方法的文本范围）——只会导出源方法匹配（或覆盖）所选方法的端点，而不是包含类中的所有端点。

这对所有导出渠道均生效（YApi、Postman、Markdown、cURL、HttpClient）。若未选中任何方法，则仍按以往行为导出整个包含类。
