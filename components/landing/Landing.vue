<script setup lang="ts">
import type { Page } from "@/types/landing";
import Header from './Header.vue';
import Hero from './Hero.vue';
import SocialProof from './SocialProof.vue';
import Features from './Features.vue';
import Introdction from './Introduction.vue';
import FAQ from './FAQ.vue';
import CTA from './CTA.vue';
import Footer from './Footer.vue';
import Pricing from './Pricing.vue'; // Add this line
import Testimonials from './Testimonials.vue'; // Add this line

const props = defineProps<{
    page: Page
}>();
</script>

<template>
    <div v-if="page" class="min-h-screen bg-[#0f0f0f] text-white">
        <Header v-if="page.header" :header="page.header" />
        <Hero v-if="page.hero" :hero="page.hero" />
        <SocialProof />
        <Introdction v-if="page.section" :section="page.section" />
        <Features v-if="page.feature" :feature="page.feature" />
        <FAQ v-if="page.faq" :faq="page.faq"/>
        <Pricing v-if="page.pricing" :pricing="page.pricing" />
        <Testimonials v-if="page.testimonial" :testimonial="page.testimonial" />
        <CTA v-if="page.cta" :cta="page.cta" />
        <Footer v-if="page.footer" :footer="page.footer" />
    </div>
</template>
