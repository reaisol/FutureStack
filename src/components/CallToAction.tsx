import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 border border-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Star Rating */}
        <div className="flex justify-center items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-white/90 text-sm">Trusted by 10,000+ students</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of successful professionals who have advanced their careers with 
          Futurestack Academy. Start your journey today and unlock your potential in technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
          >
            Get Started on Your Career Path
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
          >
            Schedule Free Consultation
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="text-white/90">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm">Job Assistance</div>
          </div>
          <div className="text-white/90">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Learning Support</div>
          </div>
          <div className="text-white/90">
            <div className="text-2xl font-bold text-white">Live</div>
            <div className="text-sm">Interactive Classes</div>
          </div>
        </div>
      </div>
    </section>
  );
}