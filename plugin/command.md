---
title: 指令
---

# 指令

## 基本运用

> 该插件系统的指令未完善，主要应为是权限那块没弄好

```lua
local plugin = function(plugin)
    -- 玩家加入事件
    local command = function(sender, name, args)
        sender:sendMessage("hello world!!")
    end
    
    plugin.enable = function()
        -- 注册事件
        plugin.command.register("test", command, {
            description = "This is a test command",
            usage = "/<Command>"
        })
    end
end

-- 编写meta和注册自己明白
```
