/**
 * Mock sales data inspired by Kaggle retail sales datasets.
 * Contains monthly sales records for 2022, 2023, and 2024
 * across categories: Electronics, Clothing, Groceries, Furniture, Sports.
 */

import { SalesRecord, YearlySalesData } from "@/types/sales";

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const categories = ["Electronics", "Clothing", "Groceries", "Furniture", "Sports"];

// Helper to generate realistic-looking random sales data
function generateYearData(year: number, baseFactor: number): SalesRecord[] {
  const records: SalesRecord[] = [];

  months.forEach((month, index) => {
    categories.forEach((category) => {
      // Seasonal patterns: higher in Q4 (holiday season), lower in Q1
      const seasonalMultiplier =
        index >= 9 ? 1.4 : index >= 6 ? 1.1 : index >= 3 ? 1.0 : 0.85;

      // Category-specific base revenue
      const categoryBase: Record<string, number> = {
        Electronics: 45000,
        Clothing: 28000,
        Groceries: 35000,
        Furniture: 22000,
        Sports: 18000,
      };

      const base = categoryBase[category] * baseFactor;
      const randomVariance = 0.7 + Math.random() * 0.6; // 0.7 to 1.3
      const revenue = Math.round(base * seasonalMultiplier * randomVariance);
      const avgPrice =
        category === "Electronics" ? 350 :
        category === "Furniture" ? 280 :
        category === "Sports" ? 120 :
        category === "Clothing" ? 65 :
        25; // Groceries
      const unitsSold = Math.round(revenue / avgPrice);

      records.push({ month, revenue, unitsSold, category });
    });
  });

  return records;
}

