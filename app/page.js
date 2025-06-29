export default function Home() {
  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* <!-- Articles Feed --> */}
          <div className="lg:w-2/3 lg:pr-12">
            {/* <!-- Sorting Dropdown --> */}
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Articles</h2>
              <div>
                <label
                  htmlFor="sort"
                  className="text-sm font-medium text-gray-700 mr-2"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  name="sort"
                  className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="popular">Most Popular</option>
                  <option value="read-time">Shortest Read Time</option>
                </select>
              </div>
            </div>

            {/* <!-- Article 1 --> */}
            <article className="mb-10 pb-10 border-b border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75"
                  alt="Author"
                  className="h-6 w-6 rounded-full mr-2"
                />
                <span className="text-sm font-medium">Sumit Saha</span>
              </div>
              <a
                href="./details.html"
                className="text-xl font-bold mb-2 hover:underline cursor-pointer"
              >
                The Ultimate Guide to Tailwind CSS v4: What's New and Improved
              </a>
              <p className="text-gray-700 mb-4">
                Discover the latest features and improvements in Tailwind CSS v4
                and how they can enhance your web development workflow.
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </article>

            {/* <!-- Article 2 --> */}
            <article className="mb-10 pb-10 border-b border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/22261152?v=4"
                  alt="Author"
                  className="h-6 w-6 rounded-full mr-2"
                />
                <span className="text-sm font-medium">Saad Hasan</span>
              </div>
              <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
                The Rise of AI in Content Creation: Opportunities and Challenges
              </h2>
              <p className="text-gray-700 mb-4">
                Explore how artificial intelligence is transforming content
                creation and what it means for writers and creators.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-500 text-sm">
                  <span>May 12</span>
                  <span className="mx-1">·</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-full">AI</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </article>

            {/* <!-- Load More Button --> */}
            <div className="text-center">
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                Load more
              </button>
            </div>
          </div>

          {/* <!-- Sidebar --> */}
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="sticky top-20">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">
                  Discover more of what matters to you
                </h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="bg-green-200 font-medium px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Programming
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Data Science
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Technology
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Self Improvement
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Writing
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Relationships
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Machine Learning
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    Productivity
                  </a>
                </div>
              </div>

              {/* <!-- Footer Links --> */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-2">
                  <a href="#" className="hover:text-gray-700">
                    Help
                  </a>
                  <a href="#" className="hover:text-gray-700">
                    Status
                  </a>
                  <a href="#" className="hover:text-gray-700">
                    Writers
                  </a>
                  <a href="#" className="hover:text-gray-700">
                    Blog
                  </a>
                  <a href="#" className="hover:text-gray-700">
                    Careers
                  </a>
                  <a href="#" className="hover:text-gray-700">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-gray-700">
                    Terms
                  </a>
                  <a href="#" className="hover:text-gray-700">
                    About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
