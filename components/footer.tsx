"use client";
import {
  MapPin,
  Phone,
  Mail,
  Check,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  const socialIcons = [Facebook, Twitter, Instagram, Linkedin, Youtube];

  return (
    <div>
      <footer className="relative bg-[#112257] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-16 pb-12 gap-8">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="w-6 h-6 bg-indigo-700 transform rotate-45 rounded-tl-full rounded-br-full"></div>
              </div>
              <span className="text-3xl font-bold cursor-pointer">
                Serenite
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
              <h3 className="text-xl font-medium whitespace-nowrap">
                Subscribe Our Newsletter
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full mx-auto max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-8 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none transition-colors duration-300 flex-1 w-full sm:w-auto"
                />
                <Button className="w-full sm:w-auto sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap max-w-md cursor-pointer">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5  gap-12 pb-12 text-white">
            {/* About Us */}
            <div>
              <h4 className="text-xl font-semibold mb-6">About Us</h4>
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
                lectus, mattis non accumsan in, tempor dictum neque.
              </p>
              <div className="flex gap-3">
                {socialIcons.map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center hover:text-white"
                  >
                    <Icon size={18} className="text-white hover:text-white/80" />
                  </div>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about-us"
                    className="flex items-center gap-3 text-white/80 hover:text-white text-sm"
                  >
                    <Check size={14} /> About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="flex items-center gap-3 text-white/80 hover:text-white text-sm"
                  >
                    <Check size={14} /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 text-white/80 hover:text-white text-sm"
                  >
                    <Check size={14} /> Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Support</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 text-white/80 hover:text-white text-sm"
                  >
                    <Check size={14} /> Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="flex items-center gap-3 text-white/80 hover:text-white text-sm"
                  >
                    <Check size={14} /> Services Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/contact-us"
                    className="flex items-center gap-3 text-white/80 hover:text-white text-sm"
                  >
                    <Check size={14} /> Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 text-white/80 hover:text-white text-sm"
                  >
                    <Check size={14} /> Testimonials & FAQ’s
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-6 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1" />
                  <div>
                    <div>4789 Melmorn Street</div>
                    <div>Zakila Ton, Mashintron Town</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  (+01) 123 456 7890
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  help@serenitet.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                Copyright © 2024{" "}
                <Link href="/" className="text-blue-400 hover:text-blue-300">
                  Serenite
                </Link>{" "}
                Theme All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/terms"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Terms of Use
                </Link>
                <span className="text-white/30">|</span>
                <Link
                  href="/privacy"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <div className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:-translate-y-1 z-50 cursor-pointer">
        <ArrowUp size={20} />
      </div>
    </div>
  );
};

export default Footer;
