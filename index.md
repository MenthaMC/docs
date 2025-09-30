---
title: Mint/LemonMint官方文档
---

# MenthaMC官方文档

> 该文档暂未完成，暂时只有一些词条

这是MenthaMC的官方文档，Mint是MenthaMC项目体系一个基于Folia的高性能服务端，专注于修复特性与优化性能。

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

## 更多信息

- 关于配置的更多信息可以看本网站，其他的可以去仓库自行了解：[GitHub](https://github.com/ManthaMC)

## 文件结构

Mint 的文件结构与Bukkit、Folia、Paper等服务端相似，相比他们，我们多了一个`mint`文件夹，专门存放面对服务端的配置。

Mint 文件夹文件结构
```
mint/
└── mint_global.toml
```

其中的mint_global.toml 是存放绝大多数配置的文件，其格式是toml。

