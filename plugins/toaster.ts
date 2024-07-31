import { defineNuxtPlugin } from '#app'
import { useToaster } from '~/composables/useToaster'

export default defineNuxtPlugin((nuxtApp) => {
  const { addMessage } = useToaster()

  nuxtApp.provide('toaster', {
    success: (text: string) => addMessage({ text, type: 'success' }),
    error: (text: string) => addMessage({ text, type: 'error' }),
  })
})
