"use client";

import React from "react";
import { Button } from "@/components/atoms";
import { ChartType } from "@/types/sales";

interface ChartTypeSwitcherProps {
  activeType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

const chartTypes: { type: ChartType; label: string }[] = [
  { type: "bar", label: "Bar Chart" },
  { type: "line", label: "Line Chart" },
  { type: "pie", label: "Pie Chart" },
];

export default function ChartTypeSwitcher({ activeType, onTypeChange }: ChartTypeSwitcherProps) {
  return (
    <div className="flex gap-2">
      {chartTypes.map(({ type, label }) => (
        <Button
          key={type}
          variant={activeType === type ? "primary" : "secondary"}
          size="sm"
          active={activeType === type}
          onClick={() => onTypeChange(type)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
