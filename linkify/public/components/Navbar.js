import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-18 items-center flex justify-between px-3 text-white bg-gray-800 ">
      <div className="font-extrabold text-blue-700 text-2xl ">
        <Link href="/">
          <li>Linkify</li>
        </Link>
        {/* <Image src="/images/logo(2).png" alt="Linkify" width={30} height={30} /> */}
      </div>
      <ul className="items-center text-sm flex gap-5 mr-20">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <li className="flex gap-4 ">
          <Link href="/shorten">
            <button className="bg-gray-700  shadow-lg  rounded-lg p-3">
              Get Started
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-gray-900 shadow-lg  rounded-lg p-3">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
