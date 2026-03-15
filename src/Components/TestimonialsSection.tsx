"use client";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Small Business Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      rating: 5,
      text: "Stri-Saksham helped me secure my online business from potential threats. The guidance on secure payment processing was invaluable. I feel much more confident about my digital presence now.",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "IT Professional",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      rating: 5,
      text: "As an IT professional, I appreciate the comprehensive approach Stri-Saksham takes towards cybersecurity education. The information is accurate, up-to-date, and presented in an easy-to-understand manner.",
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Parent & Teacher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
      rating: 5,
      text: "The kids' online safety section is fantastic! It helped me teach my children about internet safety while keeping the conversation age-appropriate. Highly recommended for all parents.",
    },
    {
      id: 4,
      name: "Amit Verma",
      role: "Senior Citizen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
      rating: 4,
      text: "I was always worried about online banking and digital payments. Stri-Saksham's simple explanations and step-by-step guides made me feel secure while using these services.",
    },
    {
      id: 5,
      name: "Dr. Meera Joshi",
      role: "Healthcare Professional",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
      rating: 5,
      text: "The section on health app security was eye-opening. As a doctor who uses various health apps, I now know how to protect patient data while leveraging technology effectively.",
    },
    {
      id: 6,
      name: "Karan Singh",
      role: "College Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan",
      rating: 5,
      text: "Social media safety tips from Stri-Saksham helped me avoid several potential scams. The real-time updates about new threats keep me informed and protected.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0d1526] to-[#0b1120]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Community
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            People&apos;s Views
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Hear what our community members say about their experience with
            Stri-Saksham
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#111b2e] border border-gray-800 hover:border-gray-600 rounded-xl transition-all duration-300 transform hover:-translate-y-1 p-6 group"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-cyan-500/30 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                &quot;{testimonial.text}&quot;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full bg-gray-700 ring-2 ring-gray-700"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-gray-700 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-300 font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-cyan-500/5">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;