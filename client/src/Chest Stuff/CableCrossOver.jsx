import React, { useState } from "react";
import benchPressGif from "../assets/bdd08cc009b9e4a4bc9c4d59ff686689.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal


const CableCrossOver = () => {
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
            <strong>Step 1: Set Up the Cable Machine</strong>
            <ul>
              <li>Adjust the Pulleys: Set the pulleys on a cable crossover machine to the highest position or slightly above shoulder height.</li>
              <li>Select the Weight: Choose a light weight to start with, focusing on proper form over heavy resistance.</li>
              <li>Attach the Handles: Secure a single grip handle to each side of the machine.</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Position Your Body</strong>
            <ul>
              <li>Stand in the Center: Stand in the middle of the machine with one foot slightly forward for balance.</li>
              <li>Grab the Handles: Hold one handle in each hand with your palms facing down or slightly inward.</li>
              <li>Step Forward Slightly: Take a small step forward to create tension in the cables, keeping your arms slightly bent.</li>
              <li>Engage Your Core: Tighten your core and maintain a slight bend in your knees for stability.</li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Perform the Movement</strong>
            <ul>
              <li>Bring the Handles Together: Pull the handles in a wide arc in front of you, crossing them slightly at chest level or just below.</li>
              <li>Squeeze Your Chest: At the end of the movement, squeeze your chest muscles for a moment to maximize contraction.</li>
              <li>Keep Your Elbows Slightly Bent: Maintain a slight bend in your elbows to reduce strain on your joints.</li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Return to the Starting Position</strong>
            <ul>
              <li>Control the Movement: Slowly return the handles to the starting position in a wide arc, keeping tension on your chest.</li>
              <li>Avoid Letting the Weights Slam: Ensure the weights do not slam back into the stack; keep the motion smooth and controlled.</li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Repeat for Desired Repetitions</strong>
            <ul>
              <li>Focus on Form: Perform the exercise for 10-15 repetitions, maintaining proper form throughout.</li>
              <li>Adjust Weight if Needed: If the exercise feels too easy or too difficult, adjust the weight accordingly.</li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Cool Down</strong>
            <ul>
              <li>Stretch Your Chest: After completing your set, stretch your chest muscles to reduce tension and improve flexibility.</li>
              <li>Hydrate: Drink water to stay hydrated and recover effectively.</li>
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
        Cable Crossover
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
        <img src={benchPressGif} alt="CableCrossOver" style={{ width: "30%", maxWidth: "500px", height: "auto", marginRight: "20px" }} />

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

export default CableCrossOver;
