<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-center p-8">
    <div class="relative">
      <div class="w-12 h-12 rounded-full border-4 border-neutral-800 border-t-primary-500 animate-spin"></div>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
