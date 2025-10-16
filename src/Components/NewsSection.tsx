"use client";
import { useState, useEffect } from "react";
import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

const NewsSection = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock cyber security news data
  const mockCyberNews = [
    {
      id: 1,
      title: "Major Data Breach Affects 50 Million Users Worldwide",
      description: "A sophisticated cyber attack on a leading social media platform has compromised personal information of millions of users, highlighting the importance of regular security updates.",
      date: "2024-09-25",
      category: "Data Breach",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "New Phishing Campaign Targets Online Banking Customers",
      description: "Security researchers have identified a new wave of phishing emails specifically targeting banking customers with fake security alerts and password reset requests.",
      date: "2024-09-24",
      category: "Phishing",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Ransomware Attacks on Small Businesses Increase by 40%",
      description: "Latest cybersecurity report shows a significant rise in ransomware attacks targeting small and medium enterprises, emphasizing the need for robust backup solutions.",
      date: "2024-09-23",
      category: "Ransomware",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Mobile App Security Flaws Expose Sensitive User Data",
      description: "Recent audit of popular mobile applications reveals critical vulnerabilities that could allow hackers to access personal information and location data.",
      date: "2024-09-22",
      category: "Mobile Security",
      readTime: "3 min read"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setNews(mockCyberNews);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Cyber Security News
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Cyber Security News
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest cybersecurity threats, breaches, and protective measures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* <Link href='/news' className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            View More News
          </button>
        </Link> */}
        <div className="flex justify-center"> 
            <Link href="/news" className="inline-block mt-12 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View More News
            </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;