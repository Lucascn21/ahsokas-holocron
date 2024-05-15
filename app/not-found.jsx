import Link from "next/link";

export default function NotFound() {
  return (
    <article className="flex flex-col items-center justify-center min-h-96 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Not Found</h2>
      <p className="text-lg text-gray-700 mb-4">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700"
        aria-label="Go back home"
      >
        Return Home
      </Link>
    </article>
  );
}
