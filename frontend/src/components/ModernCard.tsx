import React, { ReactNode } from "react";

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "gradient" | "glass";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "md",
  animated = true,
}) => {
  const baseClasses = "modern-card";
  const variantClasses = {
    default: "modern-card-default",
    gradient: "modern-card-gradient",
    glass: "modern-card-glass",
  };
  const sizeClasses = {
    sm: "modern-card-sm",
    md: "modern-card-md",
    lg: "modern-card-lg",
  };
  const animationClass = animated ? "modern-card-animated" : "";

  const cardClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    animationClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="modern-card-content">{children}</div>
      <div className="modern-card-glow"></div>
    </div>
  );
};

export default ModernCard;
