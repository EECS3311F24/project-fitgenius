import React, { useState } from "react";
import rowGif from "../assets/Rowing.gif";
import TimerWidget from "../timer/TimerWidget";
import FeedBack from "../FeedBack";
import InstructionsModal from "../InstructionsModal"; // Import InstructionsModal

const Row = () => {
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
            <strong>Step 1: Prepare the Machine</strong>
            <ul>
              <li>
                Adjust the Resistance: Set the rowing machine to a resistance
                level appropriate for your fitness level.
              </li>
              <li>
                Secure Your Feet: Place your feet on the foot pedals and tighten
                the straps to hold them securely.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Get into Starting Position</strong>
            <ul>
              <li>
                Grip the Handle: Hold the handle with both hands, palms facing
                down, and arms fully extended.
              </li>
              <li>
                Sit Upright: Keep your back straight and engage your core for
                stability.
              </li>
              <li>
                Bend Your Knees: Position yourself at the front of the machine
                with knees bent and the handle near the flywheel.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 3: Perform the Row</strong>
            <ul>
              <li>
                Push with Your Legs: Start the movement by straightening your
                legs while keeping your back straight and arms extended.
              </li>
              <li>
                Pull the Handle: Once your legs are almost fully extended, pull
                the handle toward your chest, keeping your elbows close to your
                body.
              </li>
              <li>
                Pause Briefly: Hold the handle at your chest for a moment to
                engage your upper back muscles.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 4: Return to Starting Position</strong>
            <ul>
              <li>
                Reverse the Motion: Extend your arms forward and bend your knees
                to return to the starting position in a controlled manner.
              </li>
              <li>
                Maintain Control: Avoid rushing the movement to maximize muscle
                engagement and prevent injury.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 5: Repeat for Desired Repetitions</strong>
            <ul>
              <li>
                Complete Reps: Perform the desired number of repetitions per
                set.
              </li>
              <li>
                Rest Between Sets: Take 30-60 seconds to rest between sets.
              </li>
            </ul>
          </li>
          <li>
            <strong>Step 6: Cool Down</strong>
            <ul>
              <li>
                Stretch Your Muscles: Focus on your legs, back, and arms to
                reduce muscle tension.
              </li>
              <li>Hydrate: Drink water to aid recovery and stay hydrated.</li>
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
        Row
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
          src={rowGif}
          alt="Row"
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
        <FeedBack exercise="row" />
      </div>
    </div>
  );
};

export default Row;
