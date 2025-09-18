import React from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
const academyLogo = new URL(
  "../assets/803b8fef88a35239c6d2d98301cc24b963ed9dc3.png",
  import.meta.url
).href;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const form = useForm({
    defaultValues: { name: "", phone: "", course: "" },
  });

  const onSubmit = async (values: { name: string; phone: string; course: string }) => {
    try {
      const endpoint = (import.meta as any).env?.VITE_ENROLL_ENDPOINT as string | undefined;
      if (!endpoint) {
        console.warn("Missing VITE_ENROLL_ENDPOINT; skipping network call.");
      } else {
        const body = new URLSearchParams({
          name: values.name,
          phone: values.phone,
          course: values.course,
          source: "header",
        });
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body,
        });
        // Optionally handle JSON response
        await res.text().catch(() => undefined);
      }
    } finally {
      setIsEnrollOpen(false);
      form.reset();
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <Dialog open={isEnrollOpen} onOpenChange={setIsEnrollOpen}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="flex items-center gap-3 text-2xl font-bold text-blue-600">
                <ImageWithFallback
                  src={academyLogo}
                  alt="FutureStack Academy Logo"
                  className="w-20 h-20 object-contain"
                />
                FutureStack Academy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-black font-bold hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-black font-bold hover:text-blue-600 transition-colors"
            >
              Courses
            </a>
            <Link
              to="/study-abroad"
              className="text-black font-bold hover:text-blue-600 transition-colors"
            >
              Study Abroad
            </Link>
            <a
              href="#about"
              className="text-black font-bold hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-black font-bold hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                Enroll Now
              </Button>
            </DialogTrigger>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="#home"
                className="block px-3 py-2 text-black font-bold hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#courses"
                className="block px-3 py-2 text-black font-bold hover:text-blue-600"
              >
                Courses
              </a>
              <Link
                to="/study-abroad"
                className="block px-3 py-2 text-black font-bold hover:text-blue-600"
              >
                Study Abroad
              </Link>
              <a
                href="#about"
                className="block px-3 py-2 text-black font-bold hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-black font-bold hover:text-blue-600"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <DialogTrigger asChild>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enroll Now
                  </Button>
                </DialogTrigger>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Enroll Dialog */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enroll Now</DialogTitle>
          <DialogDescription>
            Fill in your details and we will reach out shortly.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              rules={{
                required: "Phone number is required",
                validate: (v) => /^(\d){10}$/.test(v) || "Enter 10 digits",
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-2 bg-gray-100 rounded-md border text-sm select-none">
                      +91
                    </span>
                    <FormControl>
                      <Input
                        placeholder="10-digit number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        value={field.value}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                          field.onChange(digits);
                        }}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              rules={{ required: "Please select a course" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="java">Java Development</SelectItem>
                      <SelectItem value="python">Python Programming</SelectItem>
                      <SelectItem value="devops">DevOps & Cloud</SelectItem>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="salesforce">Salesforce Marketing Cloud</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
      </Dialog>
    </header>
  );
}