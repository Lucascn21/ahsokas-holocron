import Image from "next/image";
import Link from "next/link";
export default function People({ data }) {
  const { name, gender, eye_color, url } = data;

  return (
    <Link href={`./${url}?name=${name}`} aria-label={`Read more about ${name}`}>
      <Image
        src="/ahsoka_lofi.jpg"
        priority="true"
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMYfhfDwAD1wHUhgo2bQAAAABJRU5ErkJggg=="
        width={500}
        height={500}
        alt="Picture of the author"
        style={{
          width: "auto",
        }}
      />
      {name && <p>📄 {name}</p>}
      {gender && <p>🦄 {gender}</p>}
      {eye_color && <p>👀 {eye_color}</p>}
    </Link>
  );
}
