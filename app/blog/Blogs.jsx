"use client";
import blogsData from "@/data/blogs";
import { useState } from "react";
import SortBlogs from "../components/SortBlogs";
import Blog from "./Blog";

export default function Blogs() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [sortOrder, setSortOrder] = useState("latest");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const isAllLoaded = visibleCount >= blogsData.length;

  // Sort logic
  const sortedBlogs = [...blogsData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="lg:w-2/3 lg:pr-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Articles</h2>
        <SortBlogs sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {sortedBlogs.slice(0, visibleCount).map((blog) => (
        <Blog key={blog.title} blog={blog} />
      ))}

      {!isAllLoaded && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="rounded-full border border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
