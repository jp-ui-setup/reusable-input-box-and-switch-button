<template>
  <div>
    <UInput :type="props.type" :placeholder="props.placeholder" :class="props.class" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface state {
  vModel: string;
  type: string;
  placeholder?: string;
  id?: string;
  label?: string;
  class?: string;
  name?: string;
}
const props = defineProps<state>();
console.log("My Props: ", props);
</script>
