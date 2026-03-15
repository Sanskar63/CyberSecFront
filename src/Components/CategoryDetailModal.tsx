"use client";
import {
  X,
  Shield,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { Category } from "@/app/information/page";

interface CategoryDetailModalProps {
  category: Category;
  isOpen: boolean;
  onClose: () => void;
}

const CategoryDetailModal = ({
  category,
  isOpen,
  onClose,
}: CategoryDetailModalProps) => {
  if (!isOpen) return null;

  const IconComponent = category.icon;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#111b2e] border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#111b2e] border-b border-gray-700 p-6 rounded-t-2xl z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {category.title}
                </h2>
                <p className="text-gray-400">{category.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Overview */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Overview</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {category.detailContent.overview}
            </p>
          </section>

          {/* Key Threats */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h3 className="text-xl font-semibold text-white">Key Threats</h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.keyThreat.map((threat, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{threat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-semibold text-white">
                Best Practices
              </h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{practice}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <h3 className="text-xl font-semibold text-white">
                Helpful Tips
              </h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Warnings */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <h3 className="text-xl font-semibold text-white">
                Important Warnings
              </h3>
            </div>
            <ul className="space-y-2">
              {category.detailContent.warnings.map((warning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{warning}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-6 bg-[#0d1526] rounded-b-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Stay informed and stay safe in the digital world
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
              <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition-all">
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