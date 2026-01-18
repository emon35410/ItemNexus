import About from "@/components/Landing/About";
import Categories from "@/components/Landing/Categories";
import Features from "@/components/Landing/Features";
import Hero from "@/components/Landing/Hero";
import Reviews from "@/components/Landing/Reviews";
import Trending from "@/components/Landing/Trending";
import TrustSection from "@/components/Landing/TrustSection";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <Trending></Trending>
      <Categories></Categories>
      <Reviews></Reviews>
      <TrustSection></TrustSection>
    </div>
  );
}