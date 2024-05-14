import Image from "next/image";

export default function People({ data }) {
  const { name, gender, eye_color, thing } = data;

  return (
    <>
      <Image
        src="/ahsokalofi.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      {name} <br />
      {gender} <br />
      {eye_color}
    </>
  );
}
