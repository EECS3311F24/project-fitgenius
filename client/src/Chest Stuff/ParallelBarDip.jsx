import React, { useState } from "react";
import benchPressGif from "../assets/parallel-bar-dip.gif"; // Adjust the path if needed
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal


const ParallelBarDip = () => {
  const [level, setLevel] = useState("Beginner");
  const [modalContent, setModalContent] = useState(""); // Modal content state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  const exerciseData = {
    Beginner: { sets: 3, reps: 10 },
    Intermediate: { sets: 4, reps: 12 },
    Expert: { sets: 5, reps: 15 },
  };

  const { sets, reps } = exerciseData[level];

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setModalContent(""); // Clear modal content when level changes
    setIsModalOpen(false); // Close the modal when changing the level
  };

  const handleInstructionsClick = () => {
    // Set modal content only for Beginner level
    if (level === "Beginner") {
      setModalContent(
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Step 1: Set Up the Parallel Bars</strong>
            <ul>
              <li>Adjust the Bars (if possible): Ensure the parallel bars are set at an appropriate height, allowing your feet to hang freely when you're in the starting position.</li>
              <li>Check Stability: Make sure the bars are securely locked in place and won't move during the exercise.</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Position Your Hands and Body</strong>
            <ul>
              <li>Grip the Bars: Grab the bars with both hands, ensuring your palms are facing inward and your thumbs are wrapped around the bars for a secure grip.</li>
              <li>Engage Your Core: Tighten your core and keep your legs straight, or slightly bent at the knees if needed for balance.</li>
              <li>Lift Your Body: Start in a fully extended position with your arms straight and elbows locked, holding your body up above the bars.</li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Lower Your Body</strong>
            <ul>
              <li>Descend Slowly: Lower your body by bending your elbows, keeping them close to your sides (around a 45-degree angle).</li>
              <li>Control the Movement: Don't let gravity take over—focus on controlling your descent to prevent injury and engage your muscles effectively.</li>
              <li>Go Lower (optional): Aim to lower your body until your upper arms are parallel to the ground or just slightly below, depending on your mobility.</li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Push Yourself Back Up</strong>
            <ul>
              <li>Drive Through Your Hands: Push yourself upward, straightening your arms and using your chest, shoulders, and triceps to lift your body back up.</li>
              <li>Keep Your Elbows Close: Avoid flaring your elbows out to the sides to reduce stress on your shoulder joints and maintain control.</li>
              <li>Exhale as You Press Up: Breathe out as you push your body back to the starting position.</li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Repeat for Desired Repetitions</strong>
            <ul>
              <li>Perform Repetitions: Complete 8-12 repetitions for muscle endurance and strength.</li>
              <li>Rest Between Sets: Allow a short rest of 60-90 seconds between sets to recover.</li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Cool Down</strong>
            <ul>
              <li>Stretch Your Chest and Triceps: After completing the exercise, stretch your chest, shoulders, and triceps to improve flexibility and reduce muscle tightness.</li>
              <li>Hydrate: Drink water to stay hydrated and aid in recovery.</li>
            </ul>
          </li>

        </ul>
      );
      setIsModalOpen(true); // Open modal when instructions are set
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", backgroundColor: "#b3cde0", padding: "20px" }}>
      <h1 style={{ fontSize: "3rem", textAlign: "center", width: "100%", marginBottom: "20px" }}>
        Parallel Bar Dips
      </h1>

      {/* Level Selection Buttons */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "30px" }}>
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
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Instructions Button appears only for Beginner */}
      {level === "Beginner" && (
        <button
          className="InstructionsButton"
          onClick={handleInstructionsClick}

        >
          Instructions
        </button>
      )}

      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "10px" }}>
        <img src={benchPressGif} alt="Parallel Bar Dips" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

        {/* Sets and Reps Info */}
        <div style={{ padding: "20px", backgroundColor: "#ffffff", border: "2px solid #034efc", borderRadius: "10px", textAlign: "center", margin: "0 20px", display: "flex", alignItems: "center", justifyContent: "center", width: "200px", height: "100px" }}>
          <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
            {sets} Sets of {reps} Reps
          </h2>
        </div>

        {/* Timer Widget */}
        <div style={{ marginLeft: "20px" }}>
          <TimerWidget />
        </div>
      </div>

      {/* Instructions Modal */}
      {isModalOpen && (
        <InstructionsModal modalContent={modalContent} onClose={() => setIsModalOpen(false)} />
      )}

      {/* Feedback Section */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack />
      </div>
    </div>
  );
};

export default ParallelBarDip;
