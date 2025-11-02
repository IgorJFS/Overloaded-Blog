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
    excerpt: "Spoiler: Yes. But not the way you think.",
    date: "2025-11-02",
    readTime: "7 min read",
    category: "Society",
    image: "/post1.png",
    slug: "understanding-burnout-2025",
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
];
