import React from "react";
import benchPressGif from "../assets/parallel-bar-dip.gif"; // Adjust the path if needed
import TimerWidget from "../timer/TimerWidget";

const ParallelBarDip = () => {
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
        Parallel Bar Dip
      </h1>
      <img
        src={benchPressGif}
        alt="CC Exercise"
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

export default ParallelBarDip;
