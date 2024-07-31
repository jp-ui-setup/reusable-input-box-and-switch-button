<template>
  <transition
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div v-if="messages.length" class="toaster-container">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="toaster-message"
        :class="message.type"
      >
        <p>{{ message.text }}</p>
        <button @click="removeMessage(index)">×</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";

interface ToastMessage {
  text: string;
  type: "success" | "error";
}

const messages: Ref<ToastMessage[]> = ref([]);

const addMessage = (message: ToastMessage) => {
  messages.value.push(message);
  setTimeout(() => removeMessage(0), 5000); // Auto-remove after 5 seconds
};

const removeMessage = (index: number) => {
  messages.value.splice(index, 1);
};

const beforeEnter = (el: HTMLElement) => {
  el.style.opacity = "0";
};

const enter = (el: HTMLElement, done: () => void) => {
  el.offsetHeight; // trigger reflow
  el.style.transition = "opacity 0.5s";
  el.style.opacity = "1";
  done();
};

const leave = (el: HTMLElement, done: () => void) => {
  el.style.transition = "opacity 0.5s";
  el.style.opacity = "0";
  done();
};
</script>

<style scoped>
.toaster-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toaster-message {
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  min-width: 200px;
}

.toaster-message.success {
  background-color: #4caf50;
}

.toaster-message.error {
  background-color: #f44336;
}

.toaster-message button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
</style>
