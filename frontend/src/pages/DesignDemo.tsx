import React, { useState } from "react";
import Header from "../components/Header";
import ModernCard from "../components/ModernCard";
import FloatingActionButton from "../components/FloatingActionButton";
import ShinyText from "../components/ShinyText";

const DesignDemo: React.FC = () => {
  const [fabOpen, setFabOpen] = useState(false);

  const handleFabToggle = () => {
    setFabOpen(!fabOpen);
  };

  return (
    <>
      <Header />

      <div className="demo-container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="text-gradient">ReactBits-Inspired Design</h1>
            <p>
              Showcasing modern UI components with glassmorphism effects, smooth
              animations, and enhanced user experience.
            </p>
          </div>
        </section>

        <section className="demo-section">
          <h2 className="gradient-text">Modern Cards</h2>
          <div className="modern-card-grid">
            <ModernCard variant="default" size="md" animated>
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Default Card</h3>
              <p>
                A clean, modern card with glassmorphism effects and smooth hover
                animations.
              </p>
              <div className="card-actions">
                <button className="card-btn card-btn-primary">Action</button>
                <button className="card-btn card-btn-secondary">More</button>
              </div>
            </ModernCard>

            <ModernCard variant="gradient" size="md" animated>
              <div className="card-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h3>Gradient Card</h3>
              <p>
                Beautiful gradient borders and backgrounds with enhanced visual
                appeal.
              </p>
              <div className="card-actions">
                <button className="card-btn card-btn-primary">Explore</button>
                <button className="card-btn card-btn-secondary">Details</button>
              </div>
            </ModernCard>

            <ModernCard variant="glass" size="md" animated>
              <div className="card-icon">
                <i className="fas fa-cube"></i>
              </div>
              <h3>Glass Card</h3>
              <p>
                Premium glassmorphism effect with backdrop blur and subtle
                transparency.
              </p>
              <div className="card-actions">
                <button className="card-btn card-btn-primary">View</button>
                <button className="card-btn card-btn-secondary">Share</button>
              </div>
            </ModernCard>
          </div>
        </section>

        <section className="demo-section">
          <h2 className="gradient-text">Interactive Elements</h2>
          <div className="interactive-demo">
            <div className="demo-button-group">
              <button className="btn btn-primary btn-loading">
                Loading Button
              </button>
              <button className="btn btn-secondary">Secondary Action</button>
              <button className="btn btn-primary">
                <i className="fas fa-star"></i>
                With Icon
              </button>
            </div>

            <div className="demo-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Design</button>
              <button className="filter-btn">Development</button>
              <button className="filter-btn">Animation</button>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2 className="gradient-text">Enhanced Typography</h2>
          <div className="typography-demo">
            <h1 className="text-gradient">Gradient Text</h1>
            <h2 className="gradient-text">Secondary Gradient</h2>
            <h3 className="text-glow">Glowing Text</h3>
            <p className="fade-in">
              This paragraph demonstrates the fade-in animation effect.
            </p>
            <p className="slide-up">
              This paragraph demonstrates the slide-up animation effect.
            </p>
            <p>
              <ShinyText
                text="This text demonstrates the shiny shimmer effect with π duration!"
                speed={3.14159}
              />
            </p>
          </div>
        </section>

        <section className="demo-section">
          <h2 className="gradient-text">Loading States</h2>
          <div className="loading-demo">
            <div
              className="loading-skeleton"
              style={{ height: "60px", marginBottom: "1rem" }}
            ></div>
            <div
              className="loading-skeleton"
              style={{ height: "120px", marginBottom: "1rem" }}
            ></div>
            <div className="loading-skeleton" style={{ height: "80px" }}></div>
          </div>
        </section>
      </div>

      <FloatingActionButton onToggle={handleFabToggle} isOpen={fabOpen} />
    </>
  );
};

export default DesignDemo;
