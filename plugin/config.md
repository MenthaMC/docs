---
title: 配置
---

# 配置系统

## 基本运用

```js
const Bukkit = Java.type("org.bukkit.Bukkit")

const installer = {
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

const defaultConfig = `test: Hello World!!`;

function sendMessage(message) {
    Bukkit.getConsoleSender().sendMessage(message)
}

export default { name: "TestPlugin", version: "1.0.0", installer }
```

## 模块化获取资源文件运用

> 注：该运用只能在模块化环境使用，单文件环境是无法使用的

(资源) config.yml
```yaml
test: Hello World!!!
```

(主类) test.js
```js
const Bukkit = Java.type("org.bukkit.Bukkit")

const installer = {
    onLoaded() {
        plugin.config.loadDefault()
        sendMessage("Loaded Plugin")
    },

    onEnabled() {
        let test = plugin.config.getDefault("test")
        sendMessage("Enabled Plugin")
        sendMessage(`Default Config Test: ${plugin}`)
    },

    onDisabled() {
        sendMessage("Disabled Plugin")
    }
}

const defaultConfig = `test: Hello World!!`;

function sendMessage(message) {
    Bukkit.getConsoleSender().sendMessage(message)
}

export default { name: "TestPlugin", version: "1.0.0", installer }
```
