
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  FaDollarSign,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      subtitle: "from last month",
      icon: <FaDollarSign size={20} color="#3b82f6" />,
      borderColor: "#3b82f6",
      textColor: "#10b981",
    },
    {
      title: "New Users",
      value: "+2,350",
      change: "+15.3%",
      subtitle: "from last month",
      icon: <FaUsers size={20} color="#10b981" />,
      borderColor: "#10b981",
      textColor: "#10b981",
    },
    {
      title: "Orders",
      value: "+12,234",
      change: "+7.2%",
      subtitle: "from last month",
      icon: <FaShoppingCart size={20} color="#f97316" />,
      borderColor: "#f97316",
      textColor: "#10b981",
    },
    {
      title: "Growth Rate",
      value: "+25.4%",
      change: "+5.1%",
      subtitle: "from last month",
      icon: <FaChartLine size={20} color="#8b5cf6" />,
      borderColor: "#8b5cf6",
      textColor: "#10b981",
    },
  ];

  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 2000 },
    { month: "Apr", revenue: 2780 },
    { month: "May", revenue: 1890 },
    { month: "Jun", revenue: 2390 },
    { month: "Jul", revenue: 3490 },
  ];

  const userActivityData = [
    { day: "Mon", users: 1200 },
    { day: "Tue", users: 9000 },
    { day: "Wed", users: 2800 },
    { day: "Thu", users: 5400 },
    { day: "Fri", users: 3000 },
    { day: "Sat", users: 7000 },
    { day: "Sun", users: 4000 },
  ];

  return (
    <div
      style={{
        marginLeft: "190px",
        padding: "2rem",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.25rem" }}>Dashboard</h1>
          <p style={{ color: "#6b7280" }}>Welcome back! Here's an overview of your business.</p>
        </div>
        <button style={{
          padding: "0.5rem 1rem",
          background: "linear-gradient(to right, #3b82f6, #6366f1)",
          color: "#fff",
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: "500",
          cursor: "pointer"
        }}>
          ↗ View Reports
        </button>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 calc(25% - 0.75rem)",
              minWidth: "200px",
              backgroundColor: "#fff",
              padding: "1.25rem",
              borderRadius: "0.75rem",
              borderTop: `4px solid ${card.borderColor}`,
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h4 style={{ fontSize: "0.9rem", color: "#6b7280" }}>{card.title}</h4>
              {card.icon}
            </div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "0.25rem" }}>{card.value}</h2>
            <p style={{ fontSize: "0.85rem", color: card.textColor }}>
              {card.change} <span style={{ color: "#6b7280" }}>{card.subtitle}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {/* Revenue Chart */}
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "#fff",
            borderRadius: "0.75rem",
            padding: "1rem",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Revenue Overview</h3>
          <div style={{ height: "200px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Activity Chart */}
        <div
          style={{
            flex: "1 1 400px",
            backgroundColor: "#fff",
            borderRadius: "0.75rem",
            padding: "1rem",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem" }}>User Activity</h3>
          <div style={{ height: "200px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



