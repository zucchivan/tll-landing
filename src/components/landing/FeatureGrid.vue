<script setup lang="ts">
import { BookOpen, Users, Award } from 'lucide-vue-next'
import { features, type FeatureItem } from '@/data/content.pt-BR'

// Icon mapping
const iconMap = {
  BookOpen,
  Users,
  Award,
} as const

const getIcon = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || BookOpen
}
</script>

<template>
  <section id="features" class="bg-background py-20 lg:py-32">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-blue">{{ features.badge }}</p>
        <h2 class="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {{ features.title }}
        </h2>
        <p class="text-pretty text-lg leading-relaxed text-muted-foreground">
          {{ features.description }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="feature in features.items"
          :key="feature.title"
          class="group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-xl border p-6"
        >
          <div class="mb-6">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 transition-colors group-hover:bg-brand-blue">
              <component :is="getIcon(feature.icon)" class="h-7 w-7 text-brand-blue transition-colors group-hover:text-brand-blue-light" />
            </div>
            <h3 class="text-xl font-semibold text-foreground">{{ feature.title }}</h3>
          </div>
          <p class="leading-relaxed text-muted-foreground">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
