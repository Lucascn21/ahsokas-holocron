"use client";
import dynamic from "next/dynamic";
import { capitalizeFirstLetter } from "../_lib/stringUtils";

//CSR
export default function Section({ resource, results }) {
  const Card = dynamic(() =>
    import(`../_components/cards/${capitalizeFirstLetter(resource)}`)
  );

  return (
    <>
      <section className="grid md:grid-cols-3 grid-rows-1 gap-1">
        {results?.map((result, index) => (
          <article
            id={result.name || result.title}
            className="mb-5"
            key={index}
          >
            <Card data={result} />
          </article>
        ))}
      </section>
    </>
  );
}
