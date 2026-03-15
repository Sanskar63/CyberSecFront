"use client";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import InformationSection from "@/Components/InformationSection";
import NewsSection from "@/Components/NewsSection";
import TestimonialsSection from "@/Components/TestimonialsSection";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#0b1120]">
      <Navbar />
      <Hero />
      <InformationSection />
      <NewsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
