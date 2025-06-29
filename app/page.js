import Blogs from "./components/Articles/Blogs";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <Blogs />
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
