"use server";

import { getData } from "../../_lib/fetch";
import { processJson } from "../../_lib/jsonUtils";
import { getPageParameter } from "../../_lib/stringUtils";
import dynamic from "next/dynamic";
import Link from "next/link";

export default async function Page({ params, searchParams }) {
  const { page } = searchParams;
  const { resource } = params;
  const results = await getData(
    `${process.env.REMOTE_API}${resource}/?${page ?? ""}&page=${page ?? ""}`
  );
  const parsedResults = processJson(
    results.results,
    process.env.REMOTE_API,
    ""
  );
  const LazySection = dynamic(() => import("../../_components/Section"), {
    ssr: false,
  });
  const COUNT = results.count;
  const PREVIOUS = getPageParameter(results.previous);
  const NEXT = getPageParameter(results.next);

  return (
    <>
      <h1>Im lazily loading a section</h1>
      {COUNT && PREVIOUS && (
        <Link href={`./${resource}/?${PREVIOUS ?? ""}&page=${PREVIOUS ?? ""}`}>
          <button>⬅</button>
        </Link>
      )}
      {COUNT && NEXT && (
        <Link href={`./${resource}/?${NEXT ?? ""}&page=${NEXT ?? ""}`}>
          <button>➡</button>
        </Link>
      )}
      <LazySection resource={resource} results={parsedResults} />
    </>
  );
}
