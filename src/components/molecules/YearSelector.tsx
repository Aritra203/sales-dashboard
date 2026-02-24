"use client";

import React from "react";
import { Button } from "@/components/atoms";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function YearSelector({ years, selectedYear, onYearChange }: YearSelectorProps) {
  return (
    <div className="flex gap-2">
      {years.map((year) => (
        <Button
          key={year}
          variant={selectedYear === year ? "primary" : "ghost"}
          size="sm"
          active={selectedYear === year}
          onClick={() => onYearChange(year)}
        >
          {year}
        </Button>
      ))}
    </div>
  );
}
