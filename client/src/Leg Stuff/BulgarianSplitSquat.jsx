import React from "react";
import benchPressGif from "../assets/b57f76fb76b2f768f1e4bcdf18c2bfce.gif";
import TimerWidget from "../timer/TimerWidget";

const BulgarianSplitSquat = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
        Bulgarian Split Squat
      </h1>
      <img
        src={benchPressGif}
        alt="Bench Press Exercise"
        style={{
          width: "30%", // Controls the width of the GIF
          maxWidth: "40", // Max width for the GIF
          height: "30%", // Maintain aspect ratio
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

export default BulgarianSplitSquat;
