export const blogPosts = [
  {
    id: 1,
    title: "Mastering the Art of Minimalist Design",
    excerpt: "How to strip away the noise and focus on what truly matters in your UI/UX projects.",
    author: "Alex Rivera",
    date: "Jan 24, 2026",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Why Tailwind CSS is a Game Changer",
    excerpt: "Utility-first CSS is more than just a trend; it's a faster way to build scalable websites.",
    author: "Jordan Smith",
    date: "Jan 20, 2026",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "The Future of AI in Content Creation",
    excerpt: "Exploring how generative models are reshaping the way we write and share stories.",
    author: "Sam Taylor",
    date: "Jan 15, 2026",
    category: "Tech",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  }
];

const Blog = ({ post }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {post.category}
          </p>
          <a href="#" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">{post.excerpt}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="ml-0">
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog