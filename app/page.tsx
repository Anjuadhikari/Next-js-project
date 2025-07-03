import Features from "@/components/features";
import Hero from "@/components/secondbanner";
import Maincontent from "@/components/maincontent";

import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Servicesection from "@/components/servicesection";
import SupportSection from "@/components/supportsection";
import Testimonial from "@/components/testimonial";

import { Main } from "next/document";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
    
      <Maincontent />
      <Servicesection />
      <Hero />
      <Features />
      <Pricing />
      <SupportSection />
      <Testimonial />
      </div>
     
  );
}
