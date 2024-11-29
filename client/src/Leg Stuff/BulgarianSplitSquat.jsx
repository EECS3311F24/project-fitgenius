import React, { useState } from "react";
import benchPressGif from "../assets/b57f76fb76b2f768f1e4bcdf18c2bfce.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const BulgarianSplitSquat = () => {
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
    <li>Select a Bench or Step: Choose a sturdy bench or step that's about knee height. Make sure it won't move during the exercise.</li>
    <li>Choose Your Weight: Start with bodyweight to learn the movement. If you're more advanced, hold dumbbells or use a barbell.</li>
  </ul>
</li>
<li>
  <strong>Step 2: Position Your Body</strong>
  <ul>
    <li>Stand in Front of the Bench: Face away from the bench, standing about 2 feet in front of it.</li>
    <li>Place Your Rear Foot: Extend one leg backward and place the top of your foot on the bench. Your front foot should be flat on the ground and far enough forward to allow for a deep squat.</li>
    <li>Align Your Torso: Keep your torso upright and engage your core to stabilize your body.</li>
  </ul>
</li>
<li>
  <strong>Step 3: Lower Your Body</strong>
  <ul>
    <li>Bend Your Front Knee: Slowly lower your body by bending your front knee, keeping your chest up and back straight.</li>
    <li>Go Deep: Lower until your front thigh is parallel to the floor or as far as your flexibility allows, without letting your front knee go past your toes.</li>
    <li>Keep Balance: Ensure your rear foot remains stable on the bench throughout the movement.</li>
  </ul>
</li>
<li>
  <strong>Step 4: Push Back to Starting Position</strong>
  <ul>
    <li>Drive Through Your Front Heel: Push through the heel of your front foot to return to the starting position.</li>
    <li>Maintain Control: Avoid locking out your front knee at the top; keep a slight bend to maintain tension in your muscles.</li>
    <li>Breathe Out: Exhale as you push up and return to standing.</li>
  </ul>
</li>
<li>
  <strong>Step 5: Repeat for Desired Repetitions</strong>
  <ul>
    <li>Perform Repetitions: Complete 8-12 repetitions on one leg before switching to the other leg.</li>
    <li>Rest Between Sets: Take a 30-60 second rest between sets, especially if you're using weights.</li>
  </ul>
</li>
<li>
  <strong>Step 6: Modify if Necessary</strong>
  <ul>
    <li>Reduce Range of Motion: If you're new to this exercise, lower your body only partway to build strength and balance.</li>
    <li>Hold onto Support: Use a wall or sturdy object for balance if needed.</li>
  </ul>
</li>
<li>
  <strong>Step 7: Cool Down</strong>
  <ul>
    <li>Stretch Your Legs: Stretch your quads, hamstrings, and glutes to improve flexibility and prevent tightness.</li>
    <li>Hydrate: Drink water to stay hydrated and support recovery.</li>
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
        Bulgarian Split Squat
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
        <img src={benchPressGif} alt="Bulgarian Split Squat" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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
export default BulgarianSplitSquat;
