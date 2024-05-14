"use server";
import { processJson } from "../../../_lib/jsonUtils";
import { getData } from "../../../_lib/fetch";
import Image from "next/image";
import Link from "next/link";
export default async function Page({ params }) {
  const { resource, id } = params;
  const results = await getData(`${process.env.REMOTE_API}${resource}/${id} `);
  const proceesedResults = processJson(results, process.env.REMOTE_API, "");

  return (
    <>
      <section>
        {proceesedResults.title && <h1>{proceesedResults.title}</h1>}
        {proceesedResults.episode_id && (
          <sub>Episode {proceesedResults.episode_id}</sub>
        )}
        {proceesedResults.director && <p>Director: {proceesedResults.director}</p>}
      </section>

      <section className="grid grid-cols-2 grid-rows-1 md:grid-cols-6 md:grid-rows-6 justify-items-center">
        {proceesedResults.characters &&
          proceesedResults.characters.map(async (characterURL) => {
            const characterData = await getData(
              `${process.env.REMOTE_API}/${characterURL}`
            );
            return (
              <article className={"flex"} key={characterData.id}>
                <Link
                  className={"flex items-center flex-col"}
                  href={`/holocron/${characterURL}`}
                >
                  <p>{characterData.name}</p>
                  <Image
                    src="/ahsoka_dual.webp"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                </Link>
              </article>
            );
          })}
      </section>
    </>
  );
}
