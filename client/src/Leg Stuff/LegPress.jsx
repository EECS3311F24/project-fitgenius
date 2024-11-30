import React, { useState } from "react";
import benchPressGif from "../assets/legpress45-leg-press.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const LegPress = () => {
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
    <li>Adjust the Seat: Sit on the leg press machine and adjust the seat so your knees can bend at a 90-degree angle without your hips lifting off the seat.</li>
    <li>Select the Weight: Choose an appropriate weight, starting light to focus on form before increasing resistance.</li>
    <li>Position the Footplate: Ensure the footplate is within reach and set to a comfortable starting position.</li>
  </ul>
</li>
<li>
  <strong>Step 2: Position Your Feet</strong>
  <ul>
    <li>Place Your Feet on the Footplate: Position your feet shoulder-width apart, with your toes pointing slightly outward.</li>
    <li>Ensure Proper Alignment: Keep your knees in line with your toes to avoid undue stress on your joints.</li>
    <li>Engage Your Core: Tighten your core to maintain a stable body position throughout the exercise.</li>
  </ul>
</li>
<li>
  <strong>Step 3: Release the Safety Handles</strong>
  <ul>
    <li>Grip the Handles: Hold the machine's side handles for stability.</li>
    <li>Disengage the Safety Locks: Push the platform slightly to release the safety handles, allowing the footplate to move freely.</li>
  </ul>
</li>
<li>
  <strong>Step 4: Lower the Weight</strong>
  <ul>
    <li>Bend Your Knees: Slowly lower the footplate by bending your knees toward your chest.</li>
    <li>Maintain Control: Lower the weight until your knees form a 90-degree angle or until you feel a comfortable stretch in your legs.</li>
    <li>Keep Your Back Flat: Ensure your lower back remains pressed against the seat throughout the movement.</li>
  </ul>
</li>
<li>
  <strong>Step 5: Press the Weight Up</strong>
  <ul>
    <li>Push Through Your Heels: Press the footplate back to the starting position by straightening your legs.</li>
    <li>Do Not Lock Your Knees: Stop just before your knees fully extend to maintain tension and protect your joints.</li>
    <li>Breathe Out: Exhale as you push the weight upward.</li>
  </ul>
</li>
<li>
  <strong>Step 6: Repeat for Desired Repetitions</strong>
  <ul>
    <li>Perform Repetitions: Complete 8-12 repetitions per set, focusing on controlled movement and proper form.</li>
    <li>Rest Between Sets: Rest for 30-60 seconds between sets, adjusting the weight as needed.</li>
  </ul>
</li>
<li>
  <strong>Step 7: Re-Engage the Safety Handles</strong>
  <ul>
    <li>Lock the Footplate: After completing your set, push the footplate to the top position and re-engage the safety locks securely.</li>
    <li>Exit the Machine: Carefully step away from the machine after ensuring the weight is safely secured.</li>
  </ul>
</li>
<li>
  <strong>Step 8: Cool Down</strong>
  <ul>
    <li>Stretch Your Legs: Stretch your quads, hamstrings, and glutes to improve flexibility and reduce muscle tightness.</li>
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
        Leg Press
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
        <img src={benchPressGif} alt="Leg Press" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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
        <FeedBack exercise="leg-press" />
      </div>
    </div>
  );
};

export default LegPress;
