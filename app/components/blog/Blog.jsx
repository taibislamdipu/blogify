import Link from "next/link";
import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog }) {
  const { title, author, image, description, date, category } = blog;
  return (
    <article className="mb-10 pb-10 border-b border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75"
          alt="Author"
          className="h-6 w-6 rounded-full mr-2"
        />
        <span className="text-sm font-medium">{author.name}</span>
      </div>
      <Link
        href={`/blog/${title}`}
        className="text-xl font-bold mb-2 hover:underline cursor-pointer"
      >
        {title}
      </Link>
      <p className="text-gray-700 mb-4">
        Discover the latest features and improvements in Tailwind CSS v4 and how
        they can enhance your web development workflow.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <span>{date}</span>
          <span className="mx-1">·</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">{category}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <FaBookmark />
        </button>
      </div>
    </article>
  );
}
