export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl animate-pulse px-4 py-12">
      {/* Title */}
      <div className="mb-6 h-10 w-3/4 rounded bg-gray-300"></div>
      <div className="mb-8 h-10 w-2/5 rounded bg-gray-200"></div>

      {/* Author Info */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-300"></div>
        <div className="space-y-2">
          <div className="h-4 w-24 rounded bg-gray-300"></div>
          <div className="h-4 w-36 rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Paragraph */}
      <div className="mb-10 space-y-4">
        <div className="h-4 w-full rounded bg-gray-300"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
        <div className="h-4 w-4/6 rounded bg-gray-300"></div>
      </div>

      {/* Subheading */}
      <div className="mb-6 h-6 w-1/3 rounded bg-gray-300"></div>

      {/* List */}
      <div className="space-y-3">
        <div className="h-4 w-2/3 rounded bg-gray-300"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}
