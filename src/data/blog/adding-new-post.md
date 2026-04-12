---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
title: "在 AstroPaper 中添加新文章"
slug: adding-new-posts-in-astropaper-theme
featured: true
draft: false
tags:
  - docs
description: "创建和发布新文章时的规则、建议与最佳实践。"
---

## 说明

本文介绍如何在 AstroPaper 中创建新文章，重点包括：

- 在 `src/data/blog/` 下新建 Markdown 文件。
- 从 v5.1.0 开始支持子目录，子目录会影响文章 URL。
- 以前缀 `_` 命名目录可避免目录名进入 URL。
- 必填 frontmatter：`title`、`description`、`pubDatetime`。
- 可选 frontmatter：`slug`、`tags`、`draft`、`featured`、`ogImage`、`canonicalURL` 等。
- 使用 `## Table of contents` 可在文中插入目录。
- 正文标题建议从 `h2` 开始（`h1` 由标题字段承担）。
- 代码高亮默认使用 Shiki，可按需移除 transformers。
- 图片建议放在 `src/assets/`（可优化）或 `public`（不优化）。

> 以上为中文整理版，便于快速查阅。
