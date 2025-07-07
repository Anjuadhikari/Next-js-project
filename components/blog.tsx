import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { icons, MessageSquare, Search } from "lucide-react";
import { read } from "fs";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";


export default function Blog() {
  const BlogData = [
    {
      image: "/blog-image1.webp",

      small_title: "Development",
      title: "Build a culture where everyone designs.",
      description:
        "In today's digital age, fostering a culture of design thinking is essential for innovation and collaboration. By empowering every team member to contribute to the design process, organizations can unlock new perspectives and drive meaningful change.",
      author: {
        image: "/testimonial1.jpg",
        name: "Danny Copter",
        date: "July 30, 2022",
      },
      post: {
        icon2: (
          <MessageSquare
            size={32}
            className="p-1.5 hover:bg-[#fc7953] hover:text-white rounded-full transition-colors duration-300"
          />
        ),
        comments: 0,
      },
    },
    {
      image: "/blog-image2.webp",

      small_title: "Design",
      title: "Crafting user experiences that delight.",
      description:
        "User experience design is at the heart of creating products that resonate with users. By focusing on usability and aesthetics, designers can create interfaces that not only look good but also provide seamless interactions.",
      author: {
        image: "/testimonial2.jpg",
        name: "Jane Doe",
        date: "August 15, 2022",
      },
      post: {
        icon2: (
          <MessageSquare
            size={32}
            className="p-1.5 hover:bg-[#fc7953] hover:text-white rounded-full transition-colors duration-300"
          />
        ),
        comments: 0,
      },
    },
    {
      image: "/blog-image3.webp",

      small_title: "Marketing",
      title: "Strategies for effective digital marketing.",
      description:
        "In the ever-evolving landscape of digital marketing, staying ahead requires innovative strategies. From SEO to social media, marketers must adapt to new trends to effectively reach and engage their audience.",
      author: {
        image: "/testimonial3.jpeg",
        name: "Mark Smith",
        date: "September 10, 2022",
      },
      post: {
        icon2: (
          <MessageSquare
            size={32}
            className="p-1.5 hover:bg-[#fc7953] hover:text-white rounded-full transition-colors duration-300"
          />
        ),
        comments: 0,
      },
    },
    {
      image: "/blog-image4.webp",

      small_title: "Technology",
      title: "Embracing the future of technology.",
      description:
        "As technology continues to advance, businesses must embrace new tools and platforms to stay competitive. From AI to blockchain, understanding these technologies is crucial for future success.",
      author: {
        image: "/testimonial4.jpeg",
        name: "Emily Johnson",
        date: "October 5, 2022",
      },
      post: {
        icon2: (
          <MessageSquare
            size={32}
            className="p-1.5 hover:bg-[#fc7953] hover:text-white rounded-full transition-colors duration-300"
          />
        ),
        comments: 0,
      },
    },
    {
      image: "/blog-image5.webp",

      small_title: "Innovation",
      title: "Driving innovation through collaboration.",
      description:
        "Innovation thrives in collaborative environments. By bringing together diverse perspectives, teams can generate creative solutions that push boundaries and drive progress.",
      author: {
        image: "/testimonial5.webp",
        name: "Michael Brown",
        date: "November 12, 2022",
      },
      post: {
        icon2: (
          <MessageSquare
            size={32}
            className="p-1.5 hover:bg-[#fc7953] hover:text-white rounded-full transition-colors duration-300"
          />
        ),
        comments: 0,
      },
    },
  ];
  const popularPosts = [
    {
      title: "Build a culture where everyone designs",

      comments: 12,
    },
    {
      title: "Crafting user experiences that delight",

      comments: 20,
    },
    {
      title: "Embracing the future of technology",

      comments: 24,
    },
    {
      title: "The Power of Collaboration in Innovation",

      comments: 18,
    },
    {
      title: "Building a Culture of Design Thinking",

      comments: 32,
    },
    {
      title: "Strategies for Effective Digital Marketing",

      comments: 15,
    },
  ];

  return (
    <div className="min-h-screen py-12 ">
      <div className=" max-w-7xl mx-auto px-2 sm:px-2 lg:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#112257] mb-6">
            Latest Blog Posts
          </h1>
          <p className="text-gray-600 text-xl mx-auto mb-10">
            Stay updated with our latest insights and articles.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {BlogData.map((blog, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg  bg-white"
                >
                  {/* Image Section - Top */}
                  <div className="">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={1200}
                      height={400}
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover "
                    />
                  </div>

                  {/* Content Section - Bottom */}
                  <CardContent className="p-8 lg:p-10">
                    <p className="mb-4  text-blue-700 hover:text-[#fc7953]  transition-colors duration-300 text-sm font-medium px-2 py-1">
                      {blog.small_title}
                    </p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#112257] mb-4 leading-tight hover:text-[#fc7953] transition-colors duration-300 cursor-pointer">
                      {blog.title}
                    </h2>

                    <p className="text-[#112257] text-md sm:text-sm font-sans leading-relaxed mb-6">
                      {blog.description}
                    </p>

                    {/* Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 ">
                      <div className="flex items-center gap-4">
                        <Image
                          src={blog.author.image}
                          alt="Author"
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                        />
                        <div>
                          <h3 className="font-semibold text-[#fc7953] text-base">
                            {blog.author.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {blog.author.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2 hover:text-[#fc7953] transition-colors cursor-pointer">
                          <MessageSquare size={18} />
                          <span className="font-medium">
                            {blog.post.comments} Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3">
        <div className="sticky top-20 flex flex-col gap-6">
             <Card className="bg-white shadow-md rounded-lg p-6 border-0 border-gray-200">
              <h2 className="text-lg font-semibold text-[#112257] mb-4">
                Search Blog Posts
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="border text-gray-700 border-gray-300  py-2 px-4 w-full   bg-gray-50transition duration-200"
                />

                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="w-5 h-5 text-[#fc7953] stroke-3" />
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:mt-10 mt-6">
              <h3 className="text-lg font-bold text-[#fc7953] mb-4">
                Popular Posts
              </h3>
              <div>
                {popularPosts.map((post, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <p className="text-[#112257] text-sm font-medium hover:text-[#fc7953] transition-colors duration-300 cursor-pointer">
                        {post.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs pl-3">
                      <MessageSquare size={14} />
                      <span>{post.comments} Comments</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-4 sm:mt-10 mt-6">
              <h3 className="text-lg font-bold text-[#fc7953] mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Development",
                  "Design",
                  "Marketing",
                  "Technology",
                  "Innovation",
                ].map((category, index) => (
                  <Badge
                    key={index}
                    className="cursor-pointer hover:bg-[#fc7953] text-white bg-[#112257] "
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-4 sm:mt-10 mt-6">
              <h1 className="text-lg font-bold text-[#112257] mb-4">
                Have Any Questions
              </h1>
              <Image
                src="/blogg.jpg"
                alt="Blog Image"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-gray-600 text-md mt-4">
                Our Client Care Managers Are On Call 24/7 To Answer Your
                Question.
              </p>
              <Link href="/contact-us">
                <Button className="w-full sm:w-auto px-10 py-3 rounded-md bg-blue-900 text-white font-semibold transition-colors duration-300 hover:bg-[#fc7953] hover:cursor-pointer">
                  Contact Us
                </Button>
              </Link>
            </Card>
          </div> 
          </div>
        </div>
      
      </div>
    </div>
  );
}
