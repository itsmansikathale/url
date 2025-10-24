import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-18 items-center flex justify-between px-3 text-white bg-gray-800">
      <div className="font-bold text-blue-600 text-xl ">Linkify🔗</div>
      <ul className="items-center text-sm flex gap-5">
        <Link href="/">
          {" "}
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/generate">
          <li>Shortner</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <li className="flex gap-3 ">
          <Link href="/generate">
            <button>Get Started</button>
          </Link>
          <Link href="/github">
            <button>GitHub</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
