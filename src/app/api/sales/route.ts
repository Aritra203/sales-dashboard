import { NextResponse } from "next/server";
import { allSalesData } from "@/data/mockSalesData";

/**
 * GET /api/sales
 *
 * Returns all yearly sales data. In a real application, this endpoint
 * would fetch data from a database or external API (e.g., Kaggle datasets).
 *
 * Query params:
 *  - year (optional): filter by specific year (2022, 2023, 2024)
 *  - threshold (optional): minimum revenue filter per record
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get("year");
  const thresholdParam = searchParams.get("threshold");

  let data = [...allSalesData];

  // Filter by year if specified
  if (yearParam) {
    const year = parseInt(yearParam, 10);
    data = data.filter((d) => d.year === year);
  }

  // Apply threshold filter if specified
  if (thresholdParam) {
    const threshold = parseInt(thresholdParam, 10);
    if (!isNaN(threshold)) {
      data = data.map((yearData) => ({
        ...yearData,
        data: yearData.data.filter((record) => record.revenue >= threshold),
        totalRevenue: yearData.data
          .filter((record) => record.revenue >= threshold)
          .reduce((sum, r) => sum + r.revenue, 0),
        totalUnitsSold: yearData.data
          .filter((record) => record.revenue >= threshold)
          .reduce((sum, r) => sum + r.unitsSold, 0),
      }));
    }
  }

  return NextResponse.json(data);
}
