import React from "react";
import Link from "next/link";
import { Search, ChevronDown, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesCard from "@/components/card";
import Pricing from "@/components/pricing";

export default function ServicePage() {
  return (
    <div className="relative">
      <div className="bg-[#6872e1] text-white text-sm ">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex space-x-6 text-lg">
            <Link href="#" className="hover:text-white/80">
              About
            </Link>
            <Link href="#" className="hover:text-white/80">
              Careers
            </Link>
            <Link href="#" className="hover:text-white/80">
              Support
            </Link>
          </div>
          <div className="flex space-x-4">
            <button className="hover:text-white font-medium">ENG</button>
            <button className=" hover:text-white font-medium">NEP</button>
          </div>
        </div>
      </div>

      <div className="bg-[#6872e1] text-white pb-28 pt-10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold">Serenite</span>
          </div>

          <nav className="hidden lg:flex space-x-6">
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

          <div className="flex space-x-4 items-center">
            <Button className="bg-white text-gray-600 hover:bg-gray-400 transition-colors duration-300 rounded-full ">
              <Search className="w-5 h-5" />
            </Button>

            <Button className=" bg-[#6872e1] border border-white text-white hover:bg-white hover:text-[#6872e1] transition-colors duration-300 font-semibold sm:px-12 sm:py-5  rounded-none">
              SIGN UP
            </Button>
          </div>
        </div>

        <div className="text-center mt-24 ">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Services</h1>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-sm">
            <Home className="w-4 h-4 text-white" />
            <span>/</span>
            <span className="text-white font-medium">Services</span>
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

      <ServicesCard />
      <Pricing />
    </div>
  );
}
