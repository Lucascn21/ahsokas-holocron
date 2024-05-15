import Image from "next/image";
import Link from "next/link";
export default function Film({ data }) {
  const { title, episode_id } = data;
  return (
    <Link
      href={`./films/${episode_id}`}
      aria-label={`Read more about ${title}`}
    >
      <Image
        src="/ahsoka_lofi.jpg"
        priority="true"
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMYfhfDwAD1wHUhgo2bQAAAABJRU5ErkJggg=="
        width={500}
        height={500}
        alt="Picture of the author"
      />
      {title && <p>🎞 {title}</p>}
      {episode_id && <p>🔆Episode {episode_id}</p>}
    </Link>
  );
}
