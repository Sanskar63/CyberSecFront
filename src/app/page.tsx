"use client";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import InformationSection from "@/Components/InformationSection";
import NewsSection from "@/Components/NewsSection";
import TestimonialsSection from "@/Components/TestimonialsSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <Hero />
      <InformationSection />
      <NewsSection />
      <TestimonialsSection />
    </div>  
  );
}
