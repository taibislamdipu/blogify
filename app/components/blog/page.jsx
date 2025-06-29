export default function BlogDetails({ params }) {
  const { title } = params;

  return (
    <div>
      BlogDetails
      <h1>{title}</h1>
    </div>
  );
}
