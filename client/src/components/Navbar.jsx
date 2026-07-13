import { FaBell, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      {/* Left Side */}
      <div className="navbar-left">
        <h1>Business Analytics Dashboard</h1>
        <p>Welcome back! Here's today's business overview.</p>
      </div>

      {/* Right Side */}
      <div className="navbar-right">
        {/* Search Box */}
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Notification */}
        <div className="notification">
          <FaBell />
          <span className="notification-badge">3</span>
        </div>

        {/* User Profile */}
        <div className="profile">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User"
          />

          <div className="profile-info">
            <h4>Rahul Sharma</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;