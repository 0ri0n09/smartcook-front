<script setup lang="ts">
import Sidebar from "~/components/Sidebar.vue";
import { useSidebar } from '~/composables/useSidebar'
const { isCollapsed } = useSidebar();
const { socket, activeUsers } = useSocket();
const activeUsersList = computed(() => {
  return activeUsers.value.users;
});
</script>

<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <div class="flex flex-col flex-1 transition-all duration-300" :class="['ml-0 md:ml-20', { 'md:ml-52': !isCollapsed }]">
      <Navbar class="bg-gray-50 sticky top-0 w-full h-16 z-30 shadow-md" />
      <main class="p-4">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>