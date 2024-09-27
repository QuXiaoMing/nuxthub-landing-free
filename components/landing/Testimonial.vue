<script setup lang="ts">
defineProps<{
  testimonial: any // Replace 'any' with the correct type from your types file
}>();
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">{{ testimonial.title }}</h2>
      <p class="text-xl mb-12 text-center">{{ testimonial.description }}</p>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="item in testimonial.items" :key="item.name" class="bg-gray-100 p-6 rounded-lg">
          <img v-if="item.avatar" :src="item.avatar.src" :alt="item.name" class="w-16 h-16 rounded-full mb-4">
          <p class="mb-4">{{ item.description }}</p>
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-sm text-gray-600">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>