<script setup lang="ts">
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-vue-next'
import { footer, brand } from '@/data/content'

const currentYear = new Date().getFullYear()

// Icon mapping
const iconMap = {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} as const

const getIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || Facebook
}
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="container mx-auto max-w-6xl px-4 py-12 lg:py-16">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <a href="/" class="mb-4 inline-block">
            <img
              :src="footer.images.logo"
              :alt="footer.images.logoAlt"
              class="h-12 w-auto"
            />
          </a>
          <p class="mb-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
            {{ footer.brand.tagline }}
          </p>
          <div class="flex gap-4">
            <a
              v-for="(social, key) in footer.social"
              :key="key"
              :href="social.href"
              :aria-label="social.label"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors hover:bg-brand-blue hover:text-brand-blue-light"
            >
              <component :is="getIcon(key)" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div v-for="(section, sectionKey) in footer.sections" :key="sectionKey">
          <h3 class="mb-4 font-semibold text-foreground">{{ section.title }}</h3>
          <ul class="space-y-3">
            <li v-for="link in section.links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p class="text-sm text-muted-foreground">
          {{ footer.bottom.copyright(currentYear) }}
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-sm text-muted-foreground hover:text-brand-blue">
            {{ footer.bottom.privacyPolicy }}
          </a>
          <a href="#" class="text-sm text-muted-foreground hover:text-brand-blue">
            {{ footer.bottom.termsOfService }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
