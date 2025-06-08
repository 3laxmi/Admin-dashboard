import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaProjectDiagram,
  FaTable,
  FaCog,
  FaPaintBrush,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "#fff",
        height: "100vh",
        overflowY: "auto",
        borderRight: "1px solid #e5e7eb",
        padding: "1rem 0.5rem",
        position: "fixed",
      }}
    >
      <div style={{ padding: "0 1rem", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#3b82f6" }}>
          AdminPro
        </h2>
      </div>
      <nav>
        <p
          style={{
            fontSize: "0.75rem",
            color: "#6b7280",
            margin: "0.5rem 1rem",
          }}
        >
          Navigation
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <SidebarItem to="/" icon={<FaTachometerAlt />} label="Dashboard" />
          <SidebarItem to="/calendar" icon={<FaCalendarAlt />} label="Calendar" />
          <SidebarItem to="/kanban" icon={<FaProjectDiagram />} label="Kanban" />
          <SidebarItem to="/table" icon={<FaTable />} label="Tables" />

        </ul>
        <p
          style={{
            fontSize: "0.75rem",
            color: "#6b7280",
            margin: "1rem 1rem 0.5rem",
          }}
        >
          Tools
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <SidebarItem to="/themes" icon={<FaPaintBrush />} label="Themes" />
          <SidebarItem to="/settings" icon={<FaCog />} label="Settings" />
        </ul>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, to }) => (
  <li>
    <NavLink
      to={to}
      style={({ isActive }) => ({
        padding: "0.5rem 1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        borderRadius: "0.5rem",
        color: isActive ? "#3b82f6" : "#374151",
        fontWeight: 500,
        textDecoration: "none",
        backgroundColor: isActive ? "#f0f9ff" : "transparent",
        transition: "background 0.3s",
      })}
    >
      {icon} {label}
    </NavLink>
  </li>
);

export default Sidebar;
