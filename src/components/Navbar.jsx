import React from "react";

export const Navbar = ({ icons, vertical }) => {
  return (
    <div
      style={{
        background: "red",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      Yicel
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: vertical ? "column" : "row",
        }}
      >
        {icons.map((icon) => (
          <img src={icon.icon} width={30} />
        ))}
      </div>
    </div>
  );
};
