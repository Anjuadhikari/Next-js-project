import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="bg-[#2c2c2c] py-0.5 relative z-50 sm:space-x-4">
      <div className=" w-11/12 mx-auto flex items-center justify-between px-8">
        <div className="text-white text-lg  font-bold">Serinite</div>
        <div className="flex items-center space-x-2  stroke-2 sm:space-x-4">
          <Link href="https://www.instagram.com/envanto.market/">
            <Instagram className="text-white sm:w-6 sm:h-6 w-4 h-4 hover:text-blue-500 transition-colors duration-300" />
          </Link>
          <Link href="https://www.facebook.com/envanto.market/">
            <Facebook className="text-white sm:w-6 sm:h-6  w-4 h-4 hover:text-blue-500 transition-colors duration-300" />
          </Link>
          <Link href="https://twitter.com/envanto_market">
            <Twitter className="text-white sm:w-6 sm:h-6  w-4 h-4 hover:text-blue-500 transition-colors duration-300" />
          </Link>
          <Link href="https://www.youtube.com/envanto.market">
            <Youtube className="text-white sm:w-6 sm:h-6 w-4 h-4 hover:text-blue-500 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
