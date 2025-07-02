import React from "react";
import Image from "next/image";
import image from "@/public/bgimage.webp";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Maincontent() {
  return (
    <div className="relative   text-white bg-blue-100 h-[65vh] md:h-screen">
      <div>
        <Image
          src={image}
          alt="Hero Background"
          fill
          className="object-contain object-right w-full md:h-full h-[60vh]  "
        />
      </div>

      <div className="absolute mt-40 md:mt-60 md:ml-20  max-w-2xl px-2">
        <button className="px-2 py-0.5 mb-1 bg-blue-200 text-[#112257] sm:font-semibold font-sm rounded-md text-xs mt-4">
          For marketing and creative teams
        </button>

        <h1 className="sm:text-5xl text-2xl font-extrabold mt-4 mb-4 leading-tight text-[#112257]">
          We create digital products that matter
        </h1>
        <p className="sm:text-lg text-sm mb-6 text-[#112257] mt-4">
          Contented continued any happiness instantly objection yet her
          allowance. Use correct day new brought tedious. Kept easy or sons my
          it done.
        </p>
        <div className="flex gap-4">
          <Link href="/contact-us">
            <Button className=" md:px-10 py-3 rounded-md bg-blue-500 text-white font-semibold transition-colors duration-300 hover:bg-blue-900">
              Try for Free
            </Button>
          </Link>
          <Link href="/about-us">
            <Button className="md:px-10 py-3 rounded-md bg-blue-900 text-white font-semibold transition-colors duration-300 hover:bg-blue-500">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
