"use client";

import React from "react";
import { SalesRecord } from "@/types/sales";
import { Card } from "@/components/atoms";

interface FilteredDataTableProps {
  data: SalesRecord[];
  threshold: number;
}

export default function FilteredDataTable({ data, threshold }: FilteredDataTableProps) {
  if (threshold === 0) return null;

  const filtered = data.filter((r) => r.revenue >= threshold);

  if (filtered.length === 0) {
    return (
      <Card>
        <p className="text-sm text-gray-500 text-center py-4">
          No records above ${threshold.toLocaleString()} threshold.
        </p>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden !p-0">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700">
          Records Above ${threshold.toLocaleString()} — {filtered.length} records
        </h3>
      </div>
      <div className="overflow-x-auto max-h-64">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-500">Month</th>
              <th className="px-6 py-3 text-left font-medium text-gray-500">Category</th>
              <th className="px-6 py-3 text-right font-medium text-gray-500">Revenue</th>
              <th className="px-6 py-3 text-right font-medium text-gray-500">Units Sold</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((record, index) => (
              <tr key={`${record.month}-${record.category}-${index}`} className="hover:bg-gray-50">
                <td className="px-6 py-2 text-gray-900">{record.month}</td>
                <td className="px-6 py-2 text-gray-700">{record.category}</td>
                <td className="px-6 py-2 text-right font-medium text-gray-900">
                  ${record.revenue.toLocaleString()}
                </td>
                <td className="px-6 py-2 text-right text-gray-700">
                  {record.unitsSold.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
