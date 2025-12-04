<script lang="ts">

const currentYear = new Date().getFullYear();

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const footerLinks = {
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
};
</script>

  <footer class="border-t dark:border-neutral-800 light:border-neutral-200 dark:bg-neutral-950 light:bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="/logoSemBg.webp" alt="Overloaded Logo" class="h-8 w-8" />
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
            {#each navigationLinks as link}
              <li>
                <a
                  href={link.href}
                  class="dark:text-neutral-400 light:text-neutral-600 hover:text-primary-500 transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="dark:text-neutral-100 light:text-neutral-900 font-semibold mb-4">Legal</h3>
          <ul class="space-y-2">
            {#each footerLinks.legal as link}
              <li>
                <a
                  href={link.href}
                  class="dark:text-neutral-400 light:text-neutral-600 hover:text-primary-500 transition-colors text-sm"
                >
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Suggest Topics -->
        <div>
          <h3 class="dark:text-neutral-100 light:text-neutral-900 font-semibold mb-4">Have an Idea?</h3>
          <p class="dark:text-neutral-400 light:text-neutral-600 text-sm leading-relaxed mb-3">
            Suggest topics you'd like me to write about.
          </p>
          <a
            href="https://forms.gle/V811uCqJveahmLas9"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-4 py-2 text-sm font-medium rounded-full bg-blue-400 hover:bg-blue-500 text-white transition-colors shadow-sm"
          >
            Submit Idea
          </a>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t dark:border-neutral-800 light:border-neutral-200">
        <div class="flex flex-col justify-center items-center gap-4">  
          <p class="dark:text-neutral-500 light:text-neutral-600 text-sm">
            &copy; {currentYear} Overloaded. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
