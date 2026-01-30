<script setup lang="ts">
import { IdtIcon, IdtImage, IdtLink } from "../components/common";
import type { LinkItem } from "../types";

const props = defineProps<{
  items: LinkItem[];
  grid?: number;
}>();
</script>

<template>
  <div
    class="grid"
    :style="
      typeof props.grid === 'number'
        ? { gridTemplateColumns: `repeat(${props.grid}, 1fr)` }
        : undefined
    "
  >
    <IdtLink
      v-for="(link, i) in props.items"
      :key="link.name + i"
      class="link"
      :style="link.style"
      :href="link.link"
      :rel="link.rel"
      :target="link.target"
      no-icon
    >
      <span class="row">
        <IdtIcon v-if="link.icon" :icon="link.icon" :size="link.size || '32'" />
        <IdtImage v-else-if="link.image" :image="link.image" :size="link.size || '32'" />
        <span class="name" v-html="link.name"></span>
      </span>
      <p v-if="link.desc" class="desc" v-html="link.desc"></p>
      <p v-if="link.linkText" class="link-text">
        {{ link.linkText }} <span class="vpi-arrow-right" style="margin-left: 6px" />
      </p>
    </IdtLink>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  margin: 16px 0;
}

.row {
  display: flex;
  align-items: center;
  gap: 0.75em;
  width: 100%;
  min-width: 0;
}

.link {
  --idt-Links-bg: var(--vp-c-bg-soft);
  --idt-Links-border: transparent;
  --idt-Links-name: var(--vp-c-brand-1);
  --idt-Links-desc: var(--vp-c-text-2);
  --idt-Links-bg-hover: var(--idt-Links-bg);
  --idt-Links-border-hover: var(--vp-c-brand-1);
  --idt-Links-name-hover: var(--vp-c-brand-2);
  --idt-Links-boxshadow-hover: none;
  --idt-Links-transform-hover: none;
  --idt-Links-transform-active: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition:
    color 0.25s,
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin: 0;
  border: 1px solid var(--idt-Links-border);
  border-radius: 0.75em;
  background-color: var(--idt-Links-bg);
  padding: 24px;
  min-width: 0;
  text-decoration: none !important;
}

.link.idt-link {
  color: var(--idt-Links-name);
}

.link.idt-link:hover {
  transform: var(--idt-Links-transform-hover);
  box-shadow: var(--idt-Links-boxshadow-hover);
  border-color: var(--idt-Links-border-hover);
  background-color: var(--idt-Links-bg-hover);
  color: var(--idt-Links-name-hover);
}

.link.idt-link:active {
  transform: var(--idt-Links-transform-active);
}

.iconify {
  flex-shrink: 0;
  color: var(--idt-iconify-defColor);
}

.name {
  flex: 1 1 0%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  margin: 0.875em 0 0 0;
  color: var(--idt-Links-desc);
  font-weight: 500;
  line-height: 24px;
  font-size: 14px;
}

.link-text {
  display: flex;
  align-items: center;
  margin: 0;
  padding-top: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
