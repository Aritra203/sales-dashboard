import React from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

const levelClasses: Record<number, string> = {
  1: "text-3xl font-bold text-gray-900",
  2: "text-2xl font-semibold text-gray-800",
  3: "text-xl font-semibold text-gray-800",
  4: "text-lg font-medium text-gray-700",
};

export default function Heading({ level = 2, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";

  return <Tag className={`${levelClasses[level]} ${className}`}>{children}</Tag>;
}
