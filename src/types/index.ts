export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  slug: string;
  content?: string;
  author?: string;
  tags?: string[];
  language?: 'en' | 'pt';
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinks {
  social: FooterLink[];
  legal: FooterLink[];
}
