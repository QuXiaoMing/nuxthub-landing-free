<script setup lang="ts">
defineProps<{
  footer: any
}>();
</script>

<template>
  <footer class="bg-[#0a0a0a] py-12">
    <div class="container mx-auto px-4">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 class="mb-4 text-lg font-semibold">{{ footer.brand.title }}</h3>
          <p class="text-sm text-gray-400">{{ footer.brand.description }}</p>
        </div>
        <div v-for="(section, index) in footer.nav.items" :key="index">
          <h3 class="mb-4 text-lg font-semibold">{{ section.title }}</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li v-for="child in section.children" :key="child.title">
              <a :href="child.url" :target="child.target" class="hover:text-purple-400">{{ child.title }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 text-lg font-semibold">Stay Connected</h3>
          <form class="flex">
            <input type="email" placeholder="Enter your email" class="mr-2 bg-[#1a1a1a] text-white border-purple-800 focus:border-purple-600 rounded px-3 py-2" />
            <button type="submit" class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
        {{ footer.copyright }}
      </div>
    </div>
  </footer>
</template>