import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Pin, MessageSquare } from "lucide-react";

export default function Blog() {
  const BlogData = [
    {
      image: "/testimonial1.jpg",
      small_title: "Development",
      title: "Build a culture where everyone designs.",
      description:
        "In today's digital age, fostering a culture of design thinking is essential for innovation and collaboration. By empowering every team member to contribute to the design process, organizations can unlock new perspectives and drive meaningful change."
        
    }
  ];

  return (
    // <div>
    //   <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]  gap-6 w-full mx-auto sm:px-6 sm:py-10 px-2  bg-white text-[#112257] ">
    //     <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
    //       {/* Image with pin icon */}
    //       <div className="">
    //         <Image
    //           src="/blog-image1.webp"
    //           alt="Blog Banner"
    //           width={1200}
    //           height={600}
    //           className="w-full h-full rounded-lg object-cover"
    //         />
    //         <div className=" -mt-5 w-full flex justify-end">
    //           <Pin
    //             size={36}
    //             className="p-2 bg-[#fc7953] hover:bg-[#0e1b45] text-white rounded-full transition-all"
    //           />
    //         </div>
    //       </div>

    //       {/* Content Section */}
    //       <div className="mt-6  px-2 sm:px-6 lg:px-8">
    //         <h2 className="text-sm sm:text-base text-blue-500 hover:text-[#fc7953] font-medium">
    //           Development
    //         </h2>

    //         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#112257] hover:text-[#fc7953] leading-tight">
    //           Build a culture where everyone designs.
    //         </h1>

    //         <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
    //           In today's digital age, fostering a culture of design thinking is
    //           essential for innovation and collaboration. By empowering every
    //           team member to contribute to the design process, organizations can
    //           unlock new perspectives and drive meaningful change.
    //         </p>
    //       </div>

    //       {/* Author + Comments */}
    //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
    //         {/* Author Info */}
    //         <div className="flex items-center gap-3">
    //           <Image
    //             src="/testimonial1.jpg"
    //             alt="Author"
    //             width={400}
    //             height={400}
    //             className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-gray-100"
    //           />
    //           <div className="flex flex-col">
    //             <h3 className="text-sm sm:text-base font-semibold text-[#fc7953]">
    //               Danny Copter
    //             </h3>
    //             <p className="text-xs sm:text-sm text-gray-500">
    //               July 30, 2022
    //             </p>
    //           </div>
    //         </div>

    //         {/* Comments */}
    //         <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
    //           <MessageSquare
    //             size={32}
    //             className="p-1.5 hover:bg-[#fc7953] hover:text-white rounded-full transition-colors duration-300"
    //           />
    //           0 Comments
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-full px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto py-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">

    //     </div>
    //   </div>
    // </div>
  );
}
