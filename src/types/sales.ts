export interface SalesRecord {
  month: string;
  revenue: number;
  unitsSold: number;
  category: string;
}

export interface YearlySalesData {
  year: number;
  data: SalesRecord[];
  totalRevenue: number;
  totalUnitsSold: number;
}

export type ChartType = "bar" | "line" | "pie";
