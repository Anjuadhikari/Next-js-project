import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function SupportSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto py-10 md:py-15 gap-8 md:gap-10">
      
  
      <div className="w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-lg mt-6 md:mt-0">
        <Image
          src="/support.jpg"
          alt="Support"
          width={800}
          height={800}
          className="w-full h-auto object-cover"
          priority 
        />
      </div>

   
      <div className="w-full md:max-w-2xl px-4 md:px-2">
        <h1 className="text-lg text-[#6872e1] mb-2">The work we do willingly</h1>
        <p className="text-[#112257] text-3xl sm:text-4xl px-1 sm:px-2 leading-snug">
          Are You Looking For <br />
          <span className="font-bold">Our Services</span>
        </p>
        <p className="text-[#112257] text-3xl sm:text-4xl font-bold mb-3 px-1 sm:px-2">
          Want To Try It For Free?
        </p>
        <p className="text-sm text-gray-600 mb-6 px-1 sm:px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>

     
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact-us">
            <button className="w-full sm:w-auto px-10 py-3 rounded-md bg-blue-500 text-white font-semibold transition-colors duration-300 hover:bg-blue-900 hover:cursor-pointer">
              Try for Free
            </button>
          </Link>
          <Link href="/about-us" >
            <button className="w-full sm:w-auto px-10 py-3 rounded-md bg-blue-900 text-white font-semibold transition-colors duration-300 hover:bg-blue-500 hover:cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
