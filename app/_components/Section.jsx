"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { capitalizeFirstLetter } from "../_lib/stringUtils";

//CSR
export default function Section({ resource, results }) {
  const FilmCard = dynamic(() =>
    import(`../_components/${capitalizeFirstLetter(resource)}`)
  );
  return (
    <>
      <section>
        {results?.map((result, index) => (
          <article
            id={result.name || result.title}
            className="mb-5"
            key={index}
          >
            <FilmCard data={result} />
          </article>
        ))}
      </section>
    </>
  );
}
