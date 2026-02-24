# Sales Dashboard

A dashboard app that shows retail sales data from 2022 to 2024 with charts and filters. Built with Next.js, TypeScript, Tailwind, and Recharts. Components are organized using atomic design.

## Features

- Bar, line, and pie charts to view monthly revenue and category breakdowns
- Year selector (2022 / 2023 / 2024) and chart type toggle
- Revenue threshold filter with a data table that shows matching records
- API route at `/api/sales` that supports `?year=` and `?threshold=` params
- Toggle to switch between local mock data and API-fetched data
- Stat cards for total revenue, units sold, averages, and top category

## Setup

You need Node.js 18+ installed.

```bash
git clone https://github.com/Aritra203/sales-dashboard.git
cd sales-dashboard
npm install
npm run dev
```

Then go to http://localhost:3000 and click through to `/dashboard`.

## Build

```bash
npm run build
npm start
```

## Folder structure

Components follow atomic design:

- `src/components/atoms/` - Button, Card, Input, Heading, Badge
- `src/components/molecules/` - StatCard, YearSelector, ChartTypeSwitcher, ThresholdFilter
- `src/components/organisms/` - SalesDashboard, FilteredDataTable, and chart components
- `src/data/` - mock sales data (180 records across 3 years, 5 categories)
- `src/app/api/sales/` - API route
- `src/app/dashboard/` - dashboard page

## What I worked on

- Set up Next.js with TypeScript and Tailwind
- Organized components into atoms, molecules, and organisms
- Put together mock data based on Kaggle retail datasets - 12 months x 5 categories x 3 years
- Built 5 different chart components with Recharts
- Added controls for year selection, chart switching, and a threshold filter
- Made an API endpoint that serves the data with optional filters
- Wired up a toggle to fetch from the API instead of using the local data
