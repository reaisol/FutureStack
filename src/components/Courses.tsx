import React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  Smartphone, 
  Globe, 
  ChevronDown, 
  ChevronUp,
  BookOpen
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  courseCount: number;
  courses: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  color: string;
}

const coursesData: Course[] = [
  {
    id: "java",
    title: "Java Development",
    description: "Master Java programming from basics to advanced enterprise applications.",
    icon: <Code className="w-8 h-8" />,
    courseCount: 8,
    courses: [
      "Core Java Fundamentals",
      "Object-Oriented Programming",
      "Java Collections Framework",
      "Spring Boot Development",
      "Microservices with Java",
      "Java Database Connectivity",
      "RESTful API Development",
      "Java Testing with JUnit"
    ],
    level: "Beginner",
    color: "bg-orange-100 text-orange-600"
  },
  {
    id: "python",
    title: "Python Programming",
    description: "Learn Python for web development, data science, and automation.",
    icon: <Code className="w-8 h-8" />,
    courseCount: 10,
    courses: [
      "Python Basics & Syntax",
      "Django Web Framework",
      "Flask Development",
      "Data Analysis with Pandas",
      "NumPy for Scientific Computing",
      "Web Scraping with Python",
      "Python Automation Scripts",
      "API Development with FastAPI",
      "Python Testing Frameworks",
      "Advanced Python Concepts"
    ],
    level: "Beginner",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Comprehensive DevOps training with AWS, Azure, and GCP platforms.",
    icon: <Cloud className="w-8 h-8" />,
    courseCount: 12,
    courses: [
      "Docker Containerization",
      "Kubernetes Orchestration",
      "AWS Cloud Services",
      "Azure Fundamentals",
      "Google Cloud Platform",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Best Practices",
      "Terraform Automation",
      "Jenkins Pipeline",
      "GitOps Workflows"
    ],
    level: "Intermediate",
    color: "bg-green-100 text-green-600"
  },
  {
    id: "salesforce",
    title: "SalesForce Market Cloud",
    description: "Master Salesforce Marketing Cloud for comprehensive digital marketing solutions.",
    icon: <Cloud className="w-8 h-8" />,
    courseCount: 8,
    courses: [
      "Marketing Cloud Fundamentals",
      "Email Studio & Journey Builder",
      "Social Studio Management",
      "Advertising Studio Setup",
      "Data Extensions & Automation",
      "Personalization & Segmentation",
      "Analytics & Reporting",
      "Integration with CRM"
    ],
    level: "Intermediate",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    id: "powerplatforms",
    title: "Power Platforms",
    description: "Build business applications with Microsoft Power Platform suite.",
    icon: <Database className="w-8 h-8" />,
    courseCount: 9,
    courses: [
      "Power Apps Development",
      "Power Automate Workflows",
      "Power BI Analytics",
      "Power Virtual Agents",
      "Dataverse Configuration",
      "Connectors & Integrations",
      "Security & Governance",
      "Advanced Customization",
      "Deployment & Management"
    ],
    level: "Intermediate",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: "web",
    title: "Web Development",
    description: "Full-stack web development with modern frameworks and technologies.",
    icon: <Globe className="w-8 h-8" />,
    courseCount: 11,
    courses: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+",
      "React.js Development",
      "Vue.js Framework",
      "Node.js Backend",
      "Database Design & SQL",
      "GraphQL APIs",
      "Web Security Essentials",
      "Progressive Web Apps",
      "Performance Optimization",
      "Deployment & Hosting"
    ],
    level: "Beginner",
    color: "bg-indigo-100 text-indigo-600"
  }
];

export function Courses() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Technology Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of technology courses designed to advance your career 
            and keep you ahead in the rapidly evolving tech landscape.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <Card 
              key={course.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${course.color}`}>
                    {course.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.courseCount} Courses</span>
                  </div>
                </div>

                <Button
                  onClick={() => toggleCourse(course.id)}
                  variant="outline"
                  className="w-full justify-between group-hover:border-blue-600 group-hover:text-blue-600"
                >
                  <span>View Courses</span>
                  {expandedCourse === course.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>

                {/* Expanded Course List */}
                {expandedCourse === course.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-3 text-gray-900">
                      Available Courses ({course.courseCount}):
                    </h4>
                    <ul className="space-y-2">
                      {course.courses.map((courseName, index) => (
                        <li 
                          key={index} 
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          {courseName}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      size="sm" 
                      className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We offer custom training programs tailored to your needs.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
          >
            Contact Us for Custom Training
          </Button>
        </div>
      </div>
    </section>
  );
}