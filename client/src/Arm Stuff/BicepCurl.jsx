import React, { useState }  from "react";
import bicepCurlGif from "../assets/Dumbell-Curl.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";

const BicepCurl = () => {
  const [level, setLevel] = useState("Beginner");

  // Define sets and reps for each level
  const exerciseData = {
    Beginner: { sets: 3, reps: 10 },
    Intermediate: { sets: 4, reps: 12 },
    Expert: { sets: 5, reps: 15 },
  };

  const { sets, reps } = exerciseData[level]; // Get sets and reps for selected level

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
  };

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
        Bicep Curl
      </h1>

      {/* Level Toggle */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        {["Beginner", "Intermediate", "Expert"].map((lvl) => (
          <button
            key={lvl}
            onClick={() => handleLevelChange(lvl)}
            style={{
              padding: "10px 20px",
              width: "150px",
              height: "60px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              backgroundColor: level === lvl ? "#034efc" : "#f5f5f5",
              color: level === lvl ? "#ffffff" : "#333333",
              border: "2px solid #034efc",
              borderRadius: "12px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow:
                level === lvl ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor =
                level === lvl ? "#034efc" : "#e0e0e0";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor =
                level === lvl ? "#034efc" : "#f5f5f5";
            }}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        {/* Left: Exercise GIF */}
        <img
          src={bicepCurlGif}
          alt="Bulgarian Split Squat Exercise"
          style={{
            width: "30%",
            maxWidth: "500px",
            height: "auto",
            marginRight: "20px",
          }}
        />

        {/* Center: Exercise Instructions Box */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            border: "2px solid #034efc",
            borderRadius: "10px",
            textAlign: "center",
            margin: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "100px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.5rem",
            }}
          >
            {sets} Sets of {reps} Reps
          </h2>
        </div>

        {/* Right: Timer Widget */}
        <div style={{ marginLeft: "20px" }}>
          <TimerWidget />
        </div>
      </div>

      {/* Feedback Section */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack />
      </div>
    </div>
  );
};


export default BicepCurl;