// Seed-like approach: use fixed data so SSR/CSR match
const salesData2022: SalesRecord[] = [
  // January
  { month: "Jan", revenue: 32400, unitsSold: 93, category: "Electronics" },
  { month: "Jan", revenue: 19800, unitsSold: 305, category: "Clothing" },
  { month: "Jan", revenue: 25100, unitsSold: 1004, category: "Groceries" },
  { month: "Jan", revenue: 15200, unitsSold: 54, category: "Furniture" },
  { month: "Jan", revenue: 13100, unitsSold: 109, category: "Sports" },
  // February
  { month: "Feb", revenue: 34800, unitsSold: 99, category: "Electronics" },
  { month: "Feb", revenue: 21500, unitsSold: 331, category: "Clothing" },
  { month: "Feb", revenue: 27300, unitsSold: 1092, category: "Groceries" },
  { month: "Feb", revenue: 16800, unitsSold: 60, category: "Furniture" },
  { month: "Feb", revenue: 14200, unitsSold: 118, category: "Sports" },
  // March
  { month: "Mar", revenue: 36200, unitsSold: 103, category: "Electronics" },
  { month: "Mar", revenue: 23100, unitsSold: 355, category: "Clothing" },
  { month: "Mar", revenue: 28900, unitsSold: 1156, category: "Groceries" },
  { month: "Mar", revenue: 17500, unitsSold: 63, category: "Furniture" },
  { month: "Mar", revenue: 15600, unitsSold: 130, category: "Sports" },
  // April
  { month: "Apr", revenue: 42500, unitsSold: 121, category: "Electronics" },
  { month: "Apr", revenue: 26800, unitsSold: 412, category: "Clothing" },
  { month: "Apr", revenue: 33200, unitsSold: 1328, category: "Groceries" },
  { month: "Apr", revenue: 20100, unitsSold: 72, category: "Furniture" },
  { month: "Apr", revenue: 17800, unitsSold: 148, category: "Sports" },
  // May
  { month: "May", revenue: 44100, unitsSold: 126, category: "Electronics" },
  { month: "May", revenue: 28500, unitsSold: 438, category: "Clothing" },
  { month: "May", revenue: 34800, unitsSold: 1392, category: "Groceries" },
  { month: "May", revenue: 21300, unitsSold: 76, category: "Furniture" },
  { month: "May", revenue: 18900, unitsSold: 158, category: "Sports" },
  // June
  { month: "Jun", revenue: 43200, unitsSold: 123, category: "Electronics" },
  { month: "Jun", revenue: 27600, unitsSold: 425, category: "Clothing" },
  { month: "Jun", revenue: 34100, unitsSold: 1364, category: "Groceries" },
  { month: "Jun", revenue: 20800, unitsSold: 74, category: "Furniture" },
  { month: "Jun", revenue: 19200, unitsSold: 160, category: "Sports" },
  // July
  { month: "Jul", revenue: 47800, unitsSold: 137, category: "Electronics" },
  { month: "Jul", revenue: 30200, unitsSold: 465, category: "Clothing" },
  { month: "Jul", revenue: 37500, unitsSold: 1500, category: "Groceries" },
  { month: "Jul", revenue: 23100, unitsSold: 83, category: "Furniture" },
  { month: "Jul", revenue: 20500, unitsSold: 171, category: "Sports" },
  // August
  { month: "Aug", revenue: 49200, unitsSold: 141, category: "Electronics" },
  { month: "Aug", revenue: 31800, unitsSold: 489, category: "Clothing" },
  { month: "Aug", revenue: 38200, unitsSold: 1528, category: "Groceries" },
  { month: "Aug", revenue: 24500, unitsSold: 88, category: "Furniture" },
  { month: "Aug", revenue: 21100, unitsSold: 176, category: "Sports" },
  // September
  { month: "Sep", revenue: 48500, unitsSold: 139, category: "Electronics" },
  { month: "Sep", revenue: 30900, unitsSold: 475, category: "Clothing" },
  { month: "Sep", revenue: 37800, unitsSold: 1512, category: "Groceries" },
  { month: "Sep", revenue: 23800, unitsSold: 85, category: "Furniture" },
  { month: "Sep", revenue: 20800, unitsSold: 173, category: "Sports" },
  // October
  { month: "Oct", revenue: 58900, unitsSold: 168, category: "Electronics" },
  { month: "Oct", revenue: 37200, unitsSold: 572, category: "Clothing" },
  { month: "Oct", revenue: 45600, unitsSold: 1824, category: "Groceries" },
  { month: "Oct", revenue: 28900, unitsSold: 103, category: "Furniture" },
  { month: "Oct", revenue: 25100, unitsSold: 209, category: "Sports" },
  // November
  { month: "Nov", revenue: 62500, unitsSold: 179, category: "Electronics" },
  { month: "Nov", revenue: 39800, unitsSold: 612, category: "Clothing" },
  { month: "Nov", revenue: 48200, unitsSold: 1928, category: "Groceries" },
  { month: "Nov", revenue: 30500, unitsSold: 109, category: "Furniture" },
  { month: "Nov", revenue: 26800, unitsSold: 223, category: "Sports" },
  // December
  { month: "Dec", revenue: 65800, unitsSold: 188, category: "Electronics" },
  { month: "Dec", revenue: 42100, unitsSold: 648, category: "Clothing" },
  { month: "Dec", revenue: 50500, unitsSold: 2020, category: "Groceries" },
  { month: "Dec", revenue: 32200, unitsSold: 115, category: "Furniture" },
  { month: "Dec", revenue: 28500, unitsSold: 238, category: "Sports" },
];

