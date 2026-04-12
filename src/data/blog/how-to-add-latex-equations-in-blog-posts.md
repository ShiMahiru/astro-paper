---
author: Alberto Perdomo
pubDatetime: 2024-09-08T20:58:52.737Z
modDatetime: 2025-03-22T09:25:46.734Z
title: "如何在 Astro 博客文章中添加 LaTeX 公式"
tags:
  - docs
description: "学习如何使用 Markdown、KaTeX 与 remark/rehype 插件在 Astro 文章中添加 LaTeX 公式。"
---

## 在文章中添加 LaTeX 公式

本文介绍在 Markdown 文章中启用数学公式支持：

- 安装并配置 `remark-math` 与 `rehype-katex`（或同类方案）。
- 行内公式使用 `$...$`，块级公式使用 `$$...$$`。
- 注意转义字符与 Markdown 语法冲突。
- 需要在页面中引入 KaTeX 样式以正确渲染。
