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
      text: "CyberSaarthi helped me secure my online business from potential threats. The guidance on secure payment processing was invaluable. I feel much more confident about my digital presence now."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "IT Professional",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      rating: 5,
      text: "As an IT professional, I appreciate the comprehensive approach CyberSaarthi takes towards cybersecurity education. The information is accurate, up-to-date, and presented in an easy-to-understand manner."
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Parent & Teacher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
      rating: 5,
      text: "The kids' online safety section is fantastic! It helped me teach my children about internet safety while keeping the conversation age-appropriate. Highly recommended for all parents."
    },
    {
      id: 4,
      name: "Amit Verma",
      role: "Senior Citizen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
      rating: 4,
      text: "I was always worried about online banking and digital payments. CyberSaarthi's simple explanations and step-by-step guides made me feel secure while using these services."
    },
    {
      id: 5,
      name: "Dr. Meera Joshi",
      role: "Healthcare Professional",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
      rating: 5,
      text: "The section on health app security was eye-opening. As a doctor who uses various health apps, I now know how to protect patient data while leveraging technology effectively."
    },
    {
      id: 6,
      name: "Karan Singh",
      role: "College Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan",
      rating: 5,
      text: "Social media safety tips from CyberSaarthi helped me avoid several potential scams. The real-time updates about new threats keep me informed and protected."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            People&apos;s Views
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our community members say about their experience with CyberSaarthi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role.replace(/"/g, "&quot;")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;