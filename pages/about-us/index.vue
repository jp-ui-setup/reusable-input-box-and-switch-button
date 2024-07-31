<template>
  <div class="bg-[#ccc]">
    <h1>About Us</h1>

    <SwitchButton v-model="switchState" label="Enable Feature" />
    <p>Switch is {{ switchState ? "ON" : "OFF" }}</p>
    <button @click="showSuccess">Show Success</button>
  </div>
</template>

<script setup lang="ts">
import SwitchButton from "~/components/reusables/SwitchButton.vue";
const { success, error } = useNuxtApp().$toaster;

const switchState = ref(false);

const showSuccess = () => {
  success("Operation was successful!");
};

const showError = () => {
  error("Something went wrong.");
};
</script>
