import React from "react";
import armLegRaiseGif from "../assets/Arm-Leg-Raise.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";

const ArmLegRaise = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        Arm Leg Raise
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
        src={armLegRaiseGif}
        alt="Arm Leg Raise"
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
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack /> 
      </div>
    </div>
  );
};

export default ArmLegRaise;
