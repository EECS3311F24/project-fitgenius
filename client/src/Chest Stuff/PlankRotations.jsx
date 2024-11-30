import React, { useState } from "react";
import benchPressGif from "../assets/fa4932a8865f085e6240101fa9a11447.gif"; // Adjust the path if needed
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const PlankRotations = () => {
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
            <strong>Step 1: Get Into the Starting Position</strong>
            <ul>
              <li>Start in a Plank Position: Begin by positioning your body in a standard plank. Place your forearms on the floor, elbows directly below your shoulders, and your body in a straight line from head to heels.</li>
              <li>Engage Your Core: Tighten your core, glutes, and thighs to maintain a stable plank position. Keep your hips level, avoiding sagging or raising them.</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Rotate Your Body</strong>
            <ul>
              <li>Lift One Hand: Start by lifting one hand off the ground and rotating your torso to the side, stacking your hips and shoulders while opening up your chest.</li>
              <li>Reach Toward the Ceiling: Extend the hand that you're lifting toward the ceiling, keeping your arm straight. Your body should form a T-shape with your feet, hips, and shoulders aligned.</li>
              <li>Hold the Position: Pause at the top of the rotation for a moment, squeezing your core and obliques to stabilize your body.</li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Return to the Plank</strong>
            <ul>
              <li>Lower Your Hand: Slowly lower the raised hand back to the floor, returning to the starting plank position with both forearms on the ground.</li>
              <li>Maintain Stability: Ensure your body stays in a straight line and your core remains engaged throughout the movement.</li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Rotate to the Other Side</strong>
            <ul>
              <li>Repeat the Rotation: Perform the same movement on the opposite side by lifting your other hand and rotating your torso toward the ceiling.</li>
              <li>Control the Movement: As with the first side, hold the position briefly before returning to the plank position.</li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Repeat for Desired Repetitions</strong>
            <ul>
              <li>Perform Repetitions: Continue alternating sides for 10-15 repetitions per side, depending on your fitness level.</li>
              <li>Rest Between Sets: Allow for 30-60 seconds of rest between sets to recover and maintain form throughout the exercise.</li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Modify if Necessary</strong>
            <ul>
              <li>Modified Plank: If the full plank rotation is too challenging, you can modify the exercise by performing it on your knees instead of your toes.</li>
              <li>Slow Down the Movement: If you're new to the exercise, move more slowly and focus on control before increasing speed or intensity.</li>
            </ul>
          </li>
          <li>
            <strong>Step 7: Cool Down</strong>
            <ul>
              <li>Stretch Your Core and Shoulders: After completing your plank rotations, stretch your core, shoulders, and back to prevent tightness and improve flexibility.</li>
              <li>Hydrate: Drink water to stay hydrated and support muscle recovery.</li>
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
        Plank Rotations
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
        <img src={benchPressGif} alt="Plank Rotations" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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
        <FeedBack exercise="plank-rotations" />
      </div>
    </div>
  );
};


export default PlankRotations;
