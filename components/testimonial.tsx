"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import testimonialimage from "@/public/placeholder.svg"

const testimonials = [
  {
    name: "Sita Sharma",
    role: "Restaurant Owner",
    company: "Himalayan Delights",
    rating: 5,
    image: "/testimonial1.jpg",
    message:
      "Restronp has revolutionized how we manage our restaurant. The clean UI and fast performance have increased our efficiency by 40%. The support team is incredible!",
  },
  {
    name: "Ramesh Karki",
    role: "Product Manager",
    company: "DevStack Solutions",
    rating: 5,
    image: "/testimonial2.jpg",
    message:
      "We boosted our customer retention by 30% after implementing this system. The analytics dashboard provides insights we never had before. Absolutely essential!",
  },
  {
    name: "Anita Rai",
    role: "UX Designer",
    company: "CreativeHub Agency",
    rating: 5,
    image: "/testimonial3.jpeg",
    message:
      "The design is sleek and intuitive. It has made our workflow so much smoother. Our team adopted it instantly without any training needed.",
  },
  {
    name: "Rajesh Thapa",
    role: "CEO",
    company: "Tech Innovations Ltd",
    rating: 5,
    image: "/testimonial4.jpeg",
    message:
      "A complete game-changer for our operations. The automation features have saved us 20+ hours per week. ROI was visible within the first month.",
  },
  {
    name: "Priya Joshi",
    role: "Marketing Director",
    company: "TrendyWear Fashion",
    rating: 5,
    image: "/testimonial5.webp",
    message:
      "Outstanding customer support! They helped us migrate our entire system seamlessly. The onboarding process was smooth and professional.",
  },
  {
    name: "Karan Singh",
    role: "Founder",
    company: "StartUp Hub Nepal",
    rating: 5,
    image: "/testimonial6.jpeg",
    message:
      "This system has transformed our startup operations. The automation features are fantastic and the learning curve is minimal. Highly recommended!",
  },
]

export default function ResponsiveTestimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="testimonials">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mb-4 sm:mb-6">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112257] mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#112257] max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className=" gap-6 sm:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg">
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
              </div>

              {/* Message */}
              <p className="text-[#112257] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">"{testimonial.message}"</p>

              {/* Rating */}
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <span className="ml-2 text-xs sm:text-sm text-gray-500">({testimonial.rating}.0)</span>
              </div>

              {/* Profile */}
              <div className="flex items-center">
                <div className="relative flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-gray-100"
                  />
                </div>
                <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 truncate">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium truncate">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

   

        {/* Customer Avatars */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-md">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <Image
                  key={index}
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600 font-medium">Join our community</span>
          </div>
        </div>
      </div>
    </section>
  )
}
