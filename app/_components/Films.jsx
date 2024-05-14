import Image from "next/image";

export default function Film({ data }) {
  const { title, episode_id } = data;

  return (
    <>
      <Image
        src="/ahsokalofi.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      {title} <br />
      {episode_id}
    </>
  );
}
