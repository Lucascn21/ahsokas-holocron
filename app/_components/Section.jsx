"use client";

import Link from "next/link";

//CSR
export function Section({ results }) {
  return (
    <section>
      {results?.map((result, index) => (
        <article id={result.name || result.title} className="mb-5" key={index}>
          {Object.entries(result).map(([key, value]) =>
            Array.isArray(value) && value.length ? (
              <div key={key}>
                <h1>{key}</h1>
                {value?.map((item, idx) => (
                  <p key={idx}>
                    <Link href={item}>{item}</Link>
                  </p>
                ))}
              </div>
            ) : (
              <p key={key}>
                {key === "url" || key === "homeworld" ? (
                  <Link href={value}>
                    {key} : {value}
                  </Link>
                ) : (
                  `${key} : ${value}`
                )}
              </p>
            )
          )}
        </article>
      ))}
    </section>
  );
}
