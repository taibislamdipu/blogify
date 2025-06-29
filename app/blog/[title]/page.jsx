import Sidebar from "@/app/components/Sidebar";
import { slugify } from "@/app/utils/slugifyTitle";
import blogsData from "@/data/blogs";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    title: slugify(blog.title),
  }));
}

export default function BlogDetails({ params }) {
  const { title } = params;
  const blog = blogsData.find((blog) => slugify(blog.title) === title);

  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* <!-- Articles Feed --> */}
          <div className="lg:w-2/3 lg:pr-12">
            {/* <!-- Article Header --> */}
            <div className="container mx-auto px-4 py-8 max-w-4xl">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {blog.title}
                </h1>

                <div className="flex items-center mb-6">
                  <Image
                    src={blog.author.avatar}
                    alt="Sumit Saha"
                    className="h-12 w-12 rounded-full mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">
                        {blog.author.name}
                      </span>
                      <button className="text-green-600 text-sm font-medium">
                        Follow
                      </button>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <span>May 14, 2025</span>
                      <span className="mx-1">·</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Article Content --> */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: `${blog.description}` }}
              ></div>

              <section className="bg-gray-50 py-12 mt-12">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h3 className="text-xl font-bold mb-6">Recommended Blogs</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <article className="mb-10 pb-10 border-b border-gray-200">
                      <div className="flex items-center mb-4">
                        <Image
                          src={blog.author.avatar}
                          alt="Author"
                          className="h-6 w-6 rounded-full mr-2"
                          width={38}
                          height={38}
                        />
                        <span className="text-sm font-medium">Sumit Saha</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
                        The Ultimate Guide to Tailwind CSS v4: What`&apos;`s New
                        and Improved
                      </h2>
                      <p className="text-gray-700 mb-4">
                        Discover the latest features and improvements in
                        Tailwind CSS v4 and how they can enhance your web
                        development workflow.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500 text-sm">
                          <span>May 14</span>
                          <span className="mx-1">·</span>
                          <span className="bg-gray-100 px-2 py-1 rounded-full">
                            Web Development
                          </span>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <FaBookmark />
                        </button>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </section>
  );
}
