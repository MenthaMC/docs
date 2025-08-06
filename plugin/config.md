---
title: 配置
---

# 配置系统

## 基本运用

```js
const Bukkit = Java.type("org.bukkit.Bukkit")

const installer = (plugin) => {
    return {
        onLoaded() {
            plugin.config.load("default", defaultConfig)
            sendMessage("Loaded Plugin")
        },

        onEnabled() {
            let test = plugin.config.get("default", "test")
            sendMessage("Enabled Plugin")
            sendMessage(`Default Config Test: ${plugin}`)
        },

        onDisabled() {
            sendMessage("Disabled Plugin")
        }
    }
}

const defaultConfig = `test: Hello World!!`;

function sendMessage(message) {
    Bukkit.getConsoleSender().sendMessage(message)
}

export default { name: "TestPlugin", version: "1.0.0", installer }
```
