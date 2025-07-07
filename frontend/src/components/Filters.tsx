import React from "react";
import type { Category } from "../types/subject";

interface FiltersProps {
  categories: Category[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ categories, activeFilter, onFilterChange }) => {
  const allCategories = [{ id: "all", name: "All" }, ...categories];

  return (
    <section className="filters">
      <div className="filter-buttons">
        {allCategories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
            onClick={() => onFilterChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Filters;
