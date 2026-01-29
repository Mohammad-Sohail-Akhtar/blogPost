import BlogGrid from '@/components/blogpost/BlogGrid';
import Link from 'next/link';
import React from 'react';
// import BlogGrid from './BlogGrid';

const MOCK_POSTS = [
  {
    id: 1,
    title: "The Future of React in 2026",
    excerpt: "Exploring the new paradigms of Server Components and the evolving ecosystem of web development.",
    author: "Sarah Drasner",
    date: "Jan 28, 2026",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
  },
  {
    id: 2,
    title: "Designing for Cognitive Load",
    excerpt: "How to create user interfaces that feel intuitive by understanding how the human brain processes information.",
    author: "Marcus Aurelius",
    date: "Jan 25, 2026",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800",
  },
  {
    id: 3,
    title: "Sustainable Tech Stack",
    excerpt: "Why choosing energy-efficient hosting and optimized code is becoming a priority for modern startups.",
    author: "Elena Fisher",
    date: "Jan 22, 2026",
    category: "Sustainability",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800",
  }
];

const BlogPage = () => {
  return (
    <main className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Stories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Expert advice and technical deep-dives from our engineering team.
          </p>
        </div>

        {/* Modular Grid */}
        <BlogGrid posts={MOCK_POSTS} />
        
        {/* Pagination/Load More Placeholder */}
        <div className="mt-16 text-center">
            <Link href='/post'>
            <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors cursor-pointer">
            View all posts
          </button></Link>
          
        </div>
      </div>
    </main>
  );
};

export default BlogPage;


