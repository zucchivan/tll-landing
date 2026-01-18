<script setup lang="ts">
import Navbar from './components/landing/Navbar.vue'
import Hero from './components/landing/Hero.vue'
import FeatureGrid from './components/landing/FeatureGrid.vue'
import Testimonials from './components/landing/Testimonials.vue'
import Pricing from './components/landing/Pricing.vue'
import CTA from './components/landing/CTA.vue'
import Footer from './components/landing/Footer.vue'
</script>

<template>
  <main class="min-h-screen">
    <Navbar />
    <Hero />
    <FeatureGrid />
    <Testimonials />
    <Pricing />
    <CTA />
    <Footer />
  </main>
</template>
