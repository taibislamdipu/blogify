import { slugify } from "@/app/utils/slugifyTitle";
import blogsData from "@/data/blogs";

export default function BlogDetails({ params }) {
  const { title } = params;
  const blog = blogsData.find((blog) => slugify(blog.title) === title);

  return (
    <div>
      BlogDetails
      <h1>{title}</h1>
    </div>
  );
}
