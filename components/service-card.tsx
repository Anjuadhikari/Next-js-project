import React from "react";
import {
  Gpu,
  TvMinimalPlay,
  Shell,
  Mail,
  CircleFadingPlus,
  Keyboard,
} from "lucide-react";

export default function ServicesCard() {
  const cardData= [
    {
      title: "Digital Analytics",
      description:
        "We provide comprehensive digital analytics services to help you understand your online presence and make data-driven decisions.",
      icon: <Gpu size={40} />,
    },
    {
      title: "Web Development",
      description:
        "Our web development team creates stunning, responsive websites that engage users and drive conversions.",
      icon: <TvMinimalPlay size={40} />,
    },
    {
      title: "SEO Optimization",
      description:
        "We optimize your website for search engines to improve visibility and attract more organic traffic.",
      icon: <Shell size={40} />,
    },
    {
      title: "Email Marketing",
      description:
        "Our email marketing services help you reach your audience effectively, with personalized campaigns that drive engagement.",
      icon: <Mail size={40} />,
    },
    {
      title: "Social Media Management",
      description:
        "We create and manage high-quality content for your social media platforms .",
      icon: <CircleFadingPlus size={40} />,
    },
    {
      title: "Keyword Research",
      description:
        "We conduct thorough keyword research to identify the best opportunities for your content.",
      icon: <Keyboard size={40} />,
    },
  ];

  return (
<div className="bg-white/70 py-15 px-2 sm:px-6 md:px-10 lg:px-16">
  {/* Text Section  */}
  <div className="text-center mb-10">
    <p className="text-lg text-[#6872e1]">Process Management</p>
    <h1 className="text-2xl sm:text-4xl font-medium text-[#112257] mt-2">
      Solutions For Your
    </h1>
    <h2 className="text-2xl sm:text-5xl font-bold text-[#112257] mt-2">
      Most Advanced Workflows
    </h2>
  </div>

  {/* Card Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
    {cardData.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg px-6 py-8 text-center border border-t-2 border-gray-50"
      >
        <div className="p-4 w-full flex justify-center rounded-full text-[#fc7953]">
          {item.icon}
        </div>
        <h2 className="text-[#112257] text-2xl font-semibold mb-2">
          {item.title}
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>


  );
}
