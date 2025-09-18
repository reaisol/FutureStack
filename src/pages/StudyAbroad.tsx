import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImage = new URL(
  "../assets/Gemini_Generated_Image_l5hu1ql5hu1ql5hu (1).png",
  import.meta.url
).href;

export default function StudyAbroadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 pb-32">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Meet with 80+ Universities at the
                <span className="block text-blue-600">World Education Fair</span>
                in Your City!
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Connect with university representatives from the UK, USA, Australia,
                New Zealand, Singapore and more. Discover scholarships, fee waivers,
                and application guidance with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  More Details
                </Button>
                <Button variant="outline" className="px-6 py-3 border-blue-600 text-blue-600">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src={heroImage}
                  alt="Study Abroad – Student Hero"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-30" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-200 rounded-full opacity-20" />
            </div>
          </div>

          {/* Stats - horizontal cards */}
          <div className="mt-12 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-5 text-center">
                <div className="text-2xl font-bold text-blue-600">4+ Years</div>
                <div className="text-sm text-gray-600">Of Excellence</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-5 text-center">
                <div className="text-2xl font-bold text-blue-600">2 Lacs</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-5 text-center">
                <div className="text-2xl font-bold text-blue-600">₹ 100 crore</div>
                <div className="text-sm text-gray-600">In Scholarships</div>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-5 text-center">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Visa Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



