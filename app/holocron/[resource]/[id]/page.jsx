"use server";
import { processJson } from "../../../_lib/jsonUtils";
import { getData } from "../../../_lib/fetch";

export default async function Page({ params }) {
  const { resource, id } = params;
  const results = await getData(`${process.env.REMOTE_API}${resource}/${id}`);
  const redirectedResults = processJson(results, process.env.REMOTE_API, "");
  return (
    <>
      <h1>test</h1>
      <h1>{JSON.stringify(redirectedResults)}</h1>
    </>
  );
}
