import { useEffect, useState } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Charts() {
  const [revenueData, setRevenueData] = useState([]);
  const [citySalesData, setCitySalesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/revenue")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          month: item.month,
          revenue: Number(item.revenue),
        }));

        setRevenueData(formatted);
      })
      .catch((err) => console.error(err));

    fetch("http://localhost:5000/api/city-sales")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          city: item.city,
          sales: Number(item.sales),
        }));

        setCitySalesData(formatted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="charts-grid">
      <div className="chart-card">
        <h2>Revenue by Product</h2>
        <p>Total sales amount for each product</p>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h2>Sales by City</h2>
        <p>Total revenue from each city</p>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <LineChart data={citySalesData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="city" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#16a34a"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;