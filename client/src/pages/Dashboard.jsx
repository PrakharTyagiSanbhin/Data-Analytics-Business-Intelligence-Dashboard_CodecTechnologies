import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import Charts from "../components/Charts";
import RecentSales from "../components/RecentSales";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          <DashboardCards />
          <Charts />
          <RecentSales />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;