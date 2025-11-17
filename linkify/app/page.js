import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white h-94 mr-10 pr-4">
      <section className="grid grid-cols-2 md:grid-cols-2 min-h-[50vh]">
        {/* Left Side */}
        <div className="bg-black flex mb-60 items-center justify-center flex-col pb-10 mt-40 ml-20 px-6 py-10 md:py-0 gap-4">
          <p className="text-xl bg-black md:text-2xl font-bold text-center bg-black ">
            One short link, Infinite possibilities.
          </p>
          <p className="px-12 text-center">
            The simplest way to shorten anything — Linkify.
          </p>
          <p className="px-24 text-center md:text-base font-semibold">
            No Login or SignUp required
          </p>
          <div className="flex gap-4 mt-10 ">
            <Link href="/shorten">
              <button className="bg-gradient-to-r from-blue-800 to-gray-700  text-white shadow-lg  rounded-lg p-3">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        {/* Buttons */}

        <div className="mt-8 relative w-full mb-10 h-[40vh] sm:h-[50vh] lg:h-[80vh]">
          <Image
            src={"/h5.jpg"}
            alt="A URL professional Image"
            fill={true}
            className="object-cover rounded-3xl  object-center opacity-90"
          />
        </div>
      </section>
    </main>
  );
}
