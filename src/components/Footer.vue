<script setup lang="ts">
// import { Instagram, Youtube, Twitter } from 'lucide-vue-next';

const currentYear = new Date().getFullYear();

// const socialLinks = [
//   { 
//     name: 'Instagram', 
//     href: '#', 
//     icon: Instagram,
//     colorClass: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:brightness-110'
//   },
//   { 
//     name: 'YouTube', 
//     href: '#', 
//     icon: Youtube,
//     colorClass: 'bg-[#FF0000] text-white hover:brightness-110'
//   },
//   { 
//     name: 'X (Twitter)', 
//     href: '#', 
//     icon: Twitter,
//     colorClass: 'bg-blue-500 text-white dark:text-black hover:brightness-110'
//   },
// ];

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

const footerLinks = {
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
};
</script>

<template>
  <footer class="border-t dark:border-neutral-800 light:border-neutral-200 dark:bg-neutral-950 light:bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="/logoSemBg.png" alt="Overloaded" class="h-8 w-auto" />
            <span class="text-xl font-bold dark:text-neutral-100 light:text-neutral-900">Overloaded</span>
          </div>
          <p class="dark:text-neutral-400 light:text-neutral-600 text-sm leading-relaxed">
            A modern space for discussing burnout, mental health, and the challenges facing today's society.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="dark:text-neutral-100 light:text-neutral-900 font-semibold mb-4">Navigate</h3>
          <ul class="space-y-2">
            <li v-for="link in navigationLinks" :key="link.name">
              <a
                :href="link.href"
                class="dark:text-neutral-400 light:text-neutral-600 hover:text-primary-500 transition-colors text-sm"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <!-- <div>
          <h3 class="dark:text-neutral-100 light:text-neutral-900 font-semibold mb-4">Connect</h3>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              :class="['flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200', social.colorClass]"
            >
              <component :is="social.icon" :size="20" :stroke-width="2" />
            </a>
          </div>
        </div> -->

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

        <!-- Newsletter/Support -->
        <div>
          <h3 class="dark:text-neutral-100 light:text-neutral-900 font-semibold mb-4">Stay Updated</h3>
          <p class="dark:text-neutral-400 light:text-neutral-600 text-sm leading-relaxed mb-3">
            Get notified about new articles and updates.
          </p>
          <a
            href="/#newsletter"
            class="inline-block px-4 py-2 text-sm font-medium rounded-full border dark:border-neutral-700 light:border-neutral-300 dark:text-neutral-300 light:text-neutral-700 dark:hover:bg-neutral-800 light:hover:bg-neutral-50 transition-colors"
          >
            Subscribe
          </a>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t dark:border-neutral-800 light:border-neutral-200">
        <div class="flex flex-col justify-center items-center gap-4">
          <!-- Ko-Fi Button -->
          <div class="mb-2">
            <a href='https://ko-fi.com/M4M71JMEK9' target='_blank' rel="noopener noreferrer">
              <img 
                height='36' 
                style='border:0px;height:36px;' 
                src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' 
                alt='Buy Me a Coffee at ko-fi.com' 
              />
            </a>
          </div>
          
          <p class="dark:text-neutral-500 light:text-neutral-600 text-sm">
            &copy; {{ currentYear }} Overloaded. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
