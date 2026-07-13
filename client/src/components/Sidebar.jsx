import {
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaBoxOpen,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <h2>BizDash</h2>
        <p>Business Analytics</p>
      </div>

      {/* Navigation */}
      <nav className="sidebar-menu">
        <ul>
          <li className="active">
            <FaChartLine />
            <span>Dashboard</span>
          </li>

          <li>
            <FaShoppingCart />
            <span>Sales</span>
          </li>

          <li>
            <FaUsers />
            <span>Customers</span>
          </li>

          <li>
            <FaBoxOpen />
            <span>Products</span>
          </li>

          <li>
            <FaCog />
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        <button className="logout-btn">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;