---
title: Membership and License Documentation
outline: deep
---

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()

const groups = Array.isArray(theme.value.sidebar)
  ? theme.value.sidebar
  : theme.value.sidebar?.['/en/keanggotaan/'] ?? []
</script>

# Membership and License Documentation

Guidance on purchasing, upgrading licenses, and support policies for Idtheme/Kentooz.

## Document List

<div v-for="group in groups" :key="group.text">
  <h4 class="category-heading">{{ group.text }}</h4>
  <ul>
    <li v-for="item in group.items || []" :key="item.link">
      <a :href="item.link">{{ item.text }}</a>
    </li>
  </ul>
</div>

