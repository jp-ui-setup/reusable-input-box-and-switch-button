import { ref} from 'vue'
import type { Ref } from 'vue'

interface ToastMessage {
  text: string
  type: 'success' | 'error'
}

const messages: Ref<ToastMessage[]> = ref([])

export function useToaster() {
  const addMessage = (message: ToastMessage) => {
    messages.value.push(message)
    setTimeout(() => removeMessage(0), 5000) // Auto-remove after 5 seconds
  }

  const removeMessage = (index: number) => {
    messages.value.splice(index, 1)
  }

  return { messages, addMessage, removeMessage }
}
