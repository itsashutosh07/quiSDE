import React, { useEffect, useState, useMemo } from "react";
import type { Subject, Category } from "../types/subject";
import { fetchSubjects } from "../services/subjectService";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RecentSubjects from "../components/RecentSubjects";
import Filters from "../components/Filters";
import SubjectGrid from "../components/SubjectGrid";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

const Home: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [mode, setMode] = useState<"quiz" | "flashcard">("quiz");
  const [fabOpen, setFabOpen] = useState(false);

  useEffect(() => {
    // Fetch subjects from backend
    fetchSubjects()
      .then((subjectsData) => {
        setSubjects(subjectsData);

        // Extract unique categories from subjects
        const uniqueCategories = new Set<string>();
        subjectsData.forEach((subject) => {
          if (subject.categories) {
            subject.categories.forEach((category) =>
              uniqueCategories.add(category)
            );
          }
        });

        // Convert to Category objects
        const categoryObjects = Array.from(uniqueCategories).map(
          (categorySlug) => ({
            id: categorySlug,
            name:
              categorySlug.charAt(0).toUpperCase() +
              categorySlug.slice(1).replace(/-/g, " "),
          })
        );

        setCategories(categoryObjects);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter subjects based on active filter
  const filteredSubjects = useMemo(() => {
    if (activeFilter === "all") {
      return subjects;
    }
    return subjects.filter(
      (subject) =>
        subject.categories && subject.categories.includes(activeFilter)
    );
  }, [subjects, activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleFabToggle = () => {
    setFabOpen(!fabOpen);
    // Add any quick actions here
    console.log("FAB toggled:", !fabOpen);
  };

  return (
    <>
      <Header />
      <Hero onModeChange={setMode} />
      <RecentSubjects />
      <Filters
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      {loading && (
        <div className="loading-container">
          <div
            className="loading-skeleton"
            style={{ height: "200px", margin: "2rem 4rem" }}
          ></div>
          <div
            className="loading-skeleton"
            style={{ height: "200px", margin: "2rem 4rem" }}
          ></div>
          <div
            className="loading-skeleton"
            style={{ height: "200px", margin: "2rem 4rem" }}
          ></div>
        </div>
      )}
      {error && (
        <div
          className="error-container"
          style={{ textAlign: "center", padding: "2rem" }}
        >
          <p
            className="gradient-text"
            style={{ color: "red", fontSize: "1.1rem" }}
          >
            {error}
          </p>
        </div>
      )}
      {!loading && !error && (
        <SubjectGrid subjects={filteredSubjects} mode={mode} />
      )}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton onToggle={handleFabToggle} isOpen={fabOpen} />
    </>
  );
};

export default Home;
