import React from "react";
import armLegRaiseGif from "../assets/Arm-Leg-Raise.gif";
import TimerWidget from "../timer/TimerWidget";

const ArmLegRaise = () => {
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
        Arm Leg Raise
      </h1>
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
  );
};

export default ArmLegRaise;
