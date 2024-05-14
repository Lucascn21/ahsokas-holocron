import Image from "next/image";
import Link from "next/link";
export default function Film({ data }) {
  const { title, episode_id } = data;
  return (
    <Link href={`./films/${episode_id}`}>
      <Image
        src="/ahsokalofi.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      {title && <p>🎞 {title}</p>}
      {episode_id && <p>🔆Episode {episode_id}</p>}
    </Link>
  );
}
