<template>
  <Transition name="slide-up">
    <div
      v-if="!hasConsent && showBanner"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div
        class="mx-auto max-w-7xl rounded-2xl border dark:border-neutral-800 light:border-neutral-200 dark:bg-neutral-900/95 light:bg-white/95 backdrop-blur-sm shadow-2xl"
      >
        <div class="p-6 sm:p-8">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <!-- Content -->
            <div class="flex-1">
              <div class="flex items-start gap-3 mb-3">
                <Cookie class="w-6 h-6 shrink-0 dark:text-primary-400 light:text-primary-600 mt-0.5" />
                <div>
                  <h3 class="text-lg font-semibold dark:text-neutral-100 light:text-neutral-900 mb-2">
                    Cookie Consent
                  </h3>
                  <p class="text-sm dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
                    We use cookies and analytics to improve your experience and understand how you use our site. 
                    By accepting, you agree to our use of Google Analytics for this purpose.
                    <a
                      href="/privacy-policy"
                      class="underline hover:text-primary-500 transition-colors ml-1"
                    >
                      Learn more in our Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <button
                @click="rejectCookies"
                class="px-6 py-3 rounded-full border dark:border-neutral-600 light:border-neutral-400 dark:text-neutral-300 light:text-neutral-700 dark:hover:bg-neutral-800 light:hover:bg-neutral-50 transition-colors font-semibold text-base"
              >
                Reject
              </button>
              <button
                @click="acceptCookies"
                class="px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors font-semibold shadow-lg text-base"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Cookie } from 'lucide-vue-next';

const CONSENT_KEY = 'cookie-consent';
const hasConsent = ref<boolean | null>(null);
const showBanner = ref(false);

// Check if user has already made a choice
onMounted(() => {
  const consent = localStorage.getItem(CONSENT_KEY);
  
  if (consent === null) {
    // No choice made yet, show banner after a small delay
    setTimeout(() => {
      showBanner.value = true;
    }, 1000);
  } else {
    hasConsent.value = consent === 'accepted';
    
    // Initialize Google Analytics based on stored consent
    if (hasConsent.value) {
      initializeGoogleAnalytics();
    }
  }
});

function acceptCookies() {
  localStorage.setItem(CONSENT_KEY, 'accepted');
  hasConsent.value = true;
  showBanner.value = false;
  
  // Initialize Google Analytics
  initializeGoogleAnalytics();
}

function rejectCookies() {
  localStorage.setItem(CONSENT_KEY, 'rejected');
  hasConsent.value = false;
  showBanner.value = false;
  
  // Disable Google Analytics
  disableGoogleAnalytics();
}

function initializeGoogleAnalytics() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
}

function disableGoogleAnalytics() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
}

</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
