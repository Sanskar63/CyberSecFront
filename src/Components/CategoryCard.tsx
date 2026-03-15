"use client";
import { Category } from "@/app/information/page";

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  const IconComponent = category.icon;

  return (
    <div
      onClick={() => onClick(category)}
      className="bg-[#111b2e] border border-gray-800 hover:border-gray-600 rounded-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
    >
      <div className={`h-1 ${category.color} rounded-t-xl`}></div>
      <div className="p-6">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-gray-800/50`}
        >
          <IconComponent className="w-7 h-7 text-cyan-400" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {category.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {category.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-cyan-400 font-medium text-sm group-hover:translate-x-1 transition-transform inline-block">
            Learn More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;