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

  return (
    <>
      <h1>Lazily loaded section below</h1>
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
      {resource === "people" && (
        <section>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" onSelect={console.dir("a")}>
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
          <select id="eyeColor">
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
      )}
      <LazySection resource={resource} results={parsedResults} />
    </>
  );
}
