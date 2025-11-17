import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white px-4 md:px-10 py-10 h-100 ">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-[60vh]">
        {/* Left Side */}
        <div className="bg-black flex flex-col  items-center text-center flex-col  gap-4">
          <p className="text-xl bg-black md:text-2xl font-bold bg-black ">
            One short link, Infinite possibilities.
          </p>
          <p className="max-w-md">
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

        <div className="mt-8 relative w-full h-[35vh] mb-10 md:h-[55vh] sm:h-[45vh] lg:h-[70vh]">
          <Image
            src={"/h5.jpg"}
            alt="A URL professional Image"
            fill
            className="object-cover rounded-3xl  object-center opacity-90"
          />
        </div>
      </section>
    </main>
  );
}
