<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  thumbnailImage?: string;
  slug: string;
}

interface Props {
  posts: BlogPost[];
  categories: string[];
}

const props = defineProps<Props>();

const selectedCategory = ref('All');

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return props.posts;
  }
  return props.posts.filter(post => post.category === selectedCategory.value);
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

const getCategoryClasses = (category: string) => {
  const categoryMap: Record<string, string> = {
    'Burnout': 'bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400',
    'Mental Health': 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    'Work-Life Balance': 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
    'Work Culture': 'bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400',
    'Society': 'bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400',
    'Recovery': 'bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400',
  };
  
  return categoryMap[category] || 'bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400';
};

const getFilterCategoryClasses = (category: string, isSelected: boolean) => {
  if (category === 'All') {
    return isSelected
      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100';
  }
  
  const categoryMap: Record<string, { selected: string; default: string }> = {
    'Burnout': {
      selected: 'bg-red-500 text-white shadow-lg shadow-red-500/30',
      default: 'bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-500/20'
    },
    'Mental Health': {
      selected: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30',
      default: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-500/20'
    },
    'Work-Life Balance': {
      selected: 'bg-blue-500 text-white shadow-lg shadow-blue-500/30',
      default: 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-500/20'
    },
    'Work Culture': {
      selected: 'bg-orange-500 text-white shadow-lg shadow-orange-500/30',
      default: 'bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-500/20'
    },
    'Society': {
      selected: 'bg-violet-500 text-white shadow-lg shadow-violet-500/30',
      default: 'bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:bg-violet-200 dark:hover:bg-violet-500/20'
    },
    'Recovery': {
      selected: 'bg-teal-500 text-white shadow-lg shadow-teal-500/30',
      default: 'bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-200 dark:hover:bg-teal-500/20'
    },
  };
  
  const colors = categoryMap[category];
  if (!colors) {
    return isSelected
      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800';
  }
  
  return isSelected ? colors.selected : colors.default;
};
</script>

<template>
  <div>
    <!-- Filters -->
    <div class="flex flex-wrap items-center gap-3 mb-12">
      <span class="text-sm font-medium text-neutral-600 dark:text-neutral-400 mr-2">Filter by:</span>
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
          getFilterCategoryClasses(category, selectedCategory === category)
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Posts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article v-for="post in filteredPosts" :key="post.id" class="group">
        <a :href="`/blog/${post.slug}`" class="block">
          <!-- Post Image Placeholder -->
          <div class="aspect-video rounded-2xl bg-neutral-100 dark:bg-linear-to-br dark:from-primary-900/20 dark:to-neutral-900 mb-4 overflow-hidden border border-neutral-200 dark:border-neutral-800 group-hover:border-primary-500/50 transition-colors shadow-sm">
            <img 
              :src="post.thumbnailImage || post.image" 
              :alt="post.title" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Post Content -->
          <div class="space-y-3">
            <!-- Meta -->
            <div class="flex items-center gap-3 text-sm">
              <span :class="['px-3 py-1 rounded-full font-medium', getCategoryClasses(post.category)]">
                {{ post.category }}
              </span>
              <div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-500">
                <time :datetime="post.date">
                  {{ formatDate(post.date) }}
                </time>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>
            </div>

            <!-- Title -->
            <h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-500 transition-colors line-clamp-2">
              {{ post.title }}
            </h2>

            <!-- Excerpt -->
            <p class="text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
              {{ post.excerpt }}
            </p>

            <!-- Read More -->
            <div class="flex items-center gap-2 text-primary-500 font-medium text-sm group-hover:gap-3 transition-all">
              <span>Read article</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </article>
    </div>
  </div>
</template>
