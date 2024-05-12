"use server";
import { getData } from "../../_lib/fetch";
import { filterResultsList, replaceUrls } from "../../_lib/jsonUtils";
import dynamic from "next/dynamic";

export default async function Page({ params }) {
  const { thing } = params;
  const results = await getData(`${process.env.REMOTE_API}/${thing}`);
  const [nonEmptyResults] = filterResultsList(results);
  const redirectedResults = replaceUrls(
    nonEmptyResults.results,
    process.env.REMOTE_API,
    ""
  );
  const LazySection = dynamic(() => import("../../_components/Section"), {
    ssr: false,
  });

  return (
    <>
      <h1>Im lazily loading a section</h1>
      <LazySection results={redirectedResults} />
    </>
  );
}
