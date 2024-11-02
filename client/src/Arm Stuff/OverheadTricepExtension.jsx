import React from "react";
import overheadTricepExtensionGif from "../assets/OVER_TRI_EXT.gif";

const OverheadTricepExtension = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
        Overhead Tricep Extension
      </h1>
      <img
        src={overheadTricepExtensionGif}
        alt="Overhead Tricep Extension"
        style={{
          width: "40%", // Sets the GIF to 50% of the container's width; increase this as needed
          maxWidth: "500px", // Set a max width to control the size on larger screens
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export default OverheadTricepExtension;
