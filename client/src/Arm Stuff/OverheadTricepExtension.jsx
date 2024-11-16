import React from "react";
import overheadTricepExtensionGif from "../assets/OVER_TRI_EXT.gif";
import TimerWidget from "../timer/TimerWidget";

const OverheadTricepExtension = () => {
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
          paddingRight: "100px",
        }}
      >
        Overhead Tricep Extension
      </h1>
      <img
        src={overheadTricepExtensionGif}
        alt="Overhead Tricep Extension"
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

export default OverheadTricepExtension;
