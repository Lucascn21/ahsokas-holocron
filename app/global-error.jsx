"use client";
import Link from 'next/link'
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        <Link href="/">Return Home</Link>
      </body>
    </html>
  );
}
