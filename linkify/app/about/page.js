import React from "react";
export const metadata = {
  title: "About - Linkify",
  description: "Learn more about Linkify - A fast, simple URL shortner.",
};

export default function About() {
  return (
    <div className="min-h-screen mt-30 bg-gray-50 px-6 py-16 ">
      {/* Wrapper */}

      <div className="max-w-4xl mx-auto">
        {/* Header */}

        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          About Linkify
        </h1>
        <p className="text-md text-black ">
          Linkify is a fast and simple tool designed to shorten long URLs into
          clean, shareable links - fully customizable and free to use.
        </p>

        {/* Section 1  */}
        <section className="bg-white mt-10 rounded-2xl shadow p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 ">
            What is Linkify?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Linkify is lightweight URL shortening service built using modernweb
            technologies. It allows you to convert long, complicated links into
            short and memorable ones. Whether you're sharing on social media,
            messages, business pages, or anywhere - LInkify makes your links
            look clean and professional.
          </p>
        </section>

        {/* section 2 */}
        <section className="bg-white rounded-2xl shadow p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why I Built This ?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I wanted to create a simple, fast, and user-friendly tool that
            anyonecan use. Most URL shortners are overloaded with ads or slow
            loading screens. Linkify solves that by giving users a clean
            interface, instant results, and a completely free experience.
          </p>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-2xl shadow p-8 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Features</h2>

          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3 ">
              <span className="text-blue-600 font-bold">•</span>
              Clean & Responsive UI for all devices
            </li>
            <li className="flex gap-3 ">
              <span className="text-blue-600 font-bold">•</span>
              Super fast link generation
            </li>
            <li className="flex gap-3 ">
              <span className="text-blue-600 font-bold">•</span>
              Free to use - no Login required
            </li>
            <li className="flex gap-3 ">
              <span className="text-blue-600 font-bold">•</span>
              Built with modern technologies like Next.js & Tailwind
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
