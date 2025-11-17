"use client";

import Link from "next/link";
import React, { useState } from "react";
import { resume } from "react-dom/server";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="mx-auto max-w-lg bg-gray-900 flex flex-col my-16 p-8 rounded-lg gap-6 ">
      <h1 className="text-2xl font-extrabold text-white text-center mb-6">
        Shorten Your Link
      </h1>
      <p className="font-bold text-white text-lg ">
        Simplify your sharing — Linkify makes it easy.
      </p>
      <div className="flex flex-col gap-2 ">
        <input
          type="text"
          value={url}
          className="px-4 py-4 text-gray-300 focus:outline-gray-700 rounded-md"
          placeholder="Enter / Paste Your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          type="text"
          value={shorturl}
          placeholder="Make your long URL Small"
          className="px-4 py-4  text-gray-300 focus:outline-gray-700 rounded-md"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-gradient-to-r from-blue-800 to-gray-700  my-4 shadow-lg text-white rounded-lg p-3"
        >
          Create
        </button>
      </div>
      {generated && (
        <>
          <span className="font-semibold text-gray-300">Your Link:</span>
          <code>
            <Link className="text-gray-400" target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Shorten;
