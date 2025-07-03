import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Shield,
  CreditCard,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Users className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-700",
      faqs: [
        {
          question: "How do I create an account?",
          answer:
            "Creating an account is simple! Click the 'Sign Up' button in the top right corner, enter your email address and create a secure password. You'll receive a confirmation email to verify your account. Once verified, you can start using all our features immediately.",
        },
        {
          question:
            "What information do I need to provide during registration?",
          answer:
            "We only require basic information: your name, email address, and a secure password. Optionally, you can add a profile picture and phone number for enhanced security and better user experience.",
        },
        {
          question: "Is there a mobile app available?",
          answer:
            "Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. The mobile app offers the same features as our web platform with an optimized mobile experience.",
        },
      ],
    },
    {
      title: "Billing & Payments",
      icon: <CreditCard className="h-5 w-5" />,
      color: "bg-green-100 text-green-700",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for enterprise customers. All payments are processed securely through our encrypted payment system.",
        },
        {
          question: "Can I change my subscription plan?",
          answer:
            "You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately for upgrades, while downgrades take effect at the next billing cycle. You'll be charged or credited proportionally.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "Yes, we offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service, contact our support team within 30 days of your initial purchase for a full refund.",
        },
      ],
    },
    {
      title: "Security & Privacy",
      icon: <Shield className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-700",
      faqs: [
        {
          question: "How do you protect my data?",
          answer:
            "We use enterprise-grade security measures including 256-bit SSL encryption, regular security audits, and compliance with GDPR, CCPA, and SOC 2 standards. Your data is stored in secure, geographically distributed data centers with multiple backup systems.",
        },
        {
          question: "Can I delete my account and data?",
          answer:
            "Yes, you have full control over your data. You can delete your account and all associated data at any time from your account settings. We'll permanently remove all your information within 30 days of your deletion request.",
        },
        {
          question: "Do you share my information with third parties?",
          answer:
            "No, we never sell or share your personal information with third parties for marketing purposes. We only share data with trusted service providers who help us operate our platform, and only to the extent necessary to provide our services.",
        },
      ],
    },
    {
      title: "Features & Usage",
      icon: <Star className="h-5 w-5" />,
      color: "bg-orange-100 text-orange-700",
      faqs: [
        {
          question: "What's included in the free plan?",
          answer:
            "Our free plan includes access to core features, up to 5 projects, 1GB of storage, basic templates, and community support. It's perfect for individuals and small teams getting started with our platform.",
        },
        {
          question: "How do I upgrade my account?",
          answer:
            "To upgrade, go to your account settings and click on 'Billing & Plans'. Choose your desired plan and complete the payment process. Your new features will be available immediately after successful payment.",
        },
        {
          question: "Is there a limit to how much I can use the service?",
          answer:
            "Usage limits depend on your subscription plan. Free users have basic limits, while paid plans offer much higher or unlimited usage. Check our pricing page for detailed information about each plan's limits and features.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#112257]">
      {/* Hero Section */}
      <div className="relative py-20 px-4 text-center bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help Center
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#112257]  mb-6">
                Frequently Asked{" "}
                <span className="text-[#112257]">Questions</span>
              </h1>
              <p className="text-md text-[#112257] mb-8 ">
                Find answers to common questions about our platform, features,
                and services. Can't find what you're looking for? Our support
                team is here to help.
              </p>
              <div className="flex gap-4">
                <Button size="sm" className=" sm:p-6 bg-[#112257]  hover:bg-blue-700">
                
                  Contact Support
                </Button>
                <Button variant="outline" size="sm" className=" sm:p-6 border-[#112257] text-[#112257] hover:bg-blue-100">
                  Browse All Articles
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/faq.jpg"
                alt="FAQ and Testimonial"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#112257]  mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-[#112257] ">
              Find answers organized by topic for quick and easy navigation
            </p>
          </div>

          <div className="grid gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-lg border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-full ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-gray-200 rounded-lg px-6 bg-gray-50/50"
                      >
                        <AccordionTrigger className="text-left font-semibold text-[#112257]  hover:text-blue-600 py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#112257] ">24/7</h3>
              <p className="text-[#112257] ">Support Available</p>
            </div>
            <div className="space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#112257] ">{"<2min"}</h3>
              <p className="text-gray-600">Average Response Time</p>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#112257] ">98%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
