"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/CarouselImages/one.jpg",
    "/CarouselImages/two.jpeg",
    "/CarouselImages/three.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // If we reach the clone of the first image (after the last real image)
    if (currentIndex === images.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false); // remove animation
        setCurrentIndex(1); // jump back to real first
      }, 500); // must match transition duration
    }

    // If we reach the clone of the last image (before the first real image)
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length); // jump to real last
      }, 500);
    }
  }, [currentIndex, images.length]);

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
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to{" "}
            <span className="text-blue-400">CyberSaarthi</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Your trusted companion for cybersecurity awareness. Stay safe in the
            digital world with expert guidance, real-time updates, and personalized
            security recommendations.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Chat with Saarthi
          </button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;