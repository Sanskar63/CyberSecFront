"use client";
import { Calendar, Clock, User, ExternalLink, Tag } from "lucide-react";
import { NewsArticle } from "@/app/news/page";
import Image from "next/image";

interface NewsCardProps {
  article: NewsArticle;
  viewMode: 'grid' | 'list';
  onClick?: () => void;
}

const NewsCard = ({ article, viewMode, onClick }: NewsCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'phishing': 'bg-red-100 text-red-800',
      'data breach': 'bg-purple-100 text-purple-800',
      'ransomware': 'bg-orange-100 text-orange-800',
      'social media': 'bg-blue-100 text-blue-800',
      'banking security': 'bg-green-100 text-green-800',
      'fraud': 'bg-yellow-100 text-yellow-800',
      'mobile security': 'bg-indigo-100 text-indigo-800',
      'ai security': 'bg-pink-100 text-pink-800',
      'iot security': 'bg-teal-100 text-teal-800',
      'default': 'bg-gray-100 text-gray-800'
    };
    return colors[category.toLowerCase()] || colors.default;
  };

  if (viewMode === 'list') {
    return (
      <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 relative h-48 md:h-auto">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
            />
          </div>
          
          {/* Content */}
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                {article.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Read More
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Read full news: ${article.title}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
          <span className="text-gray-500 text-sm">{article.readTime}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {article.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            {new Date(article.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <User className="w-4 h-4" />
            {article.author}
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;