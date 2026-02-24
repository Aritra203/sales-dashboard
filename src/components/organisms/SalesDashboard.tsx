"use client";

import React, { useState, useCallback } from "react";
import { Card, Heading } from "@/components/atoms";
import { ChartTypeSwitcher, YearSelector, ThresholdFilter, StatCard } from "@/components/molecules";
import {
  RevenueBarChart,
  RevenueLineChart,
  CategoryPieChart,
  ComparisonBarChart,
  UnitsSoldChart,
} from "@/components/organisms/charts";
import FilteredDataTable from "@/components/organisms/FilteredDataTable";
import { ChartType, YearlySalesData } from "@/types/sales";
import {
  allSalesData,
  getMonthlyRevenue,
  getCategoryRevenue,
  getMonthlyUnitsSold,
} from "@/data/mockSalesData";

export default function SalesDashboard() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number>(0);
  const [apiData, setApiData] = useState<YearlySalesData[] | null>(null);
  const [useApi, setUseApi] = useState(false);
  const [loading, setLoading] = useState(false);

  const salesDataSource = apiData || allSalesData;
  const years = salesDataSource.map((d) => d.year);
  const currentYearData = salesDataSource.find((d) => d.year === selectedYear) || salesDataSource[0];

  const monthlyRevenue = getMonthlyRevenue(currentYearData);
  const categoryRevenue = getCategoryRevenue(currentYearData);
  const monthlyUnits = getMonthlyUnitsSold(currentYearData);

  const allYearsMonthly = salesDataSource.map((yd) => ({
    year: yd.year,
    data: getMonthlyRevenue(yd),
  }));

  const fetchApiData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/sales");
      if (res.ok) {
        const data = await res.json();
        setApiData(data);
        setUseApi(true);
      }
    } catch (err) {
      console.error("Failed to fetch API data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleDataSource = () => {
    if (useApi) {
      setApiData(null);
      setUseApi(false);
    } else {
      fetchApiData();
    }
  };

  const formatCurrency = (value: number) => {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
    return `$${value}`;
  };

  const prevYearData = salesDataSource.find((d) => d.year === selectedYear - 1);
  const yoyGrowth = prevYearData
    ? (((currentYearData.totalRevenue - prevYearData.totalRevenue) / prevYearData.totalRevenue) * 100).toFixed(1)
    : null;

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return <RevenueBarChart data={monthlyRevenue} />;
      case "line":
        return <RevenueLineChart data={monthlyRevenue} />;
      case "pie":
        return <CategoryPieChart data={categoryRevenue} />;
      default:
        return <RevenueBarChart data={monthlyRevenue} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Heading level={1}>Sales Dashboard</Heading>
          <p className="mt-1 text-sm text-gray-500">
            Retail sales overview across 2022–2024
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDataSource}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
              useApi
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : useApi ? "✓ Using API" : "Use API Data"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <YearSelector years={years} selectedYear={selectedYear} onYearChange={setSelectedYear} />
        <ChartTypeSwitcher activeType={chartType} onTypeChange={setChartType} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={formatCurrency(currentYearData.totalRevenue)}
          badge={yoyGrowth ? `${Number(yoyGrowth) > 0 ? "+" : ""}${yoyGrowth}% YoY` : "Baseline"}
          badgeColor={yoyGrowth && Number(yoyGrowth) > 0 ? "green" : yoyGrowth ? "red" : "gray"}
        />
        <StatCard
          title="Total Units Sold"
          value={currentYearData.totalUnitsSold.toLocaleString()}
          badge={`${selectedYear}`}
          badgeColor="blue"
        />
        <StatCard
          title="Avg Monthly Revenue"
          value={formatCurrency(Math.round(currentYearData.totalRevenue / 12))}
          badge="Per Month"
          badgeColor="yellow"
        />
        <StatCard
          title="Top Category"
          value={
            categoryRevenue.sort((a, b) => b.revenue - a.revenue)[0]?.category || "N/A"
          }
          badge={formatCurrency(categoryRevenue.sort((a, b) => b.revenue - a.revenue)[0]?.revenue || 0)}
          badgeColor="green"
        />
      </div>

      <Card>
        <div className="mb-4">
          <Heading level={3}>
            {chartType === "pie"
              ? `Revenue by Category — ${selectedYear}`
              : `Monthly Revenue — ${selectedYear}`}
          </Heading>
        </div>
        {renderChart()}
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <Heading level={3} className="mb-4">
            Monthly Units Sold — {selectedYear}
          </Heading>
          <UnitsSoldChart data={monthlyUnits} />
        </Card>

        <Card>
          <Heading level={3} className="mb-4">
            Revenue Comparison (All Years)
          </Heading>
          <ComparisonBarChart
            data2022={allYearsMonthly.find((d) => d.year === 2022)?.data || []}
            data2023={allYearsMonthly.find((d) => d.year === 2023)?.data || []}
            data2024={allYearsMonthly.find((d) => d.year === 2024)?.data || []}
          />
        </Card>
      </div>

      <Card>
        <Heading level={3} className="mb-4">
          Custom Revenue Filter
        </Heading>
        <ThresholdFilter value={threshold} onChange={setThreshold} />
      </Card>

      {threshold > 0 && (
        <FilteredDataTable data={currentYearData.data} threshold={threshold} />
      )}
    </div>
  );
}
