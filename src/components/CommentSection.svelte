<script lang="ts">
  // export let postId: string; // To be used when integrating with Supabase
  
  // Toggle this to enable/disable comments
  const COMMENTS_ENABLED = true;
  const MAX_COMMENT_LENGTH = 500;
  
  interface Comment {
    id: string;
    author: string;
    content: string;
    createdAt: Date;
  }
  
  let comments: Comment[] = [];
  let newComment = '';
  let isSubmitting = false;
  
  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    
    isSubmitting = true;
    
    // TODO: Replace with actual Supabase call when login is implemented
    // Will use postId for inserting comment: await supabase.from('comments').insert({ post_id: postId, ... })
    const comment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      author: 'Anonymous', // Will be replaced with logged user name
      content: newComment.trim(),
      createdAt: new Date(),
    };
    
    comments = [comment, ...comments];
    newComment = '';
    
    isSubmitting = false;
  };
  
  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
</script>

<div class="comments-section mt-12">
  <h2 class="text-2xl sm:text-3xl font-bold light:text-gray-900 dark:text-white mb-6">
    Comments
  </h2>
  
  {#if !COMMENTS_ENABLED}
    <!-- Coming Soon State -->
    <div class="p-12 text-center light:bg-gray-50 dark:bg-white/5 rounded-2xl border light:border-gray-200 dark:border-white/10">
      <svg class="w-16 h-16 mx-auto mb-4 light:text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <h3 class="text-xl font-semibold light:text-gray-900 dark:text-white mb-2">
        Comments Coming Soon!
      </h3>
      <p class="light:text-gray-600 dark:text-gray-400">
        We're working on bringing you a space to share your thoughts and connect with others.
      </p>
    </div>
  {:else}
    <!-- Active Comment Section -->
    <div class="space-y-6">
      <!-- Comment Form -->
      <div class="light:bg-gray-50 dark:bg-white/5 rounded-2xl border light:border-gray-200 dark:border-white/10 p-6">
        <h3 class="text-lg font-semibold light:text-gray-900 dark:text-white mb-4">
          Leave a comment
        </h3>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div class="relative">
            <label for="comment-content" class="block text-sm font-medium light:text-gray-700 dark:text-gray-300 mb-2">
              Your comment
            </label>
            <textarea
              id="comment-content"
              bind:value={newComment}
              maxlength={MAX_COMMENT_LENGTH}
              placeholder="Share your thoughts..."
              rows="4"
              class="w-full px-4 py-2 rounded-lg light:bg-white dark:bg-white/10 border light:border-gray-300 dark:border-white/20 light:text-gray-900 dark:text-white placeholder:light:text-gray-400 placeholder:dark:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              required
            ></textarea>
            <div class="flex justify-end mt-1">
              <span class="text-sm {newComment.length > MAX_COMMENT_LENGTH ? 'text-red-500' : 'light:text-gray-500 dark:text-gray-400'}">
                {newComment.length}/{MAX_COMMENT_LENGTH}
              </span>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || !newComment.trim()}
            class="px-6 py-2 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>
      
      <!-- Comments List -->
      {#if comments.length === 0}
        <div class="text-center py-12 light:bg-gray-50 dark:bg-white/5 rounded-2xl border light:border-gray-200 dark:border-white/10">
          <p class="light:text-gray-600 dark:text-gray-400">
            No comments yet. Be the first to share your thoughts!
          </p>
        </div>
      {:else}
        <div class="space-y-4">
          {#each comments as comment (comment.id)}
            <div class="light:bg-white dark:bg-white/5 rounded-xl border light:border-gray-200 dark:border-white/10 p-6">
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <span class="text-primary-500 font-semibold text-lg">
                      {comment.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p class="font-semibold light:text-gray-900 dark:text-white">
                      {comment.author}
                    </p>
                    <p class="text-sm light:text-gray-500 dark:text-gray-400">
                      {formatDate(comment.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              
              <p class="light:text-gray-700 dark:text-gray-300 leading-relaxed overflow-wrap-anywhere">
                {comment.content}
              </p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  /* Ensure proper styling for light/dark modes */
  :global(.light) textarea {
    background-color: white;
    border-color: #e5e7eb;
    color: #111827;
  }
  
  :global(.dark) textarea {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: white;
  }

  /* Force long words to break */
  .overflow-wrap-anywhere {
    overflow-wrap: anywhere;
    word-break: break-word;
  }
</style>
