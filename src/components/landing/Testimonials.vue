<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import { testimonials, type TestimonialItem } from '@/data/content.pt-BR'
</script>

<template>
  <section id="testimonials" class="bg-brand-blue-light py-20 lg:py-32">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-pink">{{ testimonials.badge }}</p>
        <h2 class="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {{ testimonials.title }}
        </h2>
        <p class="text-pretty text-lg leading-relaxed text-muted-foreground">
          {{ testimonials.description }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="testimonial in testimonials.items"
          :key="testimonial.name"
          class="border-none bg-background shadow-lg rounded-xl p-8"
        >
          <Quote class="mb-4 h-8 w-8 text-brand-blue/30" />
          <p class="mb-6 text-pretty leading-relaxed text-muted-foreground">
            &ldquo;{{ testimonial.quote }}&rdquo;
          </p>
          <div class="flex items-center gap-4">
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
              class="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p class="font-semibold text-foreground">{{ testimonial.name }}</p>
              <p class="text-sm text-muted-foreground">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
