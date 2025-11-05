<script setup lang="ts">
</script>

<template>
  <div 
    class="w-full my-8 p-6 rounded-xl border-4 border-solid border-blue-500 bg-blue-100 dark:bg-blue-900/30 transition-all duration-300"
  >
    <!-- Label sutil -->
    <div class="flex items-center justify-between mb-4">
      <span class="text-lg font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
        🎯 AD IN-FEED AQUI
      </span>
      <svg class="w-4 h-4 text-neutral-300 dark:text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    <!-- Conteúdo do ad simulado (formato native ad) -->
    <div class="flex gap-4">
      <!-- Imagem placeholder -->
      <div class="w-24 h-24 rounded-lg bg-linear-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 shrink-0 flex items-center justify-center">
        <svg class="w-8 h-8 text-neutral-400 dark:text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      <!-- Texto -->
      <div class="flex-1">
        <div class="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-2"></div>
        <div class="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-full mb-1"></div>
        <div class="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6"></div>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
      <div class="h-8 bg-neutral-200 dark:bg-neutral-800 rounded w-24"></div>
    </div>
  </div>
</template>
