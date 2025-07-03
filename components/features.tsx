import React from "react";

import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Features() {
  return (
    <div className="grid md:grid-cols-2 w-full mx-auto items-center gap-4 md:gap-12  px-4 py-10 bg-white">
      <div className="">
        <Image
          src="/features.webp"
          alt="Features"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-11/12 mx-auto py-3">
        <span className="inline-block text-[#6872e1] px-2  rounded-md md:text-xs font-medium text-sm bg-[#eef0ff]">
          Planning On Developing A Product
        </span>
        <p className="text-[#112257] md:text-5xl text-3xl">
          Popular Features That Your
        </p>
        <p className="text-[#112257] md:text-5xl text-2xl font-bold mb-3">
          Business Needs
        </p>
        <p className="text-[#112257] text-sm mb-4 ">
          Contented continued any happiness instantly objection yet her
          allowance. Use correct day new brought tedious. Kept easy or sons my
          it done. Contented continued any happiness instantly objection yet her
          allowance. Use correct day new brought tedious. Kept easy or sons my
          it{" "}
        </p>
        <div className="grid md:grid-cols-2  md:gap-10 flex-wrap">
          <div>
            <div className="flex items-center py-4 ">
              <Check className="w-4 h-4 text-[#6872e1] mr-2 stroke-3" />
              <span className="text-sm  text-gray-700 0.5 rounded">
                Integrations
              </span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-[#6872e1] mr-2 stroke-3" />
              <span className="text-gray-700 text-sm">Business Strategy</span>
            </div>
          </div>
          <div>
            <div className="flex items-center py-4 ">
              <Check className="w-4 h-4 text-[#6872e1] mr-2 stroke-3" />
              <span className="text-sm  text-gray-700 0.5 rounded">
                Integrations
              </span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-[#6872e1] mr-2 stroke-3" />
              <span className="text-gray-700 text-sm">Business Strategy</span>
            </div>
          </div>
        </div>
        <Link href="/servicess" className=" flex w-full py-5">
          <Button
            size="sm"
            className="bg-[#112257] text-white hover:bg-[#6872e1] sm:p-6 font-semibold hover:cursor-pointer mt-8 "
          >
            View All Features
          </Button>
        </Link>
      </div>
    </div>
  );
}
