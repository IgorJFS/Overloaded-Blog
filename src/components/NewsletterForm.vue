<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const isSubmitting = ref(false);
const isSuccess = ref(false);
const errorMessage = ref('');

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  
  if (!email.value) {
    errorMessage.value = 'Please enter your email';
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';

  // Simulate API call (replace with your actual newsletter API)
  setTimeout(() => {
    isSubmitting.value = false;
    isSuccess.value = true;
    email.value = '';
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      isSuccess.value = false;
    }, 3000);
  }, 1000);
};
</script>

<template>
  <div>
    <form v-if="!isSuccess" @submit="handleSubmit" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="flex-1 px-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
        :disabled="isSubmitting"
      />
      <button
        type="submit"
        :disabled="isSubmitting"
        class="px-8 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-medium rounded-full transition-colors"
      >
        {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
      </button>
    </form>

    <!-- Error Message -->
    <p v-if="errorMessage" class="text-red-400 text-sm mt-2 text-center">
      {{ errorMessage }}
    </p>

    <!-- Success Message -->
    <div v-if="isSuccess" class="text-center">
      <div class="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/50 rounded-full">
        <svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-green-400 font-medium">Successfully subscribed!</span>
      </div>
    </div>
  </div>
</template>
