import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

/** This component renders a navigation interface that allows users to
 * navigate back to different exercise-related pages in the application.  */
function LegPage() {
  const navigate = useNavigate();
  const [intensity, setIntensity] = useState(""); // State to track selected intensity

  // Load the saved intensity level from localStorage when the component mounts
  useEffect(() => {
    const savedIntensity = localStorage.getItem("intensity");
    if (savedIntensity) {
      setIntensity(savedIntensity);
    }
  }, []);

  // Update both state and localStorage when intensity level changes
  const handleIntensityChange = (level) => {
    setIntensity(level);
    localStorage.setItem("intensity", level);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {" "}
      {/* Center entire content */}
      {/* Intensity Section */}
      <h2 style={{ fontSize: "1.5em", marginBottom: "10px" }}>Intensity</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <label>
          <input
            type="radio"
            name="intensity"
            value="Low"
            checked={intensity === "Low"}
            onChange={() => handleIntensityChange("Low")}
          />
          Low
        </label>
        <label>
          <input
            type="radio"
            name="intensity"
            value="Med"
            checked={intensity === "Med"}
            onChange={() => handleIntensityChange("Med")}
          />
          Med
        </label>
        <label>
          <input
            type="radio"
            name="intensity"
            value="High"
            checked={intensity === "High"}
            onChange={() => handleIntensityChange("High")}
          />
          High
        </label>
      </div>
      {/* Leg Exercises Section */}
      <h1 className="LegName">Leg</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          className="exercise-button"
          onClick={() => navigate("/leg-press")}
        >
          Leg Press
        </button>
        <button
          className="exercise-button"
          onClick={() => navigate("/bulgarian-split-squat")}
        >
          Bulgarian Split Squat
        </button>
        <button
          className="exercise-button"
          onClick={() => navigate("/front-squat")}
        >
          Front Squat
        </button>
        <button
          className="exercise-button"
          onClick={() => navigate("/leg-extensions")}
        >
          Leg Extension
        </button>
      </div>
    </div>
  );
}

export default LegPage;
