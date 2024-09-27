<template>
  <div class="dark">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// ... existing code ...
</script>

<style>
/* 确保背景色和文本颜色适应暗色主题 */
.dark {
  @apply bg-gray-900 text-white;
}
</style>
