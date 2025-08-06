---
title: 调用Java
---

# 调用Java

插件即使是用javascript写的，但是也不少要调用java，一下的示例可以简单的让你调用Java

## 基本运用

```js
const Bukkit = Java.type("org.bukkit.Bukkit") // 获取 java类

const installer = (plugin) => {
    return {
        onLoaded() {
            sendMessage("Loaded Plugin")
        },

        onEnabled() {
            sendMessage("Enabled Plugin")
        },

        onDisabled() {
            sendMessage("Disabled Plugin")
        }
    }
}

function sendMessage(message) {
    Bukkit.getConsoleSender().sendMessage("Hello World!!")
}

export default { name: "TestPlugin", version: "1.0.0", installer }
```

除了获取java类不太一样，基本实例化java类和你在java的操作里面一样都是`new TheClass(args...)`
