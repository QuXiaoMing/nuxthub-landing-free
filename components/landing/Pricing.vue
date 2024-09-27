<script setup lang="ts">
import type { Pricing } from '~/types/landing';

defineProps<{
  pricing: Pricing
}>();
</script>

<template>
  <section id="pricing" class="py-24 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Pricing Plans</h2>
        <p class="text-xl text-gray-300">Choose the plan that fits your needs</p>
      </div>
      <div class="grid gap-8 md:grid-cols-3">
        <div v-for="(plan, planName) in pricing" :key="planName" 
             class="flex flex-col rounded-lg  p-6 shadow-lg border border-purple-800"
             :class="{ 'transform scale-105 z-10 bg-gradient-to-b from-purple-800 to-indigo-800 ': planName === 'proPlan' }">
          <h3 class="mb-2 text-2xl font-bold">{{ plan.title }}</h3>
          <p class="mb-4 text-4xl font-bold">${{ plan.discountedPrice }}</p>
          <p class="mb-6 text-gray-300">{{ plan.description }}</p>
          <div v-if="plan.discountPercentage" class="mb-4 inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {{ plan.discountPercentage }}% OFF
          </div>
          <ul class="mb-6 flex-grow space-y-2">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check mr-2 h-5 w-5 text-green-400">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <a :href="plan.ctaLink" target="_blank" rel="noopener" 
             class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-purple-600 hover:bg-purple-700 text-white">
            {{ plan.ctaText }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 如果需要额外的样式，可以在这里添加 */
</style>