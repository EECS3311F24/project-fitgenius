import React from "react";
import benchPressGif from "../assets/legpress45-leg-press.gif";
import TimerWidget from "../timer/TimerWidget";

const LegPress = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row", // Align elements side by side (row direction)
        alignItems: "center", // Vertically center the items
        justifyContent: "center", // Center the items horizontally
        minHeight: "100vh",
        backgroundColor: "#b3cde0",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "3rem", // Larger font size for heading
          position: "absolute",
          top: "20px", // Place heading at the top
          textAlign: "center",
          width: "100%",
        }}
      >
        Leg Press
      </h1>

      {/* GIF */}
      <img
        src={benchPressGif}
        alt="Leg Press Exercise"
        style={{
          width: "30%", // Controls the width of the GIF
          maxWidth: "500px", // Max width for the GIF
          height: "auto", // Maintain aspect ratio
          marginRight: "20px", // Add space between the GIF and TimerWidget
        }}
      />

      {/* Timer Widget aligned to the right */}
      <div style={{ marginLeft: "auto" }}>
        <TimerWidget />
      </div>
    </div>
  );
};

export default LegPress;
