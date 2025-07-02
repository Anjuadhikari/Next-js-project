"use client";
import React from "react";
import Link from "next/link";
import { Search, ChevronDown, Home, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      <div className="bg-[#6872e1] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex space-x-6 text-lg">
            <Link href="/" className="hover:text-white/80">
              About
            </Link>
            <Link href="/" className="hover:text-white/80">
              Careers
            </Link>
            <Link href="/" className="hover:text-white/80">
              Support
            </Link>
          </div>
          <div className="flex space-x-4">
            <button className="hover:text-white sm:font-medium font-sm">
              ENG
            </button>
            <button className="hover:text-white font-sm sm:font-medium">
              NEP
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#6872e1] text-white pb-28 pt-10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold">Serenite</span>
          </div>

          <nav className="hidden lg:flex sm:space-x-6 space-x-2">
            {["Home", "About", "Services", "Pages", "Portfolio", "Blog"].map(
              (item) => (
                <Link
                  href="#"
                  key={item}
                  className="flex items-center space-x-1 hover:text-white/80 text-lg font-medium"
                >
                  <span>{item}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
              )
            )}
          </nav>

          <div className="flex sm:space-x-4 space-x-2 items-center">
            <Button className="bg-white text-gray-600 hover:bg-gray-400 transition-colors duration-300 rounded-full sm:px-4 sm:py-3 px-2 ">
              <Search className="w-5 h-5" />
            </Button>

            <Button className="bg-[#6872e1] border border-white text-white hover:bg-white hover:text-[#6872e1] transition-colors duration-300 font-semibold sm:px-12 sm:py-5 rounded-none">
              SIGN UP
            </Button>
          </div>
        </div>

        <div className="text-center mt-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-sm">
            <Home className="w-4 h-4 text-white" />
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </div>
        </div>
      </div>
      <svg
        className="relative block w-full h-[120px] bg-[#6872e1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="
            M0,256
            L40,229.3
            C80,203 160,149 240,160
            C320,171 400,245 480,234.7
            C560,224 640,128 720,122.7
            C800,117 880,203 960,245.3
            C1040,288 1120,288 1200,277.3
            C1280,267 1360,245 1400,234.7
            L1440,224
            L1440,320
            L0,320
            Z
          "
        />
      </svg>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-2 sm:px-4 md:px-8 lg:px-16 py-10 bg-white mt-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[450px] overflow-hidden shadow-xl rounded-xl">
          <Image
            src="/about-us-image.jpg"
            alt="About Us"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <span className="inline-block text-[#6872e1] px-3 py-1 rounded text-xs font-medium bg-[#eef0ff] mb-2">
            What We Offer
          </span>

          <h1 className="text-3xl md:text-5xl text-[#112257] mt-2 leading-tight">
            Discover Effortless <span className="font-bold">Business</span>
            <div className="font-bold">And Marketing In One</div>
          </h1>

          <p className="text-gray-700 text-sm mt-4">
            Grursus mal suada faci lisis Lorem ipsum dolarorit ametion
            consectetur elit. The Vesti at bulum nec odio aea the dumm ipsumm
            ipsum dolocons is suada a and fadolorit to the consectetur elit.
          </p>

          {/* Progress Bars + Features */}
          <div className="mt-6 flex flex-col lg:flex-row justify-between gap-6">
            {/* Progress Bars */}
            <div className="space-y-6 w-full lg:w-[60%]">
              {/* Project Delivered */}
              <div className="relative">
                <p className="text-gray-800 text-sm font-semibold mb-2">
                  Project delivered on time
                </p>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div className="bg-orange-500 h-2 rounded-full w-[90%]"></div>
                </div>
                <div className="absolute -top-2 right-0 bg-[#2e2f93] text-white text-xs font-semibold px-2 py-0.5 rounded shadow">
                  90%
                </div>
              </div>

              {/* Availability */}
              <div className="relative">
                <p className="text-gray-800 text-sm font-semibold mb-2">
                  Availability
                </p>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div className="bg-orange-500 h-2 rounded-full w-[70%]"></div>
                </div>
                <div className="absolute -top-2 right-0 bg-[#2e2f93] text-white text-xs font-semibold px-2 py-0.5 rounded shadow">
                  70%
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col space-y-4 min-w-[200px]">
              {[
                "Integrations",
                "Business Strategy",
                "Business Setup",
                "Easy Documentation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <Check className="w-4 h-4 text-[#6872e1] mr-2" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Offer and Button */}
          <p className="text-[#112257] text-sm mt-8">
            Lets Come Up With a{" "}
            <span className="font-bold">
              Free Trial 30-Day Money Back Guarantee
            </span>{" "}
            For New Purchases
          </p>
          <Button
            size="lg"
            className="bg-[#112257] text-white hover:bg-[#0e1c4d] transition-colors duration-300 font-semibold px-8 py-3 mt-6 rounded"
          >
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
}
