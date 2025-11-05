<script setup lang="ts">
import type { BlogPost } from '../types';

interface Props {
  post: BlogPost;
}

const { post } = defineProps<Props>();

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
</script>

<template>
  <article class="group">
    <a :href="`/blog/${post.slug}`" class="block">
      <!-- Post Image Placeholder -->
      <div class="aspect-video rounded-2xl bg-neutral-100 dark:bg-linear-to-br dark:from-primary-900/20 dark:to-neutral-900 mb-4 overflow-hidden border border-neutral-200 dark:border-neutral-800 group-hover:border-primary-500/50 transition-colors">
        <div class="w-full h-full flex items-center justify-center">
          <span class="text-5xl">{{ post.emoji }}</span>
        </div>
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
</template>
