<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineProps<{
  header: any
}>();

const isScrolled = ref(false);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', `#${sectionId}`);
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  history.pushState(null, '', window.location.pathname);
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled ? 'bg-black/10 backdrop-blur-sm shadow-subtle' : 'bg-transparent'
  ]">
    <div class="container mx-auto flex items-center justify-between p-4">
      <div 
        class="text-2xl font-bold transition-colors cursor-pointer text-white" 
        @click="scrollToTop"
      >
        {{ header.brand.avatar.title }}
      </div>
      <nav class="hidden space-x-4 md:flex">
        <a
          v-for="item in header.nav.items"
          :key="item.title"
          :href="item.url"
          :target="item.target"
          @click.prevent="scrollToSection(item.url.substring(1))"
          class="text-sm hover:text-purple-400 cursor-pointer text-white transition-colors duration-300"
        >
          {{ item.title }}
        </a>
      </nav>
      <button 
        v-for="button in header.buttons" 
        :key="button.title" 
        class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white transition-colors duration-300"
      >
        {{ button.title }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.shadow-subtle {
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
</style>