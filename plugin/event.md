---
title: 事件
---

# 事件系统

新插件系统的事件注册方式和Bukkit不一样，主要因为Bukkit用java、LemonMint用Lua，所以导致的插件写法的不同。但是LemonMint的事件注册难度其实比Bukkit还低。

## 基本运用

> 该插件系统暂时只有玩家加入游戏事件（

```lua
local plugin = function(plugin)
    -- 玩家加入事件
    local join = function(event)
        event.setJoinMessage("Welcome " .. event.player.name .. " Join this server!!")
    end
    
    plugin.enable = function()
        -- 注册事件
        plugin.event.listen("player_join", join)
    end
end

-- 编写meta和注册自己明白
```
