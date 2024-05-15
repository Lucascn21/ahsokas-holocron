import React from "react";
import Image from "next/image";
export default function People({ processedResults }) {
  const { name, height, mass, hair_color, eye_color, birth_year } =
    processedResults;

  return (
    <section className="flex p-10 flex-col items-center">
      <Image
        priority
        src="/ahsoka_cover.webp"
        width={500}
        height={500}
        alt="Picture of the author"
        style={{
          width: "auto",
        }}
      />
      <p>📜{name}</p>
      <p>📏{height}</p>
      <p>💪{mass}</p>
      {hair_color && <p>🦄 {hair_color}</p>}
      {eye_color && <p>👁 {eye_color}</p>}
      <p>🎂{birth_year}</p>
    </section>
  );
}
