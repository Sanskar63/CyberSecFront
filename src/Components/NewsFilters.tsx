"use client";
import { useState } from "react";
import { Search, Calendar, Filter, X } from "lucide-react";
import { FilterState } from "@/app/news/page";

interface NewsFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const NewsFilters = ({ filters, onFilterChange }: NewsFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "phishing", label: "Phishing" },
    { value: "data breach", label: "Data Breach" },
    { value: "ransomware", label: "Ransomware" },
    { value: "social media", label: "Social Media" },
    { value: "banking security", label: "Banking Security" },
    { value: "fraud", label: "Fraud" },
    { value: "mobile security", label: "Mobile Security" },
    { value: "ai security", label: "AI Security" },
    { value: "iot security", label: "IoT Security" },
  ];

  const dateRanges = [
    { value: "all", label: "All Time" },
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
    { value: "quarter", label: "Last 3 Months" },
  ];

  const handleSearchChange = (query: string) => {
    onFilterChange({ ...filters, searchQuery: query });
  };

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category });
  };

  const handleDateRangeChange = (dateRange: string) => {
    onFilterChange({ ...filters, dateRange });
  };

  const clearFilters = () => {
    onFilterChange({ category: "all", dateRange: "all", searchQuery: "" });
  };

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.dateRange !== "all" ||
    filters.searchQuery !== "";

  return (
    <div className="w-full lg:w-auto">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors"
        >
          <Filter className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full">
              Active
            </span>
          )}
        </button>
      </div>

      {/* Filters Container */}
      <div
        className={`${isFilterOpen || "lg:block"} ${isFilterOpen ? "block" : "hidden"} space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-4`}
      >
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search articles..."
            value={filters.searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 bg-[#111b2e] border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none w-full lg:w-64 text-gray-200 placeholder-gray-500"
          />
        </div>

        {/* Category Filter */}
        <div className="relative">
          <select
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="appearance-none bg-[#111b2e] border border-gray-700 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none cursor-pointer text-gray-200"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>

        {/* Date Range Filter */}
        <div className="relative">
          <select
            value={filters.dateRange}
            onChange={(e) => handleDateRangeChange(e.target.value)}
            className="appearance-none bg-[#111b2e] border border-gray-700 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none cursor-pointer text-gray-200"
          >
            {dateRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsFilters;