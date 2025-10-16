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
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
    >
      <div className="p-6">
        <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {category.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {category.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-medium text-sm">
            Learn More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;