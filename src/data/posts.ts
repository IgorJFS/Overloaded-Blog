import { readTime } from "@/utils/readTime";

const currentYear = new Date().getFullYear();

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  readTime: string;
  category: "Burnout" | "Mental Health" | "Work Culture" | "Society" | "Work-Life Balance" | "Recovery";
  image: string; // Full-size image for post pages
  thumbnailImage?: string; // Optional thumbnail for cards
  slug: string;
  featured?: boolean;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: `Is Reading Books Still Worth It in ${currentYear}?`,
    excerpt: `In an age of AI summaries, 2.5x speed audiobooks, and non-stop content, are books obsolete?`,
    description: `Explore whether reading books is still worthwhile in ${currentYear}. Discover the difference between reading for information vs transformation, and why some books deserve your full attention while others don't.`,
    date: "2025-11-02",
    readTime: readTime("reading-books-2025"),
    category: "Society",
    image: "/posts/post1.webp",
    thumbnailImage: "/posts/post1-thumb.webp",
    slug: "reading-books-2025",
    featured: true
  },
  {
    id: 2,
    title: "Why does everyone look successful in social media?",
    excerpt: "And you think you're the only one struggling.",
    description: "Discover why everyone seems successful on social media and why you feel like the only one struggling. Learn the truth behind the highlight reels and perfect lives you see online.",
    date: "2025-10-28",
    readTime: readTime("mental-health-digital-age"),
    category: "Mental Health",
    image: "/posts/post2.webp",
    thumbnailImage: "/posts/post2-thumb.webp",
    slug: "mental-health-digital-age",
    featured: true
  },
  {
    id: 3,
    title: "Hustle Culture is Quietly Destroying a Generation",
    excerpt: "You wear your exhaustion like a medal. Here's what you're actually doing.",
    description: "Hustle culture glorifies exhaustion and constant productivity. Learn how this toxic mindset is quietly destroying a generation and why rest is not laziness but survival.",
    date: "2025-11-02",
    readTime: readTime("hustle-culture-destroying-generation"),
    category: "Work Culture",
    image: "/posts/post3.webp",
    thumbnailImage: "/posts/post3-thumb.webp",
    slug: "hustle-culture-destroying-generation",
    featured: true
  },
  {
    id: 4,
    title: "How to Not Feel Overwhelmed by News",
    excerpt: "The world is loud as hell. But this one easy change can help.",
    description: "Learn how to stop feeling overwhelmed by constant news and social media. Discover why protecting your mornings and nights from doomscrolling can transform your mental health.",
    date: "2025-11-12",
    readTime: readTime("not-overwhelmed-by-news"),
    category: "Recovery",
    image: "/posts/post4.webp",
    thumbnailImage: "/posts/post4-thumb.webp",
    slug: "not-overwhelmed-by-news",
    featured: false
  },
  {
    id: 5,
    title: "Negativity: The Modern Mental Drug",
    excerpt: "Why does it feel like the world is ending every time you open your phone?",
    description: "Why does it feel like the world is ending every time you open your phone? Discover why negativity is addictive, how it distorts your reality, and why your mental state is worsening even while your daily life remains unchanged.",
    date: "2025-11-23",
    readTime: readTime("negativity-modern-mental-drug"),
    category: "Mental Health",
    image: "/posts/post5.webp",
    thumbnailImage: "/posts/post5-thumb.webp",
    slug: "negativity-modern-mental-drug",
    featured: false
  },
  {
    id: 6,
    title: "The Monkey Theory: they are more intelligent than humans",
    excerpt: "Monkeys aren't less evolved than us. They are smarter because they knew exactly where to stop.",
    description: "Explore The Monkey Theory: the idea that monkeys stayed in the trees to avoid taxes and existential dread. A witty look at why 'civilization' might be a trap and how to reclaim the wisdom of 'enough'.",
    date: "2025-12-25",
    readTime: readTime("the-monkey-theory"),
    category: "Society",
    image: "/posts/post6.webp",
    thumbnailImage: "/posts/post6-thumb.webp",
    slug: "the-monkey-theory",
    featured: true
  }
];
