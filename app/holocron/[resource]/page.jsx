"use server";

import { Suspense } from "react";
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

  const filteredGenders = [
    ...new Set(
      parsedResults
        .filter((result) => result && result.gender)
        .map((result) => result.gender)
    ),
  ];

  const filteredEyeColors = [
    ...new Set(
      parsedResults
        .filter((result) => result && result.eye_color)
        .map((result) => result.eye_color)
    ),
  ];

  let links = null;
  if (COUNT) {
    links = (
      <>
        {PREVIOUS && (
          <Link
            href={`./${resource}/?${PREVIOUS ?? ""}&page=${PREVIOUS ?? ""}`}
          >
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              ⬅
            </button>
          </Link>
        )}
        {NEXT && (
          <Link href={`./${resource}/?${NEXT ?? ""}&page=${NEXT ?? ""}`}>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              ➡
            </button>
          </Link>
        )}
      </>
    );
  }

  return (
    <>
      <h1>Lazily loaded section below</h1>
      {resource === "people" && (
        <>
          <section className="grid place-content-center grid-flow-col w-full text-nowrap gap-2">
            <label htmlFor="gender">Gender:</label>
            <select className={"h-fit"} id="gender">
              <option key={"All"} value={"*"}>
                {"All"}
              </option>
              {filteredGenders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>

            <label htmlFor="eyeColor">Eye Color:</label>
            <select className={"h-fit"} id="eyeColor">
              <option key={"All"} value={"*"}>
                {"All"}
              </option>
              {filteredEyeColors.map((eye_color) => (
                <option key={eye_color} value={eye_color}>
                  {eye_color}
                </option>
              ))}
            </select>
          </section>
          <section className=""> {links}</section>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <LazySection resource={resource} results={parsedResults} />
      </Suspense>
    </>
  );
}
