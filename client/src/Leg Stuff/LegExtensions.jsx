import React, { useState } from "react";
import benchPressGif from "../assets/legExt.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const LegExtensions = () => {
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
  <strong>Step 1: Set Up the Machine</strong>
  <ul>
    <li>Adjust the Seat: Sit on the leg extension machine and adjust the backrest so your knees are aligned with the machine's pivot point.</li>
    <li>Set the Pad: Position the lower leg pad just above your ankles, ensuring it rests comfortably on your shins.</li>
    <li>Select the Weight: Choose a light-to-moderate weight to start, focusing on form over heavy resistance.</li>
  </ul>
</li>
<li>
  <strong>Step 2: Position Your Body</strong>
  <ul>
    <li>Sit Upright: Sit with your back flat against the backrest and your hands holding the side handles for stability.</li>
    <li>Engage Your Core: Tighten your core muscles to maintain a stable and upright posture throughout the exercise.</li>
  </ul>
</li>
<li>
  <strong>Step 3: Extend Your Legs</strong>
  <ul>
    <li>Push the Pad Upward: Straighten your legs by extending your knees, lifting the pad smoothly and in a controlled motion.</li>
    <li>Fully Extend: Raise your legs until they are almost straight but avoid locking out your knees to protect your joints.</li>
    <li>Breathe Out: Exhale as you lift the weight to the top position.</li>
  </ul>
</li>
<li>
  <strong>Step 4: Lower the Weight</strong>
  <ul>
    <li>Slowly Bend Your Knees: Lower the pad back to the starting position by bending your knees in a controlled manner.</li>
    <li>Maintain Tension: Avoid letting the weight stack slam down; keep tension in your quadriceps throughout the movement.</li>
    <li>Breathe In: Inhale as you lower the weight.</li>
  </ul>
</li>
<li>
  <strong>Step 5: Repeat for Desired Repetitions</strong>
  <ul>
    <li>Perform Repetitions: Complete 10-15 repetitions per set, focusing on smooth, controlled movements.</li>
    <li>Rest Between Sets: Allow 30-60 seconds of rest between sets, adjusting the weight if necessary.</li>
  </ul>
</li>
<li>
  <strong>Step 6: Modify if Necessary</strong>
  <ul>
    <li>Adjust the Range of Motion: If you're new to the exercise, limit the range of motion until you build strength and confidence.</li>
    <li>Use Lighter Weights: Start with lighter weights to ensure proper form and prevent strain on your knees.</li>
  </ul>
</li>
<li>
  <strong>Step 7: Cool Down</strong>
  <ul>
    <li>Stretch Your Quadriceps: After completing the exercise, stretch your quads to reduce tightness and improve flexibility.</li>
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
        Leg Extensions
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
        <img src={benchPressGif} alt="Leg Extensions" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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

export default LegExtensions;
