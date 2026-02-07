<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, CheckCircle } from 'lucide-vue-next'
import { cta } from '@/data/content.pt-BR'

// Form state
const email = ref('')
const submitted = ref(false)

// Form submission handler - you can plug in your Java API call here later
const handleSubmit = () => {
  if (email.value) {
    // TODO: Replace with your Java API call
    console.log('Form submitted with email:', email.value)

    // For now, just show the success message
    submitted.value = true

    // Reset after 5 seconds
    setTimeout(() => {
      submitted.value = false
      email.value = ''
    }, 5000)
  }
}
</script>

<template>
  <section id="contact" class="bg-brand-blue py-20 lg:py-32">
    <div class="container mx-auto max-w-4xl px-4 text-center">
      <h2 class="mb-4 text-balance text-3xl font-bold tracking-tight text-brand-blue-light md:text-4xl lg:text-5xl">
        {{ cta.title }}
      </h2>
      <p class="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-brand-blue-light/80">
        {{ cta.description }}
      </p>

      <div v-if="submitted" class="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl bg-brand-blue-light/10 p-6">
        <CheckCircle class="h-6 w-6 text-brand-blue-light" />
        <p class="text-brand-blue-light">{{ cta.successMessage }}</p>
      </div>

      <form
        v-else
        @submit.prevent="handleSubmit"
        class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
      >
        <input
          v-model="email"
          type="email"
          :placeholder="cta.inputPlaceholder"
          required
          class="h-12 flex-1 rounded-md border border-brand-blue-light/20 bg-brand-blue-light/10 px-4 text-brand-blue-light placeholder:text-brand-blue-light/60 focus:border-brand-blue-light/50 focus:outline-none focus:ring-2 focus:ring-brand-blue-light/50"
        />
        <button
          type="submit"
          class="inline-flex items-center justify-center h-12 rounded-md bg-brand-pink px-6 font-medium text-brand-blue-light transition-colors hover:bg-brand-pink-dark"
        >
          {{ cta.button }}
          <ArrowRight class="ml-2 h-4 w-4" />
        </button>
      </form>

      <p class="mt-4 text-sm text-brand-blue-light/60">{{ cta.disclaimer }}</p>
    </div>
  </section>
</template>
