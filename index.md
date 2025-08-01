---
title: Mint/LemonMint官方文档
---

# Mint/LemonMint官方文档

> 该文档暂未完成，暂时只有一些词条

这是Mint/LemonMint的官方文档，Mint是一个基于Folia的高性能服务端，专注于修复特性与优化性能，LemonMint前身是Mint-radical现是基于Mint的服务端，其为了在Mint的基础上添加新的特性以及让大部分Bukkit老插件兼容，同时也有一些之前因过于激进被细菌pass掉的特性（现在估计删完了...）

## Mint服务端的特性
 - 可配置的原版特性
 - Tpsbar、Membar、Regionbar、Networkbar监控
 - 各种Fork的优化
 - 对单线程区域性能的优化
 - 支持线性区域文件格式
 - 修复上游的错误
 - 以及提高稳定性
 - 集成 Pufferfish 的 Sentry，轻松详细追踪服务器的所有报错
 - NetworkAnalyser 数据包分析

## 目前相对于Mint，LemonMint独有的特性

- Bukkit Teleport的调用正常化（不完全）
- Bukkit Scoreboard API和原本Scoreboard命令的正常化（但是Bukkit API创建的Scoreboard并不受原版的Scoreboard指令控制）
- 从Purpur搬过来的6格末影箱（某位用户提起的，其实在1.21.5还是1.21.7就开始提的，1.21.8才正式搬过来）
- 对于Bukkit Scheduler API的简单恢复（并不代表全部恢复）
- Lua插件机制（在测试，为[dev/1.21.8-new-plugin-system](https://github.com/MenthaMC/LemonMint/tree/dev/1.21.8-new-plugin-system)分支独有）

## 更多信息

- 关于配置的更多信息可以看本网站，其他的可以去仓库自行了解：[GitHub](https://github.com/ManthaMC)

## 文件结构

Mint/LemonMint 的文件结构与Bukkit、Folia、Paper等服务端相似，相比他们，我们多了一个`mint`文件夹，专门存放面对服务端的配置。

Mint 文件夹文件结构
```
mint/
└── mint_global.toml
```

其中的mint_global.toml 是存放绝大多数配置的文件，其格式是toml。

