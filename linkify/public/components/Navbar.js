"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-18 items-center flex justify-between px-4 text-white bg-gray-200 relative">
      {/* <div className="font-extrabold text-blue-700 text-2xl "> */}
      {/* <Link href="/Linkify_rb.png"></Link> */}
      <Image src={"/Linkify_rb.png"} alt="Linkify" width={200} height={180} />
      {/* <Image
          src={"/h5.jpg"}
          alt="A URL professional Image"
          fill={true}
          className="object-cover rounded-3xl  object-center opacity-90"
        />
      </div> */}

      {/* Hamburger Menu  */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? (
          <span className="text-3xl">✖</span>
        ) : (
          <span className="text-3xl">☰</span>
        )}
      </div>

      {/* desktop Menu */}

      <ul className="items-center hidden md:flex gap-14 text-black text-sm font-semibold flex gap-6 mr-20">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shorten">Shorten</Link>
        </li>

        {/* <Link href="/contact">
          <li>Contact</li>
        </Link> */}
        <li className="flex gap-4 ">
          <Link href="/shorten">
            <button className="bg-gradient-to-r from-blue-800 to-gray-700 text-white  shadow-lg px-4 rounded-lg p-3">
              Get Started
            </button>
          </Link>
          {/* <Link href="/github">
            <button className="bg-gray-900 shadow-lg px-4 rounded-lg p-3">
              GitHub
            </button>
          </Link> */}
        </li>
      </ul>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-5 bg-gray-900 absolute top-16 left--0 w-full p-5 text-center z-50">
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="py-2 border-b border-gray-70 ">Home</li>
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            <li className="py-2 border-b border-gray-70 ">About</li>
          </Link>
          <Link href="/shorten" onClick={() => setOpen(false)}>
            <li className="py-2 border-b border-gray-70 ">Shorten</li>
          </Link>

          <div className="flex flex-col gap-3 mt-4">
            <Link href="/shorten" onClick={() => setOpen(false)}>
              <button className="bg-gray-700 w-full  py-2 rounded-lg">
                Get Started
              </button>
            </Link>
            <Link href="/github" onClick={() => setOpen(false)}>
              <button className="bg-gray-900 w-full py-2 rounded-lg">
                GitHub
              </button>
            </Link>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
