<script setup lang="ts">
import { ref } from 'vue'
const state = ref({
    search: "jai pal",
    name: ""
});
</script>

<template>
  <UCard class="my-4">
    <h1 class="py-2">Simple form</h1>
    <form>
      <ReusablesBaseInput type="text" placeholder="Search here..." v-model="state.search"/>
      <ReusablesBaseInput type="text" placeholder="Name here..." class="my-2"/>
    </form>
    {{ state }}
  </UCard>
</template>
