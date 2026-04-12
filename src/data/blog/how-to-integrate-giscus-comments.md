---
author: FjellOverflow
pubDatetime: 2024-07-25T11:11:53Z
modDatetime: 2025-03-12T12:28:53Z
title: "如何在 AstroPaper 中集成 Giscus 评论"
slug: how-to-integrate-giscus-comments
featured: false
draft: false
tags:
  - astro
  - blog
  - docs
description: "通过 Giscus 为托管在 GitHub Pages 的静态博客添加评论功能。"
---

## 集成 Giscus 评论系统

本文说明如何在 AstroPaper 中接入 Giscus：

- 在 GitHub 仓库启用 Discussions。
- 在 Giscus 配置页生成所需参数（repo、category、mapping 等）。
- 将参数写入站点配置并启用评论开关。
- 本地与线上分别验证评论加载与主题联动是否正常。
