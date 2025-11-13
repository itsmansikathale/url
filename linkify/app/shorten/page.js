"use client";

import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <div className="mx-auto max-w-lg bg-gray-400 flex flex-col my-16 p-8 rounded-lg gap-6 ">
      <h1 className="font-bold text-black text-xl ">
        Simplify your sharing — Linkify makes it easy.
      </h1>
      <div className="flex flex-col gap-2 ">
        <input
          type="text"
          value={url}
          className="px-4 py-4 text-black focus:outline-gray-700 rounded-md"
          placeholder="Enter / Paste Your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          type="text"
          value={shorturl}
          placeholder="Paste Your YouTube Video Link Here"
          className="px-4 py-4  text-black focus:outline-gray-700 rounded-md"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button className="bg-gray-800 my-4 shadow-lg text-white rounded-lg p-3">
          Create
        </button>
      </div>
    </div>
  );
};

export default Shorten;
