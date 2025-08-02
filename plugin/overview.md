---
title: 插件系统概述
---

# 插件系统概述

> 该插件系统为测试阶段，目前LemonMint正式版是没有实装的，该插件为[dev/1.21.8-new-plugin-system](https://github.com/MenthaMC/LemonMint/tree/dev/1.21.8-new-plugin-system)分支独有

该插件系统并不是Bukkit和Paper的Java插件系统，而是LemonMint在1.21.8-R0.1版本中添加的新特性。该插件系统抛弃了传统的Java语言开发插件，转为更小巧更简易的Lua脚本插件，其目的是为了让编写插件更快速更简单。（注：Mint没有该特性）

## 开始

该插件系统不需要引入Jar包也不需要用什么构建系统，一个文件就可以搞定。

> 注：meta中name和version是必须写的，不然会报错。

```lua
local plugin = function(plugin)
    plugin.enable = function()
        plugin.logger.info("Hello LemonMint Plugin!!")
    end
end

local meta = {
    name = "TestPlugin",
    version = "1.0.0"
}

pluginManager:register(plugin, meta)
```

以上就是最简单的插件示例，在初始化加载的时候以及后面执行pl（plugins命令的简写）都能看到该插件。
