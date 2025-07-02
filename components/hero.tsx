import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="bg-blue-50 sm:px-10 sm:py-20 ">
      <div className=" grid lg:grid-cols-2 w-full md:w-10/12 mx-auto gap-10 sm:gap-20 items-center px-2">
        {/* text section  */}
        <div className="flex flex-col space-y-4 items-start w-11/12 md:w-full">
          <div className="space-y-2">
        <span className="inline-block text-[#6872e1] px-3 py-1 rounded md:text-xs font-medium text-sm bg-[#eef0ff]">
          Planning On Developing A Product
        </span>
            <p className="text-[#112257] text-4xl">Inspiration Comes Only.</p>
            <p className="text-[#112257] text-4xl font-bold mb-3">
              Durning Work
            </p>
            <p className="text-xs">
              Contented continued any happiness instantly objection yet her
              allowance. Use correct day new brought tedious. Kept easy or sons
              my it done. Contented continued any happiness instantly objection
              yet her allowance. Use correct day new brought tedious. Kept easy
              or sons my it done.
            </p>
          </div>

          <div>
            <div className="flex flex-col space-y-10 items-start  sm:container">
              <div className="relative w-full">
                <p className="text-gray-800 text-sm font-semibold mb-2">
                  Project delivered on time
                </p>
                <div className="w-[80vw] md:w-[30vw]">
                  <div className="bg-gray-200 h-2 rounded-full w-full">
                    <div
                      className="bg-orange-500 h-2 rounded-full "
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="absolute -top-6 right-0 bg-[#2e2f93] text-white text-xs font-semibold px-2 py-0.5 rounded shadow">
                    90%
                  </div>
                </div>
              </div>

              <div className="relative ">
                <p className="text-gray-800 text-sm font-semibold mb-2">
                  Availability
                </p>
                <div className="w-[80vw] md:w-[30vw]">
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-orange-500 h-2 rounded-full "
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="absolute -top-6 right-0 bg-[#2e2f93] text-white text-xs font-semibold px-2 py-0.5 rounded shadow">
                    70%
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Button
                size="lg"
                className="bg-[#112257] text-white hover:bg-[#6872e1] transition-colors duration-300 font-semibold px-10 py-6 hover:cursor-pointer mt-15 sm:px-10 sm:py-3 sm:w-auto"
              >
                READ MORE
              </Button>
            </div>
          </div>
        </div>

        {/* image section  */}
        <div className="">
          <div>
             <h1 className="sm:text-lg text-md  text-[#6872e1]">Achievement</h1>
          <p className="text-[#112257] sm:text-5xl text-2xl ">Products Launched.</p>
          <p className="text-[#112257] sm:text-5xl text-2xl font-bold mb-10">
            In The Previous 12 Months.
          </p>

          </div>
         
          <div className="w-full  h-[450px] sm:h-[450px] ">
            <Image
              src="/hero-image.jpg"
              alt="About Us"
              width={800}
              height={600}
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
