export const siteConfig = {
  name: 'Overloaded',
  description: "A modern space for discussing burnout, mental health, and the challenges facing today's society.",
  url: 'http://localhost:4321',
  ogImage: '/socialMedia.jpg', // Default social media share image
  links: {
    twitter: 'https://twitter.com/overloaded',
    github: 'https://github.com/yourusername/overloaded',
  },
  languages: {
    default: 'en',
    supported: ['en', 'pt'],
  },
  author: {
    name: 'Overloaded Team',
    email: 'contact@overloaded.blog',
  },
};

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export const footerLinks = {
  social: [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
