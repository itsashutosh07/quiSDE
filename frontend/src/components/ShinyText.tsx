import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3.14159, // Mathematical constant π
  className = "",
}) => {
  return (
    <span
      className={`shiny-text ${
        disabled ? "shiny-text-disabled" : ""
      } ${className}`}
      style={
        {
          "--shimmer-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      {text}
    </span>
  );
};

export default ShinyText;
