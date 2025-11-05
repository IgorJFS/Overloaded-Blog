<script setup lang="ts">
interface Props {
  sticky?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  sticky: false
});
</script>

<template>
  <div 
    :class="[
      'w-full space-y-8',
      sticky ? 'sticky top-24' : ''
    ]"
  >
    <!-- Label -->
    <span class="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider block text-center mb-2">
      Advertisement
    </span>

    <!-- Ad Container - Formato retangular médio (300x250) -->
    <div 
      style="width: 300px; height: 250px;"
      class="w-full max-w-[300px] mx-auto rounded-lg border-4 border-solid border-green-500 bg-green-100 dark:bg-green-900/30 flex items-center justify-center transition-all duration-300"
    >
      <div class="text-center px-4">
        <div class="text-green-600 dark:text-green-400 font-bold text-lg mb-1">
          🎯 SIDEBAR AD 1
        </div>
        <div class="text-green-500 dark:text-green-500 text-sm font-semibold">
          300 × 250
        </div>
      </div>
    </div>

    <!-- Ad Container 2 - Opcional, mais abaixo -->
    <div class="mt-8">
      <span class="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider block text-center mb-2">
        Advertisement
      </span>
      <div 
        style="width: 300px; height: 250px;"
        class="w-full max-w-[300px] mx-auto rounded-lg border-4 border-solid border-purple-500 bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center transition-all duration-300"
      >
        <div class="text-center px-4">
          <div class="text-purple-600 dark:text-purple-400 font-bold text-lg mb-1">
            🎯 SIDEBAR AD 2
          </div>
          <div class="text-purple-500 dark:text-purple-500 text-sm font-semibold">
            300 × 250
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
