<template>
  <UContainer>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800"/>
    <NuxtPage />
    <BaseToaster />
  </UContainer>
</template>

<script setup lang="ts">
import BaseToaster from '~/components/reusables/BaseToaster.vue';

const route = useRoute();
const links = [
  {
    label: "Profile",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    badge: 100,
  },
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "About us",
    icon: "i-heroicons-chart-bar",
    to: "/about-us",
  },
  {
    label: "Contact Us",
    icon: "i-heroicons-command-line",
    to: "/contact-us",
  },
];
</script>
