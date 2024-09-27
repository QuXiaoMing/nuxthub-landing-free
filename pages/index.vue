<template>
  <Landing v-if="page" :page="page" />
</template>

<script setup lang="ts">
import { page } from '@/data/demo'

useHead({
  title: page.title,
  meta: [
    { name: 'description', content: page.description },
    { name: 'og:title', content: page.title },
    { name: 'og:description', content: page.description },
    { name: 'og:type', content: 'website' },
  ],
})
</script>