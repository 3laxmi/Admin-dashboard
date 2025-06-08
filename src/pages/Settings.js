import React from "react";

const Settings = () => {
  return (
    <div
      style={{
        marginLeft: "240px",
        padding: "2rem",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
        Settings
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        Manage your profile and system settings.
      </p>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "0.75rem",
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Profile
        </h2>
        <p style={{ color: "#6b7280" }}>Name: John Doe</p>
        <p style={{ color: "#6b7280" }}>Email: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default Settings;
