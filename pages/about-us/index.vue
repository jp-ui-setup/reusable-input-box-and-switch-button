<template>
  <div class="bg-[#ccc]">
    <h1>About Us</h1>

    <SwitchButton v-model="switchState" label="Enable Feature" />
    <p>Switch is {{ switchState ? 'ON' : 'OFF' }}</p>
  </div>
</template>

<script setup lang="ts">
import SwitchButton from "~/components/reusables/SwitchButton.vue";

const switchState = ref(false);
</script>
