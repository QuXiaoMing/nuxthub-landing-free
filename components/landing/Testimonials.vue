<template>
  <section class="bg-[#0f0f0f] py-20">
    <div class="container mx-auto px-4">
      <h2 class="mb-12 text-center text-3xl font-bold">{{ testimonial.title }}</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in testimonial.items" :key="item.id" class="flex flex-col items-center text-center">
          <img 
            :src="item.avatar" 
            :alt="item.name" 
            width="100" 
            height="100" 
            class="mb-4 rounded-full"
            style="aspect-ratio: 100 / 100; object-fit: cover;"
          >
          <p class="mb-4 italic text-gray-300">{{ item.content }}</p>
          <h3 class="font-semibold">{{ item.name }}</h3>
          <p class="text-sm text-gray-400">{{ item.role }} at {{ item.company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Testimonial } from "@/types/landing";

defineProps<{
  testimonial: Testimonial
}>();
</script>