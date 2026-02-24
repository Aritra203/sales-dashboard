"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ComparisonBarChartProps {
  data2022: { month: string; revenue: number }[];
  data2023: { month: string; revenue: number }[];
  data2024: { month: string; revenue: number }[];
}

export default function ComparisonBarChart({
  data2022,
  data2023,
  data2024,
}: ComparisonBarChartProps) {
  const mergedData = data2022.map((item, index) => ({
    month: item.month,
    "2022": item.revenue,
    "2023": data2023[index]?.revenue || 0,
    "2024": data2024[index]?.revenue || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={mergedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
        <Tooltip
          formatter={(value) => [`$${Number(value).toLocaleString()}`, undefined]}
          contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }}
        />
        <Legend />
        <Bar dataKey="2022" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="2023" fill="#60a5fa" radius={[4, 4, 0, 0]} />
        <Bar dataKey="2024" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
