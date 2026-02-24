"use client";

import React, { useState } from "react";
import { Input } from "@/components/atoms";

interface ThresholdFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export default function ThresholdFilter({ value, onChange }: ThresholdFilterProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
    }
    if (val === "") {
      onChange(0);
    }
  };

  return (
    <div className="flex items-end gap-3">
      <Input
        label="Revenue Threshold ($)"
        type="number"
        min={0}
        step={1000}
        value={inputValue}
        onChange={handleChange}
        placeholder="30000"
        className="w-48"
      />
      <p className="pb-2 text-xs text-gray-500">
        Showing records with revenue ≥ ${value.toLocaleString()}
      </p>
    </div>
  );
}
