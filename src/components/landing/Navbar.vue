<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { brand, navLinks, ctaButtons } from '@/data/content.pt-BR'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}

const smoothScroll = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  closeMenu()
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  closeMenu()
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <a href="/" class="flex items-center">
        <span class="text-xl font-bold tracking-tight text-brand-pink">{{ brand.name }}</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          @click.prevent="smoothScroll(link.href)"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden md:block">
        <button
          @click="scrollToContact"
          class="rounded-md bg-brand-pink px-4 py-2 text-sm font-medium text-brand-blue-light transition-colors hover:bg-brand-pink-dark"
        >
          {{ ctaButtons.contact }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMenu"
      >
        <X v-if="mobileMenuOpen" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="border-t md:hidden">
      <nav class="container mx-auto flex flex-col gap-4 px-4 py-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          @click="smoothScroll(link.href)"
        >
          {{ link.label }}
        </a>
        <button
          @click="scrollToContact"
          class="w-full rounded-md bg-brand-pink px-4 py-2 text-sm font-medium text-brand-blue-light transition-colors hover:bg-brand-pink-dark"
        >
          {{ ctaButtons.mobileMenuContact }}
        </button>
      </nav>
    </div>
  </header>
</template>
