<script setup lang="ts">
interface Props {
  format?: 'horizontal' | 'square' | 'vertical';
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  format: 'horizontal',
  label: 'Advertisement'
});

const formatStyles = {
  horizontal: { width: '100%', maxWidth: '728px', height: '90px' },
  square: { width: '100%', maxWidth: '300px', aspectRatio: '1/1' },
  vertical: { width: '160px', height: '600px' },
};

const formatLabel = {
  horizontal: '728 × 90',
  square: '300 × 300',
  vertical: '160 × 600',
};
</script>

<template>
  <div 
    class="w-full mx-auto my-8 flex flex-col items-center gap-2"
  >
    <!-- Label pequeno acima do ad -->
    <span class="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-wider">
      {{ label }}
    </span>
    
    <!-- Container do Ad -->
    <div 
      :style="formatStyles[format]"
      class="w-full rounded-lg border-4 border-solid border-red-500 bg-red-100 dark:bg-red-900/30 flex items-center justify-center transition-all duration-300"
    >
      <div class="text-center px-4">
        <div class="text-red-600 dark:text-red-400 font-bold text-lg mb-1">
          🎯 AD BANNER AQUI
        </div>
        <div class="text-red-500 dark:text-red-500 text-sm font-semibold">
          {{ formatLabel[format] }}
        </div>
      </div>
    </div>
  </div>
</template>
