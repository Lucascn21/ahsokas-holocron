"use server";
import { processJson } from "../../../_lib/jsonUtils";
import { capitalizeFirstLetter } from "../../../_lib/stringUtils";
import { getData } from "../../../_lib/fetch";
import dynamic from "next/dynamic";

export default async function Page({ params }) {
  const { resource, id } = params;
  const results = await getData(`${process.env.REMOTE_API}${resource}/${id} `);
  const processedResults = processJson(results, process.env.REMOTE_API, "");

  const Details = dynamic(() =>
    import(`../../../_components/details/${capitalizeFirstLetter(resource)}`)
  );
  return (
    <Details processedResults={processedResults} getData={getData}></Details>
  );
}
