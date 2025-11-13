import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="bg-black flex flex-col pb-10 mt-40 ml-20 gap-4">
          <p className="text-3xl font-bold text-center bg-black ">
            One short link, Infinite possibilities.
          </p>
          <p className="px-12 text-center">
            The simplest way to shorten anything — Linkify.
          </p>
          <p className="px-24 text-center font-semibold">
            No Login or SignUp required
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-black  mt-18 flex jusify-center items-center overflow-hidden relative">
          <Image
            src={"/vector2.jpg"}
            alt="A URL professional Image"
            fill={true}
            className="object-contain  md:object-cover object-center  opacity-90"
          />
        </div>
        <div className="flex gap-4  ml-65">
          <Link href="/shorten">
            <button className="bg-gray-700 text-white shadow-lg  rounded-lg p-3">
              Get Started
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-gray-800 shadow-lg  text-white rounded-lg p-3">
              GitHub
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
