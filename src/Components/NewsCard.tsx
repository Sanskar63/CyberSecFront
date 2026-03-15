"use client";
import { Calendar, Clock, User, ExternalLink, Tag } from "lucide-react";
import { NewsArticle } from "@/app/news/page";
import Image from "next/image";

interface NewsCardProps {
  article: NewsArticle;
  viewMode: "grid" | "list";
  onClick?: () => void;
}

const NewsCard = ({ article, viewMode, onClick }: NewsCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      phishing: "bg-red-500/20 text-red-300 border-red-500/30",
      "data breach": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      ransomware: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      "social media": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "banking security":
        "bg-green-500/20 text-green-300 border-green-500/30",
      fraud: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      "mobile security":
        "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      "ai security": "bg-pink-500/20 text-pink-300 border-pink-500/30",
      "iot security": "bg-teal-500/20 text-teal-300 border-teal-500/30",
      default: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    };
    return colors[category.toLowerCase()] || colors.default;
  };

  if (viewMode === "list") {
    return (
      <article className="bg-[#111b2e] border border-gray-800 hover:border-gray-600 rounded-xl transition-all duration-300">
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
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getCategoryColor(article.category)}`}
                >
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

              <h2 className="text-2xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors cursor-pointer">
                {article.title}
              </h2>

              <p className="text-gray-400 mb-4 line-clamp-2">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full border border-gray-700"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
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
      className="bg-[#111b2e] border border-gray-800 hover:border-gray-600 rounded-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
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
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getCategoryColor(article.category)}`}
          >
            {article.category}
          </span>
          <span className="text-gray-500 text-sm">{article.readTime}</span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
          {article.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {article.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full border border-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            {new Date(article.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <User className="w-4 h-4" />
            {article.author}
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;