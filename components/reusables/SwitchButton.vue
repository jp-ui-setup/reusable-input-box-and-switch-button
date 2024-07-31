<template>
    <button
      :class="['switch-button', { 'switch-button--on': isOn }]"
      @click="toggleSwitch"
    >
      <span :class="['switch-button__slider', { 'switch-button__slider--on': isOn }]" />
    </button>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue'
  
  const props = defineProps({
    modelValue: Boolean,
    label: String,
    disabled: Boolean
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const isOn = ref(props.modelValue)
  
  const toggleSwitch = () => {
    if (!props.disabled) {
      isOn.value = !isOn.value
      emit('update:modelValue', isOn.value)
    }
  }
  
  watch(() => props.modelValue, (newValue) => {
    isOn.value = newValue
  })
  </script>
  
  <style scoped>
  .switch-button {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background-color: #ccc;
    border: none;
    border-radius: 20px;
    padding: 10px;
    position: relative;
    width: 60px;
    height: 30px;
    transition: background-color 0.3s;
    border: 1px solid;
  }
  .switch-button--on {
    background-color: #4caf50;
  }
  .switch-button__slider {
    display: block;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left:0;
    transition: transform 0.3s;
  }
  .switch-button__slider--on {
    transform: translateX(30px);
  }
  </style>
  