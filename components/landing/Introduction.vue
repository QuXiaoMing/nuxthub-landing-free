<script setup lang="ts">
defineProps<{
  section: any
}>();
</script>

<template>
  <section class="bg-[#0f0f0f] py-20">
    <div class="container mx-auto px-4">
      <div class="space-y-32">
        <div v-for="(item, index) in section.items" :key="index" 
             class="flex flex-col md:flex-row items-center"
             :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
          <div class="w-full md:w-[40%] mb-12 md:mb-0">
            <div class="relative">
              <img loading="lazy" :src="item.image.src" :alt="item.title" class="w-full rounded-lg" />
              <div class="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          <div class="w-full md:w-[60%] md:px-16">
            <h2 class="text-3xl font-bold text-white mb-6">{{ item.title }}</h2>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">{{ item.description }}</p>
            <div class="space-x-6">
              <button v-for="button in item.buttons" :key="button.title" 
                      class="text-purple-400 hover:text-purple-300 text-lg font-medium">
                {{ button.title }} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>