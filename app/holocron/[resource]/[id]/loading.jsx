import Image from "next/image";
export default function Loading() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <article className="text-center">
        <h1 className="text-xl mb-4">Loading...</h1>
        <Image
          src="/babyyoda_load.gif"
          width={500}
          height={500}
          alt="Loading..."
        />
      </article>
    </section>
  );
}
