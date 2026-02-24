# Sales Dashboard

An interactive retail sales analytics dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Recharts**. The project follows **Atomic Design** principles for component architecture.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4)
![Recharts](https://img.shields.io/badge/Recharts-2-8884d8)

---

## What This Project Does

This application displays retail sales data for **2022**, **2023**, and **2024** across five product categories (Electronics, Clothing, Groceries, Furniture, Sports). The data is inspired by Kaggle retail sales datasets and structured with realistic seasonal patterns.

### Key Features

- **Multiple Chart Types** — Switch between Bar, Line, and Pie charts using Recharts
- **Year-over-Year Comparison** — Side-by-side bar chart comparing all three years
- **Custom Revenue Filter** — Input field to set a revenue threshold, displaying a filtered data table
- **API Integration** — Toggle between mock data and API-fetched data via `/api/sales`
- **Stat Cards** — Key metrics including total revenue, units sold, average monthly revenue, and top category
- **Responsive Design** — Fully responsive layout from mobile to desktop

### Atomic Design Structure

```
src/components/
├── atoms/           # Smallest building blocks
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Heading.tsx
│   └── Input.tsx
├── molecules/       # Combinations of atoms
│   ├── ChartTypeSwitcher.tsx
│   ├── StatCard.tsx
│   ├── ThresholdFilter.tsx
│   └── YearSelector.tsx
└── organisms/       # Complex UI sections
    ├── charts/
    │   ├── CategoryPieChart.tsx
    │   ├── ComparisonBarChart.tsx
    │   ├── RevenueBarChart.tsx
    │   ├── RevenueLineChart.tsx
    │   └── UnitsSoldChart.tsx
    ├── FilteredDataTable.tsx
    └── SalesDashboard.tsx
```

### API Endpoint

**`GET /api/sales`** — Returns all yearly sales data as JSON.

Query parameters:
| Parameter   | Type   | Description                            |
|------------|--------|----------------------------------------|
| `year`     | number | Filter by year (2022, 2023, or 2024)   |
| `threshold`| number | Minimum revenue per record             |

Examples:
- `/api/sales` — All data
- `/api/sales?year=2024` — Only 2024 data
- `/api/sales?year=2023&threshold=40000` — 2023 records with revenue ≥ $40,000

---

## Tech Stack

| Technology     | Purpose                             |
|---------------|-------------------------------------|
| Next.js 15    | React framework with App Router     |
| TypeScript    | Type safety                         |
| Tailwind CSS  | Utility-first styling               |
| Recharts      | Chart library (Bar, Line, Pie)      |

---

## Project Setup

### Prerequisites

- **Node.js** 18.17 or later
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/sales-dashboard.git
cd sales-dashboard

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

- **Home page** (`/`) — Landing page with links to the dashboard
- **Dashboard** (`/dashboard`) — Full interactive sales dashboard
- **API** (`/api/sales`) — REST endpoint for sales data

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
sales-dashboard/
├── src/
│   ├── app/
│   │   ├── api/sales/route.ts     # Sales API endpoint
│   │   ├── dashboard/page.tsx     # Dashboard page
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home/landing page
│   ├── components/
│   │   ├── atoms/                 # Atomic components (Button, Card, etc.)
│   │   ├── molecules/             # Molecule components (StatCard, etc.)
│   │   └── organisms/             # Organism components (Charts, Dashboard)
│   ├── data/
│   │   └── mockSalesData.ts       # Mock sales dataset (180 records)
│   └── types/
│       └── sales.ts               # TypeScript interfaces
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## What I Did in This Project

1. **Scaffolded** a Next.js 15 project with TypeScript, Tailwind CSS, and ESLint
2. **Designed** the component architecture following Atomic Design (atoms → molecules → organisms → pages)
3. **Created mock sales data** with 180 data points across 3 years, 12 months, and 5 product categories, with realistic seasonal patterns
4. **Built 5 chart components** using Recharts: Revenue Bar, Revenue Line, Category Pie, Year Comparison Bar, and Units Sold Bar
5. **Implemented interactive controls**: year selector, chart type switcher, and custom revenue threshold filter
6. **Created a REST API** at `/api/sales` with query parameter support for year and threshold filtering
7. **Added API Integration toggle** so users can switch between client-side mock data and server-fetched API data
8. **Styled everything** with Tailwind CSS for a clean, responsive dashboard layout

---

## License

MIT
