"use client"; // Error components must be Client Components
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <article className="flex flex-col items-center justify-center min-h-screen  text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 mb-4"
      >
        Try again
      </button>
      <Link
        className="text-blue-500 hover:text-blue-700"
        href="/"
        aria-label={`Head back to the home site`}
      >
        Return Home
      </Link>
    </article>
  );
}
