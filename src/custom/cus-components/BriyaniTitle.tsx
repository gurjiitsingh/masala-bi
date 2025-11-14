"use client";

import Image from "next/image";
import { Megaphone } from "lucide-react";
import { Ultra } from "next/font/google";

const ultra = Ultra({
  subsets: ["latin"],
  weight: ["400"], // Ultra has only one weight
});

import { Tangerine } from "next/font/google";

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function BiryaniTitle() {
  return (
    <div className="relative my-8 max-w-6xl mx-auto">
      <div
        className="rounded-3xl mx-3 p-5 shadow-sm bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-biryani.jpg')",
        }}
      >
        {/* Image + Title */}
        <div className="flex items-center gap-4 mb-3">
          <h2 className={`${ultra.className}  font-extrabold text-white text-4xl`}>Biryanis</h2>
        </div>

        {/* Subtitle */}
        <p className={`${tangerine.className} text-3xl text-white font-bold mb-1`}>
          Alle Biryanis werden mit Raita serviert
        </p>

        {/* Description */}
        <p className="text-white leading-snug">
          Alle Gerichte mit: gebratener Basmati-Reis, gerösteten Zwiebeln,
          Tomaten, Raita &amp; Ingwer
        </p>

        {/* Floating Button */}
        <button className="absolute bottom-3 right-3 bg-white rounded-full shadow-md p-3 hover:bg-gray-50 transition">
          <Megaphone className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
