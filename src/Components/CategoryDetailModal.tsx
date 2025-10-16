"use client";
import { X, Shield, AlertTriangle, CheckCircle, Lightbulb, ExternalLink } from "lucide-react";
import { Category } from "@/app/information/page";

interface CategoryDetailModalProps {
  category: Category;
  isOpen: boolean;
  onClose: () => void;
}

const CategoryDetailModal = ({ category, isOpen, onClose }: CategoryDetailModalProps) => {
  if (!isOpen) return null;

  const IconComponent = category.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.title}
                </h2>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {category.detailContent.overview}
            </p>
          </section>

          {/* Key Threats */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-semibold text-gray-800">Key Threats</h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.keyThreat.map((threat, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{threat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">Best Practices</h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{practice}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              <h3 className="text-xl font-semibold text-gray-800">Helpful Tips</h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Warnings */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <h3 className="text-xl font-semibold text-gray-800">Important Warnings</h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.warnings.map((warning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{warning}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Stay informed and stay safe in the digital world
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailModal;