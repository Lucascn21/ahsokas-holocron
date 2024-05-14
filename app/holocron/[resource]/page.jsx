"use server";
import { getData } from "../../_lib/fetch";
import { processJson } from "../../_lib/jsonUtils";
import dynamic from "next/dynamic";

export default async function Page({ params }) {
  const { resource } = params;
  const { results } = await getData(`${process.env.REMOTE_API}/${resource}`);
  const redirectedResults = processJson(results, process.env.REMOTE_API, "");
  const LazySection = dynamic(() => import("../../_components/Section"), {
    ssr: false,
  });

  return (
    <>
      <h1>Im lazily loading a section</h1>
      <LazySection resource={resource} results={redirectedResults} />
    </>
  );
}
