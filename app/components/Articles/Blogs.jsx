import blogsData from "@/data/blogs";
import SortBlogs from "../SortBlogs";
import Blog from "./Blog";

export default function Blogs() {
  return (
    <div className="lg:w-2/3 lg:pr-12">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>
        <SortBlogs />
      </div>

      {blogsData.slice(0, 2).map((blog) => (
        <Blog key={blog.title} blog={blog} />
      ))}

      <div className="text-center">
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
          Load more
        </button>
      </div>
    </div>
  );
}
