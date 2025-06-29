"use client";
import blogsData from "@/data/blogs";
import { useState } from "react";
import SortBlogs from "../components/SortBlogs";
import Blog from "./Blog";

export default function Blogs() {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2); // Load 2 more each time
  };

  const isAllLoaded = visibleCount >= blogsData.length;

  return (
    <div className="lg:w-2/3 lg:pr-12">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>
        <SortBlogs />
      </div>

      {blogsData.slice(0, visibleCount).map((blog) => (
        <Blog key={blog.title} blog={blog} />
      ))}

      {!isAllLoaded && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
