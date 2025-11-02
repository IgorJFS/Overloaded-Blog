<script setup lang="ts">
import { ref } from 'vue';
import ThemeToggle from './ThemeToggle.vue';

const isMenuOpen = ref(false);

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="fixed top-0 w-full z-50 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-white/80 backdrop-blur-lg">
    <nav class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="flex items-center gap-3">
            <img src="/logo.png" alt="Overloaded" class="h-8 w-auto" />
            <span class="text-xl font-bold dark:text-neutral-100 light:text-neutral-900">Overloaded</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center gap-12">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-neutral-400 hover:text-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 light:text-neutral-600 light:hover:text-neutral-900 transition-colors duration-200 text-md font-medium"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center gap-4">
          <ThemeToggle />
          
          <!-- Mobile menu button -->
          <button
            @click="toggleMenu"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!isMenuOpen"
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="block rounded-md px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
