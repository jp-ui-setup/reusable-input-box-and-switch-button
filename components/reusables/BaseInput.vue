<template>
  <div>
    <UInput
      :type="type"
      :placeholder="placeholder"
      :class="class"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <pre class="border-2 bg-[#ccc]">
    component:
    {{ props }}
  </pre
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface state {
  type: string;
  modelValue: String;
  placeholder?: string;
  id?: string;
  label?: string;
  class?: string;
  name?: string;
}
const props = defineProps<state>();
const emit = defineEmits(["update:modelValue"]);
console.log("My Props: ", props);
</script>
