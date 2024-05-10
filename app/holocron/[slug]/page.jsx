"use server";
import Section from "../../_components/section";
import { getData } from "../../_lib/fetch";

export default async function Page({ params }) {
  const { slug } = params;
  const data = await getData(`https://swapi.dev/api/${slug}`);
  return (
    <main>
      <Section>{JSON.stringify(data.results)}</Section>
    </main>
  );
}
