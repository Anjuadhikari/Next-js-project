import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Pin } from "lucide-react";

export default function Blog() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-8xl mx-auto px-30 py-10 bg-white text-[#112257] ">
        <div>
          <div className="relative w-full mx-auto">
            <Image
              src="/blog-image1.webp"
              alt="Blog Banner"
              width={1500}
              height={500}
              className="w-full h-auto rounded-lg container mx-auto"
            />
            <div className=" -mt-5 w-full flex justify-end  ">
              {" "}
              <Pin
                size={40}
                className="p-2 bg-[#fc7953] hover:bg-[#0e1b45] text-white  rounded-full"
              />
            </div>
          </div>

          <div className="px-2">
            <h2 className="text-md color-[#112257] hover:text-[#fc7953] mt-4">
              Development
            </h2>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#112257] mt-4 hover:text-[#fc7953]">
              Build a culture where everyone designs.
            </h1>
            <p className="text-gray-600  text-md mt-2">
              In today's digital age, fostering a culture of design thinking is
              essential for innovation and collaboration. By empowering every
              team member to contribute to the design process, organizations can
              unlock new perspectives and drive meaningful change.
            </p>
          </div>
          <div className="flex items-center mt-4 ml-4">
            <Image
              src="/testimonial1.jpg"
              alt="Blog Image"
              width={400}
              height={400}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-gray-100 mt-4"
            />

            <h3 className="text-sm font-semibold text-[#fc7953] ml-2">
              Danny Copter
            </h3>
            <p className="text-xs text-gray-500 ml-2">July 30, 2022</p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
