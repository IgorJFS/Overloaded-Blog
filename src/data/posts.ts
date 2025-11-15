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
  image: string;
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
    image: "/post1.png",
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
    image: "/socialMedia.webp",
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
    image: "/post3.webp",
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
    image: "/post4.jpg",
    slug: "not-overwhelmed-by-news",
    featured: false
  },
];
