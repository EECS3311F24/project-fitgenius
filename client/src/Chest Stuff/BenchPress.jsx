import React, { useState } from "react";
import benchPressGif from "../assets/BENCH_PRESS.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const BenchPress = () => {
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
            <strong>Step 1: Set Up the Bench and Equipment</strong>
            <ul>
              <li>Choose the Right Bench: Make sure you're using a flat bench. Some gyms also have adjustable benches, but a flat bench is the safest for beginners.</li>
              <li>Select Appropriate Weights: Start with a light bar (usually 45 lbs or 20 kg) or no weights at all to practice form. You can add weights gradually as you build strength.</li>
              <li>Adjust the Safety Pins: If you're using a rack, make sure the safety pins are set just below the level of your chest to catch the bar if you fail a lift.</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Position Your Body on the Bench</strong>
            <ul>
              <li>Lie on Your Back: Position your body so that your eyes are directly beneath the bar.</li>
              <li>Feet Flat on the Floor: Keep your feet firmly planted on the ground, with knees bent at around 90 degrees. Avoid lifting your feet off the floor or arching your lower back.</li>
              <li>Grip the Bar: Reach up and grasp the bar with both hands. Your hands should be placed slightly wider than shoulder-width apart (thumbs wrapped around the bar for grip safety).</li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Unrack the Barbell</strong>
            <ul>
              <li>Lift the Bar Off the Rack: Take a deep breath, tighten your core, and push the barbell up from the rack. Hold it above your chest with your arms fully extended.</li>
              <li>Get Comfortable: Move your shoulders down and back, creating a slight arch in your upper back. This will help with stability and create a solid base.</li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Lower the Bar</strong>
            <ul>
              <li>Slow and Controlled: Lower the bar slowly toward your chest. Keep your elbows at a 45-degree angle relative to your torso, not flaring them out too much.</li>
              <li>Go to Your Chest: Lower the barbell to touch your chest lightly (around nipple level). Make sure your wrists are straight, and your forearms are perpendicular to the floor throughout the movement.</li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Press the Bar Back Up</strong>
            <ul>
              <li>Drive Through Your Feet: Press the bar upward by pushing through your feet and driving your chest up. Keep your elbows at a slight angle, not locking them out at the top.</li>
              <li>Breathe Out: Exhale as you push the bar back to the starting position, arms fully extended. Keep your core tight throughout the movement.</li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Rack the Barbell</strong>
            <ul>
              <li>Control the Bar: After completing your set, carefully guide the bar back into the rack. Ensure both sides of the bar are securely on the hooks before letting go.</li>
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
        Bench Press
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
        <img src={benchPressGif} alt="Bench Press" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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

export default BenchPress;
