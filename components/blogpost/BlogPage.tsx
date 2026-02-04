'use client'

import axios from "axios";
import { useEffect, useState } from "react";


interface BlogData {
  _id: number,
  title: string,
  description: string,
  author: string,
  image: string | null,
  date: string,
  day: string
}

const BlogPage = () => {
  
const [blogs, setBlogs] = useState<BlogData[]>([]);


  

  useEffect(()=>{
    const blogPostData = async() => {
    const response = await axios.get('/api/users/getblogpost')
    const result = response.data.formattedBlogs;
    console.log(result,'here')
    setBlogs(result);
  }
  blogPostData()
  },[])

  return (
    <main className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-2xl mb-8">Getting the blogs</h1>

        <div className="grid gap-6">
          {blogs?.map((item) => (
            <div key={item?._id} className="border p-4 rounded-lg">
              
              {item.image && (
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-60 object-cover rounded"
                />
              )}

              <h2 className="text-xl font-semibold mt-3">
                {item?.title}
              </h2>

              <p className="text-gray-600">{item?.description}</p>

              <p className="text-sm mt-2">
                ✍️ {item?.author}
              </p>

              <p className="text-xs text-gray-500">
                {item.day},{" "}
                {new Date(item?.date).toLocaleDateString()} —{" "}
                {new Date(item?.date).toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;


