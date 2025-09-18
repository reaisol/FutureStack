import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Users, 
  Network, 
  GraduationCap, 
  CheckCircle 
} from "lucide-react";

const trainingImage = new URL(
  "../assets/herlambang-tinasih-gusti-3kc_75Rdgyk-unsplash.jpg",
  import.meta.url
).href;

export function Services() {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert-Led Training",
      description: "Learn from industry professionals with years of hands-on experience. Our instructors bring real-world expertise to every class, ensuring you get practical, job-ready skills."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description: "Our courses cover everything from fundamentals to advanced concepts. We provide complete learning paths with hands-on projects, assignments, and real-world case studies."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Industry Partnerships",
      description: "We maintain strong connections with leading tech companies and industry experts, providing you with networking opportunities and career guidance."
    }
  ];

  const features = [
    "Hands-on Project Training",
    "Industry Expert Instructors",
    "Career Guidance & Placement Support",
    "Flexible Learning Schedules",
    "Certification Programs",
    "Lifetime Learning Access"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Training Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology training programs designed to advance your career with over 30 years of experience 
            in delivering industry-leading education and professional development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {service.icon}
                      </div>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Our Services Include:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                Start Learning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4"
              >
                Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <ImageWithFallback
              src={trainingImage}
              alt="Professional consultation services"
              className="w-full h-auto rounded-2xl shadow-lg"
            />

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-15"></div>
          </div>
        </div>
      </div>
    </section>
  );
}