import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-[#f5f7fb] py-16 ">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <span className="inline-block text-[#6872e1] px-3 py-1 rounded text-xs font-medium bg-[#eef0ff]">
            Our Pricing Plan Suits Every Need
          </span>
          <p className="text-[#112257] text-3xl sm:text-4xl mt-3">
            Pricing Are Made Simple
          </p>
          <p className="text-[#112257] text-4xl sm:text-5xl font-bold mb-3">
            Suites To Your Needs
          </p>
          <p className="text-[#112257] text-sm sm:text-base leading-relaxed mb-4 mx-auto max-w-lg">
            Pricing is made simple to suit your needs. Contented continued any
            happiness instantly, objection yet her allowance. Kept easy or sons,
            my it done.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 justify-center items-center">
          
          <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 bg-[#ffb000] text-white text-xs font-semibold px-3 py-1 rounded-br-md">
              Save Upto 100%
            </div>

            <p className="text-lg mt-12 font-semibold text-[#112257]">
              Free Plan
            </p>
            <p className="text-4xl sm:text-5xl font-bold mt-2 text-gray-500">
              $00.0
            </p>
            <p className="text-gray-600 mt-2 mb-6 px-4 max-w-xs">
              Best for one man bands, web creators, and freelancers.
            </p>
            <hr className="w-3/4 border-gray-300 my-4" />

            <ul className="space-y-3 text-md text-[#112257] text-left w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 20
                automations
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 3 seats
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> API access
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 100
                Accounts
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> No team
                members
              </li>
            </ul>

            <Button className="mt-8 w-full bg-[#112257] text-white hover:bg-[#fc7953] hover:text-[#112257] px-6 py-3 text-sm font-bold rounded-md">
              TRY THIS PACKAGE
            </Button>
          </div>

          <div className="relative bg-[#7c8dff] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center text-white">
            <div className="absolute top-0 left-0 bg-[#112257] text-white text-xs font-semibold px-3 py-1 rounded-br-md">
              Save Upto 60%
            </div>
            <div className="absolute top-0 right-0 bg-[#ffb000] text-white text-xs font-semibold px-3 py-1 rounded-bl-md">
              Popular
            </div>

            <p className="text-lg mt-12 font-semibold text-white">
              Starter Plan
            </p>
            <p className="text-4xl sm:text-5xl font-bold mt-2 text-white">
              $29.0
            </p>
            <p className="text-white mt-2 mb-6 px-4 max-w-xs">
              Best for one man bands, web creators, and freelancers.
            </p>
            <hr className="w-3/4 border-white my-4" />

            <ul className="space-y-3 text-md text-white text-left w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <Check className="text-white w-4 h-4 stroke-3" /> 3 projects
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-white w-4 h-4 stroke-3" /> 10 GB storage
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-white w-4 h-4 stroke-3" /> 13
                Collaborators
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Check className="text-white w-4 h-4 stroke-3" /> 100 Accounts
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Check className="text-white w-4 h-4 stroke-3" /> No team
                members
              </li>
            </ul>

            <Button className="mt-8 w-full bg-[#5763de] text-white hover:bg-white hover:text-[#5763de] px-6 py-3 text-sm font-bold rounded-md border border-transparent hover:border-[#5763de] transition-colors">
              TRY THIS PACKAGE
            </Button>
          </div>

          <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 bg-[#ffb000] text-white text-xs font-semibold px-3 py-1 rounded-br-md">
              Save Upto 80%
            </div>

            <p className="text-lg mt-12 font-semibold text-[#112257]">
              Professional Plan
            </p>
            <p className="text-4xl sm:text-5xl font-bold mt-2 text-gray-500">
              $79.0
            </p>
            <p className="text-gray-600 mt-2 mb-6 px-4 max-w-xs">
              Best for one man bands, web creators, and freelancers.
            </p>
            <hr className="w-3/4 border-gray-300 my-4" />

            <ul className="space-y-3 text-md text-[#112257] text-left w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 3 projects
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 10 GB
                storage
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 13
                Collaborators
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 100
                Accounts
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 3 team
                members
              </li>
            </ul>

            <Button className="mt-8 w-full bg-[#112257] text-white hover:bg-[#fc7953] hover:text-[#112257] px-6 py-3 text-sm font-bold rounded-md">
              TRY THIS PACKAGE
            </Button>
          </div>

          <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="absolute top-0 left-0 bg-[#ffb000] text-white text-xs font-semibold px-3 py-1 rounded-br-md">
              Save Upto 90%
            </div>

            <p className="text-lg mt-12 font-semibold text-[#112257]">
              Platinum Plan
            </p>
            <p className="text-4xl sm:text-5xl font-bold mt-2 text-gray-500">
              $159.0
            </p>
            <p className="text-gray-600 mt-2 mb-6 px-4 max-w-xs">
              Best for one man bands, web creators, and freelancers.
            </p>
            <hr className="w-3/4 border-gray-300 my-4" />

            <ul className="space-y-3 text-md text-[#112257] text-left w-full max-w-xs mx-auto">
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 3 projects
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 10 GB
                storage
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 13
                Collaborators
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 100
                Accounts
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#fc7953] w-4 h-4 stroke-3" /> 3 team
                members
              </li>
            </ul>

            <Button className="mt-8 w-full bg-[#112257] text-white hover:bg-[#fc7953] hover:text-[#112257] px-6 py-3 text-sm font-bold rounded-md">
              TRY THIS PACKAGE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
