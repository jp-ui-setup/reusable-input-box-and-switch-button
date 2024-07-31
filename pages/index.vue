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
      <ReusablesBaseInput :vModel="state.search" type="text" placeholder="Search here..."/>
      <ReusablesBaseInput :vModel="state.name" type="text" placeholder="Name here..." class="my-2"/>
    </form>
  </UCard>
</template>
