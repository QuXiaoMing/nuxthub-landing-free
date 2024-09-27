<script setup lang="ts">
defineProps<{
  feature: any // Replace 'any' with the correct type from your types file
}>();
</script>

<template>
  <section class="bg-gray-100 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">{{ feature.title }}</h2>
      <p class="text-xl mb-12 text-center">{{ feature.description }}</p>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="item in feature.items" :key="item.title" class="bg-white p-6 rounded-lg shadow">
          <img v-if="item.avatar" :src="item.avatar.src" :alt="item.title" class="w-12 h-12 mb-4">
          <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>