const salesData2023: SalesRecord[] = [
  // January
  { month: "Jan", revenue: 38200, unitsSold: 109, category: "Electronics" },
  { month: "Jan", revenue: 22500, unitsSold: 346, category: "Clothing" },
  { month: "Jan", revenue: 29800, unitsSold: 1192, category: "Groceries" },
  { month: "Jan", revenue: 17800, unitsSold: 64, category: "Furniture" },
  { month: "Jan", revenue: 15500, unitsSold: 129, category: "Sports" },
  // February
  { month: "Feb", revenue: 40100, unitsSold: 115, category: "Electronics" },
  { month: "Feb", revenue: 24200, unitsSold: 372, category: "Clothing" },
  { month: "Feb", revenue: 31500, unitsSold: 1260, category: "Groceries" },
  { month: "Feb", revenue: 19200, unitsSold: 69, category: "Furniture" },
  { month: "Feb", revenue: 16800, unitsSold: 140, category: "Sports" },
  // March
  { month: "Mar", revenue: 41800, unitsSold: 119, category: "Electronics" },
  { month: "Mar", revenue: 25800, unitsSold: 397, category: "Clothing" },
  { month: "Mar", revenue: 33200, unitsSold: 1328, category: "Groceries" },
  { month: "Mar", revenue: 20500, unitsSold: 73, category: "Furniture" },
  { month: "Mar", revenue: 18100, unitsSold: 151, category: "Sports" },
  // April
  { month: "Apr", revenue: 48500, unitsSold: 139, category: "Electronics" },
  { month: "Apr", revenue: 30200, unitsSold: 465, category: "Clothing" },
  { month: "Apr", revenue: 38100, unitsSold: 1524, category: "Groceries" },
  { month: "Apr", revenue: 23500, unitsSold: 84, category: "Furniture" },
  { month: "Apr", revenue: 20800, unitsSold: 173, category: "Sports" },
  // May
  { month: "May", revenue: 50200, unitsSold: 143, category: "Electronics" },
  { month: "May", revenue: 32500, unitsSold: 500, category: "Clothing" },
  { month: "May", revenue: 39800, unitsSold: 1592, category: "Groceries" },
  { month: "May", revenue: 24800, unitsSold: 89, category: "Furniture" },
  { month: "May", revenue: 22100, unitsSold: 184, category: "Sports" },
  // June
  { month: "Jun", revenue: 49800, unitsSold: 142, category: "Electronics" },
  { month: "Jun", revenue: 31200, unitsSold: 480, category: "Clothing" },
  { month: "Jun", revenue: 39200, unitsSold: 1568, category: "Groceries" },
  { month: "Jun", revenue: 24100, unitsSold: 86, category: "Furniture" },
  { month: "Jun", revenue: 21500, unitsSold: 179, category: "Sports" },
  // July
  { month: "Jul", revenue: 54500, unitsSold: 156, category: "Electronics" },
  { month: "Jul", revenue: 34800, unitsSold: 535, category: "Clothing" },
  { month: "Jul", revenue: 43200, unitsSold: 1728, category: "Groceries" },
  { month: "Jul", revenue: 26800, unitsSold: 96, category: "Furniture" },
  { month: "Jul", revenue: 23800, unitsSold: 198, category: "Sports" },
  // August
  { month: "Aug", revenue: 56200, unitsSold: 161, category: "Electronics" },
  { month: "Aug", revenue: 36500, unitsSold: 562, category: "Clothing" },
  { month: "Aug", revenue: 44800, unitsSold: 1792, category: "Groceries" },
  { month: "Aug", revenue: 28200, unitsSold: 101, category: "Furniture" },
  { month: "Aug", revenue: 24500, unitsSold: 204, category: "Sports" },
  // September
  { month: "Sep", revenue: 55800, unitsSold: 159, category: "Electronics" },
  { month: "Sep", revenue: 35500, unitsSold: 546, category: "Clothing" },
  { month: "Sep", revenue: 43800, unitsSold: 1752, category: "Groceries" },
  { month: "Sep", revenue: 27500, unitsSold: 98, category: "Furniture" },
  { month: "Sep", revenue: 24100, unitsSold: 201, category: "Sports" },
  // October
  { month: "Oct", revenue: 67200, unitsSold: 192, category: "Electronics" },
  { month: "Oct", revenue: 42800, unitsSold: 658, category: "Clothing" },
  { month: "Oct", revenue: 52500, unitsSold: 2100, category: "Groceries" },
  { month: "Oct", revenue: 33200, unitsSold: 119, category: "Furniture" },
  { month: "Oct", revenue: 29100, unitsSold: 243, category: "Sports" },
  // November
  { month: "Nov", revenue: 71500, unitsSold: 204, category: "Electronics" },
  { month: "Nov", revenue: 45800, unitsSold: 705, category: "Clothing" },
  { month: "Nov", revenue: 55200, unitsSold: 2208, category: "Groceries" },
  { month: "Nov", revenue: 35100, unitsSold: 125, category: "Furniture" },
  { month: "Nov", revenue: 31200, unitsSold: 260, category: "Sports" },
  // December
  { month: "Dec", revenue: 75800, unitsSold: 217, category: "Electronics" },
  { month: "Dec", revenue: 48500, unitsSold: 746, category: "Clothing" },
  { month: "Dec", revenue: 58200, unitsSold: 2328, category: "Groceries" },
  { month: "Dec", revenue: 37500, unitsSold: 134, category: "Furniture" },
  { month: "Dec", revenue: 33200, unitsSold: 277, category: "Sports" },
];

