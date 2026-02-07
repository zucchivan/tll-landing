import { createI18n } from 'vue-i18n'

// Import Portuguese content
import ptBRContent from '../data/content.pt-BR'

// Import English content
import enContent from '../data/content'

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'pt-BR', // Default to Brazilian Portuguese
  fallbackLocale: 'en',
  messages: {
    'pt-BR': ptBRContent,
    'en': enContent,
  },
  numberFormats: {
    'pt-BR': {
      currency: {
        style: 'currency',
        currency: 'BRL',
        notation: 'standard',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
    },
    'en': {
      currency: {
        style: 'currency',
        currency: 'USD',
        notation: 'standard',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
    },
  },
  datetimeFormats: {
    'pt-BR': {
      short: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
    },
    'en': {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    },
  },
})

export default i18n
