<script setup lang="ts">
const currentYear = new Date().getFullYear();

const footerLinks = {
  social: [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
</script>

<template>
  <footer class="border-t dark:border-neutral-800 light:border-neutral-200 dark:bg-neutral-950 light:bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-primary-500 text-2xl">⚡</span>
            <span class="text-xl font-bold dark:text-neutral-100 light:text-neutral-900">Overloaded</span>
          </div>
          <p class="dark:text-neutral-400 light:text-neutral-600 text-sm leading-relaxed">
            A modern space for discussing burnout, mental health, and the challenges facing today's society.
          </p>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="dark:text-neutral-100 light:text-neutral-900 font-semibold mb-4">Connect</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.social" :key="link.name">
              <a
                :href="link.href"
                class="dark:text-neutral-400 light:text-neutral-600 hover:text-primary-500 transition-colors text-sm"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="dark:text-neutral-100 light:text-neutral-900 font-semibold mb-4">Legal</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.legal" :key="link.name">
              <a
                :href="link.href"
                class="dark:text-neutral-400 light:text-neutral-600 hover:text-primary-500 transition-colors text-sm"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t dark:border-neutral-800 light:border-neutral-200">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="dark:text-neutral-500 light:text-neutral-600 text-sm">
            © {{ currentYear }} Overloaded. All rights reserved.
          </p>
          <p class="dark:text-neutral-500 light:text-neutral-600 text-sm">
            Built with <span class="text-primary-500">♥</span> by IgorJFS
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
