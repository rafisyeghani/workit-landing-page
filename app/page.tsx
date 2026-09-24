import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-white overflow-x-clip">
      <Header />
      <div className="bg-ghost-white features-curve overflow-hidden">
      <Hero />
      <Features />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}