"use server";
import Section from "../../../_components/section";
import { getData } from "../../../_lib/fetch";

export default async function Page({ params }) {
  const { slug } = params;
  const data = await getData(`https://swapi.dev/api/films/${slug}`);
  return (
    <main>
      <Section>{JSON.stringify(data)}</Section>
    </main>
  );
}
