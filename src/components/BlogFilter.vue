<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  categories: string[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  filterChange: [category: string]
}>();

const selectedCategory = ref('All');

const selectCategory = (category: string) => {
  selectedCategory.value = category;
  emit('filterChange', category);
};
</script>

<template>
  <div class="flex flex-wrap items-center gap-3 mb-12">
    <span class="text-sm font-medium dark:text-neutral-400 light:text-neutral-600 mr-2">Filter by:</span>
    <button
      v-for="category in categories"
      :key="category"
      @click="selectCategory(category)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
        selectedCategory === category
          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
          : 'dark:bg-neutral-900 light:bg-neutral-100 dark:text-neutral-400 light:text-neutral-600 dark:hover:bg-neutral-800 light:hover:bg-neutral-200 dark:hover:text-neutral-100 light:hover:text-neutral-900'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>
