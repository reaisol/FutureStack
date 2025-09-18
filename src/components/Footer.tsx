import React from "react";
import { Separator } from "./ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">
                Futurestack Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering professionals with cutting-edge
              technology training and comprehensive career
              development services since 1991.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <nav className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#courses"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Courses
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Popular Courses
            </h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Java Development
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Python Programming
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                DevOps & Cloud
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Salesforce Marketing Cloud
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Power Platforms
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  S.R Nagar, Hyderabad, 500018
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+91 94945 24043"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  +91 94945 24043
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contact@futurestackacademy.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  contact@futurestackacademy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Futurestack Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}