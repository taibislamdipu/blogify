import Footer from "./Footer";

export default function Sidebar() {
  return (
    <div className="mt-10 lg:mt-0 lg:w-1/3">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2">
            <span
              href="#"
              className="rounded-full bg-green-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200"
            >
              Programming
            </span>
            <span
              href="#"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-colors hover:bg-gray-200"
            >
              Data Science
            </span>
            <span
              href="#"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-colors hover:bg-gray-200"
            >
              Technology
            </span>
            <span
              href="#"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-colors hover:bg-gray-200"
            >
              Self Improvement
            </span>
            <span
              href="#"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-colors hover:bg-gray-200"
            >
              Writing
            </span>
            <span
              href="#"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-colors hover:bg-gray-200"
            >
              Relationships
            </span>
            <span
              href="#"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-colors hover:bg-gray-200"
            >
              Machine Learning
            </span>
            <span
              href="#"
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-colors hover:bg-gray-200"
            >
              Productivity
            </span>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