const salesData2024: SalesRecord[] = [
  // January
  { month: "Jan", revenue: 42500, unitsSold: 121, category: "Electronics" },
  { month: "Jan", revenue: 25800, unitsSold: 397, category: "Clothing" },
  { month: "Jan", revenue: 33500, unitsSold: 1340, category: "Groceries" },
  { month: "Jan", revenue: 20200, unitsSold: 72, category: "Furniture" },
  { month: "Jan", revenue: 17800, unitsSold: 148, category: "Sports" },
  // February
  { month: "Feb", revenue: 44800, unitsSold: 128, category: "Electronics" },
  { month: "Feb", revenue: 27500, unitsSold: 423, category: "Clothing" },
  { month: "Feb", revenue: 35200, unitsSold: 1408, category: "Groceries" },
  { month: "Feb", revenue: 21800, unitsSold: 78, category: "Furniture" },
  { month: "Feb", revenue: 19200, unitsSold: 160, category: "Sports" },
  // March
  { month: "Mar", revenue: 46500, unitsSold: 133, category: "Electronics" },
  { month: "Mar", revenue: 29200, unitsSold: 449, category: "Clothing" },
  { month: "Mar", revenue: 37100, unitsSold: 1484, category: "Groceries" },
  { month: "Mar", revenue: 23100, unitsSold: 83, category: "Furniture" },
  { month: "Mar", revenue: 20500, unitsSold: 171, category: "Sports" },
  // April
  { month: "Apr", revenue: 53800, unitsSold: 154, category: "Electronics" },
  { month: "Apr", revenue: 34200, unitsSold: 526, category: "Clothing" },
  { month: "Apr", revenue: 42500, unitsSold: 1700, category: "Groceries" },
  { month: "Apr", revenue: 26800, unitsSold: 96, category: "Furniture" },
  { month: "Apr", revenue: 23500, unitsSold: 196, category: "Sports" },
  // May
  { month: "May", revenue: 55200, unitsSold: 158, category: "Electronics" },
  { month: "May", revenue: 36800, unitsSold: 566, category: "Clothing" },
  { month: "May", revenue: 44200, unitsSold: 1768, category: "Groceries" },
  { month: "May", revenue: 28200, unitsSold: 101, category: "Furniture" },
  { month: "May", revenue: 25100, unitsSold: 209, category: "Sports" },
  // June
  { month: "Jun", revenue: 54500, unitsSold: 156, category: "Electronics" },
  { month: "Jun", revenue: 35500, unitsSold: 546, category: "Clothing" },
  { month: "Jun", revenue: 43800, unitsSold: 1752, category: "Groceries" },
  { month: "Jun", revenue: 27500, unitsSold: 98, category: "Furniture" },
  { month: "Jun", revenue: 24800, unitsSold: 207, category: "Sports" },
  // July
  { month: "Jul", revenue: 59800, unitsSold: 171, category: "Electronics" },
  { month: "Jul", revenue: 39500, unitsSold: 608, category: "Clothing" },
  { month: "Jul", revenue: 48200, unitsSold: 1928, category: "Groceries" },
  { month: "Jul", revenue: 30500, unitsSold: 109, category: "Furniture" },
  { month: "Jul", revenue: 27200, unitsSold: 227, category: "Sports" },
  // August
  { month: "Aug", revenue: 61500, unitsSold: 176, category: "Electronics" },
  { month: "Aug", revenue: 41200, unitsSold: 634, category: "Clothing" },
  { month: "Aug", revenue: 49800, unitsSold: 1992, category: "Groceries" },
  { month: "Aug", revenue: 32100, unitsSold: 115, category: "Furniture" },
  { month: "Aug", revenue: 28500, unitsSold: 238, category: "Sports" },
  // September
  { month: "Sep", revenue: 60800, unitsSold: 174, category: "Electronics" },
  { month: "Sep", revenue: 40500, unitsSold: 623, category: "Clothing" },
  { month: "Sep", revenue: 49200, unitsSold: 1968, category: "Groceries" },
  { month: "Sep", revenue: 31200, unitsSold: 111, category: "Furniture" },
  { month: "Sep", revenue: 27800, unitsSold: 232, category: "Sports" },
  // October
  { month: "Oct", revenue: 73500, unitsSold: 210, category: "Electronics" },
  { month: "Oct", revenue: 48800, unitsSold: 751, category: "Clothing" },
  { month: "Oct", revenue: 59200, unitsSold: 2368, category: "Groceries" },
  { month: "Oct", revenue: 37800, unitsSold: 135, category: "Furniture" },
  { month: "Oct", revenue: 33500, unitsSold: 279, category: "Sports" },
  // November
  { month: "Nov", revenue: 78200, unitsSold: 223, category: "Electronics" },
  { month: "Nov", revenue: 52500, unitsSold: 808, category: "Clothing" },
  { month: "Nov", revenue: 62800, unitsSold: 2512, category: "Groceries" },
  { month: "Nov", revenue: 40200, unitsSold: 144, category: "Furniture" },
  { month: "Nov", revenue: 35800, unitsSold: 298, category: "Sports" },
  // December
  { month: "Dec", revenue: 82500, unitsSold: 236, category: "Electronics" },
  { month: "Dec", revenue: 55200, unitsSold: 849, category: "Clothing" },
  { month: "Dec", revenue: 65800, unitsSold: 2632, category: "Groceries" },
  { month: "Dec", revenue: 42500, unitsSold: 152, category: "Furniture" },
  { month: "Dec", revenue: 37800, unitsSold: 315, category: "Sports" },
];

