export default function SortBlogs() {
  return (
    <div>
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        name="sort"
        className="border p-2 w-28 border-gray-300 text-gray-700 text-sm 
        rounded-lg focus:ring-gray-500 focus:border-gray-500"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}
