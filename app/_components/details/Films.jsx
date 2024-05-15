import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Films({ processedResults, getData }) {
  return (
    <>
      <section>
        {processedResults.title && <h1>{processedResults.title}</h1>}
        {processedResults.episode_id && (
          <sub>Episode {processedResults.episode_id}</sub>
        )}
        {processedResults.director && (
          <p>Director: {processedResults.director}</p>
        )}
      </section>
      <section className="grid grid-cols-2 grid-rows-1 md:grid-cols-6 md:grid-rows-6 justify-items-center">
        {processedResults.characters &&
          processedResults.characters.map(async (characterURL) => {
            const characterData = await getData(
              `${process.env.REMOTE_API}/${characterURL}`
            );
            return (
              <article className={"flex"} key={characterData.id}>
                <Link
                  className={"flex items-center flex-col"}
                  href={`/holocron/${characterURL}`}
                  aria-label={`Read more about ${characterData.name}`}
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
