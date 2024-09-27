<script setup lang="ts">
defineProps<{
  cta: any
}>();
</script>

<template>
  <section class="bg-gradient-to-r from-purple-900 to-indigo-900 py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="mb-8 text-3xl font-bold">{{ cta.title }}</h2>
      <p class="mb-8 text-xl text-gray-300">{{ cta.description }}</p>
      <NuxtLink
        v-for="button in cta.buttons"
        :key="button.title"
        :to="button.url"
        target="_blank"
        class="bg-white text-purple-900 hover:bg-gray-100 px-6 py-3 rounded text-lg font-semibold inline-block"
      >
        {{ button.title }}
      </NuxtLink>
    </div>
  </section>
</template>