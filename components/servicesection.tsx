import { Check, Crown, Megaphone, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServiceSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <section className="relative py-16 px-1 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 px-2 sm:px-0">
              <div className="space-y-2">
                <p className="text-[#7d8cff] font-medium text-lg">
                  Why Choose Us?
                </p>
                <h1 className="sm:text-6xl sm:font-medium text-3xl font-medium text-[#112257] leading-tight">
                  Turn Your
                  <div className="sm:font-bold font-medium">Amazing ideas</div>
                </h1>
                <h1 className="sm:text-6xl sm:font-bold text-3xl font-medium text-[#112257]">
                  Into Reality
                </h1>
              </div>

              <div className="space-y-6 pt-7">
                {[
                  "Machine learning enabled projections",
                  "Visitor mouse and click tracking",
                  "Automated revenue suggestions",
                ].map((text, i) => (
                  <div className="flex items-center gap-2" key={i}>
                    <Check className="w-4 h-4 text-[#7d8cff] stroke-3" />
                    <span className="text-[#112257] sm:font-medium font-sm">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/servicess">
                <Button
                  size="sm"
                  className=" sm:p-6 ml-6 mt-4 rounded-md bg-[#112257] text-white font-semibold transition-colors duration-300 hover:bg-blue-500 hover:cursor-pointer"
                >
                  VIEW ALL SERVICES
                </Button>
              </Link>
            </div>

            <div className="pt-10   ml-0 sm:-ml-36 sm:px-0 ">
              <div className="flex flex-col gap-10 sm:flex-row sm:gap-6  ">
                <Card className=" px-2 sm:px-4 sm:w-72 sm:h-64 w-90 h-80 bg-white  shadow-xl hover:bg-[#e1e4fb] transition-transform hover:scale-105 border-2 ">
                  <CardContent className="p-4 flex flex-col justify-between h-full ">
                    <div className="flex justify-center">
                      <Crown className="w-14 h-14 text-[#ffb000]  stroke-2 mb-3" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#112257]">
                        Design & Creativity
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        We use the latest technologies it voluptatem accusantium
                        do loremque laudantium.
                      </p>
                    </div>
                    <Button className="bg-[#7d8cff] hover:bg-[#0e1b45] text-white rounded-full w-10 h-10 p-0 self-start ">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="sm:w-72 sm:h-64  w-90 h-80 bg-white shadow-md mt-8 hover:bg-[#e1e4fb] transition-transform hover:scale-105 border-2">
                  <CardContent className="p-4 flex flex-col justify-between h-full">
                    <div className="flex justify-center">
                      <Megaphone className="w-14 h-14 text-[#ffb000] stroke-1.5 mb-3" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#112257]">
                        Digital Marketing
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        We use the latest technologies it voluptatem accusantium
                        do loremque laudantium.
                      </p>
                    </div>
                    <Button className="bg-[#7d8cff] hover:bg-[#0e1b45] text-white rounded-full w-10 h-10 p-0 self-start mt-4">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="sm:w-72 sm:h-64  w-90 h-80 bg-white border-2 shadow-md sm:mt-16 mt-4 hover:bg-[#e1e4fb] transition-transform hover:scale-105">
                  <CardContent className="p-4 flex flex-col justify-between h-full">
                    <div className="flex justify-center">
                      <Brain className="w-14 h-14 text-[#ffb000] stroke-1.5 mb-3" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#112257]">
                        Technology Innovation
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        We use the latest technologies it voluptatem accusantium
                        do loremque laudantium.
                      </p>
                    </div>
                    <Button className="bg-[#7d8cff] hover:bg-[#0e1b45] text-white rounded-full w-10 h-10 p-0 self-start mt-4">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#112257] text-lg">
              Let's Come Up With a{" "}
              <span className="font-medium text-[#7d8cff]">
                Start Free Trial 30-Day Money Back Guarantee
              </span>{" "}
              For New Purchases
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
