import React from "react";
import benchPressGif from "../assets/b57f76fb76b2f768f1e4bcdf18c2bfce.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";

const BulgarianSplitSquat = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Vertically center the items
        minHeight: "100vh",
        backgroundColor: "#b3cde0",
        position: "relative",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem", // Larger font size for heading
          textAlign: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        Bulgarian Split Squat
      </h1>
      <div 
        style={{
          display: "flex", // Top row for GIF and Timer
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "10px", // Space between top row and feedback
        }}
      >
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
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack /> 
      </div>
    </div>
  );
};

export default BulgarianSplitSquat;
