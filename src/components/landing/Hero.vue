<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { hero } from '@/data/content.pt-BR'

// Generate placeholder images for students
const studentImages: number[] = [1, 2, 3, 4]

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToPricing = () => {
  const element = document.getElementById('pricing')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="relative overflow-hidden bg-brand-blue-light py-20 lg:py-32">
    <!-- Decorative background blob -->
    <div class="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-blue/10 blur-3xl" />
    <div class="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/4 rounded-full bg-brand-pink/10 blur-3xl" />

    <div class="container mx-auto max-w-6xl px-4">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Left Content -->
        <div class="flex flex-col gap-6">
          <div class="inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-medium text-brand-blue">
            {{ hero.badge }}
          </div>
          <h1 class="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {{ hero.title }} <span class="text-brand-pink">{{ hero.titleHighlight }}</span>
          </h1>
          <p class="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            {{ hero.description }}
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <button
              @click="scrollToContact"
              class="inline-flex items-center justify-center rounded-md bg-brand-pink px-8 py-3 text-base font-medium text-brand-blue-light transition-colors hover:bg-brand-pink-dark"
            >
              {{ hero.buttons.primary }}
              <ArrowRight class="ml-2 h-4 w-4" />
            </button>
            <button
              @click="scrollToPricing"
              class="inline-flex items-center justify-center rounded-md border border-brand-blue px-8 py-3 text-base font-medium text-brand-blue transition-colors hover:bg-brand-blue/10"
            >
              {{ hero.buttons.secondary }}
            </button>
          </div>
          <div class="mt-4 flex items-center gap-4">
            <div class="flex -space-x-3">
              <div
                v-for="i in studentImages"
                :key="i"
                class="h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-muted"
              >
                <img
                  :src="`/professional-portrait.png?height=40&width=40&query=professional person portrait ${i}`"
                  :alt="`${hero.images.studentAlt} ${i}`"
                  class="h-full w-full object-cover"
                />
              </div>
            </div>
            <div class="text-sm">
              <span class="font-semibold text-foreground">{{ hero.socialProof.enrolled }}</span>
              <span class="text-muted-foreground">{{ ' ' + hero.socialProof.enrolledLabel }}</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Hero Image -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              :src="hero.images.bigBen"
              alt="Big Ben and London skyline"
              class="h-auto w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />

            <img
              :src="hero.images.logo"
              alt="The Language Link Logo"
              class="absolute top-4 right-4 h-44 w-44 object-contain drop-shadow-lg"
            />
          </div>

          <!-- Head Teacher Card -->
          <div class="absolute -bottom-6 -left-6 z-50 max-w-[220px] rounded-2xl bg-white/85 p-4 shadow-xl backdrop-blur-sm">
            <div class="flex flex-col gap-3">
              <div class="relative h-16 w-16 overflow-hidden rounded-full border-2 border-brand-blue/20">
                <img
                  :src="hero.images.teacher"
                  :alt="`${hero.headTeacher.name} - ${hero.headTeacher.role}`"
                  class="h-full w-full object-cover"
                />
              </div>
              <div>
                <p class="font-semibold text-foreground">{{ hero.headTeacher.name }}</p>
                <p class="text-xs font-medium text-brand-blue">{{ hero.headTeacher.role }}</p>
                <p class="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {{ hero.headTeacher.credentials }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
