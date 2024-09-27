<script setup lang="ts">
import { defineProps } from 'vue';
import type { Feature } from '~/types/landing';

defineProps<{
  feature: Feature
}>();
</script>

<template>
  <section id="features" class="container mx-auto px-4 py-20">
    <h2 class="mb-12 text-center text-3xl font-bold">
      {{ feature.title }}
    </h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(item, index) in feature.items" :key="index" class="group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 p-6 transition-all hover:shadow-lg hover:shadow-purple-500/20">
        <div class="mb-4 h-12 w-12 rounded-full bg-purple-700 p-2 flex items-center justify-center">
          <component :is="item.icon" class="h-8 w-8 text-white" />
        </div>
        <h3 class="mb-2 text-xl font-semibold">{{ item.title }}</h3>
        <p class="text-gray-300">{{ item.description }}</p>
        <div class="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 to-pink-500 opacity-0 blur transition-all group-hover:opacity-20"></div>
      </div>
    </div>
  </section>
</template>