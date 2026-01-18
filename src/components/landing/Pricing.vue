<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { pricing, type PricingPlan } from '@/data/content'
</script>

<template>
  <section id="pricing" class="bg-background py-20 lg:py-32">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-blue">{{ pricing.badge }}</p>
        <h2 class="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {{ pricing.title }}
        </h2>
        <p class="text-pretty text-lg leading-relaxed text-muted-foreground">
          {{ pricing.description }}
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="plan in pricing.plans"
          :key="plan.name"
          class="relative flex flex-col rounded-xl border p-6"
          :class="plan.popular ? 'border-2 border-brand-pink shadow-xl' : 'border-border/50'"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2"
          >
            <span class="rounded-full bg-brand-pink px-4 py-1 text-sm font-medium text-brand-blue-light">
              {{ pricing.popular }}
            </span>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-semibold text-foreground">{{ plan.name }}</h3>
            <p class="text-muted-foreground">{{ plan.description }}</p>
            <div class="mt-4">
              <span class="text-4xl font-bold text-foreground">${{ plan.price }}</span>
              <span class="text-muted-foreground">/{{ plan.period }}</span>
            </div>
          </div>

          <div class="flex-1 py-6">
            <ul class="space-y-3">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start gap-3"
              >
                <Check class="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <span class="text-sm text-muted-foreground">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <button
            class="w-full rounded-md px-6 py-3 text-sm font-medium transition-colors"
            :class="plan.popular
              ? 'bg-brand-pink text-brand-blue-light hover:bg-brand-pink-dark'
              : 'border border-brand-blue text-brand-blue hover:bg-brand-blue/10'"
          >
            {{ pricing.button }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