function buildYearlyData(year: number, data: SalesRecord[]): YearlySalesData {
  return {
    year,
    data,
    totalRevenue: data.reduce((sum, r) => sum + r.revenue, 0),
    totalUnitsSold: data.reduce((sum, r) => sum + r.unitsSold, 0),
  };
}

export const allSalesData: YearlySalesData[] = [
  buildYearlyData(2022, salesData2022),
  buildYearlyData(2023, salesData2023),
  buildYearlyData(2024, salesData2024),
];

/**
 * Get aggregated monthly revenue for a given year (sum across all categories).
 */
export function getMonthlyRevenue(yearData: YearlySalesData) {
  const monthMap = new Map<string, number>();
  yearData.data.forEach((record) => {
    monthMap.set(record.month, (monthMap.get(record.month) || 0) + record.revenue);
  });
  return months.map((m) => ({ month: m, revenue: monthMap.get(m) || 0 }));
}

/**
 * Get revenue grouped by category for a given year.
 */
export function getCategoryRevenue(yearData: YearlySalesData) {
  const catMap = new Map<string, number>();
  yearData.data.forEach((record) => {
    catMap.set(record.category, (catMap.get(record.category) || 0) + record.revenue);
  });
  return categories.map((c) => ({ category: c, revenue: catMap.get(c) || 0 }));
}

/**
 * Get monthly units sold for a given year.
 */
export function getMonthlyUnitsSold(yearData: YearlySalesData) {
  const monthMap = new Map<string, number>();
  yearData.data.forEach((record) => {
    monthMap.set(record.month, (monthMap.get(record.month) || 0) + record.unitsSold);
  });
  return months.map((m) => ({ month: m, unitsSold: monthMap.get(m) || 0 }));
}

/**
 * Filter data above a revenue threshold per record.
 */
export function filterByThreshold(yearData: YearlySalesData, threshold: number): SalesRecord[] {
  return yearData.data.filter((r) => r.revenue >= threshold);
}
