---
title: 事件
---

# 事件系统

## 基本运用

可以通过调用plugin中的registerEvent方法注册事件，但是事件类型需要通过Java.type 获取java来注册。

```js
const Bukkit = Java.type("org.bukkit.Bukkit")
const PlayerJoinEvent = Java.type("org.bukkit.event.player.PlayerJoinEvent")

const installer = {
    onLoaded() {
        sendMessage("Loaded Plugin")
    },

    onEnabled() {
        sendMessage("Enabled Plugin")
        plugin.event.listen(PlayerJoinEvent, function (event) {
            event.getPlayer().sendMessage("Hello World!!")
        })
    },

    onDisabled() {
        sendMessage("Disabled Plugin")
    }
}

function sendMessage(message) {
    Bukkit.getConsoleSender().sendMessage(message)
}

export default { name: "TestPlugin", version: "1.0.0", installer }
```

效果
![img.png](event/results.png)
