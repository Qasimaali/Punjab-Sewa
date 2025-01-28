import React from "react";

const HorizontalCards = () => {
  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "16px", padding: "16px" }}>
        <div
          style={{
            backgroundColor: "hsl(181, 61%, 42%)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            padding: "24px",
            width: "250px",
            textAlign: "center",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}>Sewa Kendra</h2>
        </div>

        <div
          style={{
            backgroundColor: "hsl(181, 61%, 42%)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            padding: "24px",
            width: "250px",
            textAlign: "center",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}>Download Certificate</h2>
        </div>

        <div
          style={{
            backgroundColor: "hsl(181, 61%, 42%)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            padding: "24px",
            width: "250px",
            textAlign: "center",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}>Verify Certificate</h2>
        </div>

        <div
          style={{
            backgroundColor: "hsl(181, 61%, 42%)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            padding: "24px",
            width: "250px",
            textAlign: "center",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}>Track Status</h2>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;
