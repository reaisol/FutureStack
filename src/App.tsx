import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Courses } from "./components/Courses";
import { Services } from "./components/Services";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <Services />
      <CallToAction />
      <Footer />
    </div>
  );
}