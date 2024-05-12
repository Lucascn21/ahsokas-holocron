"use server";
import { removeNaUnknownEmpty, replaceUrls } from "../../../_lib/jsonUtils";
import { getData } from "../../../_lib/fetch";

export default async function Page({ params }) {
  const { thing, id } = params;
  const results = await getData(`${process.env.REMOTE_API}${thing}/${id}`);
  const nonEmptyResults = removeNaUnknownEmpty(results);
  const redirectedResults = replaceUrls(
    nonEmptyResults,
    process.env.REMOTE_API,
    ""
  );
  const stringifiedResults = JSON.stringify(redirectedResults);
  return (
    <>
      <h1>test</h1>
      <h1>{stringifiedResults}</h1>
    </>
  );
}
