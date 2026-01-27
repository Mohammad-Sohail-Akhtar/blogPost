// components/Hero.tsx
export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">✨ Featured Article</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to the Future of Blogging
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Discover insightful articles, tutorials, and stories about technology, design, and innovation. 
            Join our community of passionate writers and readers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 shadow-lg">
              Start Reading
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition duration-200">
              Become a Writer
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
}