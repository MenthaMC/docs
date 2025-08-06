---
title: 指令
---

# 指令系统

## 基本运用

```js
const Bukkit = Java.type("org.bukkit.Bukkit")

const installer = (plugin) => {
    return {
        onLoaded() {
            sendMessage("Loaded Plugin")
        },

        onEnabled() {
            sendMessage("Enabled Plugin")
            plugin.command.register("test", function (sender, command, args) {
                sender.sendMessage("Hello World!!")
                return true
            }, {  })
        },

        onDisabled() {
            sendMessage("Disabled Plugin")
        }
    }
}

function sendMessage(message) {
    Bukkit.getConsoleSender().sendMessage(message)
}

export default { name: "TestPlugin", version: "1.0.0", installer }
```
