import About from "@/components/Landing/About";
import Features from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import Newsletter from "@/components/Landing/Newsletter";
import Portfolio from "@/components/Landing/Portfolio";
import Pricing from "@/components/Landing/Pricing";
import Testimonial from "@/components/Landing/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </div>
  );
}