# 安装

## 支持的 IDE

| 构建 | IDE 兼容范围 | 支持级别 |
|------|-------------|---------|
| 默认构建（插件市场） | IntelliJ IDEA 2025.2+（Ultimate 与 Community Edition） | 官方支持 |
| 兼容构建 | IntelliJ IDEA 2022.1 – 2025.1 | 尽力而为，未经验证 |

插件市场只发布默认构建。如果你使用的是更旧的 IDEA 版本，请从 [GitHub Releases](https://github.com/tangcent/easy-yapi/releases) 下载**兼容构建**——每个版本都会额外附带一个覆盖 IDEA 2022.1 至 2025.1 的尽力而为构建包，Release Notes 的 Downloads 表格会列出每个 zip 的确切 IDE 范围。

你也可以用 `script/package.sh` 为自己的版本区间打包：

```bash
./script/package.sh              # 默认：2025.2+，无上限（发布到插件市场的就是这个）
./script/package.sh '221-*'      # 2022.1 及以上，无上限
./script/package.sh 221-251      # 2022.1 至 2025.1
```

默认范围之外的兼容性属于尽力而为：该构建包是针对最新的平台编译的，并未在旧版 IDE 上验证过。

::: tip 版本号怎么读
插件版本把 IDE 范围编码为 `<基础版本>.<起始>.<截止>` —— 例如 `3.2.4.252.0` 是 3.2.4 的默认构建，适用于 IDEA 2025.2（build `252`）及以上；`3.2.4.221.251` 则是覆盖 IDEA 2022.1（`221`）至 2025.1（`251`）的兼容构建。`0` 表示无上限。
:::

## 从 JetBrains 仓库安装

1. 打开 <kbd>Settings</kbd> > <kbd>Plugins</kbd> > <kbd>Marketplace</kbd>
2. 搜索 **"EasyYapi"**
3. 点击 <kbd>Install</kbd>

<iframe frameborder="none" width="245px" height="48px" src="https://plugins.jetbrains.com/embeddable/install/12458"></iframe>

## 手动安装

1. 从 [JetBrains 插件仓库](https://plugins.jetbrains.com/plugin/12458-easyyapi) 或 [GitHub Releases](https://github.com/tangcent/easy-yapi/releases) 下载插件
2. 打开 <kbd>Settings</kbd> > <kbd>Plugins</kbd> > <kbd>⚙️</kbd> > <kbd>Install Plugin from Disk...</kbd>
3. 选择下载的插件文件

安装后重启 IDE。
