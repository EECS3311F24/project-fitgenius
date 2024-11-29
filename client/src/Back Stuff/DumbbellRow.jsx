import React, { useState } from "react";
import dumbellRowGif from "../assets/Dumbell_Row.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const DumbbellRow = () => {
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
            <strong>Step 1: Select Your Equipment</strong>
            <ul>
              <li>
                Choose the Right Dumbbells: Start with a light weight to ensure
                proper form before progressing to heavier loads.
              </li>
              <li>
                Use a Bench: Use a flat or incline bench for stability if
                desired.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Get into Starting Position</strong>
            <ul>
              <li>
                Place Your Left Knee and Hand on the Bench: Rest your left knee
                and left hand on the bench to stabilize your body.
              </li>
              <li>
                Hold the Dumbbell: Grab the dumbbell with your right hand, arm
                fully extended toward the floor.
              </li>
              <li>
                Maintain a Neutral Spine: Keep your back straight and your core
                engaged to avoid injury.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Perform the Row</strong>
            <ul>
              <li>
                Pull the Dumbbell: Slowly lift the dumbbell toward your torso by
                bending your elbow, keeping your upper arm close to your body.
              </li>
              <li>
                Squeeze at the Top: Pause briefly at the top of the movement to
                contract your back muscles.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Lower the Dumbbell</strong>
            <ul>
              <li>
                Return to Starting Position: Lower the dumbbell back to the
                starting position in a controlled manner.
              </li>
              <li>
                Avoid Dropping the Weight: Maintain control to prevent injury
                and maximize muscle engagement.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Switch Sides</strong>
            <ul>
              <li>
                Complete Reps on the Right: Perform all repetitions with your
                right arm before switching to the left.
              </li>
              <li>Alternate Sides: Repeat the same number of reps on both sides.</li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Cool Down</strong>
            <ul>
              <li>
                Stretch Your Back and Arms: Stretch your lats and biceps after
                completing your sets.
              </li>
              <li>Hydrate: Drink water to support recovery.</li>
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
        Dumbbell Row
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
          src={dumbellRowGif}
          alt="Dumbbell Row"
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

export default DumbbellRow;
