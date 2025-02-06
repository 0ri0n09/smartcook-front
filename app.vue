<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>
<script setup lang="ts">
import "~/assets/css/tailwind.css";
import { ConfigProvider } from "radix-vue";
const useIdFunction = () => useId();
</script>

<style>

</style>
