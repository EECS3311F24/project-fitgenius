import React from "react";
import hammerCurlGif from "../assets/HAM_CURL.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";

const HammerCurl = () => {
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
          fontSize: "3rem",
          textAlign: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        Hammer Curl
      </h1>
      
      
      <div 
        style={{
          display: "flex", // Top row for GIF and Timer
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "20px", // Space between top row and feedback
        }}
      >
        <img
          src={hammerCurlGif}
          alt="Hammer Curl"
          style={{
            width: "40%",
            maxWidth: "500px",
            height: "auto",
            marginRight: "20px",
          }}
        />
        <TimerWidget />
      </div>
      
      {/* Feedback at the bottom */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack /> 
      </div>
    </div>
  );
};

export default HammerCurl;
