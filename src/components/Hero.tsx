import React from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const heroImage = new URL(
  "../assets/WOO.png",
  import.meta.url
).href;

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Become a Tech Expert.{" "}
                <span className="text-blue-600">Master the Future.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Offering cutting-edge training in Java, Python, DevOps, AI/ML, and more. 
                Transform your career with industry-leading technology education.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                Explore Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src={heroImage}
                alt="FutureStack Academy - Technology Education"
                className="w-80 h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-75"></div>
            <div className="absolute top-1/2 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}