import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Burnout in 2025: A Comprehensive Guide",
    excerpt: "An in-depth exploration of how modern work culture contributes to burnout and what we can do about it. Learn to recognize the signs before it's too late.",
    date: "2025-11-02",
    readTime: "8 min read",
    category: "Burnout",
    emoji: "🔥",
    slug: "understanding-burnout-2025",
    language: "en",
    tags: ["burnout", "mental health", "workplace"],
  },
  {
    id: 2,
    title: "The Silent Epidemic: Mental Health in the Digital Age",
    excerpt: "How constant connectivity and social media are affecting our mental well-being, and practical strategies to maintain balance in a hyperconnected world.",
    date: "2025-10-28",
    readTime: "6 min read",
    category: "Mental Health",
    emoji: "🧠",
    slug: "mental-health-digital-age",
    language: "en",
    tags: ["mental health", "digital wellness", "social media"],
  },
  {
    id: 3,
    title: "Setting Boundaries: The Art of Saying No",
    excerpt: "Why saying no is essential for your well-being and how to do it effectively without guilt. A practical guide to establishing healthy boundaries.",
    date: "2025-10-25",
    readTime: "5 min read",
    category: "Work-Life Balance",
    emoji: "⚖️",
    slug: "setting-boundaries-saying-no",
    language: "en",
    tags: ["boundaries", "work-life balance", "self-care"],
  },
  {
    id: 4,
    title: "Remote Work Reality: When Home Becomes the Office",
    excerpt: "The challenges and opportunities of remote work culture. How to maintain separation between work and personal life when they share the same space.",
    date: "2025-10-20",
    readTime: "7 min read",
    category: "Work Culture",
    emoji: "🏠",
    slug: "remote-work-reality",
    language: "en",
    tags: ["remote work", "work culture", "productivity"],
  },
  {
    id: 5,
    title: "Hustle Culture: When Success Costs Your Health",
    excerpt: "Examining the toxic side of hustle culture and why constant productivity isn't the path to success. It's time to redefine what achievement means.",
    date: "2025-10-15",
    readTime: "6 min read",
    category: "Society",
    emoji: "💼",
    slug: "hustle-culture-health-cost",
    language: "en",
    tags: ["hustle culture", "society", "work culture"],
  },
  {
    id: 6,
    title: "Recovery Strategies: Bouncing Back from Burnout",
    excerpt: "Practical, evidence-based strategies for recovering from burnout. From small daily practices to major lifestyle changes that actually work.",
    date: "2025-10-10",
    readTime: "9 min read",
    category: "Recovery",
    emoji: "🌱",
    slug: "recovery-strategies-burnout",
    language: "en",
    tags: ["recovery", "burnout", "self-care"],
  },
];

export const categories = [
  "All",
  "Burnout",
  "Mental Health",
  "Work-Life Balance",
  "Work Culture",
  "Society",
  "Recovery",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
