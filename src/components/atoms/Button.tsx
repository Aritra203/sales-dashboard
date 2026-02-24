"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  active?: boolean;
}

const variantClasses: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
};

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  active = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const activeClass = active ? "ring-2 ring-blue-500 ring-offset-1" : "";

  return (
    <button
      className={`rounded-lg font-medium transition-colors duration-200 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${activeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
