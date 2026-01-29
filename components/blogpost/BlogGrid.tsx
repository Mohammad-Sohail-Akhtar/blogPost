import React from 'react';

import Blog from './Blog';

const BlogGrid = ({ posts }) => {
  return (
    <div className="mx-auto mt-12 grid max-w-lg gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;