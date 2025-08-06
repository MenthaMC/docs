---
title: 插件系统概述
---

# 插件系统概述

该插件系统并不是Bukkit和Paper的Java插件系统，而是LemonMint在1.21.8-R0.1版本中添加的新特性。该插件系统抛弃了传统的Java语言开发插件，转为JavaScript脚本插件，其目的是为了让编写插件更快速更简单。（注：Mint没有该特性）

## 开始

该插件系统不需要引入Jar包也不需要用什么构建系统，一个文件就可以搞定，而且支持ESM语法（当然CommonJS不支持）。

> 注：name和version是必须写的，不然会报错。

```js
const installer = (plugin) => {
    return {
        onLoaded() {
        },

        onEnabled() {
        },

        onDisabled() {
        }
    }
}

export default { name: "TestPlugin", version: "1.0.0", installer }
```

以上就是最简单的插件示例，在初始化加载的时候以及后面执行pl（plugins命令的简写）都能看到该插件。（插件如果是绿色字体，那么就是已经启用了，反之为禁用）
