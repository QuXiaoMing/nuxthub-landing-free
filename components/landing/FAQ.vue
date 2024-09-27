<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-vue-next'
import Section from '@/components/ui/Section.vue'
import type { Section as FAQSection } from '@/types/landing'
import { ref } from 'vue'

const props = defineProps<{
  faq: FAQSection
}>()

const openItems = ref<Set<number>>(new Set())

const toggleItem = (index: number) => {
  if (openItems.value.has(index)) {
    openItems.value.delete(index)
  } else {
    openItems.value.add(index)
  }
}

const isOpen = (index: number) => openItems.value.has(index)
</script>

<template>
  <Section id="faq" class="py-16 bg-secondary/10">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-6 text-foreground">{{ faq.title }}</h2>
      <p class="text-center mb-12 text-muted-foreground max-w-2xl mx-auto">{{ faq.description }}</p>
      <div class="max-w-3xl mx-auto">
        <Collapsible 
          v-for="(item, index) in faq.items" 
          :key="index" 
          class="mb-4 border border-secondary/20 rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger 
            class="flex justify-between items-center w-full p-5 transition-colors text-foreground"
            @click="toggleItem(index)"
          >
            <span class="font-semibold text-lg">{{ item.title }}</span>
            <ChevronDown 
              class="h-5 w-5 transition-transform duration-300 ease-in-out" 
              :class="{ 'rotate-180': isOpen(index) }" 
            />
          </CollapsibleTrigger>
          <CollapsibleContent :class="{ 'hidden': !isOpen(index) }">
            <div class="p-5 text-foreground/90">
              <p class="leading-relaxed">{{ item.description }}</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </Section>
</template>