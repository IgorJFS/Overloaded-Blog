export const siteConfig = {
  name: 'Overloaded',
  description: "A modern space for discussing burnout, mental health, and the challenges facing today's society.",
  url: 'https://www.overloaded.live/',
  ogImage: './logo.png',
  links: {
    github: 'https://github.com/IgorJFS/Overloaded-Blog',
  },
  languages: {
    default: 'en',
    supported: ['en', 'pt'],
  },
  author: {
    name: 'Igor',
    email: 'igormp.dev@gmail.com',
  },
  // Analytics - Supabase Edge Function endpoint
  analytics: {
    trackReadEndpoint: 'https://mkmxiqwsqqzetklkyazw.supabase.co/functions/v1/track-read',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbXhpcXdzcXF6ZXRrbGt5YXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NTQ3MDUsImV4cCI6MjA4MTUzMDcwNX0.wh5FBvG6AWwrC81kUFVMHeXwZGaLpfpNrgbL-3YnhoI',
  },
};
