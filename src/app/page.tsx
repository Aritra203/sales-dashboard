import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="text-center space-y-8 px-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            Sales Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Explore retail sales data across 2022–2024 with interactive charts,
            custom filters, and year-over-year comparisons.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
          >
            Open Dashboard →
          </Link>
          <a
            href="/api/sales"
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
          >
            View API →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-sm text-gray-500 mt-1">Years of Data</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
            <p className="text-3xl font-bold text-green-600">5</p>
            <p className="text-sm text-gray-500 mt-1">Categories</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
            <p className="text-3xl font-bold text-purple-600">180</p>
            <p className="text-sm text-gray-500 mt-1">Data Points</p>
          </div>
        </div>
      </main>
    </div>
  );
}
