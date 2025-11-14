"use client";

import Image from "next/image";
import { Megaphone } from "lucide-react";

export default function BiryaniTitle() {
  return (
    <div className=" relative my-8 max-w-6xl mx-auto">
     <div className="bg-[#ECDFCC] rounded-3xl mx-3 p-5 shadow-sm">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-[#7b1414] text-white text-sm font-semibold px-2 py-1 rounded-md">
        -5%
      </div>

      {/* Image + Title */}
      <div className="flex items-center gap-4 mb-3">
        {/* <div className="w-24 h-24 overflow-hidden rounded-2xl">
          <Image
            src="/biryani.jpg" // place your image in /public
            alt="Biryani"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div> */}
        <h2 className="text-3xl font-extrabold text-black">BIRYANIS</h2>
      </div>

      {/* Subtitle */}
      <p className="text-[#c87a1c] font-medium mb-1">
        Alle Biryanis werden mit Raita serviert
      </p>

      {/* Description */}
      <p className="text-gray-700 leading-snug">
        Alle Gerichte mit: gebratener Basmati-Reis, gerösteten Zwiebeln,
        Tomaten, Raita & Ingwer
      </p>

      {/* Floating Button */}
      <button className="absolute bottom-3 right-3 bg-white rounded-full shadow-md p-3 hover:bg-gray-50 transition">
        <Megaphone className="w-5 h-5 text-gray-700" />
      </button>
    </div></div>
  );
}
