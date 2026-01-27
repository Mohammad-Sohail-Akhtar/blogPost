// components/Footer.tsx
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white">BlogSphere</span>
            </Link>
            <p className="text-gray-400 mb-6">
              A modern blog platform for sharing ideas, tutorials, and insights about technology and design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition duration-200">
                  All Posts
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white transition duration-200">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/technology" className="text-gray-400 hover:text-white transition duration-200 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/web-development" className="text-gray-400 hover:text-white transition duration-200 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/category/design" className="text-gray-400 hover:text-white transition duration-200 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Design
                </Link>
              </li>
              <li>
                <Link href="/category/tutorials" className="text-gray-400 hover:text-white transition duration-200 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/category/career" className="text-gray-400 hover:text-white transition duration-200 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Career
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest posts and updates.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} BlogSphere. All rights reserved.</p>
          <p className="mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}