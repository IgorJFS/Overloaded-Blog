export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  description?: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Is Reading Books Still Worth It in 2025?",
    excerpt: "In an age of AI summaries, 2.5x speed audiobooks, and non-stop content, are books obsolete? We explore the real value of reading (and not reading) in 2025.",
    date: "2025-11-02",
    readTime: "7 min read",
    category: "Society",
    image: "/post1.png",
    slug: "reading-books-2025",
    featured: true
  },
  {
    id: 2,
    title: "Why everyone looks successful in social media?",
    excerpt: "And you think you're the only one struggling.",
    date: "2025-10-28",
    readTime: "8 min read",
    category: "Mental Health",
    image: "/socialMedia.jpg",
    slug: "mental-health-digital-age",
    featured: false
  },
  {
    id: 3,
    title: "Hustle Culture is Quietly Destroying a Generation",
    excerpt: "You wear your exhaustion like a medal. Here's what you're actually doing.",
    date: "2025-11-02",
    readTime: "12 min read",
    category: "Work Culture",
    image: "/post3.jpg",
    slug: "hustle-culture-destroying-generation",
    featured: true
  },
];
