export default function SortBlogs() {
  return (
    <div>
      <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        name="sort"
        className="w-28 rounded-lg border border-gray-300 p-2 text-sm text-gray-700 focus:border-gray-500 focus:ring-gray-500"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
}
