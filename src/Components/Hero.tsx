"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/CarouselImages/one.jpg",
    "/CarouselImages/two.jpg",
    "/CarouselImages/three.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[600px] lg:h-[800px] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Cybersecurity awareness image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/80 via-[#0b1120]/60 to-[#0b1120]/90"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6 text-sm text-cyan-300">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            AI-Powered Cybersecurity Companion
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Stri-Saksham
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted companion for cybersecurity awareness. Stay safe in the
            digital world with expert guidance, real-time updates, and personalized
            security recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">
              Chat with Saarthi
            </button> */}
            <a href="#information" className="border border-gray-500 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 font-medium py-4 px-8 rounded-full text-lg transition-all duration-300">
              Explore Threats →
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-cyan-400 w-8"
                : "bg-white/30 w-4 hover:bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;