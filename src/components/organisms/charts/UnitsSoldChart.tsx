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

interface UnitsSoldChartProps {
  data: { month: string; unitsSold: number }[];
  color?: string;
}

export default function UnitsSoldChart({ data, color = "#10b981" }: UnitsSoldChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip
          formatter={(value) => [Number(value).toLocaleString(), "Units Sold"]}
          contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }}
        />
        <Legend />
        <Bar dataKey="unitsSold" fill={color} radius={[4, 4, 0, 0]} name="Units Sold" />
      </BarChart>
    </ResponsiveContainer>
  );
}
