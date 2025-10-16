"use client";
import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import NewsCard from "@/Components/NewsCard";
import NewsFilters from "@/Components/NewsFilters";
import { Calendar, Filter, Grid, List, X } from "lucide-react";

export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  thumbnail: string;
  tags: string[];
}

export interface FilterState {
  category: string;
  dateRange: string;
  searchQuery: string;
}

const NewsPage = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    dateRange: 'all',
    searchQuery: ''
  });
  const [expandedNews, setExpandedNews] = useState<NewsArticle | null>(null);

  const articlesPerPage = 9;

  // Mock news data with more comprehensive articles
  const mockNewsData: NewsArticle[] = [
    {
      id: 1,
      title: "Major Data Breach Affects 50 Million Users Worldwide",
      description: "A sophisticated cyber attack on a leading social media platform has compromised personal information of millions of users, highlighting the importance of regular security updates.",
      content: "In a shocking revelation, cybersecurity experts have discovered one of the largest data breaches in recent history...",
      date: "2024-09-25",
      category: "Data Breach",
      readTime: "5 min read",
      author: "Sarah Johnson",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      tags: ["data breach", "cybersecurity", "social media"]
    },
    {
      id: 2,
      title: "New Phishing Campaign Targets Online Banking Customers",
      description: "Security researchers have identified a new wave of phishing emails specifically targeting banking customers with fake security alerts.",
      content: "A new sophisticated phishing campaign has emerged targeting online banking customers...",
      date: "2024-09-24",
      category: "Phishing",
      readTime: "4 min read",
      author: "Mike Chen",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["phishing", "banking", "email security"]
    },
    {
      id: 3,
      title: "Ransomware Attacks on Small Businesses Increase by 40%",
      description: "Latest cybersecurity report shows a significant rise in ransomware attacks targeting small and medium enterprises.",
      content: "The latest quarterly cybersecurity report reveals alarming statistics about ransomware attacks...",
      date: "2024-09-23",
      category: "Ransomware",
      readTime: "6 min read",
      author: "Dr. Emily Rodriguez",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      tags: ["ransomware", "small business", "cyber attacks"]
    },
    {
      id: 4,
      title: "Social Media Scams Target Younger Demographics",
      description: "New research shows that social media scams are increasingly targeting users aged 18-25 with fake investment opportunities.",
      content: "A comprehensive study by cybersecurity researchers has revealed concerning trends in social media fraud...",
      date: "2024-09-22",
      category: "Social Media",
      readTime: "4 min read",
      author: "Alex Thompson",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["social media", "scams", "youth safety"]
    },
    {
      id: 5,
      title: "Banking Trojans Evolve with Advanced Evasion Techniques",
      description: "Cybercriminals are using sophisticated methods to bypass traditional banking security measures and steal customer credentials.",
      content: "The evolution of banking trojans has reached a new level of sophistication...",
      date: "2024-09-21",
      category: "Banking Security",
      readTime: "7 min read",
      author: "Jennifer Kim",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["banking", "trojans", "malware"]
    },
    {
      id: 6,
      title: "Mobile App Security: What You Need to Know",
      description: "With mobile apps handling more sensitive data than ever, understanding mobile security is crucial for protecting personal information.",
      content: "As our reliance on mobile applications continues to grow...",
      date: "2024-09-20",
      category: "Mobile Security",
      readTime: "5 min read",
      author: "David Park",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      tags: ["mobile security", "apps", "privacy"]
    },
    {
      id: 7,
      title: "Cryptocurrency Fraud Reaches New Heights in 2024",
      description: "Fraudulent cryptocurrency schemes have cost investors billions this year, with new tactics emerging monthly.",
      content: "The cryptocurrency landscape has become increasingly treacherous for investors...",
      date: "2024-09-19",
      category: "Fraud",
      readTime: "6 min read",
      author: "Lisa Wang",
      thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
      tags: ["cryptocurrency", "fraud", "investment scams"]
    },
    {
      id: 8,
      title: "AI-Powered Cyber Attacks: The New Frontier",
      description: "Artificial intelligence is being weaponized by cybercriminals to create more sophisticated and targeted attacks.",
      content: "The intersection of artificial intelligence and cybercrime represents a new frontier in digital threats...",
      date: "2024-09-18",
      category: "AI Security",
      readTime: "8 min read",
      author: "Dr. Robert Martinez",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["AI", "machine learning", "cyber attacks"]
    },
    {
      id: 9,
      title: "Internet of Things Devices: Security Risks in Smart Homes",
      description: "Smart home devices are creating new vulnerabilities that hackers are exploiting to gain access to personal networks.",
      content: "The proliferation of Internet of Things (IoT) devices in our homes has created unprecedented security challenges...",
      date: "2024-09-17",
      category: "IoT Security",
      readTime: "5 min read",
      author: "Amanda Foster",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      tags: ["IoT", "smart home", "network security"]
    },
    {
      id: 10,
      title: "Email Security Best Practices for Remote Workers",
      description: "As remote work continues, email security has become more critical than ever for protecting business communications.",
      content: "The shift to remote work has fundamentally changed how we approach email security...",
      date: "2024-09-16",
      category: "Email Security",
      readTime: "4 min read",
      author: "Chris Brown",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop",
      tags: ["email security", "remote work", "business security"]
    },
    {
      id: 11,
      title: "Identity Theft Protection in the Digital Age",
      description: "New methods for protecting personal identity online are becoming essential as identity theft techniques become more sophisticated.",
      content: "Identity theft has evolved significantly in the digital age, requiring new approaches to protection...",
      date: "2024-09-15",
      category: "Identity Protection",
      readTime: "6 min read",
      author: "Dr. Susan Lee",
      thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=250&fit=crop",
      tags: ["identity theft", "personal security", "digital privacy"]
    },
    {
      id: 12,
      title: "Cloud Security Challenges for Small Businesses",
      description: "Small businesses face unique challenges when securing their cloud infrastructure and protecting customer data.",
      content: "Cloud adoption among small businesses has accelerated rapidly, but security considerations often lag behind...",
      date: "2024-09-14",
      category: "Cloud Security",
      readTime: "7 min read",
      author: "Kevin Zhang",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      tags: ["cloud security", "small business", "data protection"]
    }
  ];

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setNews(mockNewsData);
      setFilteredNews(mockNewsData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterNews();
  }, [filters, news]);

  const filterNews = () => {
    let filtered = [...news];

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(article => 
        article.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Filter by date range
    if (filters.dateRange !== 'all') {
      const now = new Date();
      const articleDate = new Date();
      
      filtered = filtered.filter(article => {
        const articleDate = new Date(article.date);
        const daysDiff = Math.floor((now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24));
        
        switch (filters.dateRange) {
          case 'today':
            return daysDiff === 0;
          case 'week':
            return daysDiff <= 7;
          case 'month':
            return daysDiff <= 30;
          case 'quarter':
            return daysDiff <= 90;
          default:
            return true;
        }
      });
    }

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredNews(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const getCurrentPageNews = () => {
    const startIndex = 0;
    const endIndex = currentPage * articlesPerPage;
    return filteredNews.slice(startIndex, endIndex);
  };

  const hasMoreNews = currentPage * articlesPerPage < filteredNews.length;

  const handleCardClick = (article: NewsArticle) => {
    setExpandedNews(article);
  };

  const handleCloseExpanded = () => {
    setExpandedNews(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cybersecurity News
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest cybersecurity threats, trends, and protective measures
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <NewsFilters filters={filters} onFilterChange={handleFilterChange} />
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {filteredNews.length} articles found
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results</p>
            </div>
          ) : (
            <>
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-6'
              }>
                {getCurrentPageNews().map((article) => (
                  <NewsCard 
                    key={article.id} 
                    article={article} 
                    viewMode={viewMode}
                    onClick={() => handleCardClick(article)}
                  />
                ))}
              </div>

              {hasMoreNews && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Expanded News Modal */}
      {expandedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-y-auto shadow-2xl relative">
            <button
              onClick={handleCloseExpanded}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <img
              src={expandedNews.thumbnail}
              alt={expandedNews.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {expandedNews.category}
                </span>
                <span className="text-gray-500 text-sm">{expandedNews.readTime}</span>
                <span className="text-gray-500 text-sm">{new Date(expandedNews.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{expandedNews.title}</h2>
              <p className="text-gray-600 mb-4">{expandedNews.description}</p>
              <div className="text-gray-700 whitespace-pre-line mb-4">{expandedNews.content}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {expandedNews.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">#{tag}</span>
                ))}
              </div>
              <div className="text-sm text-gray-500">By {expandedNews.author}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;