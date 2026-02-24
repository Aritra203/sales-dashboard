import { NextResponse } from "next/server";
import { allSalesData } from "@/data/mockSalesData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get("year");
  const thresholdParam = searchParams.get("threshold");

  let data = [...allSalesData];

  if (yearParam) {
    const year = parseInt(yearParam, 10);
    data = data.filter((d) => d.year === year);
  }

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
