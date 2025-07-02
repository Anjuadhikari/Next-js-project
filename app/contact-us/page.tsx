"use client";

import Link from "next/link";
import {
  Search,
  ChevronDown,
  Home,
  LocationEdit,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Form from "@/components/form";

export default function ContactHeader() {
  return (
    <div className="relative">
      <div className="bg-[#6872e1] text-white text-sm">
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
            <Button
            
              className="bg-white text-gray-600 hover:bg-gray-400 transition-colors duration-300 rounded-full px-4 py-3 "
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button
         
              className=" bg-[#6872e1] border border-white text-white hover:bg-white hover:text-[#6872e1] transition-colors duration-300 font-semibold  sm:px-12 sm:py-5 rounded-none"
            >
              SIGN UP
            </Button>
          </div>
        </div>

        <div className="text-center mt-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-sm">
            <Home className="w-4 h-4 text-white" />
            <span>/</span>
            <span className="text-white font-medium">Contact Us</span>
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


      <div className=" max-h-screen py-20 text-center">
        <p className="text-gray-600 text-lg mb-2">Contact Us</p>
        <h2 className="text-3xl md:text-5xl  text-gray-900">
          How Can We Help You?
        </h2>
        <br />
        <h2 className="text-3xl md:text-5xl  font-bold text-gray-900">
          Get In Touch!
        </h2>
        <p className="text-gray-600 sm:text-lg text-sm ">
          We are here to assist you with any questions or concerns you may have.
        </p>

        <p className="text-gray-600 sm:text-lg text-sm "> 
          Please feel free to reach out to us using the contact form below or
        </p>
      </div>
      <Form />

      <div className="flex justify-center items-center gap-5 py-10  w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          <div className="bg-white rounded-2xl shadow-lg px-6 py-8 text-center w-65 border border-t-2 border-gray-50">
            <div className="flex justify-center mb-5">
              <div className=" p-4 rounded-full">
                <LocationEdit className="w-10 h-10 text-[#fc7953]" />
              </div>
            </div>
            <h2 className="text-[#112257] text-2xl font-semibold mb-2">
              Our Location
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Kathmandu Nepal
              <br />
              Shantinagar Gate
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg px-6 py-8 text-center w-65 border border-t-2 border-gray-50">
            <div className="flex justify-center items-space-between mb-5">
              <div className=" p-4 rounded-full">
                <Phone className="w-10 h-10 text-[#fc7953]" />
              </div>
            </div>
            <h2 className="text-[#112257] text-2xl font-semibold mb-2">
              Call Us
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              (+977) 984 123 4567
              <br />
              (+977) 1 234 5678
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg px-6 py-8 text-center w-65 border border-t-2 border-gray-50">
            <div className="flex justify-center mb-5">
              <div className=" p-4 rounded-full">
                <Mail className="w-10 h-10 text-[#fc7953]" />
              </div>
            </div>
            <h2 className="text-[#112257] text-2xl font-semibold mb-2">
              Email Us
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              contact@company.com
              <br />
              support@company.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-20">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.180734134236!2d85.31232917530143!3d27.709030425633446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1913cb50947f%3A0xe84dc334f03a1d65!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1654777742906!5m2!1sen!2snp"
          width="100%"
          height="100%"
          allowFullScreen
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
