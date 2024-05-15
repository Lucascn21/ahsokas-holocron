import Image from "next/image";
export default function Loading() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <article className="text-center">
        <h1 className="text-xl mb-4">Loading...</h1>
        <Image
          unoptimized
          src="/babyyoda_load.gif"
          width={500}
          height={500}
          alt="Loading..."
          style={{
            width: "auto",
          }}
        />
      </article>
    </section>
  );
}
