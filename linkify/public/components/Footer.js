import Image from "next/image";
import React from "react";
export default function Footer() {
  return (
    <footer className="w-full h-90 mt-30 bg-gray-200 text-black py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Grid */}
        <div className="flex items-center justify-center gap-10">
          {/* Branding */}
          <div className="items-center justify-center ">
            <Image
              src={"/Linkify_rb.png"}
              alt="Linkify"
              width={190}
              height={190}
            />
            <p className=" text-sm leading-relaxed text-gray-800">
              Shorten long URLs into clean, custom, shareable links.
              <br /> Fast • Secure • Free
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <a href="#" className="hover:text-white transition">
                  GitHub
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul>
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/shorten" className="hover:text-white transition">
                  Shorten
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Home
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 mb-10 pt-5">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Linkify. All rights reserved
        </p>
      </div>
    </footer>
  );
}
