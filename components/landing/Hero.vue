<script setup lang="ts">

import type { Page } from '~/types/landing';
defineProps<{
    hero: Page['hero'];
}>();
</script>
<template>
    <section class="container mx-auto grid gap-8 px-4 pt-32 pb-20 md:grid-cols-2 md:items-center">
        <div>
            <h1 class="text-4xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white" data-id="12" data-relingo-block="true"
                data-relin-paragraph="5">Free Landing Page
                <br data-id="13"><span
                    class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                    data-id="14">Template for startups</span>
            </h1>
            <p class="mb-8 text-xl text-gray-400">
                {{ hero.description }}
            </p>
            <div class="space-x-4">
                <NuxtLink v-for="button in hero.buttons" :key="button.title" :to="button.url" target="_blank" :class="[
                    'px-6 py-3 rounded text-lg font-semibold inline-block',
                    button.theme === 'outline'
                        ? 'border border-purple-600 text-purple-400 hover:text-white hover:bg-purple-600'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                ]">
                    {{ button.title }}
                </NuxtLink>
            </div>
        </div>
        <div class="relative h-[400px]">
            <div
                class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-3xl">
            </div>
            <div class="relative z-10 w-full h-full perspective-1000">
                <div class="w-full h-full transition-transform duration-500 ease-out transform hover:rotate-y-6 overflow-hidden">
                    <img :src="hero.image.src" alt="AI Visualization" class="shadow-lg origin-[50%_0%]"  style="transform: rotateX(10deg) rotateY(-8deg) rotateZ(23deg) translateX(104px) translateY(-106px) scale(1.2);"/>
                </div>
            </div>
        </div>
    </section>
</template>