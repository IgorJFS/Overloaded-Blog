<template>
  <div ref="trackerRef" class="read-tracker" aria-hidden="true"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Props {
  postId: string;
  endpoint: string;
  apiKey: string;
}

const props = defineProps<Props>();

const trackerRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;
let hasTracked = false;

const trackRead = async () => {
  if (hasTracked) return;
  hasTracked = true;

  try {
    await fetch(props.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': props.apiKey,
        'Authorization': `Bearer ${props.apiKey}`,
      },
      body: JSON.stringify({
        post_id: props.postId,
      }),
    });
  } catch (error) {
    // Silently fail - don't interrupt user experience
    console.error('Failed to track read:', error);
  }
};

onMounted(() => {
  if (!trackerRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTracked) {
          trackRead();
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px',
    }
  );

  observer.observe(trackerRef.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.read-tracker {
  height: 10px;
  width: 100%;
  pointer-events: none;
}
</style>
