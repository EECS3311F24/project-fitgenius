import React from "react";
import bicepCurlGif from "../assets/Dumbell-Curl.gif";
import TimerWidget from "../timer/TimerWidget";

const BicepCurl = () => {
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
        Bicep Curl
      </h1>
      <img
        src={bicepCurlGif}
        alt="Bicep Curl"
        style={{
          width: "40%", // Sets the GIF to 50% of the container's width; increase this as needed
          maxWidth: "500px", // Set a max width to control the size on larger screens
          height: "auto", // Maintain aspect ratio
        }}
      />
      <TimerWidget />
    </div>
  );
};

export default BicepCurl;
