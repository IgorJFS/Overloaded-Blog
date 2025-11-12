import fs from 'fs';
import path from 'path';

export function readTime(slug: string): string {
  try {
    const wordsPerMinute = 200; // Average reading speed
    
    // Path to the MDX file
    const filePath = path.join(process.cwd(), 'src', 'pages', 'blog', `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`MDX file not found for slug: ${slug}`);
      return '5 min read'; // Default fallback
    }
    
    // Read the MDX file content
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Remove frontmatter (content between --- and ---)
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---/, '');
    
    // Remove MDX/HTML tags and special characters for word count
    const textOnly = contentWithoutFrontmatter
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[#*_`\[\]()]/g, '') // Remove markdown symbols
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
      .trim();
    
    // Count words
    const words = textOnly.split(/\s+/).filter(word => word.length > 0).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    
    return `${minutes} min read`;
  } catch (error) {
    console.error(`Error calculating read time for ${slug}:`, error);
    return '5 min read'; // Fallback
  }
}
