---
author: Simon Smale
pubDatetime: 2024-01-03T20:40:08Z
modDatetime: 2024-01-08T18:59:05Z
title: "如何使用 Git Hooks 设置创建与修改日期"
featured: false
draft: false
tags:
  - docs
  - FAQ
canonicalURL: https://smale.codes/posts/setting-dates-via-git-hooks/
description: "如何在 AstroPaper 中使用 Git Hooks 自动设置文章创建和修改时间。"
---

## 通过 Git Hooks 自动设置日期

本文介绍如何借助 Git hooks 自动维护文章发布时间与更新时间：

- 创建或修改文章时自动写入 `pubDatetime` / `modDatetime`。
- 在提交前统一规范日期格式（ISO 8601）。
- 减少手工维护时间字段带来的错误。
- 适合多人协作场景，保证元数据一致性。
