import { useEffect, useState } from "react";
import {
  FaIndianRupeeSign,
  FaUsers,
  FaChartLine,
  FaCartShopping,
} from "react-icons/fa6";

function DashboardCards() {
  const [dashboard, setDashboard] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalCustomers: 0,
    averageOrder: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setDashboard({
          totalSales: Number(data.totalSales) || 0,
          totalOrders: Number(data.totalOrders) || 0,
          totalCustomers: Number(data.totalCustomers) || 0,
          averageOrder: Number(data.averageOrder) || 0,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const cards = [
    {
      title: "Total Sales",
      value: `₹${dashboard.totalSales.toLocaleString("en-IN")}`,
      icon: <FaIndianRupeeSign />,
    },
    {
      title: "Orders",
      value: dashboard.totalOrders.toLocaleString("en-IN"),
      icon: <FaCartShopping />,
    },
    {
      title: "Customers",
      value: dashboard.totalCustomers.toLocaleString("en-IN"),
      icon: <FaUsers />,
    },
    {
      title: "Average Order",
      value: `₹${dashboard.averageOrder.toLocaleString("en-IN")}`,
      icon: <FaChartLine />,
    },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div className="card-top">
            <div className="card-icon">{card.icon}</div>
          </div>

          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;