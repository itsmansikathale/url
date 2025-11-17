"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-18 items-center flex justify-between px-4 text-white bg-gray-800 relative">
      <div className="font-extrabold text-blue-700 text-2xl ">
        <Link href="/">
          <li>Linkify</li>
        </Link>
        {/* <Image src="/images/logo(2).png" alt="Linkify" width={30} height={30} /> */}
      </div>

      {/* Hamburger Menu  */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? (
          <span className="text-3xl">✖</span>
        ) : (
          <span className="text-3xl">☰</span>
        )}
      </div>

      {/* desktop Menu */}

      <ul className="items-center hidden md:flex text-sm flex gap-6 mr-20">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        {/* <Link href="/contact">
          <li>Contact</li>
        </Link> */}
        <li className="flex gap-4 ">
          <Link href="/shorten">
            <button className="bg-gray-700  shadow-lg px-4 rounded-lg p-3">
              Get Started
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-gray-900 shadow-lg px-4 rounded-lg p-3">
              GitHub
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-5 bg-gray-900 absolute top-16 left--0 w-full p-5 text-center z-50">
          <Link href="/" onClick={() => setOpen(false)}>
            <li className="py-2 border-b border-gray-70 ">Home</li>
          </Link>
          <Link href="/shorten" onClick={() => setOpen(false)}>
            <li className="py-2 border-b border-gray-70 ">Shorten</li>
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            <li className="py-2 border-b border-gray-70 ">About</li>
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
