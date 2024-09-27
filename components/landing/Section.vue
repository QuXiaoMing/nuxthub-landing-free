<script setup lang="ts">
defineProps<{
  section: any // Replace 'any' with the correct type from your types file
}>();
</script>

<template>
  <section class="container mx-auto px-4 py-20">
    <h2 class="text-3xl font-bold mb-8">{{ section.title }}</h2>
    <p class="text-xl mb-12">{{ section.description }}</p>
    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="item in section.items" :key="item.title" class="bg-gray-100 p-6 rounded-lg">
        <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div v-if="section.buttons" class="mt-12 flex justify-center">
      <a v-for="button in section.buttons" :key="button.title" :href="button.url" :target="button.target"
         class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 mx-2">
        {{ button.title }}
      </a>
    </div>
  </section>
</template>