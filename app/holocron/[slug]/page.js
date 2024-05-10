"use server";
import Section from "../../_components/section";
async function getData({ params }) {
  const { slug } = params;
  const res = await fetch(`https://swapi.dev/api/${slug}/`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  const data = await getData({ params });
  return (
    <main>
      <Section>{JSON.stringify(data.results)}</Section>
    </main>
  );
}
