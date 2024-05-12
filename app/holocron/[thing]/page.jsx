"use server";
import { Section } from "../../_components/Section";
import { getData } from "../../_lib/fetch";
import { removeNaUnknownEmpty, replaceUrls } from "../../_lib/jsonUtils";

export default async function Page({ params }) {
  const { thing } = params;
  const results = await getData(`${process.env.REMOTE_API}/${thing}`);
  const [nonEmptyResults] = removeNaUnknownEmpty(results);

  const redirectedResults = replaceUrls(
    nonEmptyResults.results,
    process.env.REMOTE_API,
    process.env.NEXT_PUBLIC_VERCEL_URL || process.env.LOCALHOST
  );

  return (
    <>
      <Section results={redirectedResults} />
    </>
  );
}
