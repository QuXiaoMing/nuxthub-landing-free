<template>
  <section :id="id" :class="class">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
  class?: string
}>()
</script>