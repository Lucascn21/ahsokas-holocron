import Image from "next/image";
import Link from "next/link";
export default function People({ data }) {
  const { name, gender, eye_color, url } = data;

  return (
    <Link href={`./${url}`}>
      <Image
        src="/ahsokalofi.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      {name && <p>📄 {name}</p>}
      {gender && <p>💃🕺 {gender}</p>}
      {eye_color && <p>👀 {eye_color}</p>}
    </Link>
  );
}
