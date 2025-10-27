import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="bg-blue-50 flex flex-col gap-4">
          <p className="text-3xl font-bold">
            One short link, Infinite possibilities.
          </p>
          <p>The simplest way to shorten anything — Linkify.</p>
        </div>
        <div className="bg-gray-800 flex jusify-start relative">
          <Image
            src={"/vector.jpg"}
            alt="A URL professional Image"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
