import Sidebar from "@/app/components/Sidebar";
import { slugify } from "@/app/utils/slugifyTitle";
import blogsData from "@/data/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaBookmark } from "react-icons/fa";

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    title: slugify(blog.title),
  }));
}

export default function BlogDetails({ params }) {
  const { title } = params;
  const blog = blogsData.find((blog) => slugify(blog.title) === title);

  if (!blog) {
    return notFound();
  }

  return (
    <section className="border-t border-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-12">
            <div className="container mx-auto max-w-4xl px-4 py-8">
              <div className="mb-8">
                <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                  {blog?.title}
                </h1>

                <div className="mb-6 flex items-center">
                  <Image
                    src={blog?.author?.avatar}
                    alt="Sumit Saha"
                    className="mr-4 h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="flex items-center">
                      <span className="mr-2 font-medium">
                        {blog?.author?.name}
                      </span>
                      <button className="text-sm font-medium text-green-600">
                        Follow
                      </button>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span>May 14, 2025</span>
                      <span className="mx-1">·</span>
                      <span className="rounded-full bg-gray-100 px-2 py-1">
                        {blog?.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: `${blog?.description}` }}
              ></div>

              <section className="mt-12 bg-gray-50 py-12">
                <div className="container mx-auto max-w-4xl px-4">
                  <h3 className="mb-6 text-xl font-bold">Recommended Blogs</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <article className="mb-10 border-b border-gray-200 pb-10">
                      <div className="mb-4 flex items-center">
                        <Image
                          src={blog?.author?.avatar}
                          alt="Author"
                          className="mr-2 h-6 w-6 rounded-full"
                          width={38}
                          height={38}
                        />
                        <span className="text-sm font-medium">Sumit Saha</span>
                      </div>
                      <h2 className="mb-2 cursor-pointer text-xl font-bold hover:underline">
                        The Ultimate Guide to Tailwind CSS v4: What`&apos;`s New
                        and Improved
                      </h2>
                      <p className="mb-4 text-gray-700">
                        Discover the latest features and improvements in
                        Tailwind CSS v4 and how they can enhance your web
                        development workflow.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <span>May 14</span>
                          <span className="mx-1">·</span>
                          <span className="rounded-full bg-gray-100 px-2 py-1">
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
