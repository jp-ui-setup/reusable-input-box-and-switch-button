<script setup>
import { Switch } from "@headlessui/vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <Switch
    v-slot="{ checked }"
    :class="modelValue ? 'bg-primary-600' : 'bg-gray-300'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
    :modelValue="modelValue"
    @update:modelValue="(newValue) => $emit('update:modelValue', newValue)"
  >
    <span class="sr-only">{{ label }}</span>
    <span
      :class="modelValue ? 'translate-x-5' : 'translate-x-0'"
      class="inline-block h-5 w-5 transform rounded-full bg-white"
    />
  </Switch>
</template>
