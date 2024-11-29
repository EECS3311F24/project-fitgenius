import React, { useState } from "react";
import armLegRaiseGif from "../assets/Arm-Leg-Raise.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const ArmLegRaise = () => {
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
    if (level === "Beginner") {
      setModalContent(
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Step 1: Prepare for the Exercise</strong>
            <ul>
              <li>Find a Mat: Use a comfortable mat to perform the exercise.</li>
              <li>
                Ensure Proper Space: Ensure you have enough room to extend your
                arms and legs fully.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Get into Starting Position</strong>
            <ul>
              <li>
                Position Yourself: Start on all fours with your hands directly
                under your shoulders and your knees under your hips.
              </li>
              <li>
                Maintain a Neutral Spine: Keep your back straight and your core
                engaged throughout the movement.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Perform the Arm and Leg Raise</strong>
            <ul>
              <li>
                Extend Opposite Arm and Leg: Raise your right arm and left leg
                simultaneously, keeping them straight and aligned with your
                body.
              </li>
              <li>
                Pause at the Top: Hold the position for a moment to engage your
                core and balance.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Return to Starting Position</strong>
            <ul>
              <li>
                Lower Slowly: Return your arm and leg to the starting position
                in a controlled manner.
              </li>
              <li>Repeat with the Other Side: Alternate sides for each rep.</li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Complete the Exercise</strong>
            <ul>
              <li>
                Perform Repetitions: Complete the desired number of repetitions
                on each side.
              </li>
              <li>
                Rest Between Sets: Take a 30-60 second break between sets.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Cool Down</strong>
            <ul>
              <li>
                Stretch: Stretch your back and limbs to relax your muscles and
                improve flexibility.
              </li>
              <li>Hydrate: Drink water to aid recovery.</li>
            </ul>
          </li>
        </ul>
      );
      setIsModalOpen(true); // Open modal when instructions are set
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#b3cde0",
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
        Arm Leg Raise
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

      {/* Instructions Button */}
      {level === "Beginner" && (
        <button className="InstructionsButton" onClick={handleInstructionsClick}>
          Instructions
        </button>
      )}

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
        <img
          src={armLegRaiseGif}
          alt="Arm Leg Raise"
          style={{
            width: "30%",
            maxWidth: "500px",
            height: "auto",
            marginRight: "20px",
          }}
        />

        {/* Sets and Reps Info */}
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
        <InstructionsModal
          modalContent={modalContent}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Feedback Section */}
      <div style={{ width: "100%", textAlign: "center" }}>
        <FeedBack />
      </div>
    </div>
  );
};

export default ArmLegRaise;
