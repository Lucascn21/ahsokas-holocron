"use server";
import { Section } from "../../_components/Section";
import { getData } from "../../_lib/fetch";
import { removeNaUnknownEmpty, replaceUrls } from "../../_lib/jsonUtils";

export default async function Page({ params }) {
  const { thing } = params;
  const { results } = await getData(`https://swapi.dev/api/${thing}`);
  const nonEmptyResults = removeNaUnknownEmpty(results);
  const redirectedResults = replaceUrls(
    nonEmptyResults,
    "https://swapi.dev/api",
    "http://localhost:3000/holocron"
  );
  return (
    <>
      <Section results={redirectedResults} />
    </>
  );
}
