<script setup lang="ts">
import { ref, computed } from 'vue';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
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
</script>

<template>
  <div>
    <!-- Filters -->
    <div class="flex flex-wrap items-center gap-3 mb-12">
      <span class="text-sm font-medium dark:text-neutral-400 light:text-neutral-600 mr-2">Filter by:</span>
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
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

    <!-- Posts Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article v-for="post in filteredPosts" :key="post.id" class="group">
        <a :href="`/blog/${post.slug}`" class="block">
          <!-- Post Image Placeholder -->
          <div class="aspect-video rounded-2xl dark:bg-linear-to-br dark:from-primary-900/20 dark:to-neutral-900 light:bg-neutral-100 mb-4 overflow-hidden border dark:border-neutral-800 light:border-neutral-200 group-hover:border-primary-500/50 transition-colors shadow-sm">
            <img 
              :src="post.image" 
              :alt="post.title" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
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
    </div>
  </div>
</template>
