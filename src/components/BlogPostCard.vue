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
</script>

<template>
  <article class="group">
    <a :href="`/blog/${post.slug}`" class="block">
      <!-- Post Image Placeholder -->
      <div class="aspect-video rounded-2xl dark:bg-linear-to-br dark:from-primary-900/20 dark:to-neutral-900 light:bg-neutral-100 mb-4 overflow-hidden border dark:border-neutral-800 light:border-neutral-200 group-hover:border-primary-500/50 transition-colors">
        <div class="w-full h-full flex items-center justify-center">
          <span class="text-5xl">{{ post.emoji }}</span>
        </div>
      </div>

      <!-- Post Content -->
      <div class="space-y-3">
        <!-- Meta -->
        <div class="flex items-center gap-3 text-sm">
          <span class="px-3 py-1 rounded-full dark:bg-primary-500/10 light:bg-primary-100 dark:text-primary-400 light:text-primary-600 font-medium">
            {{ post.category }}
          </span>
          <div class="flex items-center gap-2 dark:text-neutral-500 light:text-neutral-600">
            <time :datetime="post.date">
              {{ formatDate(post.date) }}
            </time>
            <span>•</span>
            <span>{{ post.readTime }}</span>
          </div>
        </div>

        <!-- Title -->
        <h2 class="text-xl font-semibold dark:text-neutral-100 light:text-neutral-900 group-hover:text-primary-500 transition-colors line-clamp-2">
          {{ post.title }}
        </h2>

        <!-- Excerpt -->
        <p class="dark:text-neutral-400 light:text-neutral-600 line-clamp-3 leading-relaxed">
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
